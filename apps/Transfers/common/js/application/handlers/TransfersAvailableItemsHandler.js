/*
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2013,2020 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */

define("application/handlers/TransfersAvailableItemsHandler", 
	   [ "dojo/_base/declare",
	     "dojo/_base/array",
		 "dojo/_base/lang",
	     "platform/handlers/_ApplicationHandlerBase",
	     "platform/comm/CommunicationManager",
	     "platform/model/PushingCoordinatorService",
	     "platform/translation/SynonymDomain",
	     "application/business/InvuseObject",
	     "platform/model/ModelService",
	     "platform/translation/MessageService",
	     "application/handlers/CommonHandler",
	     "application/handlers/TransfersHandler",
	     "application/business/FieldUtil",
	     "platform/exception/PlatformRuntimeException",
	     "platform/warning/PlatformRuntimeWarning",
	     "platform/auth/UserManager",
	     "platform/util/PlatformConstants",
	     "platform/util/AsyncAwareMixin",
	     "platform/logging/Logger",
	     "platform/store/PersistenceManager",
	     "platform/store/_StoreProvider",
	     "platform/store/_ResourceMetadataContext",
	     "dojo/Deferred",
	     "dojo/promise/all",
	     "dojo/topic",
	     "dojo/number"],
function(declare, arrayUtil, lang, ApplicationHandlerBase, CommunicationManager, PushingCoordinatorService, SynonymDomain, InvuseObject, ModelService, MessageService, CommonHandler, TransfersHandler, FieldUtil, PlatformRuntimeException, PlatformRuntimeWarning, UserManager, PlatformConstants, AsyncAwareMixin, Logger,PersistenceManager, StoreProvider, ResourceMetadata, Deferred, all, topic, NumberUtil) {
		return declare( [ApplicationHandlerBase, AsyncAwareMixin],  {
		
		_className: "[application.handlers.TransfersAvailableItemsHandler]",
			
		
		/*
		 * Validate the issue quantity
		 */
/**@memberOf application.handlers.TransfersAvailableItemsHandler */
		validateQty : function (eventContext) {
			var  additionalItemData = eventContext.application.getResource("transferAdditionalItems").getCurrentRecord();
			var qty = additionalItemData.getPendingOrOriginalValue('issueQty');
			
			//verify if issue quantity is a positive number
			if (qty=='' || (NumberUtil.parse(qty, this.application.getUserLocale()) <= 0)) {
				throw new PlatformRuntimeException('quantityPositive');
				return false;
			}
			//verify if issue quantity is a valid number
			else if(isNaN(Number(qty))){
				var msg = MessageService.createResolvedMessage('newReadingNaN', [qty]);
				throw new PlatformRuntimeException(msg);
				return false;
			}
			return true;
		},
		
	
		/*
		 * Validate the conversion factor
		 */
		validateConversion : function (eventContext) {
			var  additionalItemData = eventContext.application.getResource("transferAdditionalItems").getCurrentRecord();
			var conversion = additionalItemData.getPendingOrOriginalValue('conversion');
			
			//verify if issue quantity is a positive number
			if (conversion=='' || (NumberUtil.parse(conversion, this.application.getUserLocale()) <= 0)) {
				throw new PlatformRuntimeException('postiveConversion');
				return false;
			}
			//verify if convserion is a valid number
			else if(isNaN(Number(conversion))){
				var msg = MessageService.createResolvedMessage('newReadingNaN', [conversion]);
				throw new PlatformRuntimeException(msg);
				return false;
			}
			
			return true;
		},
		
		hideConversion: function (eventContext) {			
			eventContext.setDisplay(true);			
			var additionalItemData = eventContext.application.getResource("transferAdditionalItems").getCurrentRecord();			
			var additionalInventoryItemResource = eventContext.application.getResource("inventory");			
			var additionalInventoryItem = additionalInventoryItemResource.getCurrentRecord();
			var rotating = additionalInventoryItem.get('rotating');
			var conversion =  NumberUtil.format( NumberUtil.parse('1.0', {places: 1}) );
			if(rotating && rotating == true){
				//additionalItemData.set('conversion', conversion);
				additionalItemData.set('conversion',1.0);
				eventContext.setDisplay(false);
				return;
			}
			
			var  additionalInventory = eventContext.application.getResource("inventory").getCurrentRecord();
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			
			var itemnum = additionalInventory.itemnum;
			var itemsetid = additionalInventory.itemsetid;
			var tostoreloc = transferAdditionItemRecord.getPendingOrOriginalValue('tostoreroom'); //.toUpperCase();
			var tositeid = transferAdditionItemRecord.getPendingOrOriginalValue('tositeid'); //.toUpperCase();
			if ( itemnum && itemsetid && tostoreloc && tositeid) {	
				var promiseInventory = this.searchToInventory(eventContext, itemnum, itemsetid, tostoreloc, tositeid);				
				promiseInventory.then(function(toInventorySet) {						
				    if ( toInventorySet.count() == 0) {
				    	additionalItemData.set('conversion', 1.0 );
				    	//additionalItemData.set('conversion', conversion );
				    	eventContext.setDisplay(false);
				    	return;
				    }	
				});	
			}		
			
		},
		
		completeAvailableItems : function(eventContext){
			var transfersResource = CommonHandler._getAdditionalResource(eventContext,'transferAdditionalItems').getCurrentRecord();
			var quantity = transfersResource.get('issueQty');
			
			if (Object.keys(eventContext.ui.getViewFromId("Transfers.AdditionalItemsDetailsView").exceptionFields).length> 0 && !quantity){
				return;
			}
			
			//verify if we have quantity filled
			if(!quantity){
				var msg = MessageService.createStaticMessage("quantityRequired").getMessage();
				eventContext.ui.showMessage(msg);
				return;
			}
			
			eventContext.application.showBusy();
			var transfersHandler = new TransfersHandler();
			transfersHandler.setStatus(eventContext, 'COMPLETE');
			this.initiateTransfer(eventContext,"COMPLETE");
		},

		shipAvailableItems : function(eventContext){
			var transfersResource = CommonHandler._getAdditionalResource(eventContext,'transferAdditionalItems').getCurrentRecord();
			var quantity = transfersResource.get('issueQty');
			
			//verify if we have quantity filled
			if(!quantity){
				var msg = MessageService.createStaticMessage("quantityRequired").getMessage();
				eventContext.ui.showMessage(msg);
				return;
			}
			
			eventContext.application.showBusy();
			var transfersHandler = new TransfersHandler();
			transfersHandler.setStatus(eventContext, 'SHIPPED');
			this.initiateTransfer(eventContext,"SHIPPED");
		},
				
		/**
		 * Complete
		 */
		initiateTransfer : function(eventContext, newStatus){
			var additionalInventoryItemResource = eventContext.application.getResource("inventory");
			var additionalInventoryItem = additionalInventoryItemResource.getCurrentRecord();
			var transferAdditionalItemsResource = eventContext.application.getResource("transferAdditionalItems");
			var additionalItemData = transferAdditionalItemsResource.getCurrentRecord();
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
			var invuseResource = this.application.getResource("invuse");
			var invuseline = null;
			var storeroom = transfers.storeroom;
			var siteid = transfers.siteid;
			var itemnum = additionalInventoryItem.get('itemnum');
			var itemsetid = additionalInventoryItem.get('itemsetid');
			//var binnum = additionalInventoryItem.get('binnum');
			//var lotnum = additionalInventoryItem.get('lotnum');
			var rotating = additionalInventoryItem.get('rotating');
			var itemType = additionalInventoryItem.get('itemtype');
			var glaccount = additionalItemData.get('glaccount');
			var ponum = additionalItemData.get('ponum');
			var asset = additionalItemData.get('asset');
			var location = additionalItemData.get('location');
			var issueTo = additionalItemData.get('issueTo');
			var issueQty = additionalItemData.get('issueQty');
			var conversion =  additionalItemData.get('conversion') ;			
			
			var frombin = additionalItemData.get('frombin');
			var fromlot = additionalItemData.get('fromlot');
			var glcreditacct = additionalItemData.get('glcreditacct');
			var gldebitacct = additionalItemData.get('gldebitacct');
			var tobin = additionalItemData.get('tobin');
			var tositeid = additionalItemData.get('tositeid');
			var tostoreloc = additionalItemData.get('tostoreroom');
			
			var self = this;
			eventContext.application.showBusy();
			
			if ( !tositeid) {
				throw new PlatformRuntimeException('reqToSite');
			}
			
			if ( !tostoreloc) {				
				throw new PlatformRuntimeException('reqToStoreroom');
			}
			
			//validate view, check if required fields are populated
			if (!eventContext.ui.getCurrentViewControl().validate()) {
				return;
			}
			
			if(!this.validateQty(eventContext)){
				return;
			}
			
			if(!this.validateConversion(eventContext)){
				return;
			}
			

			//clear any data that may have been stuck in resource from prior transactions
			invuseResource.data = [];
			invuseResource._recordsToCreate = [];
			
			//reset splitrotateresource
			var  splitrotateresource = eventContext.application.getResource("splitrotateresource");
			splitrotateresource.data = [];
			
			//setup status
			var domaininvusestatus = CommonHandler._getAdditionalResource(eventContext,'domaininvusestatus');
			//var currentStatus = SynonymDomain.resolveToInternal(domaininvusestatus,'ENTERED');
			var currentStatus = SynonymDomain.resolveToDefaultExternal(domaininvusestatus, 'ENTERED');
			
			//var domainitemtypes = CommonHandler._getAdditionalResource(eventContext,'domainitemtype');
			//var toolItemType = SynonymDomain.resolveToInternal(domainitemtypes,'TOOL');
			
			var domaininvusetype = CommonHandler._getAdditionalResource(eventContext,'domaininvusetype');
			var transfertype = SynonymDomain.resolveToDefaultExternal(domaininvusetype, 'TRANSFER');
										
			//check qty of item being issued.  If qty exists continue with issue.
			if(additionalItemData.issueQty && additionalItemData.issueQty>0){
					//check negative availability
					var transfersHandler = new TransfersHandler();
					var negPromise = transfersHandler.checkNegativeAvailability(eventContext, additionalInventoryItemResource, transfers, issueQty);
					negPromise.then(function(negObject){						
						//create invuse record
						invuse = invuseResource.createNewRecord();
						invuse.openPriorityChangeTransaction();
						invuse.set('usetype', transfertype);
						invuse.set('description', MessageService.createResolvedMessage('invuseDescription'));
						invuse.set('fromstoreloc', storeroom);
						invuse.set('status', currentStatus);
						invuse.set('siteid',siteid);
						invuse.closePriorityChangeTransaction();
						
						//initialize invuseline on new invuse record
						invuse.getModelDataSet("invuseline", true).then(function(ivline){
							invuse.openPriorityChangeTransaction();
							var deferreds = [];
							var splitPromise = new Deferred();
							invuseline = ivline.createNewRecord();
							var invuselineUsetype = SynonymDomain.resolveToDefaultExternal(domaininvusetype, 'TRANSFER');
							invuseline.set('usetype',invuselineUsetype);
							invuseline.set('quantity',issueQty);
							invuseline.set('siteid', siteid);
							invuseline.set('invuselinenum',1);
							invuseline.set('itemnum',itemnum);
							invuseline.set('itemsetid',itemsetid);
							//invuseline.set('frombin',binnum);
							
							invuseline.set('frombin',frombin);
							invuseline.set('fromlot',fromlot);
							invuseline.set('gldebitacct',glaccount);
							invuseline.set('ponum',ponum);
							invuseline.set('assetnum',asset);
							invuseline.set('location',location);
													
							invuseline.set('tositeid', tositeid);
							invuseline.set('tostoreloc', tostoreloc);
							invuseline.set('tobin', tobin);
							invuseline.set('glcreditacct', glcreditacct);
							invuseline.set('gldebitacct', gldebitacct);
							
							invuseline.set('issueto',issueTo);							
							invuseline.set('conversion',conversion );
							
							var dataKey = itemnum+'::'+storeroom+'::'+siteid+'::'+itemsetid;
							var negativeAvailMaxvar = negObject.negativeAvailMaxvar;
							var itemBalanceMap = negObject.itemBalanceMap;
							var curbaltotalMap = negObject.curbaltotalMap;
							var itemAvailableBalanceMap = negObject.itemAvailableBalanceMap;
						
							//rotating
							if(rotating){
								var rotatingItemTotalQty = itemBalanceMap[dataKey];
								var curbaltotalQty = curbaltotalMap[dataKey];							
								
								if(rotatingItemTotalQty>curbaltotalQty){
									 //not enough rotating item balance in bins stop
									 //have user change reserve qty
									var msg = MessageService.createResolvedMessage('splitLineQtyRot');
									eventContext.application.hideBusy();
									self.ui.showMessage(msg);
									throw new PlatformRuntimeException('splitLineQtyRot');
								}
							}
							
							if(!rotating && negativeAvailMaxvar=='ALLOW'){
								var itemBalanceRequested = itemBalanceMap[dataKey];
								var itemQtyAvailable = itemAvailableBalanceMap[dataKey];
								
								if(itemBalanceRequested>itemQtyAvailable){
									//skip splitting this one
									splitPromise.resolve();
									deferreds.push(splitPromise);
									
									invuse.closePriorityChangeTransaction();
									
									if(newStatus=='COMPLETE'){
										self.changeStatus(invuse,eventContext,'Transfers.SearchUnreservedView', self, 'COMPLETE');										
									} else {
										transfersHandler.setStatus(eventContext, 'SHIPPED');
										transfersHandler.setSearchView(eventContext, 'Transfers.SearchUnreservedView');
										transfersHandler.shipItemsWithSplits(eventContext, self);
									}

									return;
								}
							}
							
							//check split
							splitPromise = self.checkSplit(eventContext, additionalInventoryItem, additionalItemData, invuse, invuseline);
							deferreds.push(splitPromise);
							invuse.closePriorityChangeTransaction();
							eventContext.application.hideBusy();
						});
					});
				}
		},
		
		/*filterBinForLookup: function(eventContext) {
			
			var additionalbin = CommonHandler._getAdditionalResource(eventContext,'additionalbin');
			
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
						
			var itemnum = transferAdditionItemRecord.get('itemnum');
			var tositeid = UserManager.getInfo("defsite");
			var tostoreroom = transferAdditionItemRecord.get('storeloc');
			
			var filter = [];
			CommonHandler._clearFilterForResource(eventContext, additionalbin);
			filter.push({'itemnum': itemnum, 'siteid': siteid, location: tostoreroom});
			
			additionalbin.lookupFilter = filter;	
			
		},

		
		filterToBinForLookup: function(eventContext) {
			
			var additionalbin = CommonHandler._getAdditionalResource(eventContext,'additionalbin');
			
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
						
			var itemnum = transferAdditionItemRecord.get('itemnum');
			var tositeid = UserManager.getInfo("defsite");
			var tostoreroom = transferAdditionItemRecord.get('storeloc');
			
			var filter = [];
			CommonHandler._clearFilterForResource(eventContext, additionalbin);
			filter.push({'itemnum': itemnum, 'siteid': siteid, location: tostoreroom});
			
			additionalbin.lookupFilter = filter;	
			
		},
		*/
	
		/**
		 * From storeloc Lookup Data Filter
		 */
		filterToStoreroomForLookup: function(eventContext){
			
			var additionalStoreroom = CommonHandler._getAdditionalResource(eventContext,'additionalstoreroom');
			var filter = [];
			
			additionalStoreroom._lookupFilter = null;
			
			var transfersResource = CommonHandler._getAdditionalResource(eventContext,'transferAdditionalItems').getCurrentRecord();
			
			var siteid = transfersResource.get('tositeid');
						
			CommonHandler._clearFilterForResource(eventContext, additionalStoreroom);
			
			if (siteid)
				filter.push({'siteid': siteid});
			
			additionalStoreroom.lookupFilter = filter;			
		},
		
			
		/**
		 * Splits the selected record into available bins with balances
		 */
		checkSplit: function(eventContext, inventory, itemdata, invuse, invuseline){
			var  splitqtyacrossbins = eventContext.application.getResource("splitqtyacrossbins");
			var self = this;
						
			//reset
			splitqtyacrossbins.data=[];
			
			var itemnum = inventory.get('itemnum');
			var siteid = inventory.get('siteid');
			var itemsetid = inventory.get('itemsetid');
			var location = inventory.get('location');
			//var binnum = inventory.get('binnum');
			var binnum = invuseline.get('frombin');
			var lotnum = invuseline.get('fromlot');
			var issueQty = itemdata.get('issueQty');
			var rotating = inventory.get('rotating');
			
			var invbalanceFilter = [{'itemnum': itemnum, 'siteid':siteid, 'itemsetid':itemsetid, 'location':location}];
			eventContext.application.showBusy();
			//if(binnum){
			//	invbalanceFilter.push({'binnum':binnum});
			//}
			
			var invbalancesPromise =  ModelService.filtered('invbalance', PlatformConstants.SEARCH_RESULT_QUERYBASE, invbalanceFilter, 1000, true, true, null, false);
			invbalancesPromise.then(function(invbalanceSet){
				var transfersHandler = new TransfersHandler();
				if(invbalanceSet && invbalanceSet.count()>0){
					var invbalance = invbalanceSet.data[0];
							
					//check if default binnum exists in invbalance
					var invbalBinSet = invbalanceSet.find('binnum == $1', binnum);
					if(invbalBinSet.length==0){
						invuseline.set('frombin',invbalance.binnum);
					} else {
						//invbalance rec for the bin exists, so just set default bin
						invuseline.set('frombin',binnum);
						invbalance = invbalBinSet[0];
					}
						
					var currentBalance = invbalance.curbal;
					if (rotating && rotating==true && issueQty>=1){
						self.autoSplit(eventContext, inventory, itemdata, invuse, invuseline);
					} else if (issueQty>currentBalance){
						self.autoSplit(eventContext, inventory, itemdata, invuse, invuseline);
					} else {
						var status = transfersHandler.getStatus(eventContext);
						if(status == 'COMPLETE'){
							self.changeStatus(invuse,eventContext,'Transfers.SearchUnreservedView', self, status);	
						} else {
							transfersHandler.setStatus(eventContext, 'SHIPPED');
							transfersHandler.setSearchView(eventContext, 'Transfers.SearchUnreservedView');
							transfersHandler.shipItemsWithSplits(eventContext,self);							
						}
					}
				} else {
					//reset resource
					var  splitrotateresource = eventContext.application.getResource("splitrotateresource");
					splitrotateresource.data=[];
					
					invuse = null;
					invuseline = null;
					//throw message
					var msg = MessageService.createResolvedMessage('noItemFoundInStoreroom', [itemnum]);
					self.ui.showMessage(msg);
					throw new PlatformRuntimeException('noItemFoundInStoreroom'); 
				}
			}).otherwise(function(error){
				Logger.trace(self._className + ": " + error);
			});	
		},
		
		
		/**
		 * Splits the selected record into available bins with balances
		 */
		autoSplit : function(eventContext,inventory, itemdata, invuse, invuseline){
			var  splitqtyacrossbins = eventContext.application.getResource("splitqtyacrossbins");
			var self = this;
						
			var itemnum = inventory.get('itemnum');
			var siteid = inventory.get('siteid');
			var itemsetid = inventory.get('itemsetid');
			var location = inventory.get('location');
			var issueunit = inventory.get('issueunit');
			var description = inventory.get('description');
			var issueQty = itemdata.get('issueQty');
			var rotating = inventory.get('rotating');
			eventContext.application.showBusy();
			var invbalanceFilter = {'itemnum': itemnum, 'siteid':siteid, 'itemsetid':itemsetid, 'location':location, 'stagingbin': false};
			var invbalancesPromise =  ModelService.filtered('invbalance', PlatformConstants.SEARCH_RESULT_QUERYBASE, invbalanceFilter, 1000, true, true, null, false);
			invbalancesPromise.then(function(invbalanceSet){
				if(invbalanceSet && invbalanceSet.count()>0){
					var transfersHandler = new TransfersHandler();
					//loadSplitQtyResource - inmemory
					var loadSplitQtyResource = transfersHandler.loadSplitQtyResource(eventContext, invbalanceSet, invbalanceFilter);
					var data = null;
					//splitting of rotating
					if (rotating && rotating==true){
						loadSplitQtyResource.then(function(calculatedlDataSplitBinQtyTEMP){
							arrayUtil.forEach(calculatedlDataSplitBinQtyTEMP, function(inMemory){
								if(inMemory.quantity==0){
									return;
								} else if ((issueQty>0 && issueQty >= inMemory.quantity) || (issueQty>0 && issueQty < inMemory.quantity)){
									while(inMemory.quantity>0 && issueQty>0){
										var splitrec = splitqtyacrossbins.createNewRecord();
										
										inMemory.quantity = inMemory.quantity - 1;
										issueQty = issueQty - 1;
										
										splitrec.set('quantity', 1);
										splitrec.set('itemnum', inMemory.itemnum);
										splitrec.set('itemsetid', inMemory.itemsetid);
										splitrec.set('location', location);
										splitrec.set('siteid', inMemory.siteid);
										splitrec.set('binnum', inMemory.binnum);
										splitrec.set('lotnum', inMemory.lotnum);
										splitrec.set('description', description);
										splitrec.set('rotating', rotating);
										splitrec.set('issueunit', issueunit);
										//splitrec.set('rotassetnum', rotassetnum);
										splitrec.invuseline = invuseline;
										splitrec.invuse = invuse;
										
										if(issueQty==0){
											return;
										}
									} 
								} else {
									return;
								}									
							});
							data = lang.clone(calculatedlDataSplitBinQtyTEMP);
							
							//sort by item asc
							splitqtyacrossbins.sort('itemnum asc');
							
							var  calculatedDataSplitBinQty = eventContext.application.getResource("calculatedDataSplitBinQty");
							calculatedDataSplitBinQty.data = data;
							
							eventContext.ui.show("Transfers.SplitQtyAcrossBinsView");							
						});
					} else {
						loadSplitQtyResource.then(function(calculatedlDataSplitBinQtyTEMP){
							arrayUtil.forEach(calculatedlDataSplitBinQtyTEMP, function(inMemory){
								//check if bin in inventory has 0 qty, if so skip to next bin
								if(inMemory.quantity==0){
									return;
								} else if ((issueQty>0 && issueQty >= inMemory.quantity) || (issueQty>0 && issueQty < inMemory.quantity)){
									var splitrec = splitqtyacrossbins.createNewRecord();
									
									if (issueQty>0 && issueQty < inMemory.quantity){
										splitrec.set('quantity', issueQty);
										inMemory.quantity = inMemory.quantity-issueQty;
										if (inMemory.quantity>=0){
											issueQty = 0;	
										}
									} else {
										splitrec.set('quantity', inMemory.quantity);
										issueQty = issueQty - inMemory.quantity;
										inMemory.quantity = 0;
									}
									
									splitrec.set('itemnum', inMemory.itemnum);
									splitrec.set('itemsetid', inMemory.itemsetid);
									splitrec.set('location', inMemory.location);
									splitrec.set('siteid', inMemory.siteid);
									splitrec.set('binnum', inMemory.binnum);
									splitrec.set('lotnum', inMemory.lotnum);
									splitrec.set('description', description);
									splitrec.set('rotating', rotating);
									splitrec.set('issueunit', issueunit);
									splitrec.invuseline = invuseline;
									splitrec.invuse = invuse;
									
									if(issueQty<0){
										return;
									}
								} else {
									return;
								}
							});
							data = lang.clone(calculatedlDataSplitBinQtyTEMP);
							
							//sort by item asc
							splitqtyacrossbins.sort('itemnum asc');
							
							var  calculatedDataSplitBinQty = eventContext.application.getResource("calculatedDataSplitBinQty");
							calculatedDataSplitBinQty.data = data;
							
							eventContext.ui.show("Transfers.SplitQtyAcrossBinsView");							
							
						});	
						
					}
//					//sort by item asc
//					splitqtyacrossbins.sort('itemnum asc');
//					
//					var  calculatedDataSplitBinQty = eventContext.application.getResource("calculatedDataSplitBinQty");
//					calculatedDataSplitBinQty.data = data;
//					
//					eventContext.ui.show("Transfers.SplitQtyAcrossBinsView");
				}
				
			});	
		},	
		
		/**
		 * Change Status
		 * 
		 * Status will be change to Complete when issuing an item
		 */
		changeStatus: function(invuse, eventContext, startingSearchView, currentThis, status){
			var statusChange = CommonHandler._getAdditionalResource(currentThis,"statusChangeResource").getCurrentRecord();
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			var memo = statusChange.get("memo");
			var statusDate = this.application.getCurrentDateTime();
			var invuseResource = invuse.getOwner();
			var self = this;
			
			//change status
			if(status=='COMPLETE'){
				InvuseObject.complete(invuse, statusDate, memo, eventContext);
			} else if (status=='SHIPPED'){
				InvuseObject.shipped(invuse, statusDate, memo, eventContext);
			} else {
				InvuseObject.cancelled(invuse, statusDate, memo, eventContext);
			}
			eventContext.application.showBusy();
			ModelService.save(invuseResource).then(function(){
				//flush transactions before checking for errors
				var flushPromise = PushingCoordinatorService.flush();
				flushPromise.then(function(){
					//clear non-persistents
//					invuse.npinvuselinesplit = [];
//					invuse.shipment = [];
//					invuse.shipmentline = [];
					
					transferAdditionItemRecord.issueTo 	= "";
					transferAdditionItemRecord.wonum 	= "";			
					transferAdditionItemRecord.issueQty	= "";
					transferAdditionItemRecord.conversion= "";
					self.clearBaseFields(eventContext);
					self.clearUnreservedSearchFields(eventContext);
					self.resetAdditionalItemFields(eventContext);
					eventContext.ui.returnToView(startingSearchView);
				});

			}).otherwise(function(err){
				eventContext.ui.showMessage(err);
			});
			
		},
		
		getError : function(eventContext){
			var  errorRes = eventContext.application.getResource("errorResource").getCurrentRecord();
			return errorRes.get('hasError');
		},
		
		/**
		 * Transits Back to Search view of Additional Item
		 * transits to Issue Additional Item Search view
		 */
		transitsBackToTransferAdditionalSearchView : function (eventContext) {
			eventContext.application['application.handlers.TransfersAvailableItemsHandler'].clearUnreservedSearchFields(eventContext);
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		/**
		 * Clear some fields (taskid, glaccount, location and asset)
		 */
		clearBaseFields: function(eventContext){
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			transferAdditionItemRecord.tostoreloc= "";
			transferAdditionItemRecord.tositeid	= "";
		
		},
		
		/**
		 * Cancels the Additional Items on Items Details View (Unreserved Item) and returns back to the list view or search view with fields cleared.
		 */
		cancelAdditionalItems : function(eventContext){
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			transferAdditionItemRecord.issueTo 	= "";
			transferAdditionItemRecord.wonum 		= "";			
			transferAdditionItemRecord.issueQty	= "";
			transferAdditionItemRecord.tositeid	= "";
			transferAdditionItemRecord.tostoreroom	= "";
			
			this.clearBaseFields(eventContext);
			this.clearUnreservedSearchFields(eventContext);
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		resetAdditionalItemFields : function(eventContext){
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transferAdditionalItems').getCurrentRecord();
			transfers.setNullValue('wonum');
			transfers.setNullValue('asset');
			transfers.setNullValue('location');
			transfers.setNullValue('glaccount');
			transfers.setNullValue('taskid');
			transfers.setNullValue('issueto');
			transfers.setNullValue('glcreditacct');
			transfers.setNullValue('gldebitacct');
			transfers.setNullValue('frombin');
			transfers.setNullValue('tobin');
			transfers.setNullValue('fromlot');
			transfers.setNullValue('tolot');
		},
		
		/**
		 * Check if required fields are populated
		 */
		_isRequiredFieldFilled : function (eventContext) {
			
			var transfersResource = CommonHandler._getAdditionalResource(this,"transfers").getCurrentRecord();
			var site = transfersResource.get('siteid');
			var storeroom = transfersResource.get('storeroom');
			
			if ( !site || !storeroom ){
				return false;
			}
			
			return true;
		},
		
		/**
		 * Transits to Search view of Additional Item
		 * Validates required data and transits to Issue Additional Item Search view
		 */
		transitsToTransferAdditionalSearchView : function (eventContext) {
			if (!this._isRequiredFieldFilled(eventContext)){
				this.ui.showMessage(MessageService.createStaticMessage('requiredField').getMessage());
				return;
			}
			this.clearUnreservedSearchFields(eventContext);
			this.ui.show("Transfers.SearchUnreservedView");
		},
		
		/**
		 * Transits Back to Search view of Additional Item
		 * transits to Issue Additional Item Search view
		 */
		transitsBackToTransferAdditionalSearchView : function (eventContext) {
			eventContext.application['application.handlers.TransfersAvailableItemsHandler'].clearUnreservedSearchFields(eventContext);
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
		},
		
		/**
		 * Clears search fields for Unreserved Items
		 */
		clearUnreservedSearchFields : function(eventContext) {
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
			transfers.setNullValue('itemnum');
			transfers.setNullValue('itemdesc');
			transfers.setNullValue('bin');
		},
		
		/**
		 * Search for item (unreserved)
		 */
		searchUnreservedItem : function(eventContext) {
			var filter = [];
			var oslcQueryParameters = {};
			var currentRecord = eventContext.getCurrentRecord();
			var itemNum = currentRecord.itemnum;
			var itemDesc = currentRecord.itemdesc;
			var bin = currentRecord.bin;
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
			var storeroom = transfers.storeroom;
			
			var self = this;			
			
			eventContext.application.showBusy();
			
			//verify if we have at least one field filled
			if(!itemNum && !itemDesc && !bin){
				var msg = MessageService.createStaticMessage("emptySearchFields").getMessage();
				self.ui.showMessage(msg);
				return;
			}
			
			//check for errors
			if (this.getError(eventContext)){
				throw new PlatformRuntimeException('reviewErrors');
			}
			
			// Checking connectivity
			CommunicationManager.checkConnectivityAvailable().then(function(hasConnectivity){
				eventContext.application.showBusy();
				if (hasConnectivity){
					//flush transactions before searching
					var flushPromise = PushingCoordinatorService.flush();
					flushPromise.then(function(){
						var siteid = UserManager.getInfo("defsite");		
						filter.push({siteid: siteid});
						
						if (storeroom) {
							filter.push({location: storeroom});
						}						
						if (itemNum){
							filter.push({itemnum: itemNum});
						}
						if (itemDesc){
							filter.push({description: '"%'+itemDesc+'%"'});
						} 
						if (bin){
							filter.push({binnum: '%'+bin+'%'});
						}
						
						eventContext.application.showBusy();
						
						ModelService.all('inventory',PlatformConstants.SEARCH_RESULT_QUERYBASE).then(function(searchResultSet){
							ModelService.clearSearchResult(searchResultSet);
							
							var invbalancePromise =  ModelService.filtered('inventory', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, 1000, true, true, oslcQueryParameters, false);
							invbalancePromise.then(function(invbalanceSet){
								
								//verify if search result data is empty
								if(invbalanceSet.data.length == 0){
									var msg = MessageService.createStaticMessage("emptySearchResult").getMessage();
									self.ui.showMessage(msg);
									return;
								}
								
								//This is a workaround to solve a limitation on platform to search by description on inventory resource
								filter = [];
								invbalanceSet.foreach(function(elem,pos,array){ 
									
									var result = {siteid: siteid};
									if (storeroom){
										lang.mixin(result, {location: storeroom});
									}
									if (bin) {
										lang.mixin(result, {itemnum: elem.itemnum, binnum: elem.binnum} );
									}else {
										lang.mixin(result, {itemnum: elem.itemnum} );
									}

									filter.push(result);
									
								});
								
								ModelService.filtered('inventory',null,filter,1000,false,false).then(function(set){

									set.resourceID = 'inventory';
									eventContext.application.addResource(set);
									
									if(set.data.length == 1) {
										eventContext.ui.show("Transfers.AdditionalItemsDetailsView");
									}else{
										eventContext.ui.show("Transfers.AdditionalItemsListView");
									}
									
									//clear model data service
									ModelService.clearSearchResult(set);
								});
								
								//clear model data service
								ModelService.clearSearchResult(invbalanceSet);
								
							}).otherwise(function(error){
								Logger.trace(self._className + ": " + error);
							});
						}).otherwise(function(error){
							Logger.trace(self._className + ": " + error);
						});								
					});
				}else{
					self.ui.showMessage(MessageService.createStaticMessage('connectionFailure').getMessage());
				}
				eventContext.application.hideBusy();
			}).otherwise(function(error){
				Logger.trace(self._className + ": " + error);
			});	
		},
		
		/**
		 * Clear some fields (taskid, glaccount, location and asset)
		 */
		clearBaseFields: function(eventContext){
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			transferAdditionItemRecord.taskid 		= "";
			transferAdditionItemRecord.glaccount 	= "";
			transferAdditionItemRecord.location 	= "";
			transferAdditionItemRecord.asset 		= "";
			
			transferAdditionItemRecord.tobin 		= "";
			transferAdditionItemRecord.tostoreroom 	= "";
			transferAdditionItemRecord.tositeid 	= "";
			transferAdditionItemRecord.glcreditacct = "";
			transferAdditionItemRecord.gldebitacct 	= "";
			
		},
		
		/**
		 * Cancels the Additional Items on Items Details View (Unreserved Item) and returns back to the list view or search view with fields cleared.
		 */
		cancelAdditionalItems : function(eventContext){
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			var handler = eventContext.application['application.handlers.TransfersAvailableItemsHandler'];
			transferAdditionItemRecord.issueTo 	= "";
			transferAdditionItemRecord.wonum 	= "";			
			transferAdditionItemRecord.issueQty	= "";
			
			transferAdditionItemRecord.tobin 		= "";
			transferAdditionItemRecord.tostoreroom 	= "";
			transferAdditionItemRecord.tositeid 	= "";
			transferAdditionItemRecord.glcreditacct = "";
			transferAdditionItemRecord.gldebitacct 	= "";
			
			handler.clearBaseFields(eventContext);
			eventContext.ui.hideCurrentView(PlatformConstants.CLEANUP);
			handler.clearUnreservedSearchFields(eventContext);
		},
		
		
		setTransferData: function(eventContext) {
						
			var transfers = CommonHandler._getAdditionalResource(eventContext,'transfers').getCurrentRecord();
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
			
			//var conversion =  NumberUtil.format( NumberUtil.parse('1.0', {places: 1}) );
			transferAdditionItemRecord.set('conversion', 1.0);
			
			//set default bin
			var inventory = CommonHandler._getAdditionalResource(eventContext,'inventory').getCurrentRecord();
			if ( inventory)
				transferAdditionItemRecord.set('frombin', inventory.binnum);
			
			if ( transfers) {				
				var tostoreloc = transfers.tostoreroom;
				var tositeid = transfers.tositeid;
				
				if (!tostoreloc || !tositeid)
					return;
								
				transferAdditionItemRecord.set('tositeid', tositeid);
				transferAdditionItemRecord.set('tostoreroom', tostoreloc);
				this.validateToStoreroom(eventContext);
				
			}			
		},
		
	
		/** 
		 * Validate to storeroom and gl accounts.
		 */
		validateToStoreroom: function(eventContext) {
			
			var  additionalInventory = eventContext.application.getResource("inventory").getCurrentRecord();
			var transferAdditionItemRecord = eventContext.application.getResource('transferAdditionalItems').getCurrentRecord();
				
			if ( additionalInventory) {				
				var glcreditacct = additionalInventory.controlacc;
				transferAdditionItemRecord.set('glcreditacct', glcreditacct);
				
				var itemnum = additionalInventory.itemnum;
				var itemsetid = additionalInventory.itemsetid;
				var tostoreloc = transferAdditionItemRecord.getPendingOrOriginalValue('tostoreroom'); //.toUpperCase();
				var tositeid = transferAdditionItemRecord.getPendingOrOriginalValue('tositeid'); //.toUpperCase();
				if ( itemnum && itemsetid && tostoreloc && tositeid) {	
					var promiseInventory = this.searchToInventory(eventContext, itemnum, itemsetid, tostoreloc, tositeid);				
					promiseInventory.then(function(toInventorySet) {						
					    if ( toInventorySet.count() > 0) {
					    	var  toInventory = toInventorySet.getCurrentRecord();											
							if (toInventory)
							{			
								var gldebitacct = toInventory.controlacc;
								var binnum = toInventory.binnum;
								transferAdditionItemRecord.set('gldebitacct', gldebitacct);
								transferAdditionItemRecord.set('tobin', binnum);
								var tobin = transferAdditionItemRecord.getPendingOrOriginalValue('tobin'); 
								if (tobin && tobin == '' ) {
									return;
								}
							}
					    }
						else 
						{
							transferAdditionItemRecord.set('conversion',1);
							transferAdditionItemRecord.setNullValue('tobin');
							var additionalStoreroomSet = CommonHandler._getAdditionalResource(eventContext,'additionalstoreroom');
							CommonHandler._clearFilterForResource(eventContext, additionalStoreroomSet);
							additionalStoreroomSet.filter('location== $1 &&  siteid== $2', tostoreloc, tositeid);
							var additionalStoreroom = additionalStoreroomSet.getCurrentRecord();
								
							if ( additionalStoreroom) {
								var gldebitacct = additionalStoreroom.controlacc;
								transferAdditionItemRecord.set('gldebitacct', gldebitacct);									
							}
							else
							{
								transferAdditionItemRecord.set('tostoreroom','');
								throw new PlatformRuntimeWarning('invalidLocation');
							}
						} //else
					});
				}
			}
		},
		
		
		
		searchToInventory: function(eventContext, itemnum, itemsetid, tostoreloc, tositeid) {			
			var self = this;
			var filter = [];
			var oslcQueryParameters = {};
			var deferred = new Deferred();
			// Checking connectivity
			CommunicationManager.checkConnectivityAvailable().then(function(hasConnectivity){
				eventContext.application.showBusy();
				if (hasConnectivity){
					//flush transactions before searching
					var flushPromise = PushingCoordinatorService.flush();
					flushPromise.then(function(){
						filter.push({siteid: tositeid});
						filter.push({location: tostoreloc});
												
						filter.push({itemnum: itemnum});
						filter.push({itemsetid: itemsetid});
						
						var invbalancePromise =  ModelService.filtered('inventory', PlatformConstants.SEARCH_RESULT_QUERYBASE, filter, 1000, true, true, oslcQueryParameters, false);
						invbalancePromise.then(function(invbalanceSet){
							deferred.resolve(invbalanceSet);
							ModelService.clearSearchResult(invbalanceSet);
						}).otherwise(function(error){
							Logger.trace(self._className + ": " + error);
						});
													
					}).otherwise(function(error){
						Logger.trace(self._className + ": " + error);
					});			
					
				}else{
					self.ui.showMessage(MessageService.createStaticMessage('connectionFailure').getMessage());
				}
				eventContext.application.hideBusy();
			}).otherwise(function(error){
				Logger.trace(self._className + ": " + error);
			});				
			return deferred.promise;
		}
		
	
	});
});
