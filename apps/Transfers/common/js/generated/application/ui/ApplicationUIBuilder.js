/* 
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2021 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */
 
//----------------------------------------------------------------//
// This is auto generated code. Do not modify it manually.
// Product and Version: IBM Maximo Anywhere Version 7.5
// Build: 2021-06-24 15:10:40
//----------------------------------------------------------------//
define(   "generated/application/ui/ApplicationUIBuilder", 
      [
         "dojo/_base/declare", 
         "dojo/promise/all", 
         "platform/ui/builder/_UIBuilderBase", 
         "dojo/_base/window", 
         "dojo/_base/array", 
         "dojo/io-query", 
         "platform/model/AdditionalDataManager", 
         "platform/model/AdditionalDataUIManager", 
         "platform/translation/MessageService", 
         "platform/ui/control/Application", 
         "platform/ui/control/UserInterface", 
         "platform/ui/control/Dialog", 
         "platform/ui/control/Container", 
         "platform/ui/control/Text", 
         "platform/ui/control/Button", 
         "platform/handlers/SSOHandler", 
         "platform/handlers/LoginHandler", 
         "platform/ui/control/View", 
         "platform/ui/control/Image", 
         "platform/handlers/_ApplicationHandlerBase", 
         "application/handlers/TransfersHandler", 
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "platform/ui/control/Link", 
         "platform/ui/control/Footer", 
         "application/handlers/TransfersAvailableItemsHandler", 
         "application/handlers/ReceiveShipmentHandler", 
         "application/handlers/ManagePurchaseOrderHandler", 
         "platform/ui/control/List", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/CheckBox", 
         "platform/ui/control/TextArea", 
         "platform/ui/control/Lookup", 
         "platform/ui/control/SearchAttributes", 
         "platform/ui/control/SearchAttribute", 
         "platform/ui/control/ReturnAttributes", 
         "platform/ui/control/ReturnAttribute", 
         "platform/ui/control/Actions", 
         "platform/ui/control/Action", 
         "platform/handlers/WorkOfflineHandler", 
         "platform/handlers/PseudoOfflineModeHandler", 
         "platform/handlers/CreateQueryBaseHandler", 
         "platform/ui/control/ErrorActions", 
         "platform/handlers/LookupHandler", 
         "platform/handlers/PushNotificationDialogHandler", 
         "platform/handlers/AttachmentHandler", 
         "platform/handlers/EsigHandler", 
         "platform/signature/handler/SignatureHandler", 
         "platform/ui/control/DateTimePicker", 
         "platform/handlers/SettingsHandler", 
         "platform/handlers/ChangePasswordHandler", 
         "platform/handlers/AdditionalDataDialogHandler", 
         "platform/ui/control/RadioButton", 
         "platform/logging/handler/LoggerReportHandler", 
         "platform/performance/handler/TimeTrackHandler", 
         "platform/handlers/DialogHandler", 
         "platform/ui/control/DurationPicker"
      ],

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, _ApplicationHandlerBase, TransfersHandler, Group, GroupItem, Link, Footer, TransfersAvailableItemsHandler, ReceiveShipmentHandler, ManagePurchaseOrderHandler, List, ListItemTemplate, ListText, SortOptions, SortOption, SortAttribute, CheckBox, TextArea, Lookup, SearchAttributes, SearchAttribute, ReturnAttributes, ReturnAttribute, Actions, Action, WorkOfflineHandler, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, AttachmentHandler, EsigHandler, SignatureHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker) {
      return declare("generated.application.ui.ApplicationUIBuilder", BuilderBase, {

         build : function() {
            console.log('Creating App');

            MessageService.init('artifact');


            var app001 = new Application({
               'logLevel' : 0,
               'xsi:noNamespaceSchemaLocation' : '..\/..\/..\/build\/app.xsd',
               'xmlns:xsi' : 'http:\/\/www.w3.org\/2001\/XMLSchema-instance',
               'id' : 'transfers',
               'blindQuerySupport' : 'false',
               'version' : '201508140807',
               'requiredRole' : 'ANYWHERE_TRANSFERS',
            });
            app001.setFeatures({
            'update.artifact.timestamps' : false,
            'esig.enabled' : true,
            'gps.enabled' : false,
            'enableDataEncryption' : true,
            'barcode.enabled' : true,
            'attachments.enabled' : false,
            'globalization.use.mock' : false,
            'run.bvt.scripts' : false,
            'build.update.check.enabled' : true,
            'pushnotification.enabled' : true,
            'map.enabled' : false,

            });

            var ui001 = new UserInterface({
               'artifactId' : 'ui',
               'id' : 'aw27ff46b0',
            });
            app001.addChild( ui001 );
            AdditionalDataManager._setAdditionalDataUIManager(new AdditionalDataUIManager(ui001));

            var dialog001 = new Dialog({
               'id' : 'Platform.SSOError',
               'label' : MessageService.createStaticMessage('SSO Login Error'),
            });
            ui001.addChild( dialog001 );


            var container001 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'resource' : 'SSODialogResource',
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0',
               'id' : 'aw8b213d94',
            });
            dialog001.addChild( container001 );


            var text001 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0_ErrorusingSSOLogi',
               'id' : 'awa51c0f06',
               'value' : MessageService.createStaticMessage('Error using SSO Login'),
            });
            container001.addChild( text001 );


            var text002 = new Text({
               'resourceAttribute' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.SSOError_SSODialogResource_container_0_errorMsg',
               'id' : 'awf2a9265',
            });
            container001.addChild( text002 );


            var container002 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SSOError_container_0',
               'id' : 'awbf273d01',
            });
            dialog001.addChild( container002 );


            var button001 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.SSOError_Retry_button',
               'id' : 'aw7e9aa474',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers001 = [
               {
                     'method' : 'performSSOLogin',
                     'artifactId' : 'Platform.SSOError_Retry_button_eventHandlers_click_performSSOLogin',
                     'id' : 'aw18912c1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.SSOHandler',
               }
            ];
            button001.eventHandlers = eventHandlers001;
            container002.addChild( button001 );


            var dialog002 = new Dialog({
               'id' : 'Platform.SSOUserNameError',
               'label' : MessageService.createStaticMessage('SSO User Name Error'),
            });
            ui001.addChild( dialog002 );


            var container003 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'resource' : 'SSODialogResource',
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0',
               'id' : 'awe49a2936',
            });
            dialog002.addChild( container003 );


            var text003 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0_Errorretrievingthe',
               'id' : 'aw1211d176',
               'value' : MessageService.createStaticMessage('Error retrieving the user name from the device'),
            });
            container003.addChild( text003 );


            var text004 = new Text({
               'resourceAttribute' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.SSOUserNameError_SSODialogResource_container_0_errorMsg',
               'id' : 'awe659a10b',
            });
            container003.addChild( text004 );


            var container004 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SSOUserNameError_container_0',
               'id' : 'awd7539907',
            });
            dialog002.addChild( container004 );


            var button002 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.SSOUserNameError_Retry_button',
               'id' : 'aw979175e5',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers002 = [
               {
                     'method' : 'performSSOLogin',
                     'artifactId' : 'Platform.SSOUserNameError_Retry_button_eventHandlers_click_performSSOLogin',
                     'id' : 'aw74e4917c',
                     'event' : 'click',
                     'class' : 'platform.handlers.SSOHandler',
               }
            ];
            button002.eventHandlers = eventHandlers002;
            container004.addChild( button002 );


            var dialog003 = new Dialog({
               'id' : 'Platform.DownloadError',
               'label' : MessageService.createStaticMessage('System Data Download Error'),
            });
            ui001.addChild( dialog003 );


            var container005 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadError.container',
               'id' : 'awb89e88b',
            });
            dialog003.addChild( container005 );


            var text005 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DownloadError.text',
               'id' : 'aw63a3744e',
               'value' : MessageService.createStaticMessage('Error downloading System Data'),
            });
            container005.addChild( text005 );


            var container006 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadError.container2',
               'id' : 'aw60b46d4d',
            });
            dialog003.addChild( container006 );


            var button003 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DownloadError.button',
               'id' : 'awcf9d5479',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers003 = [
               {
                     'method' : 'retrySystemDownload',
                     'artifactId' : 'Platform.DownloadError.eventHandler',
                     'id' : 'awa24338f8',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            button003.eventHandlers = eventHandlers003;
            container006.addChild( button003 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'platform.LoginView', false);
               trackTimer.startTracking();
            }

            var view001 = new View({
               'cssClass' : 'mainLogin',
               'resource' : 'PlatformLoginResource',
               'showHeader' : false,
               'id' : 'platform.LoginView',
            });
            ui001.addChild( view001 );

            var requiredResources001 = {
               'PlatformLongPressResource' : {
                  'artifactId' : 'platform.LoginView_PlatformLongPressResource',
                  'id' : 'aw9dc81534',
               },
               'PlatformProgressResource' : {
                  'artifactId' : 'platform.LoginView_PlatformProgressResource',
                  'id' : 'aw80cf2a6f',
               },
               'PlatformChangePasswordForm' : {
                  'artifactId' : 'platform.LoginView_PlatformChangePasswordForm',
                  'id' : 'aw950ff29',
               },
            };
            view001.addRequiredResources( requiredResources001 );

            var container007 = new Container({
               'cssClass' : 'loginForm',
               'artifactId' : 'platform.LoginView_container_0',
               'id' : 'aw1429aadd',
            });
            view001.addChild( container007 );


            var image001 = new Image({
               'image' : '..\/..\/..\/..\/..\/..\/images\/mdpi\/app_icon_main.svg',
               'cssClass' : 'productLogo',
               'artifactId' : 'platform.LoginView_image_0',
               'id' : 'aw9576ccdf',
            });
            container007.addChild( image001 );


            var text006 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName',
               'editable' : false,
               'artifactId' : 'platform.LoginView_container_0_appName',
               'id' : 'aw22401029',
            });
            container007.addChild( text006 );


            var text007 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'platform.LoginView_container_0_errorMsg',
               'id' : 'aw87817020',
            });
            container007.addChild( text007 );


            var text008 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'username',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_username',
               'id' : 'awca3922ff',
               'placeHolder' : MessageService.createStaticMessage('Username'),
            });
            container007.addChild( text008 );


            var text009 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'password',
               'cssClass' : 'loginPassword',
               'editable' : true,
               'artifactId' : 'platform.LoginView_container_0_password',
               'id' : 'aw7a5625d',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Password'),
            });
            container007.addChild( text009 );


            var button004 = new Button({
               'cssClass' : 'loginBtn',
               'artifactId' : 'platform.LoginView_LogIn_button',
               'id' : 'awe0510eac',
               'label' : MessageService.createStaticMessage('Sign In'),
               'primary' : 'true',
            });
            var eventHandlers004 = [
               {
                     'method' : 'loginClickHandler',
                     'artifactId' : 'platform.LoginView_LogIn_button_eventHandlers_click_loginClickHandler',
                     'id' : 'awa8e7b081',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            button004.eventHandlers = eventHandlers004;
            container007.addChild( button004 );


            var text010 = new Text({
               'labelCss' : 'loginLink',
               'artifactId' : 'PrivacyPolicy_link',
               'id' : 'aw8e500c53',
               'label' : MessageService.createStaticMessage('Privacy Policy'),
            });
            container007.addChild( text010 );

            var eventHandlers005 = [
               {
                     'method' : 'privacyPolicyLinkClicked',
                     'artifactId' : 'PrivacyPolicy_link_eventHandlers_click',
                     'id' : 'aw3c2baacc',
                     'event' : 'click',
                     'class' : 'platform.handlers.LoginHandler',
               }
            ];
            text010.eventHandlers = eventHandlers005;

            var image002 = new Image({
               'image' : 'IBMLogo.svg',
               'cssClass' : 'IBMLogo',
               'artifactId' : 'platform.LoginView_image_1',
               'id' : 'awe271fc49',
            });
            container007.addChild( image002 );

            var eventHandlers006 = [
               {
                     'method' : 'initializeLogin',
                     'artifactId' : 'platform.LoginView_eventHandlers_show_initializeLogin',
                     'id' : 'aw9137190b',
                     'event' : 'show',
                     'class' : 'platform.handlers.LoginHandler',
               },
               {
                     'method' : 'changeQueryBase',
                     'artifactId' : 'platform.LoginView_eventHandlers_initialize_changeQueryBase',
                     'id' : 'aw5f76d673',
                     'event' : 'initialize',
                     'class' : 'platform.handlers._ApplicationHandlerBase',
               }
            ];
            view001.eventHandlers = eventHandlers006;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ModuleSelectionView', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'showBackButton' : 'false',
               'resource' : 'transfers',
               'id' : 'Transfers.ModuleSelectionView',
               'label' : MessageService.createStaticMessage('Transfers and Receiving'),
            });
            ui001.addChild( view002 );

            var eventHandlers007 = [
               {
                     'method' : 'storeroomSiteRender',
                     'artifactId' : 'Transfers.ModuleSelectionView_eventHandlers_view_render',
                     'id' : 'aw291aff7',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view002.eventHandlers = eventHandlers007;

            var container008 = new Container({
               'artifactId' : 'Transfers.ModuleSelectionView_Transfers_container_0',
               'id' : 'aw329074ee',
            });
            view002.addChild( container008 );


            var group001 = new Group({
               'artifactId' : 'action1',
               'id' : 'aw9d9ad153',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.SearchInvreserveView',
               'artifactId' : 'Transfers.ModuleSelectionView_TransferReserved_Group1',
               'id' : 'aw1ab878bb',
            });
            group001.addChild( groupitem001 );


            var image003 = new Image({
               'image' : 'acBtn_transfer_reserved.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon1',
               'id' : 'aw2c333463',
               'label' : MessageService.createStaticMessage('Transfer Reserved Items'),
               'platform' : 'false',
            });
            groupitem001.addChild( image003 );


            var text011 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext1',
               'id' : 'aw26fbb975',
               'value' : MessageService.createStaticMessage('Transfer Reserved Items'),
            });
            groupitem001.addChild( text011 );


            var groupitem002 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.SearchUnreservedView',
               'artifactId' : 'Transfers.ModuleSelectionView_TransferUnreserved_Group2',
               'id' : 'aw7a500a7d',
            });
            group001.addChild( groupitem002 );


            var image004 = new Image({
               'image' : 'acBtn_transfer_additional.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon2',
               'id' : 'awb53a65d9',
               'label' : MessageService.createStaticMessage('Transfer Additional Items'),
               'platform' : 'false',
            });
            groupitem002.addChild( image004 );


            var text012 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext2',
               'id' : 'awbff2e8cf',
               'value' : MessageService.createStaticMessage('Transfer Additional Items'),
            });
            groupitem002.addChild( text012 );


            var groupitem003 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.ReceiveShippedItemsSeachView',
               'artifactId' : 'Transfers.ModuleSelectionView_ReceiveShipment_Group3',
               'id' : 'aw6792404',
            });
            group001.addChild( groupitem003 );


            var image005 = new Image({
               'image' : 'acBtn_receive_shipments.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon3',
               'id' : 'awc23d554f',
               'label' : MessageService.createStaticMessage('Receive Shipments'),
               'platform' : 'false',
            });
            groupitem003.addChild( image005 );


            var text013 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext3',
               'id' : 'awc8f5d859',
               'value' : MessageService.createStaticMessage('Receive Shipments'),
            });
            groupitem003.addChild( text013 );


            var groupitem004 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.ManageReceivedShipmentSeachView',
               'artifactId' : 'Transfers.ModuleSelectionView_ManageReceivedShipment_Group4',
               'id' : 'aw5056402',
            });
            group001.addChild( groupitem004 );


            var image006 = new Image({
               'image' : 'acBtn_manage_shipments.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon4',
               'id' : 'aw5c59c0ec',
               'label' : MessageService.createStaticMessage('Manage Received Shipments'),
               'platform' : 'false',
            });
            groupitem004.addChild( image006 );


            var text014 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext4',
               'id' : 'aw56914dfa',
               'value' : MessageService.createStaticMessage('Manage Received Shipments'),
            });
            groupitem004.addChild( text014 );


            var groupitem005 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.ReceivePurchaseOrderItemsSeachView',
               'artifactId' : 'Transfers.ModuleSelectionView_ReceivePurchaseOrder_Group6',
               'id' : 'aw5edb7186',
            });
            group001.addChild( groupitem005 );


            var image007 = new Image({
               'image' : 'acBtn_receive_po.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon6',
               'id' : 'awb257a1c0',
               'label' : MessageService.createStaticMessage('Receive External PO'),
               'platform' : 'false',
            });
            groupitem005.addChild( image007 );


            var text015 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext6',
               'id' : 'awb89f2cd6',
               'value' : MessageService.createStaticMessage('Receive Purchase Orders'),
            });
            groupitem005.addChild( text015 );


            var groupitem006 = new GroupItem({
               'layout' : 'Button1Item1',
               'transitionTo' : 'Transfers.ManageReceivedPurchaseOrderSeachView',
               'artifactId' : 'Transfers.ModuleSelectionView_ManageReceivedPO_Group5',
               'id' : 'awd1d48f76',
            });
            group001.addChild( groupitem006 );


            var image008 = new Image({
               'image' : 'acBtn_manage_po.svg',
               'cssClass' : 'actionButton',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'transferReceivingicon5',
               'id' : 'aw2b5ef07a',
               'label' : MessageService.createStaticMessage('Manage External PO'),
               'platform' : 'false',
            });
            groupitem006.addChild( image008 );


            var text016 = new Text({
               'layoutInsertAt' : 'item1',
               'artifactId' : 'createTransferReceivingtext5',
               'id' : 'aw21967d6c',
               'value' : MessageService.createStaticMessage('Manage Purchase Orders'),
            });
            groupitem006.addChild( text016 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.SearchInvreserveView', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'resource' : 'transfers',
               'id' : 'Transfers.SearchInvreserveView',
               'label' : MessageService.createStaticMessage('Search Reserved Items'),
            });
            ui001.addChild( view003 );

            var requiredResources002 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.SearchInvreserveView_requiredResource_errorResource',
                  'id' : 'aw8f75a837',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.SearchInvreserveView_requiredResource_domainissuetype',
                  'id' : 'awbaa1975c',
               },
            };
            view003.addRequiredResources( requiredResources002 );

            var container009 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.SearchInvreserveView_container_0',
               'id' : 'awc509bf0f',
            });
            view003.addChild( container009 );


            var link001 = new Link({
               'artifactId' : 'link',
               'id' : 'aw36ac99f1',
               'label' : MessageService.createStaticMessage(''),
            });
            container009.addChild( link001 );

            var eventHandlers008 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'link_eventHandlers_click',
                     'id' : 'aw2ea586b5',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw6f7bdfb3',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            link001.eventHandlers = eventHandlers008;

            var container010 = new Container({
               'resource' : 'transfers',
               'artifactId' : 'Transfers.SearchInvreserveView_container_1',
               'id' : 'awb20e8f99',
            });
            view003.addChild( container010 );


            var group002 = new Group({
               'artifactId' : 'Transfers.SearchInvreserveView_group_0',
               'id' : 'awbb8c6d3d',
            });
            container010.addChild( group002 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0',
               'id' : 'aw80d22e1c',
            });
            group002.addChild( groupitem007 );


            var text017 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_fromsiteid',
               'id' : 'awb04030ae',
               'label' : MessageService.createStaticMessage('From Site'),
            });
            groupitem007.addChild( text017 );

            var eventHandlers009 = [
               {
                     'method' : 'storeroomSiteRender',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_0_fromsiteid_eventHandlers_render_view',
                     'id' : 'aw4603108b',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text017.eventHandlers = eventHandlers009;

            var text018 = new Text({
               'resourceAttribute' : 'storeroom',
               'lookup' : 'Transfers.StoreroomLookup',
               'editable' : true,
               'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_storeroom_text',
               'id' : 'aw3a52f988',
               'label' : MessageService.createStaticMessage('From Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem007.addChild( text018 );

            var eventHandlers010 = [
               {
                     'method' : 'validateFromStoreroom',
                     'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_fromstoreroom_eventHandlers_datachange',
                     'id' : 'aw84694bd7',
                     'event' : 'datachange',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text018.eventHandlers = eventHandlers010;

            var text019 = new Text({
               'resourceAttribute' : 'tositeid',
               'lookup' : 'Transfers.SiteLookup',
               'editable' : true,
               'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_tositeid',
               'id' : 'awd7d7df26',
               'label' : MessageService.createStaticMessage('To Site'),
               'lookupAttribute' : 'siteid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem007.addChild( text019 );

            var eventHandlers011 = [
               {
                     'method' : 'validateToSite',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_1_tositeid_eventHandlers_validate_fromsiteid',
                     'id' : 'awf8415b05',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text019.eventHandlers = eventHandlers011;

            var text020 = new Text({
               'resourceAttribute' : 'tostoreroom',
               'lookup' : 'Transfers.ToStoreroomLookup',
               'editable' : true,
               'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_tostoreroom',
               'id' : 'aw634da00f',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem007.addChild( text020 );

            var eventHandlers012 = [
               {
                     'method' : 'validateToStoreroom',
                     'artifactId' : 'Transfers.SearchInvreserveView_groupitem_0_tostoreroom_eventHandlers_validate',
                     'id' : 'aw80f06536',
                     'event' : 'datachange',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text020.eventHandlers = eventHandlers012;

            var groupitem008 = new GroupItem({
               'artifactId' : 'Transfers.SearchInvreserveView_po_groupitem_1',
               'id' : 'awe8428255',
            });
            group002.addChild( groupitem008 );


            var text021 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : true,
               'artifactId' : 'Transfers.SearchInvreserveView_ponum',
               'id' : 'aw5509f79f',
               'label' : MessageService.createStaticMessage('Purchase Order'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem008.addChild( text021 );

            var eventHandlers013 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'Transfers.SearchInvreserveView_ponum_eventHandler',
                     'id' : 'aweaa3fcc3',
                     'event' : 'datachange',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text021.eventHandlers = eventHandlers013;

            var footer001 = new Footer({
               'artifactId' : 'Transfers.SearchInvreserveView_footer',
               'id' : 'awa8c41e63',
            });
            view003.addChild( footer001 );


            var button005 = new Button({
               'artifactId' : 'Transfers.SearchInvreserveView_Clear_button',
               'id' : 'aw75e3b0d3',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers014 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'Transfers.SearchInvreserveView_clear_button_eventHandlers_click_Clear',
                     'id' : 'aw374cf0e6',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button005.eventHandlers = eventHandlers014;
            footer001.addChild( button005 );


            var button006 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.SearchInvreserveView_Search_button',
               'id' : 'awe595b8a9',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers015 = [
               {
                     'method' : 'searchReservedItem',
                     'artifactId' : 'Transfers.SearchInvreserveView_Search_button_eventHandlers_click_Search',
                     'id' : 'aw73d51516',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button006.eventHandlers = eventHandlers015;
            footer001.addChild( button006 );

            var eventHandlers016 = [
               {
                     'method' : 'resetSearchFields',
                     'artifactId' : 'Transfers.SearchInvreserveView_view_0_eventHandlers_init',
                     'id' : 'aw925560f6',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view003.eventHandlers = eventHandlers016;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.SearchUnreservedView', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'resource' : 'transfers',
               'id' : 'Transfers.SearchUnreservedView',
               'label' : MessageService.createStaticMessage('Search Additional Items'),
            });
            ui001.addChild( view004 );

            var requiredResources003 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.SearchUnreservedView_requiredResource_errorResource',
                  'id' : 'aw5dba351e',
               },
               'domainitemstatus' : {
                  'artifactId' : 'Transfers.SearchUnreservedView_domainitemstatus',
                  'id' : 'aw635c4973',
               },
               'domainitemtype' : {
                  'artifactId' : 'Transfers.SearchUnreservedView_domainitemtype',
                  'id' : 'awe9f0bfec',
               },
               'rotatingAssetUsage' : {
                  'artifactId' : 'Transfers.SearchUnreservedView_rotatingAssetUsage',
                  'id' : 'awdff50b8f',
               },
            };
            view004.addRequiredResources( requiredResources003 );

            var container011 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.SearchUnreservedView_container_0',
               'id' : 'awc39d922e',
            });
            view004.addChild( container011 );


            var link002 = new Link({
               'artifactId' : 'Transfers.SearchUnreservedView_link',
               'id' : 'aw96e7cd2d',
               'label' : MessageService.createStaticMessage(''),
            });
            container011.addChild( link002 );

            var eventHandlers017 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.SearchUnreservedView_link_eventHandlers_click',
                     'id' : 'aw270bd09d',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.SearchUnreservedView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'awa07c4dde',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            link002.eventHandlers = eventHandlers017;

            var container012 = new Container({
               'resource' : 'transfers',
               'artifactId' : 'Transfers.SearchUnreserved_container_1',
               'id' : 'awf9354175',
            });
            view004.addChild( container012 );


            var group003 = new Group({
               'artifactId' : 'Transfers.SearchUnreserved_group_0',
               'id' : 'aw3f40a5d9',
            });
            container012.addChild( group003 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'Transfers.SearchUnreserved_siteid_groupitem_1',
               'id' : 'awdcb5db97',
            });
            group003.addChild( groupitem009 );


            var text022 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'Transfers.SearchUnreserved_siteid_groupitem_0',
               'id' : 'awabb2eb01',
               'label' : MessageService.createStaticMessage('From Site'),
            });
            groupitem009.addChild( text022 );

            var eventHandlers018 = [
               {
                     'method' : 'storeroomSiteRender',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_0_siteid_eventHandlers_render_view',
                     'id' : 'aw55f7983b',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text022.eventHandlers = eventHandlers018;

            var text023 = new Text({
               'resourceAttribute' : 'storeroom',
               'lookup' : 'Transfers.StoreroomLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.SearchUnreserved_storeroom_groupitem_1_text',
               'id' : 'awac5b4922',
               'label' : MessageService.createStaticMessage('From Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem009.addChild( text023 );

            var eventHandlers019 = [
               {
                     'method' : 'validateFromStoreroom',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_1_storeroom_eventHandlers_datachange_storeroom',
                     'id' : 'awaa08ab93',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text023.eventHandlers = eventHandlers019;

            var text024 = new Text({
               'resourceAttribute' : 'tositeid',
               'lookup' : 'Transfers.SiteLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.SearchUnreserved_tositeid_groupitem_1_text',
               'id' : 'aw4935116b',
               'label' : MessageService.createStaticMessage('To Site'),
               'lookupAttribute' : 'siteid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem009.addChild( text024 );

            var eventHandlers020 = [
               {
                     'method' : 'validateToSite',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_1_tositeid_eventHandlers_validate_tositeid',
                     'id' : 'awec4d56de',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text024.eventHandlers = eventHandlers020;

            var text025 = new Text({
               'resourceAttribute' : 'tostoreroom',
               'lookup' : 'Transfers.ToStoreroomLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.SearchUnreserved_tostoreroom_groupitem_1_text',
               'id' : 'aw1cb46155',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem009.addChild( text025 );

            var eventHandlers021 = [
               {
                     'method' : 'validateToStoreroom',
                     'artifactId' : 'Transfers.SearchUnreserved_groupitem_1_tostoreroom_eventHandlers_datachange_tostoreroom',
                     'id' : 'awd49624fa',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text025.eventHandlers = eventHandlers021;

            var group004 = new Group({
               'artifactId' : 'Transfers.SearchUnreserved_group_1',
               'id' : 'aw4847954f',
            });
            container012.addChild( group004 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'Transfers.SearchUnreserved_itemnum_groupitem_1',
               'id' : 'awdd3865e1',
            });
            group004.addChild( groupitem010 );


            var text026 = new Text({
               'resourceAttribute' : 'itemnum',
               'lookup' : 'Transfers.ItemLookup',
               'editable' : true,
               'artifactId' : 'Transfers.SearchUnreserved_itemnum',
               'id' : 'awa323553',
               'label' : MessageService.createStaticMessage('Item'),
               'codeScannable' : true,
               'lookupAttribute' : 'itemnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem010.addChild( text026 );


            var text027 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : true,
               'artifactId' : 'Transfers.SearchUnreserved_itemdesc',
               'id' : 'aw530b91df',
               'label' : MessageService.createStaticMessage('Item Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem010.addChild( text027 );


            var text028 = new Text({
               'resourceAttribute' : 'bin',
               'editable' : true,
               'artifactId' : 'Transfers.SearchUnreserved_bin',
               'id' : 'aw5184dfc1',
               'label' : MessageService.createStaticMessage('Bin'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem010.addChild( text028 );


            var footer002 = new Footer({
               'artifactId' : 'Transfers.SearchUnreservedView_footer',
               'id' : 'awa3babae6',
            });
            view004.addChild( footer002 );


            var button007 = new Button({
               'artifactId' : 'Transfers.SearchUnreservedView_Clear_button',
               'id' : 'aw398c34a0',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers022 = [
               {
                     'method' : 'clearUnreservedSearchFields',
                     'artifactId' : 'Transfers.SearchUnreservedView_Clear_button_eventHandlers_click_handleClearButtonClickSearchUnreservedView',
                     'id' : 'awe9502763',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            button007.eventHandlers = eventHandlers022;
            footer002.addChild( button007 );


            var button008 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.SearchUnreservedView_Search_button',
               'id' : 'aw2cd5f7ab',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers023 = [
               {
                     'method' : 'searchUnreservedItem',
                     'artifactId' : 'Transfers.SearchUnreserved_Search_button_eventHandlers_click_Search',
                     'id' : 'aw88e963e0',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            button008.eventHandlers = eventHandlers023;
            footer002.addChild( button008 );

            var eventHandlers024 = [
               {
                     'method' : 'resetSearchFields',
                     'artifactId' : 'Transfers.SearchInvreserveView_view_1_eventHandlers_init',
                     'id' : 'awf7325bb0',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view004.eventHandlers = eventHandlers024;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceiveShippedItemsSeachView', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'resource' : 'transfers',
               'id' : 'Transfers.ReceiveShippedItemsSeachView',
               'label' : MessageService.createStaticMessage('Search Shipments'),
            });
            ui001.addChild( view005 );

            var requiredResources004 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_requiredResource_errorResource',
                  'id' : 'awc6a9c036',
               },
               'transfers' : {
                  'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_requiredResource_transfers',
                  'id' : 'awc0324a9e',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_requiredResource_domainissuetype',
                  'id' : 'awe0d306ab',
               },
               'domaininvusereceipts' : {
                  'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_requiredResource_domaininvusereceipts',
                  'id' : 'awb00b9058',
               },
            };
            view005.addRequiredResources( requiredResources004 );

            var container013 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_container_0',
               'id' : 'awb54f1093',
            });
            view005.addChild( container013 );


            var link003 = new Link({
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_link',
               'id' : 'aw2cac89b3',
               'label' : MessageService.createStaticMessage(''),
            });
            container013.addChild( link003 );

            var eventHandlers025 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_link_eventHandlers_click',
                     'id' : 'awe7ac2d01',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'awd84088ac',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link003.eventHandlers = eventHandlers025;

            var container014 = new Container({
               'resource' : 'transfers',
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_container_1',
               'id' : 'awc2482005',
            });
            view005.addChild( container014 );


            var group005 = new Group({
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_group_0',
               'id' : 'awa4c3e36f',
            });
            container014.addChild( group005 );


            var groupitem011 = new GroupItem({
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_shipment_groupitem_1',
               'id' : 'aw24af7498',
            });
            group005.addChild( groupitem011 );


            var text029 = new Text({
               'resourceAttribute' : 'shipment',
               'editable' : true,
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_shipment',
               'id' : 'awd292ea60',
               'label' : MessageService.createStaticMessage('Shipment'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem011.addChild( text029 );

            var eventHandlers026 = [
               {
                     'method' : 'shipmentLookup',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_shipment_0',
                     'id' : 'aw7f01d19b',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            text029.eventHandlers = eventHandlers026;

            var button009 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'aw119f7d04',
            });
            var eventHandlers027 = [
               {
                     'method' : 'shipmentLookup',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_shipment_click',
                     'id' : 'awc31a36e9',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button009.eventHandlers = eventHandlers027;
            text029.addChild( button009 );


            var footer003 = new Footer({
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_footer',
               'id' : 'aw3dc922b0',
            });
            view005.addChild( footer003 );


            var button010 = new Button({
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_Clear_button',
               'id' : 'aw8c2a2913',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers028 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_clear_button_eventHandlers_click_Clear',
                     'id' : 'aw73a01496',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button010.eventHandlers = eventHandlers028;
            footer003.addChild( button010 );


            var button011 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_Search_button',
               'id' : 'aw7e08b380',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers029 = [
               {
                     'method' : 'searchShipment',
                     'artifactId' : 'Transfers.ReceiveShippedItemsSeachView_Search_button_eventHandlers_click_Search',
                     'id' : 'awfb8d0e6d',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button011.eventHandlers = eventHandlers029;
            footer003.addChild( button011 );

            var eventHandlers030 = [
               {
                     'method' : 'resetSearchFields',
                     'artifactId' : 'Transfers.SearchInvreserveView_view_2_eventHandlers_init',
                     'id' : 'aw589b167a',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view005.eventHandlers = eventHandlers030;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceivePurchaseOrderItemsSeachView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'poExternalResource',
               'id' : 'Transfers.ReceivePurchaseOrderItemsSeachView',
               'label' : MessageService.createStaticMessage('Search Purchase Orders'),
            });
            ui001.addChild( view006 );

            var requiredResources005 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_errorResource',
                  'id' : 'aw314500a9',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_domainissuetype',
                  'id' : 'aw8d6ea522',
               },
               'domainitemtype' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_domainitemtype',
                  'id' : 'aw7518581c',
               },
               'domaininvusereceipts' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_domaininvusereceipts',
                  'id' : 'aw4ef68cf9',
               },
               'domainpostatus' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_domainpostatus',
                  'id' : 'aw2df6dbb7',
               },
               'additionalvendor' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_additionalvendor',
                  'id' : 'aw3a1506a5',
               },
               'additionalLineType' : {
                  'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_requiredResource_additionallinetype',
                  'id' : 'awf5db780a',
               },
            };
            view006.addRequiredResources( requiredResources005 );

            var container015 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_error_container_0',
               'id' : 'awcef0acdf',
            });
            view006.addChild( container015 );


            var link004 = new Link({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link',
               'id' : 'aw5433f399',
               'label' : MessageService.createStaticMessage(''),
            });
            container015.addChild( link004 );

            var eventHandlers031 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link_eventHandlers_click',
                     'id' : 'aw5b8df86a',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw9b9567ee',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link004.eventHandlers = eventHandlers031;

            var container016 = new Container({
               'resource' : 'poExternalResource',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_container_1',
               'id' : 'awfee150c2',
            });
            view006.addChild( container016 );


            var group006 = new Group({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_group_0',
               'id' : 'aw24793f88',
            });
            container016.addChild( group006 );


            var groupitem012 = new GroupItem({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_shipment_groupitem_1',
               'id' : 'awf5d2dae2',
            });
            group006.addChild( groupitem012 );


            var text030 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : true,
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_shipment',
               'id' : 'awec7c2767',
               'label' : MessageService.createStaticMessage('Purchase Order'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem012.addChild( text030 );

            var eventHandlers032 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_ponum_eventHandler',
                     'id' : 'aw535f58ff',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text030.eventHandlers = eventHandlers032;

            var button012 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'awa63199b',
            });
            var eventHandlers033 = [
               {
                     'method' : 'purchaseOrderLookup',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_po_click_eventhandler',
                     'id' : 'awde602515',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'setButtonReadonly',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_po_render',
                     'id' : 'awb33f19f8',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button012.eventHandlers = eventHandlers033;
            text030.addChild( button012 );


            var groupitem013 = new GroupItem({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_po_groupitem_2',
               'id' : 'aw27b734cb',
            });
            group006.addChild( groupitem013 );


            var text031 = new Text({
               'resourceAttribute' : 'vendor',
               'lookup' : 'Transfers.VendorLookup',
               'editable' : true,
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_po_1',
               'id' : 'aw792d854',
               'label' : MessageService.createStaticMessage('Vendor'),
               'lookupAttribute' : 'company',
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem013.addChild( text031 );

            var eventHandlers034 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_vendor_eventHandler',
                     'id' : 'aw18abb5e1',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text031.eventHandlers = eventHandlers034;

            var footer004 = new Footer({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_footer',
               'id' : 'awe2720e25',
            });
            view006.addChild( footer004 );


            var button013 = new Button({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_Clear_button',
               'id' : 'aw8916d770',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers035 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_clear_button_eventHandlers_click_Clear',
                     'id' : 'awd28f7af4',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button013.eventHandlers = eventHandlers035;
            footer004.addChild( button013 );


            var button014 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_Search_button',
               'id' : 'awaab6bf9c',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers036 = [
               {
                     'method' : 'searchPurchaseOrders',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_Search_button_eventHandlers_click_Search',
                     'id' : 'aw64cea38',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button014.eventHandlers = eventHandlers036;
            footer004.addChild( button014 );

            var eventHandlers037 = [
               {
                     'method' : 'clearSearchFieldsAndBack',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_eventHandlers_back',
                     'id' : 'aw89e46e8d',
                     'event' : 'back',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            view006.eventHandlers = eventHandlers037;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ManageReceivedShipmentSeachView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'resource' : 'transfers',
               'id' : 'Transfers.ManageReceivedShipmentSeachView',
               'label' : MessageService.createStaticMessage('Search Shipments'),
            });
            ui001.addChild( view007 );

            var requiredResources006 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResource_errorResource',
                  'id' : 'aw3a539a2b',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResources_domainissuetype',
                  'id' : 'aw11299e5c',
               },
               'domainreceiptstatus' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResources_domainreceiptstatus',
                  'id' : 'awd3ccfcce',
               },
               'domaininvusereceipts' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResources_domaininvusereceipts',
                  'id' : 'aw871ff3a4',
               },
            };
            view007.addRequiredResources( requiredResources006 );

            var container017 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_container_0',
               'id' : 'awc0eb07eb',
            });
            view007.addChild( container017 );


            var link005 = new Link({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link',
               'id' : 'aw16eb1f',
               'label' : MessageService.createStaticMessage(''),
            });
            container017.addChild( link005 );

            var eventHandlers038 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link_eventHandlers_click',
                     'id' : 'aw2e1f018d',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw17be6612',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link005.eventHandlers = eventHandlers038;

            var container018 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_container_0_1',
               'id' : 'aweca2c31',
            });
            view007.addChild( container018 );


            var link006 = new Link({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link_1',
               'id' : 'awd7a66626',
               'label' : MessageService.createStaticMessage(''),
            });
            container018.addChild( link006 );

            var eventHandlers039 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link_eventHandlers_click_1',
                     'id' : 'awd40eabd1',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_link_eventHandlers_render_hideShowSelectLink_1',
                     'id' : 'awf101f05e',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link006.eventHandlers = eventHandlers039;

            var container019 = new Container({
               'resource' : 'transfers',
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_container_1',
               'id' : 'awb7ec377d',
            });
            view007.addChild( container019 );


            var group007 = new Group({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_group_0',
               'id' : 'aw8de14f0',
            });
            container019.addChild( group007 );


            var groupitem014 = new GroupItem({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_shipment_groupitem_1',
               'id' : 'awf1a14668',
            });
            group007.addChild( groupitem014 );


            var text032 = new Text({
               'resourceAttribute' : 'shipment',
               'editable' : true,
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_shipment',
               'id' : 'awb28e7942',
               'label' : MessageService.createStaticMessage('Shipment'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem014.addChild( text032 );

            var eventHandlers040 = [
               {
                     'method' : 'shipmentLookup',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_shipment_0',
                     'id' : 'awb1b53559',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            text032.eventHandlers = eventHandlers040;

            var button015 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'aw71d7aa48',
            });
            var eventHandlers041 = [
               {
                     'method' : 'shipmentLookup',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_shipment_click',
                     'id' : 'aw4dc0ec13',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button015.eventHandlers = eventHandlers041;
            text032.addChild( button015 );


            var footer005 = new Footer({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_footer',
               'id' : 'aw9cc7fd9b',
            });
            view007.addChild( footer005 );


            var button016 = new Button({
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_Clear_button',
               'id' : 'awd281740a',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers042 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_clear_button_eventHandlers_click_Clear',
                     'id' : 'aw2a7601b6',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button016.eventHandlers = eventHandlers042;
            footer005.addChild( button016 );


            var button017 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_Search_button',
               'id' : 'aw1a3db01d',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers043 = [
               {
                     'method' : 'searchReceivedItems',
                     'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_Search_button_eventHandlers_click_Search',
                     'id' : 'aw3d497f2',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button017.eventHandlers = eventHandlers043;
            footer005.addChild( button017 );

            var eventHandlers044 = [
               {
                     'method' : 'resetSearchFields',
                     'artifactId' : 'Transfers.SearchInvreserveView_view_3_eventHandlers_init',
                     'id' : 'aw3dfc2d3c',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view007.eventHandlers = eventHandlers044;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ManageReceivedPurchaseOrderSeachView', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'resource' : 'poExternalResource',
               'id' : 'Transfers.ManageReceivedPurchaseOrderSeachView',
               'label' : MessageService.createStaticMessage('Search Purchase Orders'),
            });
            ui001.addChild( view008 );

            var requiredResources007 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_requiredResource_errorResource',
                  'id' : 'awe10a7706',
               },
               'domaininvusereceipts' : {
                  'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_requiredResources_domaininvusereceipts',
                  'id' : 'aw52bf5483',
               },
               'domainpostatus' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResources_domainpostatus',
                  'id' : 'aw63cb0c73',
               },
               'domaincosttype' : {
                  'artifactId' : 'Transfers.ManageReceivedShipmentSeachView_requiredResources_domaincosttype',
                  'id' : 'aw77434f51',
               },
            };
            view008.addRequiredResources( requiredResources007 );

            var container020 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_container_0',
               'id' : 'aw87d23aad',
            });
            view008.addChild( container020 );


            var link007 = new Link({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link',
               'id' : 'aw2a539f9f',
               'label' : MessageService.createStaticMessage(''),
            });
            container020.addChild( link007 );

            var eventHandlers045 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link_eventHandlers_click',
                     'id' : 'aw96b01151',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw939fec4',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link007.eventHandlers = eventHandlers045;

            var container021 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_error_container_1',
               'id' : 'awb9f79c49',
            });
            view008.addChild( container021 );


            var link008 = new Link({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link_extpo',
               'id' : 'aw418dd951',
               'label' : MessageService.createStaticMessage(''),
            });
            container021.addChild( link008 );

            var eventHandlers046 = [
               {
                     'method' : 'showPOExtErrorPage',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link_eventHandlers_click_extpo',
                     'id' : 'aw6c3741c4',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowPOExtErrorLink',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_link_eventHandlers_render_hideShowSelectLink_extpo',
                     'id' : 'awed069046',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link008.eventHandlers = eventHandlers046;

            var container022 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_error_container_3',
               'id' : 'aw57f9fd65',
            });
            view008.addChild( container022 );


            var link009 = new Link({
               'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link_extpo_3',
               'id' : 'aw5bea0b78',
               'label' : MessageService.createStaticMessage(''),
            });
            container022.addChild( link009 );

            var eventHandlers047 = [
               {
                     'method' : 'showPOListComplexExtErrorPage',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link_eventHandlers_click_extpo_ComplexList',
                     'id' : 'aw91e2f092',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowPOListComplexExtErrorLink',
                     'artifactId' : 'Transfers.ReceivePurchaseOrderItemsSeachView_link_eventHandlers_render_hideShowSelectLink_extpo_ComplexList',
                     'id' : 'aw4e368a42',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link009.eventHandlers = eventHandlers047;

            var container023 = new Container({
               'resource' : 'poExternalResource',
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_container_1',
               'id' : 'awf0d50a3b',
            });
            view008.addChild( container023 );


            var group008 = new Group({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_group_0',
               'id' : 'awa40e06b7',
            });
            container023.addChild( group008 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_po',
               'id' : 'awdd18db4d',
            });
            group008.addChild( groupitem015 );


            var text033 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : true,
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_po_text',
               'id' : 'aw113b3c26',
               'label' : MessageService.createStaticMessage('Purchase Order'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            groupitem015.addChild( text033 );


            var button018 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'aw7b45733e',
            });
            var eventHandlers048 = [
               {
                     'method' : 'purchaseOrderLookup',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_po_lookup_button_eventHandlers_click',
                     'id' : 'aw2c62dcfa',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button018.eventHandlers = eventHandlers048;
            text033.addChild( button018 );


            var footer006 = new Footer({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_footer',
               'id' : 'awf02cfab0',
            });
            view008.addChild( footer006 );


            var button019 = new Button({
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_Clear_button',
               'id' : 'aw4d79a992',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers049 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_clear_button_eventHandlers_click_Clear',
                     'id' : 'awffd6a691',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button019.eventHandlers = eventHandlers049;
            footer006.addChild( button019 );


            var button020 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_Search_button',
               'id' : 'awe47653b6',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers050 = [
               {
                     'method' : 'searchReceivedPurchaseOrdersandCheckForErrors',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_Search_button_eventHandlers_click_Search',
                     'id' : 'aw91a3c67c',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button020.eventHandlers = eventHandlers050;
            footer006.addChild( button020 );

            var eventHandlers051 = [
               {
                     'method' : 'clearSearchFieldsAndBack',
                     'artifactId' : 'Transfers.ManageReceivedPurchaseOrderSeachView_eventHandlers_back',
                     'id' : 'aw61695363',
                     'event' : 'back',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            view008.eventHandlers = eventHandlers051;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ShipmentItemsListView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'resource' : 'receiptInput',
               'id' : 'Transfers.ShipmentItemsListView',
               'label' : MessageService.createStaticMessage('Incoming Items'),
            });
            ui001.addChild( view009 );

            var requiredResources008 = {
               'domainissuetype' : {
                  'artifactId' : 'Transfers.ShipmentItemsListView_requiredResource_domainissuetype',
                  'id' : 'aw34d15b8d',
               },
               'domainitemtype' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.ShipmentItemsListView_requiredResource_domainitemtype',
                  'id' : 'awac32fe6a',
               },
            };
            view009.addRequiredResources( requiredResources008 );

            var container024 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ShipmentItemsListView_container_0',
               'id' : 'aw5e168fce',
            });
            view009.addChild( container024 );


            var link010 = new Link({
               'artifactId' : 'Transfers.ShipmentItemsListView_link',
               'id' : 'awdcb34381',
               'label' : MessageService.createStaticMessage(''),
            });
            container024.addChild( link010 );

            var eventHandlers052 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ShipmentItemsListView_link_eventHandlers_click',
                     'id' : 'aw7bb07244',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ShipmentItemsListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'awd178a69f',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link010.eventHandlers = eventHandlers052;


            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'ShippedListItem',
               'artifactId' : 'Transfers.ShipmentItemsListView_listItemTemplate',
               'id' : 'aw683780aa',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ShipmentItemsListView_itemnum',
               'id' : 'awa4370da',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.ShipmentItemsListView_description',
               'id' : 'aw695b0e4b',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'location',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.ShipmentItemsListView_location',
               'id' : 'aw383a9c49',
            });
            listItemTemplate001.addChild( listtext003 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'wonum',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.ShipmentItemsListView_refwo',
               'id' : 'awe80e090f',
            });
            listItemTemplate001.addChild( listtext004 );


            var listtext005 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'item35',
               'artifactId' : 'Transfers.ShipmentItemsListView_unit',
               'id' : 'aw36a4d623',
            });
            listItemTemplate001.addChild( listtext005 );


            var text034 = new Text({
               'resourceAttribute' : 'quantitydue',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.ShipmentItemsListView_quantityDue',
               'id' : 'awfb3725cb',
            });
            listItemTemplate001.addChild( text034 );

            var eventHandlers053 = [
               {
                     'method' : 'validateNumericFieldShippedItem',
                     'artifactId' : 'Transfers.ShipmentItemsListView_quantityDue_eventHandler',
                     'id' : 'aw5e9a502f',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            text034.eventHandlers = eventHandlers053;

            var text035 = new Text({
               'resourceAttribute' : 'issueTo',
               'lookup' : 'Transfers.IssueToLookup',
               'editable' : false,
               'layoutInsertAt' : 'item7',
               'artifactId' : 'Transfers.ShipmentItemsListView_issueto',
               'id' : 'aw960be2bc',
               'label' : MessageService.createStaticMessage('Issue To'),
               'lookupAttribute' : 'personid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            listItemTemplate001.addChild( text035 );

            var eventHandlers054 = [
               {
                     'method' : 'hideIssueToLabel',
                     'artifactId' : 'Transfers.ShipmentItemsListView_label_eventHandlers_render_issueto',
                     'id' : 'aw1dd11d26',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text035.eventHandlers = eventHandlers054;

            var text036 = new Text({
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.ShipmentItemsListView_quantityOrdered',
               'id' : 'aw2f5c75ee',
               'label' : MessageService.createStaticMessage('Quantity Ordered'),
            });
            listItemTemplate001.addChild( text036 );


            var listtext006 = new ListText({
               'resourceAttribute' : 'qtyrequested',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'Transfers.ShipmentItemsListView_quantity',
               'id' : 'awf95703b4',
            });
            listItemTemplate001.addChild( listtext006 );



            var list001 = new List({
               'resource' : 'receiptInput',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'Transfers.ShipmentItemsListView_list',
               'hideEmpty' : 'true',
               'id' : 'awaed72268',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view009.addChild( list001 );


            var footer007 = new Footer({
               'artifactId' : 'Transfers.ShipmentItemsListView_footer',
               'id' : 'awab08ad70',
            });
            view009.addChild( footer007 );


            var button021 = new Button({
               'artifactId' : 'Transfers.ShipmentItemsListView_Cancel_button',
               'id' : 'awa6801d0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers055 = [
               {
                     'method' : 'shipmentCancelItem',
                     'artifactId' : 'Transfers.ShipmentItemsListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw14346aff',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button021.eventHandlers = eventHandlers055;
            footer007.addChild( button021 );


            var button022 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ShipmentItemsListView_Receive_button',
               'id' : 'aw677fa023',
               'label' : MessageService.createStaticMessage('Receive'),
            });
            var eventHandlers056 = [
               {
                     'method' : 'shipmentReceiveItem',
                     'artifactId' : 'Transfers.ShipmentItemsListView_button_eventHandlers_click_Receive',
                     'id' : 'awfc38ec03',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button022.eventHandlers = eventHandlers056;
            footer007.addChild( button022 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceivedItemsListView', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'resource' : 'receivedMatrectrans',
               'id' : 'Transfers.ReceivedItemsListView',
               'label' : MessageService.createStaticMessage('Received Items'),
            });
            ui001.addChild( view010 );

            var requiredResources009 = {
               'domainreceiptstatus' : {
                  'artifactId' : 'Transfers.ReceivedItemsListView_requiredResources_domainreceiptstatus',
                  'id' : 'aw2bf32a5c',
               },
            };
            view010.addRequiredResources( requiredResources009 );

            var container025 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceivedItemsListView_container_0',
               'id' : 'aw49f4e4fe',
            });
            view010.addChild( container025 );


            var link011 = new Link({
               'artifactId' : 'Transfers.ReceivedItemsListView_link',
               'id' : 'aw95933293',
               'label' : MessageService.createStaticMessage(''),
            });
            container025.addChild( link011 );

            var eventHandlers057 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ReceivedItemsListView_link_eventHandlers_click',
                     'id' : 'aw9f22d79a',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ReceivedItemsListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'awcb2def2a',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link011.eventHandlers = eventHandlers057;

            var container026 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceivedItemsListView_container_1',
               'id' : 'aw3ef3d468',
            });
            view010.addChild( container026 );


            var link012 = new Link({
               'artifactId' : 'Transfers.ReceivedItemsListView_link_1',
               'id' : 'awbf9f4e94',
               'label' : MessageService.createStaticMessage(''),
            });
            container026.addChild( link012 );

            var eventHandlers058 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.ReceivedItemsListView_link_eventHandlers_click_1',
                     'id' : 'awbe3de99b',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.ReceivedItemsListView_link_eventHandlers_render_hideShowSelectLink_1',
                     'id' : 'aw72faabb2',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link012.eventHandlers = eventHandlers058;


            var sortOptions001 = new SortOptions({
               'artifactId' : 'Transfers.ReceivedItemsListView_list_sortOptions',
               'id' : 'aw855ba933',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'Transfers.ReceivedItemsListView_sortOption_itemnum',
               'id' : 'aw1e7e0a9a',
               'label' : MessageService.createStaticMessage('Item'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'itemnum',
               'artifactId' : 'Transfers.ReceivedItemsListView_itemnum_sortAttribute',
               'id' : 'aw8612f040',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'Transfers.ReceivedItemsListView_sortOption_status',
               'id' : 'awe1fc223',
               'label' : MessageService.createStaticMessage('Status'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'status',
               'artifactId' : 'Transfers.ReceivedItemsListView_status_sortAttribute',
               'id' : 'aw4de17153',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );



            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'ReceivedListItem',
               'artifactId' : 'Transfers.ReceivedItemsListView_listItemTemplate',
               'id' : 'aw8ad4c876',
            });

            var listtext007 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.ReceivedItemsListView_itemnum',
               'id' : 'aw18ab6ff2',
            });
            listItemTemplate002.addChild( listtext007 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.ReceivedItemsListView_description',
               'id' : 'aw7eb9657b',
            });
            listItemTemplate002.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'receiptquantity',
               'layoutInsertAt' : 'r1item3',
               'artifactId' : 'Transfers.ReceivedItemsListView_quantity',
               'id' : 'awccf04351',
            });
            listItemTemplate002.addChild( listtext009 );


            var button023 = new Button({
               'image' : '\/images\/action_inspection_on.png',
               'layoutInsertAt' : 'r1item4',
               'artifactId' : 'Transfers.ReceivedItemsListView_imagesaction_inspect.png_button',
               'id' : 'aw61433318',
            });
            var eventHandlers059 = [
               {
                     'method' : 'inspectItem',
                     'artifactId' : 'Transfers.ReceivedItemsListView_action_inspect_eventhandler_click',
                     'id' : 'awb33841d3',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'showInspectButton',
                     'artifactId' : 'Transfers.ReceivedItemsListView_action_inspect_eventhandler_render',
                     'id' : 'awb0e1f44f',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button023.eventHandlers = eventHandlers059;
            listItemTemplate002.addChild( button023 );


            var button024 = new Button({
               'image' : '\/images\/action_ReceiveRotating_on.png',
               'layoutInsertAt' : 'r1item4',
               'artifactId' : 'Transfers.ReceivedItemsListView_imagesaction_receive_rotating.png_button',
               'id' : 'aw789a4684',
            });
            var eventHandlers060 = [
               {
                     'method' : 'receiveRotatingItem',
                     'artifactId' : 'Transfers.ReceivedItemsListView_action_receive_rotating_eventhandler_click',
                     'id' : 'awa60b2fd4',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'showReceiveRotatingtButton',
                     'artifactId' : 'Transfers.ReceivedItemsListView_action_receive_rotating_eventhandler_render',
                     'id' : 'aw2e905282',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button024.eventHandlers = eventHandlers060;
            listItemTemplate002.addChild( button024 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'issuetype',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.ReceivedItemsListView_issuetype',
               'id' : 'aw9db46440',
            });
            listItemTemplate002.addChild( listtext010 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'status',
               'layoutInsertAt' : 'r3item1',
               'artifactId' : 'Transfers.ReceivedItemsListView_status',
               'id' : 'aw6dcfb566',
            });
            listItemTemplate002.addChild( listtext011 );


            var listtext012 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r3item2',
               'artifactId' : 'Transfers.ReceivedItemsListView_unit',
               'id' : 'aw7f84a731',
            });
            listItemTemplate002.addChild( listtext012 );



            var list002 = new List({
               'resource' : 'receivedMatrectrans',
               'sortOptions' : sortOptions001,
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'Transfers.ReceivedItemsListView_list',
               'hideEmpty' : 'true',
               'id' : 'awe7f7537a',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view010.addChild( list002 );


            var footer008 = new Footer({
               'artifactId' : 'Transfers.ReceivedItemsListView_footer',
               'id' : 'awf4fed529',
            });
            view010.addChild( footer008 );


            var button025 = new Button({
               'artifactId' : 'Transfers.ReceivedItemsListView_Return_button',
               'id' : 'aw89b49914',
               'label' : MessageService.createStaticMessage('Return'),
            });
            var eventHandlers061 = [
               {
                     'method' : 'searchShippedItemsToReturn',
                     'artifactId' : 'Transfers.ReceivedItemsListView_button_eventHandlers_click_Return',
                     'id' : 'aw2e56dd40',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button025.eventHandlers = eventHandlers061;
            footer008.addChild( button025 );


            var button026 = new Button({
               'artifactId' : 'Transfers.ReceivedItemsListView_Void_button',
               'id' : 'aw3205d155',
               'label' : MessageService.createStaticMessage('Void'),
            });
            var eventHandlers062 = [
               {
                     'method' : 'searchShippedItemsToVoid',
                     'artifactId' : 'Transfers.ReceivedItemsListView_button_eventHandlers_click_Void',
                     'id' : 'aw1a713bbb',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button026.eventHandlers = eventHandlers062;
            footer008.addChild( button026 );

            var eventHandlers063 = [
               {
                     'method' : 'transitsBackToShipmentSearchView',
                     'artifactId' : 'Transfers.ReceivedItemsListView_eventHandlers_back',
                     'id' : 'aw83739e87',
                     'event' : 'back',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            view010.eventHandlers = eventHandlers063;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.POMaterialReceiptsListView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'resource' : 'poListComplexMatrectrans',
               'id' : 'Transfers.POMaterialReceiptsListView',
               'label' : MessageService.createStaticMessage('Received Items'),
            });
            ui001.addChild( view011 );

            var requiredResources010 = {
               'domainreceiptstatus' : {
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResources_domainreceiptstatus',
                  'id' : 'aw73f03454',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResources_domainissuetype',
                  'id' : 'aw7f9e6e18',
               },
               'domainitemtype' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResources_domainitemtype',
                  'id' : 'awe7d32c4f',
               },
               'domainpostatus' : {
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResource_domainpostatus',
                  'id' : 'awee5770f',
               },
               'domaincosttype' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResource_domaincosttype',
                  'id' : 'aw1a6d342d',
               },
               'oslcmaxvars' : {
                  'artifactId' : 'Transfers.POMaterialReceiptsListView_requiredResource_oslcmaxvars',
                  'id' : 'aw9bc94d9a',
               },
            };
            view011.addRequiredResources( requiredResources010 );

            var container027 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_container_0',
               'id' : 'aw26d1fdba',
            });
            view011.addChild( container027 );


            var link013 = new Link({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_link',
               'id' : 'awedd0483b',
               'label' : MessageService.createStaticMessage(''),
            });
            container027.addChild( link013 );

            var eventHandlers064 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_click',
                     'id' : 'awa48087a2',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw88079f3b',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link013.eventHandlers = eventHandlers064;

            var container028 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_container_1',
               'id' : 'aw51d6cd2c',
            });
            view011.addChild( container028 );


            var link014 = new Link({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_link_extpo',
               'id' : 'aw93d9b0f0',
               'label' : MessageService.createStaticMessage(''),
            });
            container028.addChild( link014 );

            var eventHandlers065 = [
               {
                     'method' : 'showPOExtErrorPage',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_click_extpo',
                     'id' : 'aw76b3319c',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowPOExtErrorLink',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_render_hideShowSelectLink_extpo',
                     'id' : 'aw5d939b52',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link014.eventHandlers = eventHandlers065;

            var container029 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_container_2',
               'id' : 'awc8df9c96',
            });
            view011.addChild( container029 );


            var link015 = new Link({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_link_extpo_2',
               'id' : 'aw6bf0c30c',
               'label' : MessageService.createStaticMessage(''),
            });
            container029.addChild( link015 );

            var eventHandlers066 = [
               {
                     'method' : 'showPOListComplexExtErrorPage',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_click_extpo_ComplexList',
                     'id' : 'aw257a9e0a',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'hideShowPOListComplexExtErrorLink',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_link_eventHandlers_render_hideShowSelectLink_extpo_ComplexList',
                     'id' : 'awc0c46866',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            link015.eventHandlers = eventHandlers066;


            var sortOptions002 = new SortOptions({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_list_sortOptions',
               'id' : 'awd9dabccc',
            });

            var sortOption003 = new SortOption({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_sortOption_itemnum',
               'id' : 'awe0874f82',
               'label' : MessageService.createStaticMessage('Item'),
            });
            sortOptions002.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'itemnum',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_itemnum_sortAttribute',
               'id' : 'awdd48f38e',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );


            var sortOption004 = new SortOption({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_sortOption_status',
               'id' : 'aw2341acbb',
               'label' : MessageService.createStaticMessage('Status'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'status',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_status_sortAttribute',
               'id' : 'awc94ca2ec',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );



            var listItemTemplate003 = new ListItemTemplate({
               'layout' : 'ReceivedListItem',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_listItemTemplate',
               'id' : 'awd655dd89',
            });

            var listtext013 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_itemnum',
               'id' : 'awf5c5e204',
            });
            listItemTemplate003.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_description',
               'id' : 'aw119c7c3f',
            });
            listItemTemplate003.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'receiptquantity',
               'layoutInsertAt' : 'r1item3',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_quantity',
               'id' : 'aw98c37af5',
            });
            listItemTemplate003.addChild( listtext015 );


            var button027 = new Button({
               'image' : '\/images\/action_inspection_on.png',
               'layoutInsertAt' : 'r1item4',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_imagesaction_inspect.png_button',
               'id' : 'awdb8c638c',
            });
            var eventHandlers067 = [
               {
                     'method' : 'inspectPOItem',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_action_inspect_eventhandler_click',
                     'id' : 'awcd7ee5f6',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'showInspectButton',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_action_inspect_eventhandler_render',
                     'id' : 'awfb9b66ac',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button027.eventHandlers = eventHandlers067;
            listItemTemplate003.addChild( button027 );


            var button028 = new Button({
               'image' : '\/images\/action_ReceiveRotating_on.png',
               'layoutInsertAt' : 'r1item4',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_imagesaction_receive_rotating.png_button',
               'id' : 'aw3bc17901',
            });
            var eventHandlers068 = [
               {
                     'method' : 'receivePORotatingItem',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_action_receive_rotating_eventhandler_click',
                     'id' : 'aw56992dbc',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'showReceiveRotatingtButton',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_action_receive_rotating_eventhandler_render',
                     'id' : 'aw6d0929ea',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button028.eventHandlers = eventHandlers068;
            listItemTemplate003.addChild( button028 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'issuetype',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_issuetype',
               'id' : 'aw4c5b3088',
            });
            listItemTemplate003.addChild( listtext016 );


            var listtext017 = new ListText({
               'resourceAttribute' : 'status',
               'layoutInsertAt' : 'r3item1',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_status',
               'id' : 'awbbc163e6',
            });
            listItemTemplate003.addChild( listtext017 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r3item2',
               'artifactId' : 'Transfers.POMaterialReceiptsListView_unit',
               'id' : 'aw7c7dd99',
            });
            listItemTemplate003.addChild( listtext018 );



            var list003 = new List({
               'resource' : 'poListComplexMatrectrans',
               'sortOptions' : sortOptions002,
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'Transfers.POMaterialReceiptsListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw9fb429d2',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view011.addChild( list003 );


            var footer009 = new Footer({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_footer',
               'id' : 'aw22f003a9',
            });
            view011.addChild( footer009 );


            var button029 = new Button({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_Return_button',
               'id' : 'aw79cad4f0',
               'label' : MessageService.createStaticMessage('Return'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'searchPOItemsToReturn',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_button_eventHandlers_click_Return',
                     'id' : 'aw50107965',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button029.eventHandlers = eventHandlers069;
            footer009.addChild( button029 );


            var button030 = new Button({
               'artifactId' : 'Transfers.POMaterialReceiptsListView_Void_button',
               'id' : 'aw5d20c811',
               'label' : MessageService.createStaticMessage('Void'),
            });
            var eventHandlers070 = [
               {
                     'method' : 'searchPOItemsToVoid',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_button_eventHandlers_click_Void',
                     'id' : 'awa0be6b2f',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button030.eventHandlers = eventHandlers070;
            footer009.addChild( button030 );

            var eventHandlers071 = [
               {
                     'method' : 'transitsBackToManagePOSearchView',
                     'artifactId' : 'Transfers.POMaterialReceiptsListView_eventHandlers_back',
                     'id' : 'aw7d8adb9f',
                     'event' : 'back',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            view011.eventHandlers = eventHandlers071;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.InvreserveListView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'resource' : 'invreserve',
               'id' : 'Transfers.InvreserveListView',
               'label' : MessageService.createStaticMessage('Transfer Reserved Items'),
            });
            ui001.addChild( view012 );

            var requiredResources011 = {
               'oslcmaxvars' : {
                  'artifactId' : 'Transfers.InvreserveListView_requiredResource_oslcmaxvars',
                  'id' : 'awf8a158cb',
               },
               'statusChangeResource' : {
                  'artifactId' : 'Transfers.InvreserveListView_statusChangeResource',
                  'id' : 'awd60878c3',
               },
               'domaininvusestatus' : {
                  'artifactId' : 'Transfers.InvreserveListView_domaininvusestatus',
                  'id' : 'aw21a2b97',
               },
               'domainitemtype' : {
                  'artifactId' : 'Transfers.InvreserveListView_domainitemtype',
                  'id' : 'awf22f8219',
               },
               'domaininvusetype' : {
                  'artifactId' : 'Transfers.InvreserveListView_domaininvusetype',
                  'id' : 'aw7628ec13',
               },
               'splitrotateresource' : {
                  'artifactId' : 'Transfers.InvreserveListView_splitrotateresource',
                  'id' : 'awd6e61dca',
               },
               'transferAdditionalItems' : {
                  'artifactId' : 'Transfers.InvreserveListView_transferAdditionalItems',
                  'id' : 'aw742b45ed',
               },
               'invuse' : {
                  'artifactId' : 'Transfers.InvreserveListView_requiredResource_invuse',
                  'id' : 'aw34789b5f',
                  'related' : {
                     'invuseline' : {
                        'artifactId' : 'Transfers.InvreserveListView_requiredResource_invuseline',
                        'id' : 'aw756efb58',
                     },
                  },
               },
            };
            view012.addRequiredResources( requiredResources011 );


            var sortOptions003 = new SortOptions({
               'artifactId' : 'Transfers.InvreserveListView_invreserve_list_sortOptions',
               'id' : 'aw1eb6f8d1',
            });

            var sortOption005 = new SortOption({
               'artifactId' : 'Transfers.InvreserveListView_sortOption_bin',
               'id' : 'aw1a2270b9',
               'label' : MessageService.createStaticMessage('Bin'),
            });
            sortOptions003.addChild( sortOption005 );


            var sortAttribute005 = new SortAttribute({
               'name' : 'binnum',
               'artifactId' : 'Transfers.InvreserveListView_binnum_sortAttribute',
               'id' : 'aw3badd916',
               'direction' : 'asc',
            });
            sortOption005.addChild( sortAttribute005 );


            var sortOption006 = new SortOption({
               'artifactId' : 'Transfers.InvreserveListView_invreserve_sortOption_Item',
               'id' : 'aw58ba8622',
               'label' : MessageService.createStaticMessage('Item'),
            });
            sortOptions003.addChild( sortOption006 );


            var sortAttribute006 = new SortAttribute({
               'name' : 'item',
               'artifactId' : 'Transfers.InvreserveListView_invreserve_Item_sortAttribute_item',
               'id' : 'aw4ebe22c2',
               'direction' : 'asc',
            });
            sortOption006.addChild( sortAttribute006 );



            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'InvreserveListItem',
               'artifactId' : 'Transfers.InvreserveListView_listItemTemplate',
               'id' : 'awfabc8a37',
            });

            var listtext019 = new ListText({
               'resourceAttribute' : 'item',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.InvreserveListView_itemnum',
               'id' : 'awec099c68',
            });
            listItemTemplate004.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.InvreserveListView_itemdesc',
               'id' : 'awe2e64352',
            });
            listItemTemplate004.addChild( listtext020 );


            var listtext021 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.InvreserveListView_issueunit',
               'id' : 'aw62cb0aae',
            });
            listItemTemplate004.addChild( listtext021 );


            var listtext022 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.InvreserveListView_binnum',
               'id' : 'awf8aef7ee',
            });
            listItemTemplate004.addChild( listtext022 );


            var text037 = new Text({
               'resourceAttribute' : 'localreservedqty',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'item6',
               'artifactId' : 'Transfers.InvreserveListView_localreservedqty',
               'id' : 'awfc6544f1',
            });
            listItemTemplate004.addChild( text037 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'ponum',
               'layoutInsertAt' : 'item7',
               'artifactId' : 'Transfers.InvreserveListView_ponum',
               'id' : 'aw46223f64',
            });
            listItemTemplate004.addChild( listtext023 );



            var list004 = new List({
               'resource' : 'invreserve',
               'sortOptions' : sortOptions003,
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'Transfers.InvreserveListView_list',
               'hideEmpty' : 'true',
               'id' : 'awd2c2a5fb',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view012.addChild( list004 );


            var footer010 = new Footer({
               'artifactId' : 'Transfers.InvreserveListView_footer',
               'id' : 'aw82b81e3f',
            });
            view012.addChild( footer010 );


            var button031 = new Button({
               'artifactId' : 'Transfers.InvreserveListView_Complete_button',
               'id' : 'aw33688e53',
               'label' : MessageService.createStaticMessage('Complete'),
            });
            var eventHandlers072 = [
               {
                     'method' : 'completeReservation',
                     'artifactId' : 'Transfers.InvreserveListView_Complete_button_eventHandlers_click_Complete',
                     'id' : 'aw58c53749',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button031.eventHandlers = eventHandlers072;
            footer010.addChild( button031 );


            var button032 = new Button({
               'artifactId' : 'Transfers.InvreserveListView_Ship_button',
               'id' : 'aw1ae17d98',
               'label' : MessageService.createStaticMessage('Ship'),
            });
            var eventHandlers073 = [
               {
                     'method' : 'shipReservation',
                     'artifactId' : 'Transfers.InvreserveListView_Ship_button_eventHandlers_click_Ship',
                     'id' : 'aw4e9143d1',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button032.eventHandlers = eventHandlers073;
            footer010.addChild( button032 );

            var eventHandlers074 = [
               {
                     'method' : 'transitsBackToTransferPlannedSearchView',
                     'artifactId' : 'Transfers.InvreserveListView_eventHandlers_back',
                     'id' : 'awf2c3b017',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view012.eventHandlers = eventHandlers074;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.AdditionalItemsListView', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'resource' : 'inventory',
               'id' : 'Transfers.AdditionalItemsListView',
               'label' : MessageService.createStaticMessage('Transfer Additional Items'),
            });
            ui001.addChild( view013 );



            var listItemTemplate005 = new ListItemTemplate({
               'layout' : 'InvbalanceListItem',
               'artifactId' : 'Transfers.AdditionalItemsListView_listItemTemplate',
               'id' : 'awc7412964',
            });

            var listtext024 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.AdditionalItemsListView_itemnum',
               'id' : 'awd8b7fb4',
            });
            listItemTemplate005.addChild( listtext024 );


            var listtext025 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.AdditionalItemsListView_itemdesc',
               'id' : 'aw6d625f4e',
            });
            listItemTemplate005.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.AdditionalItemsListView_binnum',
               'id' : 'aw74d533a5',
            });
            listItemTemplate005.addChild( listtext026 );


            var listtext027 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.AdditionalItemsListView_issueunit',
               'id' : 'aw7645d2fd',
            });
            listItemTemplate005.addChild( listtext027 );


            var text038 = new Text({
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.AdditionalItemsListView_tasklabel',
               'id' : 'aw4820aee1',
               'label' : MessageService.createStaticMessage('Quantity Available'),
            });
            listItemTemplate005.addChild( text038 );


            var listtext028 = new ListText({
               'resourceAttribute' : 'avblbalance',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'Transfers.AdditionalItemsListView_avblbalance',
               'id' : 'aw8c9e9018',
            });
            listItemTemplate005.addChild( listtext028 );



            var list005 = new List({
               'resource' : 'inventory',
               'transitionTo' : 'Transfers.AdditionalItemsDetailsView',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'Transfers.AdditionalItemsListView_list',
               'hideEmpty' : 'true',
               'id' : 'awda5ae56',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view013.addChild( list005 );

            var eventHandlers075 = [
               {
                     'method' : 'transitsBackToTransferAdditionalSearchView',
                     'artifactId' : 'Transfers.AdditionalItemsListView_eventHandlers_back',
                     'id' : 'aw2c8a712f',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            view013.eventHandlers = eventHandlers075;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.RotatingItemListView', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'resource' : 'asset',
               'id' : 'Transfers.RotatingItemListView',
               'label' : MessageService.createStaticMessage('Select Rotating Asset'),
            });
            ui001.addChild( view014 );

            var requiredResources012 = {
               'rotatingAssetUsage' : {
                  'artifactId' : 'Transfers.RotatingItemListView_requiredResource_rotatingAssetUsage',
                  'id' : 'aw3f6324c5',
               },
            };
            view014.addRequiredResources( requiredResources012 );


            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'InvbalanceListItem',
               'artifactId' : 'Transfers.RotatingItemListView_listItemTemplate',
               'id' : 'aw2be45882',
            });

            var listtext029 = new ListText({
               'resourceAttribute' : 'assetnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.RotatingItemListView_itemnum',
               'id' : 'awe872228c',
            });
            listItemTemplate006.addChild( listtext029 );


            var listtext030 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.RotatingItemListView_itemdesc',
               'id' : 'aw45851e8d',
            });
            listItemTemplate006.addChild( listtext030 );

            var eventHandlers076 = [
               {
                     'method' : 'selectRotatingAsset',
                     'artifactId' : 'Transfers.RotatingItemListView_eventHandlers_click',
                     'id' : 'aw942cade8',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            listItemTemplate006.eventHandlers = eventHandlers076;


            var list006 = new List({
               'resource' : 'asset',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'Transfers.RotatingItemListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw13b2de37',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view014.addChild( list006 );


            var footer011 = new Footer({
               'artifactId' : 'Transfers.RotatingItemListView_footer',
               'id' : 'aw2220efb9',
            });
            view014.addChild( footer011 );


            var button033 = new Button({
               'artifactId' : 'Transfers.RotatingItemListView_footer_Cancel_button',
               'id' : 'aw2dd4afb8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers077 = [
               {
                     'method' : 'cancelRotatingAssetSelection',
                     'artifactId' : 'Transfers.RotatingItemListView_button_eventHandlers_click_Cancel',
                     'id' : 'awd78b019e',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button033.eventHandlers = eventHandlers077;
            footer011.addChild( button033 );


            var button034 = new Button({
               'artifactId' : 'Transfers.RotatingItemListView_footer_Clear_button',
               'id' : 'aw27f49fb4',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers078 = [
               {
                     'method' : 'clearRotatingAssetSelection',
                     'artifactId' : 'Transfers.RotatingItemListView_button_eventHandlers_click_Clear',
                     'id' : 'awc663d0d2',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button034.eventHandlers = eventHandlers078;
            footer011.addChild( button034 );

            var eventHandlers079 = [
               {
                     'method' : 'transitsBackToTransferAdditionalSearchView',
                     'artifactId' : 'Transfers.RotatingItemListView_eventHandlers_back',
                     'id' : 'aw3ac884a',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            view014.eventHandlers = eventHandlers079;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ShipmentListView', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'resource' : 'shipment',
               'id' : 'Transfers.ShipmentListView',
               'label' : MessageService.createStaticMessage('Select Shipment'),
            });
            ui001.addChild( view015 );

            var requiredResources013 = {
               'transfers' : {
                  'artifactId' : 'Transfers.ShipmentListView_requiredResource_transfers',
                  'id' : 'aw6de0ab97',
               },
            };
            view015.addRequiredResources( requiredResources013 );


            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'ShipmentLookupListItem',
               'artifactId' : 'Transfers.ShipmentListView_listItemTemplate',
               'id' : 'awdea3249d',
            });

            var listtext031 = new ListText({
               'resourceAttribute' : 'shipmentnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ShipmentListView_shipmentnum',
               'id' : 'aw868b3d0b',
            });
            listItemTemplate007.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'shipdate',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.ShipmentListView_shipdate',
               'id' : 'aw67427efe',
            });
            listItemTemplate007.addChild( listtext032 );


            var listtext033 = new ListText({
               'resourceAttribute' : 'expreceiptdate',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.ShipmentListView_expreceiptdate',
               'id' : 'aw7db8ce0a',
            });
            listItemTemplate007.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'receipts',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.ShipmentListView_receipts',
               'id' : 'awd8fe80ff',
            });
            listItemTemplate007.addChild( listtext034 );


            var listtext035 = new ListText({
               'resourceAttribute' : 'fromstoreloc',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.ShipmentListView_fromstoreloc',
               'id' : 'aw3dab102',
            });
            listItemTemplate007.addChild( listtext035 );

            var eventHandlers080 = [
               {
                     'method' : 'selectShipmentSelection',
                     'artifactId' : 'Transfers.ShipmentListView_eventHandlers_click',
                     'id' : 'awe864ab99',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            listItemTemplate007.eventHandlers = eventHandlers080;


            var list007 = new List({
               'resource' : 'shipment',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'Transfers.ShipmentListView_list',
               'hideEmpty' : 'true',
               'id' : 'awed4ada17',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view015.addChild( list007 );


            var footer012 = new Footer({
               'artifactId' : 'Transfers.ShipmentListView_footer',
               'id' : 'awb0c9f1fa',
            });
            view015.addChild( footer012 );


            var button035 = new Button({
               'artifactId' : 'Transfers.ShipmentListView_footer_Cancel_button',
               'id' : 'awaaaa614',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers081 = [
               {
                     'method' : 'cancelShipmentSelection',
                     'artifactId' : 'Transfers.ShipmentListView_button_eventHandlers_click_Cancel',
                     'id' : 'awc2598d4a',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button035.eventHandlers = eventHandlers081;
            footer012.addChild( button035 );


            var button036 = new Button({
               'artifactId' : 'Transfers.ShipmentListView_footer_Clear_button',
               'id' : 'aw5bbc99c5',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers082 = [
               {
                     'method' : 'clearShipmentSelection',
                     'artifactId' : 'Transfers.ShipmentListView_button_eventHandlers_click_Clear',
                     'id' : 'awcec24d8f',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button036.eventHandlers = eventHandlers082;
            footer012.addChild( button036 );

            var eventHandlers083 = [
               {
                     'method' : 'transitsBackToReceiveShippedItemsSeachView',
                     'artifactId' : 'Transfers.ShipmentListView_eventHandlers_back',
                     'id' : 'aw97454e84',
                     'event' : 'back',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            view015.eventHandlers = eventHandlers083;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.FromBinListView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'resource' : 'invbalTemp',
               'id' : 'Transfers.FromBinListView',
               'label' : MessageService.createStaticMessage('Select Bin'),
            });
            ui001.addChild( view016 );

            var requiredResources014 = {
               'invbalTemp' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.FromBinListView_requiredResource_invbalancestemp',
                  'id' : 'awd8cc50e0',
               },
            };
            view016.addRequiredResources( requiredResources014 );


            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'BinLotLookupItem',
               'artifactId' : 'Transfers.FromBinListView_listItemTemplate',
               'id' : 'aw3d9f81cb',
            });

            var listtext036 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.FromBinListView_binnum',
               'id' : 'awa71775a8',
            });
            listItemTemplate008.addChild( listtext036 );


            var listtext037 = new ListText({
               'resourceAttribute' : 'lotnum',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.FromBinListView_lotnum',
               'id' : 'aw2df95683',
            });
            listItemTemplate008.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'curbal',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.FromBinListView_curbal',
               'id' : 'aw83272a0e',
            });
            listItemTemplate008.addChild( listtext038 );

            var eventHandlers084 = [
               {
                     'method' : 'selectFromBinLot',
                     'artifactId' : 'Transfers.FromBinListView_eventHandlers_click',
                     'id' : 'aw7c4acd53',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            listItemTemplate008.eventHandlers = eventHandlers084;


            var list008 = new List({
               'resource' : 'invbalTemp',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'Transfers.FromBinListView_list',
               'hideEmpty' : 'true',
               'id' : 'awbe0f864a',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view016.addChild( list008 );


            var footer013 = new Footer({
               'artifactId' : 'Transfers.FromBinListView_footer',
               'id' : 'awdd019c79',
            });
            view016.addChild( footer013 );


            var button037 = new Button({
               'artifactId' : 'Transfers.FromBinListView_footer_Cancel_button',
               'id' : 'aw718fa3dc',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers085 = [
               {
                     'method' : 'cancelBinLotSelection',
                     'artifactId' : 'Transfers.FromBinListView_button_eventHandlers_click_Cancel',
                     'id' : 'awe47cc071',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button037.eventHandlers = eventHandlers085;
            footer013.addChild( button037 );


            var button038 = new Button({
               'artifactId' : 'Transfers.BinListView_footer_Clear_button',
               'id' : 'aw495ce7dd',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers086 = [
               {
                     'method' : 'clearFromBinLotSelection',
                     'artifactId' : 'Transfers.FromBinListView_button_eventHandlers_click_Clear',
                     'id' : 'aw32bfdabf',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button038.eventHandlers = eventHandlers086;
            footer013.addChild( button038 );

            var eventHandlers087 = [
               {
                     'method' : 'transitsBackToTransferAdditionalSearchView',
                     'artifactId' : 'Transfers.FromBinListView_eventHandlers_back',
                     'id' : 'awdd18000d',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            view016.eventHandlers = eventHandlers087;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ToBinListView', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'resource' : 'invbalTemp',
               'id' : 'Transfers.ToBinListView',
               'label' : MessageService.createStaticMessage('Select Bin'),
            });
            ui001.addChild( view017 );

            var requiredResources015 = {
               'invbalTemp' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.ToBinListView_requiredResource_invbalancestemp',
                  'id' : 'awa604aed7',
               },
            };
            view017.addRequiredResources( requiredResources015 );


            var listItemTemplate009 = new ListItemTemplate({
               'layout' : 'BinLotLookupItem',
               'artifactId' : 'Transfers.ToBinListView_listItemTemplate',
               'id' : 'aw864ee752',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ToBinListView_binnum',
               'id' : 'aw6aff533',
            });
            listItemTemplate009.addChild( listtext039 );


            var listtext040 = new ListText({
               'resourceAttribute' : 'lotnum',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.ToBinListView_lotnum',
               'id' : 'aw8c41d618',
            });
            listItemTemplate009.addChild( listtext040 );


            var listtext041 = new ListText({
               'resourceAttribute' : 'curbal',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.ToBinListView_curbal',
               'id' : 'aw229faa95',
            });
            listItemTemplate009.addChild( listtext041 );

            var eventHandlers088 = [
               {
                     'method' : 'selectToBinLot',
                     'artifactId' : 'Transfers.ToBinListView_eventHandlers_click',
                     'id' : 'aw4cfb60f4',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            listItemTemplate009.eventHandlers = eventHandlers088;


            var list009 = new List({
               'resource' : 'invbalTemp',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'Transfers.ToBinListView_list',
               'hideEmpty' : 'true',
               'id' : 'awab28d9d9',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view017.addChild( list009 );


            var footer014 = new Footer({
               'artifactId' : 'Transfers.ToBinListView_footer',
               'id' : 'aw7cb91ce2',
            });
            view017.addChild( footer014 );


            var button039 = new Button({
               'artifactId' : 'Transfers.ToBinListView_footer_Cancel_button',
               'id' : 'aw390d243a',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers089 = [
               {
                     'method' : 'cancelBinLotSelection',
                     'artifactId' : 'Transfers.ToBinListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw5cbfad80',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button039.eventHandlers = eventHandlers089;
            footer014.addChild( button039 );


            var button040 = new Button({
               'artifactId' : 'Transfers.ToBinListView_footer_Clear_button',
               'id' : 'awff2352a8',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers090 = [
               {
                     'method' : 'clearToBinLotSelection',
                     'artifactId' : 'Transfers.ToBinListView_button_eventHandlers_click_Clear',
                     'id' : 'aw4c772488',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button040.eventHandlers = eventHandlers090;
            footer014.addChild( button040 );

            var eventHandlers091 = [
               {
                     'method' : 'transitsBackToTransferAdditionalSearchView',
                     'artifactId' : 'Transfers.ToBinListView_eventHandlers_back',
                     'id' : 'awd94a4ee2',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            view017.eventHandlers = eventHandlers091;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.RecordsToVoidListView', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'resource' : 'matrectrans',
               'id' : 'Transfers.RecordsToVoidListView',
               'label' : MessageService.createStaticMessage('Void Items'),
            });
            ui001.addChild( view018 );

            var requiredResources016 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.RecordsToVoidListView_requiredResources_errorResource',
                  'id' : 'awbb138779',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.RecordsToVoidListView_requiredResources_domainissuetype',
                  'id' : 'aw7f8afce8',
               },
            };
            view018.addRequiredResources( requiredResources016 );

            var container030 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.RecordsToVoidListView_container_0',
               'id' : 'aw3454aee1',
            });
            view018.addChild( container030 );


            var link016 = new Link({
               'artifactId' : 'Transfers.RecordsToVoidListView_link',
               'id' : 'aw7b66e449',
               'label' : MessageService.createStaticMessage(''),
            });
            container030.addChild( link016 );

            var eventHandlers092 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.RecordsToVoidListView_link_eventHandlers_click',
                     'id' : 'aw24cb4f84',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.RecordsToVoidListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw35b6b3fe',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link016.eventHandlers = eventHandlers092;


            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'VoidShippedItemList',
               'artifactId' : 'Transfers.RecordsToVoidListView_listItemTemplate',
               'id' : 'awdf242aa7',
            });

            var listtext042 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.RecordsToVoidListView_matrec_itemnum',
               'id' : 'aw1ab009f',
            });
            listItemTemplate010.addChild( listtext042 );


            var listtext043 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.RecordsToVoidListView_matrec_description',
               'id' : 'aw90156e78',
            });
            listItemTemplate010.addChild( listtext043 );


            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'voidindicator',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'checkbox1',
               'artifactId' : 'Transfers.RecordsToVoidListView_tovoid_checkbox',
               'id' : 'aw9dc44d47',
            });
            listItemTemplate010.addChild( checkbox001 );


            var listtext044 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.RecordsToVoidListView_matrec_unit',
               'id' : 'awf377fb08',
            });
            listItemTemplate010.addChild( listtext044 );


            var listtext045 = new ListText({
               'resourceAttribute' : 'qtyToBeReturned',
               'layoutInsertAt' : 'r2item2',
               'artifactId' : 'Transfers.RecordsToVoidListView_matrec_quantity',
               'id' : 'awffea5edb',
            });
            listItemTemplate010.addChild( listtext045 );



            var list010 = new List({
               'resource' : 'matrectrans',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'Transfers.RecordsToVoidListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw90285a0',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view018.addChild( list010 );


            var footer015 = new Footer({
               'artifactId' : 'Transfers.RecordsToVoidListView_footer',
               'id' : 'awe09961a8',
            });
            view018.addChild( footer015 );


            var button041 = new Button({
               'artifactId' : 'Transfers.RecordsToVoidListView_footer_Cancel_button',
               'id' : 'aw9c67adc1',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers093 = [
               {
                     'method' : 'cancelReturnVoidSelection',
                     'artifactId' : 'Transfers.RecordsToVoidListView_button_eventHandlers_click_Cancel',
                     'id' : 'awa18c11e8',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button041.eventHandlers = eventHandlers093;
            footer015.addChild( button041 );


            var button042 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.RecordsToVoidListView_footer_Void_button',
               'id' : 'aw97cdef20',
               'label' : MessageService.createStaticMessage('Void'),
            });
            var eventHandlers094 = [
               {
                     'method' : 'voidSelectedItems',
                     'artifactId' : 'Transfers.RecordsToVoidListView_button_eventHandlers_click_Void',
                     'id' : 'aw33122433',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button042.eventHandlers = eventHandlers094;
            footer015.addChild( button042 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.RecordsToReturnListView', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'resource' : 'matrectrans',
               'id' : 'Transfers.RecordsToReturnListView',
               'label' : MessageService.createStaticMessage('Return Items'),
            });
            ui001.addChild( view019 );

            var requiredResources017 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.RecordsToReturnListView_requiredResources_errorResource',
                  'id' : 'awe321ef99',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.RecordsToReturnListView_requiredResources_domainissuetype',
                  'id' : 'aw629dbe5c',
               },
            };
            view019.addRequiredResources( requiredResources017 );

            var container031 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.RecordsToReturnListView_container_0',
               'id' : 'aw744f4854',
            });
            view019.addChild( container031 );


            var link017 = new Link({
               'artifactId' : 'Transfers.RecordsToReturnListView_link',
               'id' : 'aw1f097068',
               'label' : MessageService.createStaticMessage(''),
            });
            container031.addChild( link017 );

            var eventHandlers095 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.RecordsToReturnListView_link_eventHandlers_click',
                     'id' : 'aw2a32d688',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.RecordsToReturnListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw6fb46220',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link017.eventHandlers = eventHandlers095;


            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'VoidShippedItemList',
               'artifactId' : 'Transfers.RecordsToReturnListView_listItemTemplate',
               'id' : 'aw141db0b3',
            });

            var listtext046 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.RecordsToReturnListView_matrec_itemnum',
               'id' : 'aw407fa1a2',
            });
            listItemTemplate011.addChild( listtext046 );


            var listtext047 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.RecordsToReturnListView_matrec_description',
               'id' : 'awae61084e',
            });
            listItemTemplate011.addChild( listtext047 );


            var checkbox002 = new CheckBox({
               'resourceAttribute' : 'returnindicator',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'checkbox1',
               'artifactId' : 'Transfers.RecordsToReturnListView_tovoid_checkbox',
               'id' : 'awc5edd5f7',
            });
            listItemTemplate011.addChild( checkbox002 );


            var listtext048 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.RecordsToReturnListView_matrec_unit',
               'id' : 'awb36c1dbd',
            });
            listItemTemplate011.addChild( listtext048 );


            var text039 = new Text({
               'resourceAttribute' : 'qtyToBeReturned',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'r2item2',
               'artifactId' : 'Transfers.RecordsToReturnListView_matrec_quantity',
               'id' : 'awa7c3c66b',
            });
            listItemTemplate011.addChild( text039 );

            var eventHandlers096 = [
               {
                     'method' : 'validateQuantityForReturn',
                     'artifactId' : 'Transfers.RecordsToReturnListView_qnty_eventHandlers_validate',
                     'id' : 'aw2e0cb8ab',
                     'event' : 'validate',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            text039.eventHandlers = eventHandlers096;


            var list011 = new List({
               'resource' : 'matrectrans',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'Transfers.RecordsToReturnListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw6d6d1181',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view019.addChild( list011 );


            var footer016 = new Footer({
               'artifactId' : 'Transfers.RecordsToReturnListView_footer',
               'id' : 'aw9b644779',
            });
            view019.addChild( footer016 );


            var button043 = new Button({
               'artifactId' : 'Transfers.RecordsToReturnListView_footer_Cancel_button',
               'id' : 'awb1aac6ad',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers097 = [
               {
                     'method' : 'cancelReturnVoidSelection',
                     'artifactId' : 'Transfers.RecordsToReturnListView_button_eventHandlers_click_Cancel',
                     'id' : 'awbc9b535c',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button043.eventHandlers = eventHandlers097;
            footer016.addChild( button043 );


            var button044 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.RecordsToReturnListView_footer_Void_button',
               'id' : 'awa9b98916',
               'label' : MessageService.createStaticMessage('Return'),
            });
            var eventHandlers098 = [
               {
                     'method' : 'returnSelectedItems',
                     'artifactId' : 'Transfers.RecordsToReturnListView_button_eventHandlers_click_Void',
                     'id' : 'aw6b204cd3',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button044.eventHandlers = eventHandlers098;
            footer016.addChild( button044 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.PurchaseOrderItemsToVoidListView', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'resource' : 'poComplexMatrectrans',
               'id' : 'Transfers.PurchaseOrderItemsToVoidListView',
               'label' : MessageService.createStaticMessage('Void Items'),
            });
            ui001.addChild( view020 );

            var requiredResources018 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_requiredResources_errorResource',
                  'id' : 'aw83b96563',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_requiredResources_domainissuetype',
                  'id' : 'aw81a3bdcd',
               },
               'domainreceiptstatus' : {
                  'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_requiredResources_domainreceiptstatus',
                  'id' : 'awdd586133',
               },
            };
            view020.addRequiredResources( requiredResources018 );

            var container032 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_container_0',
               'id' : 'awb59cd17c',
            });
            view020.addChild( container032 );


            var link018 = new Link({
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_link',
               'id' : 'aw70d062a2',
               'label' : MessageService.createStaticMessage(''),
            });
            container032.addChild( link018 );

            var eventHandlers099 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_link_eventHandlers_click',
                     'id' : 'aw33f91db8',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw77b6ce75',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link018.eventHandlers = eventHandlers099;


            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'VoidShippedItemList',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_listItemTemplate',
               'id' : 'aw78ca173e',
            });

            var listtext049 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_matrec_itemnum',
               'id' : 'awc9780406',
            });
            listItemTemplate012.addChild( listtext049 );


            var listtext050 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_matrec_description',
               'id' : 'aw68feb4d4',
            });
            listItemTemplate012.addChild( listtext050 );


            var checkbox003 = new CheckBox({
               'resourceAttribute' : 'voidindicator',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'checkbox1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_tovoid_checkbox',
               'id' : 'aw14dfb5a3',
            });
            listItemTemplate012.addChild( checkbox003 );


            var listtext051 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_matrec_unit',
               'id' : 'aw72bf8495',
            });
            listItemTemplate012.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'qtyToBeReturned',
               'layoutInsertAt' : 'r2item2',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_matrec_quantity',
               'id' : 'aw76f1a63f',
            });
            listItemTemplate012.addChild( listtext052 );


            var text040 = new Text({
               'resourceAttribute' : 'issueTo',
               'lookup' : 'Transfers.IssueToLookup',
               'editable' : true,
               'layoutInsertAt' : 'r3item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_issueto',
               'id' : 'awf4243fa8',
               'label' : MessageService.createStaticMessage('Issue To'),
               'lookupAttribute' : 'personid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            listItemTemplate012.addChild( text040 );

            var eventHandlers100 = [
               {
                     'method' : 'hideIssueToLabel',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_label_eventHandlers_render_issueto',
                     'id' : 'awd54ddd9c',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text040.eventHandlers = eventHandlers100;


            var list012 = new List({
               'resource' : 'poComplexMatrectrans',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw2b4034b',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view020.addChild( list012 );


            var footer017 = new Footer({
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_footer',
               'id' : 'aw59c8662c',
            });
            view020.addChild( footer017 );


            var button045 = new Button({
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_footer_Cancel_button',
               'id' : 'awf8d39d05',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers101 = [
               {
                     'method' : 'cancelReturnVoidSelection',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw5fa550cd',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button045.eventHandlers = eventHandlers101;
            footer017.addChild( button045 );


            var button046 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_footer_Void_button',
               'id' : 'aw6f26358c',
               'label' : MessageService.createStaticMessage('Void'),
            });
            var eventHandlers102 = [
               {
                     'method' : 'voidSelectedItems',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToVoidListView_button_eventHandlers_click_Void',
                     'id' : 'awbb8c629',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button046.eventHandlers = eventHandlers102;
            footer017.addChild( button046 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.PurchaseOrderItemsToReturnListView', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'resource' : 'poComplexMatrectrans',
               'id' : 'Transfers.PurchaseOrderItemsToReturnListView',
               'label' : MessageService.createStaticMessage('Return Items'),
            });
            ui001.addChild( view021 );

            var requiredResources019 = {
               'errorResource' : {
                  'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_requiredResources_errorResource',
                  'id' : 'aw1d08aebc',
               },
               'domainissuetype' : {
                  'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_requiredResources_domainissuetype',
                  'id' : 'aw8bb5e194',
               },
            };
            view021.addRequiredResources( requiredResources019 );

            var container033 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_container_0',
               'id' : 'aw701a5166',
            });
            view021.addChild( container033 );


            var link019 = new Link({
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_link',
               'id' : 'awa65877ec',
               'label' : MessageService.createStaticMessage(''),
            });
            container033.addChild( link019 );

            var eventHandlers103 = [
               {
                     'method' : 'showVoidReturnErrorPage',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_link_eventHandlers_click',
                     'id' : 'awdca4889d',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLinkVoidReturn',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw99776c21',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link019.eventHandlers = eventHandlers103;


            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'ReturnExternalItemList',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_listItemTemplate',
               'id' : 'awecf66a1f',
            });

            var listtext053 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'r1item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_itemnum',
               'id' : 'awe7919c3b',
            });
            listItemTemplate013.addChild( listtext053 );


            var listtext054 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'r1item2',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_description',
               'id' : 'awcad5388a',
            });
            listItemTemplate013.addChild( listtext054 );


            var checkbox004 = new CheckBox({
               'resourceAttribute' : 'returnindicator',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'checkbox1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_tovoid_checkbox',
               'id' : 'aw4c99102a',
            });
            listItemTemplate013.addChild( checkbox004 );


            var listtext055 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'r2item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_unit',
               'id' : 'awb739048f',
            });
            listItemTemplate013.addChild( listtext055 );


            var text041 = new Text({
               'resourceAttribute' : 'qtyToBeReturned',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'r2item2',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_quantity',
               'id' : 'aw2eb703b6',
            });
            listItemTemplate013.addChild( text041 );

            var eventHandlers104 = [
               {
                     'method' : 'validateQuantityForReturn',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_qnty_eventHandlers_validate',
                     'id' : 'aw9b59f6d',
                     'event' : 'validate',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               },
               {
                     'method' : 'showHideNonRotatingAssetAttributes',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_qnty_eventHandlers_render',
                     'id' : 'aw5122c808',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text041.eventHandlers = eventHandlers104;

            var text042 = new Text({
               'resourceAttribute' : 'qtyToBeReturned',
               'editable' : false,
               'layoutInsertAt' : 'r2item2',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_rotating_quantity',
               'id' : 'awc9f79fda',
            });
            listItemTemplate013.addChild( text042 );

            var eventHandlers105 = [
               {
                     'method' : 'showHideRotatingAssetAttributes',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_matrec_rotating_quantity_eventHandlers_render',
                     'id' : 'aw3c6b04d2',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text042.eventHandlers = eventHandlers105;

            var text043 = new Text({
               'resourceAttribute' : 'rotassetnum',
               'editable' : false,
               'layoutInsertAt' : 'r3item1',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_rotatingasset',
               'id' : 'awd15824a5',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
            });
            listItemTemplate013.addChild( text043 );

            var eventHandlers106 = [
               {
                     'method' : 'showHideRotatingAssetAttributes',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_rotatingasset_eventHandlers_render',
                     'id' : 'aw3df21bdd',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text043.eventHandlers = eventHandlers106;


            var list013 = new List({
               'resource' : 'poComplexMatrectrans',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_list',
               'hideEmpty' : 'true',
               'id' : 'awd43c1605',
               'label' : MessageService.createStaticMessage('Items'),
               'displayPageSize' : '20',
            });
            view021.addChild( list013 );


            var footer018 = new Footer({
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_footer',
               'id' : 'aw5aef36c4',
            });
            view021.addChild( footer018 );


            var button047 = new Button({
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_footer_Cancel_button',
               'id' : 'aw38e580ff',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers107 = [
               {
                     'method' : 'cancelReturnVoidSelection',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw55b30c94',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button047.eventHandlers = eventHandlers107;
            footer018.addChild( button047 );


            var button048 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_footer_Void_button',
               'id' : 'awcd0db9d2',
               'label' : MessageService.createStaticMessage('Return'),
            });
            var eventHandlers108 = [
               {
                     'method' : 'returnSelectedItems',
                     'artifactId' : 'Transfers.PurchaseOrderItemsToReturnListView_button_eventHandlers_click_Void',
                     'id' : 'aw95090df6',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button048.eventHandlers = eventHandlers108;
            footer018.addChild( button048 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.SplitQtyRotatingAssetView', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'resource' : 'splitrotateresource',
               'id' : 'Transfers.SplitQtyRotatingAssetView',
               'label' : MessageService.createStaticMessage('Split Usage Quantity'),
            });
            ui001.addChild( view022 );

            var requiredResources020 = {
               'additionalasset' : {
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_additionalasset',
                  'id' : 'awedbe8fa0',
               },
               'rotatingAssets' : {
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_rotatingAssets',
                  'id' : 'awa7a77917',
               },
               'splitrotateresource' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_invreserve',
                  'id' : 'awc4897948',
               },
               'splitqtyacrossbins' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_splitqtyacrossbins',
                  'id' : 'awfcd09639',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'awd5a4d359',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'Transfers.SplitQtyRotatingAssetView_requiredResource_originalData',
                  'id' : 'aw12a9022a',
               },
            };
            view022.addRequiredResources( requiredResources020 );


            var listItemTemplate014 = new ListItemTemplate({
               'layout' : 'SplitQtyRotateList',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_listItemTemplate',
               'id' : 'aw63b57adb',
            });

            var listtext056 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_itemnum',
               'id' : 'aw7f5c3ca',
            });
            listItemTemplate014.addChild( listtext056 );


            var listtext057 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_itemdesc',
               'id' : 'awdad57dc9',
            });
            listItemTemplate014.addChild( listtext057 );


            var listtext058 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_issueunit',
               'id' : 'aw52e735c',
            });
            listItemTemplate014.addChild( listtext058 );


            var listtext059 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_binnum',
               'id' : 'awac76a2b',
            });
            listItemTemplate014.addChild( listtext059 );


            var listtext060 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_qty',
               'id' : 'awf6c175fa',
            });
            listItemTemplate014.addChild( listtext060 );


            var button049 = new Button({
               'image' : '\/images\/action_split_off.png',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_imagesaction_action_split_off.png_button',
               'id' : 'aw142f6bed',
            });
            var eventHandlers109 = [
               {
                     'method' : 'autoSplit',
                     'artifactId' : 'Transfers.SplitQtyRotatingAssetView_eventhandler_click',
                     'id' : 'awf4b89a56',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'showSplitButton',
                     'artifactId' : 'Transfers.SplitQtyRotatingAssetView_eventhandler_render',
                     'id' : 'aw2d74033b',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button049.eventHandlers = eventHandlers109;
            listItemTemplate014.addChild( button049 );


            var button050 = new Button({
               'image' : '\/images\/action_rotatingAsset_off.png',
               'cssClass' : 'lookupimage',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_imagesaction_rotate.png_button',
               'id' : 'awcd8c11a6',
            });
            var eventHandlers110 = [
               {
                     'method' : 'autoSplit',
                     'artifactId' : 'Transfers.SplitQtyRotatingAssetView_eventhandler_click_rotate',
                     'id' : 'aw1bf19e02',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'showRotateButton',
                     'artifactId' : 'Transfers.SplitQtyRotatingAssetView_eventhandler_render_rotate',
                     'id' : 'awbc400765',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button050.eventHandlers = eventHandlers110;
            listItemTemplate014.addChild( button050 );



            var list014 = new List({
               'resource' : 'splitrotateresource',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'Transfers.SplitQtyRotatingAssetView_list',
               'hideEmpty' : 'true',
               'id' : 'aw9496d734',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view022.addChild( list014 );

            var eventHandlers111 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyRotView',
                     'artifactId' : 'Transfers.SplitQtyRotatingAssetView_backbutton',
                     'id' : 'awb435ab3c',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view022.eventHandlers = eventHandlers111;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.SplitQtyAcrossBinsView', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'resource' : 'splitqtyacrossbins',
               'id' : 'Transfers.SplitQtyAcrossBinsView',
               'label' : MessageService.createDynamicMessage('{0}', 'application.handlers.TransfersHandler', 'resolveViewLabel'),
               'resolverFunction' : 'resolveViewLabel',
               'resolverClass' : 'application.handlers.TransfersHandler',
            });
            ui001.addChild( view023 );

            var requiredResources021 = {
               'rotatingAssetUsage' : {
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_rotatingAssetUsage',
                  'id' : 'aw1373bc81',
               },
               'additionalasset' : {
                  'artifactId' : 'Transferss.SplitQtyAcrossBinsView_requiredResource_additionalasset',
                  'id' : 'awf8a3a9e2',
               },
               'splitqtyacrossbins' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_splitqtyacrossbins',
                  'id' : 'aw9887c94e',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'aw3fc4f451',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_originalDataSplitBinQty',
                  'id' : 'awb5580dfd',
               },
               'domainAssetstatus' : {
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_domainAssetstatus',
                  'id' : 'awcae0010d',
               },
               'invuse' : {
                  'reload' : false,
                  'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_invuse',
                  'id' : 'awa3e92b9e',
                  'related' : {
                     'npinvuselinesplit' : {
                        'reload' : false,
                        'artifactId' : 'Transfers.SplitQtyAcrossBinsView_requiredResource_npinvuselinesplit',
                        'id' : 'awfaf6033f',
                     },
                  },
               },
            };
            view023.addRequiredResources( requiredResources021 );


            var listItemTemplate015 = new ListItemTemplate({
               'layout' : 'SplitQtyRotateList',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_listItemTemplate',
               'id' : 'aw74b56b46',
            });

            var listtext061 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_itemnum',
               'id' : 'aw902a58ad',
            });
            listItemTemplate015.addChild( listtext061 );


            var listtext062 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_itemdesc',
               'id' : 'aw99456a9',
            });
            listItemTemplate015.addChild( listtext062 );


            var listtext063 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_qty',
               'id' : 'aw6a8b707e',
            });
            listItemTemplate015.addChild( listtext063 );


            var listtext064 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_issueunit',
               'id' : 'aw484f532f',
            });
            listItemTemplate015.addChild( listtext064 );


            var listtext065 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_binnum',
               'id' : 'aw7858520',
            });
            listItemTemplate015.addChild( listtext065 );


            var text044 = new Text({
               'resourceAttribute' : 'rotassetnum',
               'editable' : false,
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_rotasset',
               'id' : 'awac80f2b',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
               'placeHolder' : MessageService.createStaticMessage('Select from list'),
            });
            listItemTemplate015.addChild( text044 );

            var eventHandlers112 = [
               {
                     'method' : 'hideRotatingField',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_hiderotating',
                     'id' : 'aw4da85122',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               },
               {
                     'method' : 'rotateLookup',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_eventhandler_clickddd',
                     'id' : 'aw1944ed19',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text044.eventHandlers = eventHandlers112;

            var button051 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'awf44f680b',
            });
            var eventHandlers113 = [
               {
                     'method' : 'rotateLookup',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_eventhandler_click',
                     'id' : 'aw5ae759f3',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button051.eventHandlers = eventHandlers113;
            text044.addChild( button051 );



            var list015 = new List({
               'resource' : 'splitqtyacrossbins',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_list',
               'hideEmpty' : 'true',
               'id' : 'aw7edfda08',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view023.addChild( list015 );


            var footer019 = new Footer({
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_footer',
               'id' : 'aw7d936cf1',
            });
            view023.addChild( footer019 );


            var button052 = new Button({
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_Clear_button',
               'id' : 'aw7bc774f4',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers114 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyAcrossBinsView',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw3962d095',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button052.eventHandlers = eventHandlers114;
            footer019.addChild( button052 );


            var button053 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.SplitQtyAcrossBinsView_Search_button',
               'id' : 'aw40912906',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers115 = [
               {
                     'method' : 'doneSplitQtyAcrossBins',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_Search_button_eventHandlers_click_Search',
                     'id' : 'awfe260ca0',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button053.eventHandlers = eventHandlers115;
            footer019.addChild( button053 );

            var eventHandlers116 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyAcrossBinsView',
                     'artifactId' : 'Transfers.SplitQtyAcrossBinsView_backbutton',
                     'id' : 'aw7d74ea9a',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view023.eventHandlers = eventHandlers116;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.AdditionalItemsDetailsView', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'resource' : 'inventory',
               'id' : 'Transfers.AdditionalItemsDetailsView',
               'label' : MessageService.createStaticMessage('Transfer Details'),
            });
            ui001.addChild( view024 );

            var requiredResources022 = {
               'oslcmaxvars' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_oslcmaxvars',
                  'id' : 'aw32a87e93',
               },
               'transferAdditionalItems' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_transferAdditionalItems',
                  'id' : 'aw4443f832',
               },
               'additionalperson' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_person',
                  'id' : 'awf2e1c319',
               },
               'invuse' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_invuse',
                  'id' : 'aw5ba2ce6b',
               },
               'splitrotateresource' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_splitrotateresource',
                  'id' : 'awbd913c02',
               },
               'domaininvusestatus' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_domaininvusestatus',
                  'id' : 'aw1e6a17c7',
               },
               'domaininvusetype' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_domaininvusetype',
                  'id' : 'aw477bdf42',
               },
               'splitqtyacrossbins' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_splitqtyacrossbins',
                  'id' : 'aw59bfc27a',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_originalDataSplitBinQty',
                  'id' : 'awce61c69d',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'aw568ffff7',
               },
               'statusChangeResource' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_statusChangeResource',
                  'id' : 'aw43dc4560',
               },
               'rotatingAssets' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_rotatingAssets',
                  'id' : 'aw29b9cf2b',
               },
               'additionalasset' : {
                  'artifactId' : 'Transfers.AdditionalItemsDetailsView_requiredResource_additionalasset',
                  'id' : 'awc25fed91',
               },
            };
            view024.addRequiredResources( requiredResources022 );

            var container034 = new Container({
               'resource' : 'inventory',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_container_1',
               'id' : 'aw3ffeed1d',
            });
            view024.addChild( container034 );


            var text045 = new Text({
               'cssClass' : 'bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_text_ItemDetails',
               'id' : 'awabbd7d5f',
               'value' : MessageService.createStaticMessage('Item Details'),
            });
            container034.addChild( text045 );


            var group009 = new Group({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_group_1',
               'id' : 'aw6d63ff12',
            });
            container034.addChild( group009 );


            var groupitem016 = new GroupItem({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_itemnum_groupitem_1',
               'id' : 'aw434794f9',
            });
            group009.addChild( groupitem016 );


            var text046 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_itemnum',
               'id' : 'aw2f165f0e',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem016.addChild( text046 );


            var text047 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_itemdesc',
               'id' : 'aw46f498fc',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem016.addChild( text047 );


            var text048 = new Text({
               'resourceAttribute' : 'issueunit',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_unit',
               'id' : 'awa1eefc84',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
            });
            groupitem016.addChild( text048 );


            var text049 = new Text({
               'resourceAttribute' : 'avblbalance',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_qty',
               'id' : 'aw9a96c890',
               'label' : MessageService.createStaticMessage('Quantity Available'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem016.addChild( text049 );


            var container035 = new Container({
               'resource' : 'transferAdditionalItems',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_container_2',
               'id' : 'awa6f7bca7',
            });
            view024.addChild( container035 );


            var text050 = new Text({
               'cssClass' : 'bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_text_FromInventoryDetails',
               'id' : 'aw5be304c3',
               'value' : MessageService.createStaticMessage('Inventory and Bin Details'),
            });
            container035.addChild( text050 );


            var group010 = new Group({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_group_2',
               'id' : 'awf46aaea8',
            });
            container035.addChild( group010 );


            var groupitem017 = new GroupItem({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_itemnum_groupitem_2',
               'id' : 'awda4ec543',
            });
            group010.addChild( groupitem017 );


            var text051 = new Text({
               'resourceAttribute' : 'siteid',
               'resource' : 'inventory',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_fromsite',
               'id' : 'aw3f6939bc',
               'label' : MessageService.createStaticMessage('From Site'),
            });
            groupitem017.addChild( text051 );


            var text052 = new Text({
               'resourceAttribute' : 'location',
               'resource' : 'inventory',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_location',
               'id' : 'awb9a1dfab',
               'label' : MessageService.createStaticMessage('From storeroom'),
            });
            groupitem017.addChild( text052 );


            var text053 = new Text({
               'resourceAttribute' : 'frombin',
               'resource' : 'transferAdditionalItems',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_bin',
               'id' : 'awf8493c62',
               'label' : MessageService.createStaticMessage('From Bin'),
            });
            groupitem017.addChild( text053 );

            var eventHandlers117 = [
               {
                     'method' : 'fromBinLotLookup',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_groupitem_0_eventhandler_clickbinlot',
                     'id' : 'awa7f143d7',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text053.eventHandlers = eventHandlers117;

            var button054 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'cssClass' : 'lookupIcon',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_groupitem_2_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'aw60ce2d55',
            });
            var eventHandlers118 = [
               {
                     'method' : 'fromBinLotLookup',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_groupitem_0_eventhandler_click',
                     'id' : 'aw28a7dcd5',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button054.eventHandlers = eventHandlers118;
            text053.addChild( button054 );


            var container036 = new Container({
               'resource' : 'transferAdditionalItems',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_container_3',
               'id' : 'awd1f08c31',
            });
            view024.addChild( container036 );


            var text054 = new Text({
               'cssClass' : 'bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_text_TransferDetails',
               'id' : 'aw5591bbeb',
               'value' : MessageService.createStaticMessage('Transfer Details'),
            });
            container036.addChild( text054 );


            var group011 = new Group({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_group_3',
               'id' : 'aw836d9e3e',
            });
            container036.addChild( group011 );


            var groupitem018 = new GroupItem({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_transfer_groupitem_3',
               'id' : 'aw2081d810',
            });
            group011.addChild( groupitem018 );


            var text055 = new Text({
               'resourceAttribute' : 'tositeid',
               'lookup' : 'Transfers.SiteLookup',
               'editable' : true,
               'labelCss' : 'editableLabeyesl',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_tositeid',
               'id' : 'aw9acc0b93',
               'label' : MessageService.createStaticMessage('To Site'),
               'lookupAttribute' : 'Siteid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem018.addChild( text055 );

            var eventHandlers119 = [
               {
                     'method' : 'validateToSite',
                     'artifactId' : 'Transfers.ToSiteSelectionView_groupitem_4_tosite_eventHandlers_validate_tosite',
                     'id' : 'awc992676e',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text055.eventHandlers = eventHandlers119;

            var text056 = new Text({
               'resourceAttribute' : 'tostoreroom',
               'lookup' : 'Transfers.TransferDetails_ToStoreroomLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_tostoreloc',
               'id' : 'aw43a4652c',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem018.addChild( text056 );

            var eventHandlers120 = [
               {
                     'method' : 'validateToStoreroom',
                     'artifactId' : 'Transfers.ToStoreroomSelectionView_groupitem_4_tostoreroom_eventHandlers_validate_tostoreroom',
                     'id' : 'aw3433a1d5',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            text056.eventHandlers = eventHandlers120;

            var text057 = new Text({
               'resourceAttribute' : 'tobin',
               'editable' : true,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_tobin',
               'id' : 'awe499c73f',
               'label' : MessageService.createStaticMessage('To Bin'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem018.addChild( text057 );


            var button055 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'cssClass' : 'lookupIcon',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'awb9863098',
            });
            var eventHandlers121 = [
               {
                     'method' : 'toBinLotLookup',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_eventhandler_click',
                     'id' : 'aw1777690e',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button055.eventHandlers = eventHandlers121;
            text057.addChild( button055 );


            var container037 = new Container({
               'resource' : 'transferAdditionalItems',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_container_4',
               'id' : 'aw4f941992',
            });
            view024.addChild( container037 );


            var text058 = new Text({
               'cssClass' : 'bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_text_QuantityDetails',
               'id' : 'aw3d3aabca',
               'value' : MessageService.createStaticMessage('Quantity Details'),
            });
            container037.addChild( text058 );


            var group012 = new Group({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_group_4',
               'id' : 'aw1d090b9d',
            });
            container037.addChild( group012 );


            var groupitem019 = new GroupItem({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_transfer_groupitem_4',
               'id' : 'awbee54db3',
            });
            group012.addChild( groupitem019 );


            var text059 = new Text({
               'resourceAttribute' : 'issueQty',
               'editable' : true,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_isseQty',
               'id' : 'aw34f162ea',
               'label' : MessageService.createStaticMessage('Quantity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem019.addChild( text059 );

            var eventHandlers122 = [
               {
                     'method' : 'validateQty',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_isseQty_eventHandlers_0',
                     'id' : 'awc34ef406',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            text059.eventHandlers = eventHandlers122;

            var text060 = new Text({
               'resourceAttribute' : 'conversion',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_Conversion',
               'id' : 'aw15395ccd',
               'label' : MessageService.createStaticMessage('Conversion'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem019.addChild( text060 );

            var eventHandlers123 = [
               {
                     'method' : 'validateConversion',
                     'artifactId' : 'Transfers.ConversionSelectionView_groupitem_9_conversion_eventHandlers_validate_conversion',
                     'id' : 'awe4179663',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               },
               {
                     'method' : 'hideConversion',
                     'artifactId' : 'Transfers.ConversionSelectionView_groupitem_9_conversion_eventHandlers_render_conversion',
                     'id' : 'aw236c1378',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            text060.eventHandlers = eventHandlers123;

            var container038 = new Container({
               'resource' : 'transferAdditionalItems',
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_container_5',
               'id' : 'aw38932904',
            });
            view024.addChild( container038 );


            var text061 = new Text({
               'cssClass' : 'bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_text_ChargeDetails',
               'id' : 'awf41e6aa3',
               'value' : MessageService.createStaticMessage('Charge Details'),
            });
            container038.addChild( text061 );


            var group013 = new Group({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_group_5',
               'id' : 'aw6a0e3b0b',
            });
            container038.addChild( group013 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_transfer_groupitem_5',
               'id' : 'awc9e27d25',
            });
            group013.addChild( groupitem020 );


            var text062 = new Text({
               'resourceAttribute' : 'glcreditacct',
               'editable' : true,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_glcreditacct',
               'id' : 'awb81b5d3b',
               'label' : MessageService.createStaticMessage('GL Credit Account'),
            });
            groupitem020.addChild( text062 );


            var text063 = new Text({
               'resourceAttribute' : 'gldebitacct',
               'editable' : true,
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_gldebitacct',
               'id' : 'awbd5499f9',
               'label' : MessageService.createStaticMessage('GL Debit Account'),
            });
            groupitem020.addChild( text063 );


            var footer020 = new Footer({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_footer',
               'id' : 'aw91f5d9c2',
            });
            view024.addChild( footer020 );


            var button056 = new Button({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_Complete_button',
               'id' : 'aw842c803c',
               'label' : MessageService.createStaticMessage('Complete'),
            });
            var eventHandlers124 = [
               {
                     'method' : 'completeAvailableItems',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_Complete_button_eventHandlers_click',
                     'id' : 'awf2d5d0dc',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            button056.eventHandlers = eventHandlers124;
            footer020.addChild( button056 );


            var button057 = new Button({
               'artifactId' : 'Transfers.AdditionalItemsDetailsView_Ship_button',
               'id' : 'aw587260ca',
               'label' : MessageService.createStaticMessage('Ship'),
            });
            var eventHandlers125 = [
               {
                     'method' : 'shipAvailableItems',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_Ship_button_eventHandlers_click',
                     'id' : 'awcbd875b0',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            button057.eventHandlers = eventHandlers125;
            footer020.addChild( button057 );

            var eventHandlers126 = [
               {
                     'method' : 'setTransferData',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_groupitem_0_eventHandlers_initialize_setStorelocSite',
                     'id' : 'aw90d9e674',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               },
               {
                     'method' : 'transitsBackToTransferAdditionalSearchView',
                     'artifactId' : 'Transfers.AdditionalItemsDetailsView_groupitem_0_eventHandlers_back',
                     'id' : 'aw61aa2161',
                     'event' : 'back',
                     'class' : 'application.handlers.TransfersAvailableItemsHandler',
               }
            ];
            view024.eventHandlers = eventHandlers126;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'resource' : 'invuse',
               'id' : 'Transfers.ErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view025 );


            var container039 = new Container({
               'resource' : 'invuse',
               'artifactId' : 'Transfers.ErrorDetailPage_container_2',
               'id' : 'awee8a3638',
            });
            view025.addChild( container039 );


            var group014 = new Group({
               'artifactId' : 'Transfers.ErrorDetailPage_group_2',
               'id' : 'aw1d14b63c',
            });
            container039.addChild( group014 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'Transfers.ErrorDetailPage_issue_groupitem_2',
               'id' : 'awf9cd49c0',
            });
            group014.addChild( groupitem021 );


            var text064 = new Text({
               'resourceAttribute' : 'invusenum',
               'editable' : false,
               'artifactId' : 'Transfers.ErrorDetailPage_invuse',
               'id' : 'awf3e6a193',
               'label' : MessageService.createStaticMessage('Invuse'),
            });
            groupitem021.addChild( text064 );


            var text065 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'Transfers.ErrorDetailPage_description',
               'id' : 'aw37c9d691',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem021.addChild( text065 );


            var button058 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'errorImage',
               'id' : 'aw1dae967c',
            });
            groupitem021.addChild( button058 );


            var textarea001 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'Transfers.ErrorDetailPage_errorMessage',
               'id' : 'aw434a665c',
            });
            groupitem021.addChild( textarea001 );

            var eventHandlers127 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'Transfers.ErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'awd2cca87e',
                     'event' : 'render',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            textarea001.eventHandlers = eventHandlers127;

            var button059 = new Button({
               'artifactId' : 'Transfers.ErrorDetailPage_button',
               'id' : 'aw547fd1aa',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers128 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'Transfers.ErrorDetailPage_eventhandler_click',
                     'id' : 'awee3e0cc9',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button059.eventHandlers = eventHandlers128;
            groupitem021.addChild( button059 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceivingErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'resource' : 'receivedMatrectrans',
               'id' : 'Transfers.ReceivingErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view026 );


            var container040 = new Container({
               'resource' : 'receivedMatrectrans',
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_container_2',
               'id' : 'awc0e7c526',
            });
            view026.addChild( container040 );


            var group015 = new Group({
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_group_2',
               'id' : 'awd3cb3a47',
            });
            container040.addChild( group015 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_issue_groupitem_2',
               'id' : 'aw341a4492',
            });
            group015.addChild( groupitem022 );


            var text066 = new Text({
               'resourceAttribute' : 'shipment',
               'editable' : false,
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_Shipmentnum',
               'id' : 'aw333eb6dc',
               'label' : MessageService.createStaticMessage('Shipment'),
            });
            groupitem022.addChild( text066 );

            var eventHandlers129 = [
               {
                     'method' : 'showShipmentErrorLabel',
                     'artifactId' : 'Transfers.ReceivingErrorDetailPage_eventhandler_render',
                     'id' : 'awbbe285c4',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            text066.eventHandlers = eventHandlers129;

            var text067 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : false,
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_Ponum',
               'id' : 'awcff9be1a',
               'label' : MessageService.createStaticMessage('Purchase Order'),
            });
            groupitem022.addChild( text067 );

            var eventHandlers130 = [
               {
                     'method' : 'showPOErrorLabel',
                     'artifactId' : 'Transfers.ReceivingErrorDetailPage_eventhandler_click',
                     'id' : 'aw6b96eb1c',
                     'event' : 'render',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            text067.eventHandlers = eventHandlers130;

            var button060 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'receivingErrorImage',
               'id' : 'aw105620ba',
            });
            groupitem022.addChild( button060 );


            var textarea002 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_errorMessage',
               'id' : 'awb96b36cc',
            });
            groupitem022.addChild( textarea002 );

            var eventHandlers131 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'Transfers.ReceivingErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'aw65ead6ac',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            textarea002.eventHandlers = eventHandlers131;

            var button061 = new Button({
               'artifactId' : 'Transfers.ReceivingErrorDetailPage_button',
               'id' : 'awea1735dd',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers132 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'Transfers.ReceivingErrorDetailPage_eventhandler_click_undoAndDelete',
                     'id' : 'awc700268',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button061.eventHandlers = eventHandlers132;
            groupitem022.addChild( button061 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.matrectrans_ReceivingErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view027 = new View({
               'resource' : 'matrectrans',
               'id' : 'Transfers.matrectrans_ReceivingErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view027 );


            var container041 = new Container({
               'resource' : 'matrectrans',
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_container_2',
               'id' : 'aw8ba3d346',
            });
            view027.addChild( container041 );


            var group016 = new Group({
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_group_2',
               'id' : 'awe4879a87',
            });
            container041.addChild( group016 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_issue_groupitem_2',
               'id' : 'awbbf784a1',
            });
            group016.addChild( groupitem023 );


            var text068 = new Text({
               'resourceAttribute' : 'shipment',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_shipment',
               'id' : 'aw4e35a6d1',
               'label' : MessageService.createStaticMessage('Shipment'),
            });
            groupitem023.addChild( text068 );


            var button062 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'receivingErrorImage_Transfers.matrectrans_ReceivingErrorDetailPage',
               'id' : 'awe3d74c84',
            });
            groupitem023.addChild( button062 );


            var textarea003 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_errorMessage',
               'id' : 'awf4921382',
            });
            groupitem023.addChild( textarea003 );

            var eventHandlers133 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'aw88f7d2d4',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            textarea003.eventHandlers = eventHandlers133;

            var button063 = new Button({
               'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_button',
               'id' : 'aw7e8c0536',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers134 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'Transfers.matrectrans_ReceivingErrorDetailPage_eventhandler_click',
                     'id' : 'awd4c967ca',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button063.eventHandlers = eventHandlers134;
            groupitem023.addChild( button063 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view028 = new View({
               'resource' : 'poComplexMatrectrans',
               'id' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view028 );


            var container042 = new Container({
               'resource' : 'poComplexMatrectrans',
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_container_2',
               'id' : 'aw9c7ba9f0',
            });
            view028.addChild( container042 );


            var group017 = new Group({
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_group_2',
               'id' : 'aw4ad6fcea',
            });
            container042.addChild( group017 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_issue_groupitem_2',
               'id' : 'aw3e8fa824',
            });
            group017.addChild( groupitem024 );


            var text069 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_shipment',
               'id' : 'aw7d98ea52',
               'label' : MessageService.createStaticMessage('Purchase Order'),
            });
            groupitem024.addChild( text069 );


            var button064 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'receivingErrorImage_Transfers.matrectrans_ReceivingExtPOErrorDetailPage',
               'id' : 'aw7504efb8',
            });
            groupitem024.addChild( button064 );


            var textarea004 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_errorMessage',
               'id' : 'awd687dd41',
            });
            groupitem024.addChild( textarea004 );

            var eventHandlers135 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'aw31923fcb',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            textarea004.eventHandlers = eventHandlers135;

            var button065 = new Button({
               'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_button',
               'id' : 'awfe8022de',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers136 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'Transfers.matrectrans_ReceivingExtPOErrorDetailPage_eventhandler_click',
                     'id' : 'aw499e6849',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button065.eventHandlers = eventHandlers136;
            groupitem024.addChild( button065 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view029 = new View({
               'showBackButton' : 'false',
               'resource' : 'poListComplexMatrectrans',
               'id' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view029 );


            var container043 = new Container({
               'resource' : 'poListComplexMatrectrans',
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_container_2',
               'id' : 'aw1fde8cc5',
            });
            view029.addChild( container043 );


            var group018 = new Group({
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_group_2',
               'id' : 'aw9256d33c',
            });
            container043.addChild( group018 );


            var groupitem025 = new GroupItem({
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_issue_groupitem_2',
               'id' : 'awfadfd2a0',
            });
            group018.addChild( groupitem025 );


            var text070 = new Text({
               'resourceAttribute' : 'ponum',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_shipment',
               'id' : 'aw12f01d9c',
               'label' : MessageService.createStaticMessage('Purchase Order'),
            });
            groupitem025.addChild( text070 );


            var button066 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'receivingErrorImage_Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage',
               'id' : 'aw55ff6fdd',
            });
            groupitem025.addChild( button066 );


            var textarea005 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_errorMessage',
               'id' : 'aw80b7bc47',
            });
            groupitem025.addChild( textarea005 );

            var eventHandlers137 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'aw264e6917',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            textarea005.eventHandlers = eventHandlers137;

            var button067 = new Button({
               'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_button',
               'id' : 'aw73842e76',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers138 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'Transfers.matrectrans_ReceivingPOListComplexErrorDetailPage_eventhandler_click',
                     'id' : 'awa38f7f0a',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button067.eventHandlers = eventHandlers138;
            groupitem025.addChild( button067 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ShipmentDetailView', false);
               trackTimer.startTracking();
            }

            var view030 = new View({
               'resource' : 'tempShipmentResource',
               'id' : 'Transfers.ShipmentDetailView',
               'label' : MessageService.createStaticMessage('Create Shipment'),
            });
            ui001.addChild( view030 );

            var requiredResources023 = {
               'tempShipmentResource' : {
                  'artifactId' : 'Transfers.ShipmentDetailView_requiredResource_tempShipmentResource',
                  'id' : 'aw7848aaa5',
               },
               'billtoshipto' : {
                  'artifactId' : 'Transfers.ShipmentDetailView_requiredResource_billtoshipto',
                  'id' : 'awe17b9a5c',
               },
               'splitqtyacrossbins' : {
                  'artifactId' : 'Transfers.ShipmentDetailView_requiredResource_splitqtyacrossbins',
                  'id' : 'aw3dca197',
               },
            };
            view030.addRequiredResources( requiredResources023 );

            var container044 = new Container({
               'resource' : 'tempShipmentResource',
               'artifactId' : 'Transfers.ShipmentDetailView_container_1',
               'id' : 'awbe95d7db',
            });
            view030.addChild( container044 );


            var group019 = new Group({
               'artifactId' : 'Transfers.ShipmentDetailView_group_0',
               'id' : 'awe37f5173',
            });
            container044.addChild( group019 );


            var groupitem026 = new GroupItem({
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_0',
               'id' : 'aw8c49765e',
            });
            group019.addChild( groupitem026 );


            var text071 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_siteid',
               'id' : 'aw959328cf',
               'label' : MessageService.createStaticMessage('To Site'),
            });
            groupitem026.addChild( text071 );


            var text072 = new Text({
               'resourceAttribute' : 'rotassetnum',
               'editable' : false,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_rotassetnum',
               'id' : 'aw38a89e64',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
            });
            groupitem026.addChild( text072 );


            var text073 = new Text({
               'resourceAttribute' : 'shipdate',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_0_shipdate',
               'id' : 'awe4d9be39',
               'label' : MessageService.createStaticMessage('Shipment Date'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text073 );


            var text074 = new Text({
               'resourceAttribute' : 'expreceiptdate',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_0_expreceiptdate',
               'id' : 'aw1172cba1',
               'label' : MessageService.createStaticMessage('Expected Receipt Date'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text074 );


            var text075 = new Text({
               'resourceAttribute' : 'carrier',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_carrier',
               'id' : 'awb75f06f0',
               'label' : MessageService.createStaticMessage('Carrier'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text075 );


            var text076 = new Text({
               'resourceAttribute' : 'packingslipnum',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_packingslipnum',
               'id' : 'aw85df0d30',
               'label' : MessageService.createStaticMessage('Packaging Slip'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text076 );


            var text077 = new Text({
               'resourceAttribute' : 'shiptoattn',
               'lookup' : 'Transfers.AttentionLookup',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_attentionof',
               'id' : 'aw2aa39b31',
               'label' : MessageService.createStaticMessage('Attention of'),
               'lookupAttribute' : 'personid',
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text077 );

            var eventHandlers139 = [
               {
                     'method' : 'validateAttentionOf',
                     'artifactId' : 'Transfers.ShipmentDetailView_eventhandler_click_attentionof',
                     'id' : 'awd7e56760',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text077.eventHandlers = eventHandlers139;

            var text078 = new Text({
               'resourceAttribute' : 'shipto',
               'lookup' : 'Transfers.BilltoShiptoLookup',
               'editable' : true,
               'artifactId' : 'Transfers.ShipmentDetailView_groupitem_1_shipto',
               'id' : 'aw78d35a32',
               'label' : MessageService.createStaticMessage('Ship To'),
               'lookupAttribute' : 'addresscode',
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem026.addChild( text078 );

            var eventHandlers140 = [
               {
                     'method' : 'validateShipto',
                     'artifactId' : 'Transfers.ShipmentDetailView_eventhandler_click_shipto',
                     'id' : 'awf9fd99e2',
                     'event' : 'validate',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            text078.eventHandlers = eventHandlers140;

            var footer021 = new Footer({
               'artifactId' : 'Transfers.ShipmentDetailView_footer',
               'id' : 'aw33b4415e',
            });
            view030.addChild( footer021 );


            var button068 = new Button({
               'artifactId' : 'Transfers.ShipmentDetailView_Cancel_button',
               'id' : 'aw59afb4b6',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers141 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'Transfers.ShipmentDetailView_cancel_button_eventHandlers_click_Cancel',
                     'id' : 'awb14980d1',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button068.eventHandlers = eventHandlers141;
            footer021.addChild( button068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.ShipmentDetailView_Ship_button',
               'id' : 'awd9195a0c',
               'label' : MessageService.createStaticMessage('Ship'),
               'primary' : 'true',
            });
            var eventHandlers142 = [
               {
                     'method' : 'shipItems',
                     'artifactId' : 'Transfers.ShipmentDetailView_Ship_button_eventHandlers_click_Ship',
                     'id' : 'aw3e74fb10',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button069.eventHandlers = eventHandlers142;
            footer021.addChild( button069 );

            var eventHandlers143 = [
               {
                     'method' : 'clearSetShipmentDetailData',
                     'artifactId' : 'Transfers.ShipmentDetailView_groupitem_0_eventHandlers_initialize',
                     'id' : 'aw49b1a621',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            view030.eventHandlers = eventHandlers143;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.InspectItemView', false);
               trackTimer.startTracking();
            }

            var view031 = new View({
               'resource' : 'receivedMatrectrans',
               'id' : 'Transfers.InspectItemView',
               'label' : MessageService.createStaticMessage('Inspect Item'),
            });
            ui001.addChild( view031 );


            var container045 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.Sea11rchInvreserveView_container_0',
               'id' : 'awb6a53047',
            });
            view031.addChild( container045 );


            var link020 = new Link({
               'artifactId' : 'link2',
               'id' : 'awd059d01e',
               'label' : MessageService.createStaticMessage(''),
            });
            container045.addChild( link020 );

            var eventHandlers144 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'link_eventHandslssers_click',
                     'id' : 'aw3e3b201f',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'link_eventHandddlers_render_hideShowSelectLink',
                     'id' : 'aw7e717ab5',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link020.eventHandlers = eventHandlers144;

            var container046 = new Container({
               'resource' : 'receivedMatrectrans',
               'artifactId' : 'Transfers.InspectItemView_container_1',
               'id' : 'aw2538769b',
            });
            view031.addChild( container046 );


            var group020 = new Group({
               'artifactId' : 'Transfers.InspectItemView_group_0',
               'id' : 'aw626352ec',
            });
            container046.addChild( group020 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'Transfers.InspectItemView_groupitem_0',
               'id' : 'aw17e4d71e',
            });
            group020.addChild( groupitem027 );


            var text079 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_1_item',
               'id' : 'aw4659d289',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem027.addChild( text079 );


            var text080 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_2_itemdesc',
               'id' : 'awa180d00',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem027.addChild( text080 );


            var text081 = new Text({
               'resourceAttribute' : 'tostoreloc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_3_tostoreroom',
               'id' : 'awb2bd63f',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem027.addChild( text081 );


            var text082 = new Text({
               'resourceAttribute' : 'quantity',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_4_shippedquantity',
               'id' : 'awacf7ab88',
               'label' : MessageService.createStaticMessage('Shipped Quantity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem027.addChild( text082 );


            var text083 = new Text({
               'resourceAttribute' : 'inspectedqty',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_8_shippedquantity',
               'id' : 'aw39efc3d9',
               'label' : MessageService.createStaticMessage('Inspected Quantity'),
            });
            groupitem027.addChild( text083 );


            var text084 = new Text({
               'resourceAttribute' : 'receivedunit',
               'editable' : false,
               'artifactId' : 'Transfers.InspectItemView_groupitem_5_unitofmeasure',
               'id' : 'aw1cf1f0e6',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem027.addChild( text084 );


            var text085 = new Text({
               'resourceAttribute' : 'localacceptqty',
               'editable' : true,
               'artifactId' : 'Transfers.InspectItemView_groupitem_6_quantityaccepted',
               'id' : 'awecceed9e',
               'label' : MessageService.createStaticMessage('Quantity Accepted'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem027.addChild( text085 );


            var text086 = new Text({
               'resourceAttribute' : 'localrejectqty',
               'editable' : true,
               'artifactId' : 'Transfers.InspectItemView_groupitem_7_rejectquantity',
               'id' : 'aw184a0057',
               'label' : MessageService.createStaticMessage('Reject Quanity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem027.addChild( text086 );


            var footer022 = new Footer({
               'artifactId' : 'Transfers.InspectItemView_footer',
               'id' : 'aw91a1138a',
            });
            view031.addChild( footer022 );


            var button070 = new Button({
               'artifactId' : 'Transfers.InspectItemView_Cancel_button',
               'id' : 'aw807f360',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers145 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'Transfers.InspectItemView_cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw9a759d4f',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button070.eventHandlers = eventHandlers145;
            footer022.addChild( button070 );


            var button071 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.InspectItemView_Ship_button',
               'id' : 'aw42b4fb4c',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers146 = [
               {
                     'method' : 'approveInspection',
                     'artifactId' : 'Transfers.InspectItemView_Done_button_eventHandlers_click_Done',
                     'id' : 'awdc0cf887',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button071.eventHandlers = eventHandlers146;
            footer022.addChild( button071 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.InspectPOItemView', false);
               trackTimer.startTracking();
            }

            var view032 = new View({
               'resource' : 'poListComplexMatrectrans',
               'id' : 'Transfers.InspectPOItemView',
               'label' : MessageService.createStaticMessage('Inspect Item'),
            });
            ui001.addChild( view032 );


            var container047 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.InspectPOItemView_container_0',
               'id' : 'aw97b68f88',
            });
            view032.addChild( container047 );


            var link021 = new Link({
               'artifactId' : 'Transfers.InspectPOItemView_link2',
               'id' : 'aw7dd55c2f',
               'label' : MessageService.createStaticMessage(''),
            });
            container047.addChild( link021 );

            var eventHandlers147 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.InspectPOItemView_link_eventHandslssers_click',
                     'id' : 'aw3eba4f8f',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.InspectPOItemView_link_eventHandddlers_render_hideShowSelectLink',
                     'id' : 'awdbbcf57c',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link021.eventHandlers = eventHandlers147;

            var container048 = new Container({
               'resource' : 'poListComplexMatrectrans',
               'artifactId' : 'Transfers.InspectPOItemView_container_1',
               'id' : 'awe0b1bf1e',
            });
            view032.addChild( container048 );


            var group021 = new Group({
               'artifactId' : 'Transfers.InspectPOItemView_group_0',
               'id' : 'awbf4ccdbf',
            });
            container048.addChild( group021 );


            var groupitem028 = new GroupItem({
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_0',
               'id' : 'awd26d1e9b',
            });
            group021.addChild( groupitem028 );


            var text087 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_1_item',
               'id' : 'aw6c734fe3',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem028.addChild( text087 );


            var text088 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_2_itemdesc',
               'id' : 'aw1f98343a',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem028.addChild( text088 );


            var text089 = new Text({
               'resourceAttribute' : 'tostoreloc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_3_tostoreroom',
               'id' : 'awc1ebb8f6',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem028.addChild( text089 );


            var text090 = new Text({
               'resourceAttribute' : 'convertedquantity',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_4_shippedquantity',
               'id' : 'aw55b010ce',
               'label' : MessageService.createStaticMessage('Shipped Quantity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem028.addChild( text090 );


            var text091 = new Text({
               'resourceAttribute' : 'inspectedqty',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_8_shippedquantity',
               'id' : 'awc0a8789f',
               'label' : MessageService.createStaticMessage('Inspected Quantity'),
            });
            groupitem028.addChild( text091 );


            var text092 = new Text({
               'resourceAttribute' : 'receivedunit',
               'editable' : false,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_5_unitofmeasure',
               'id' : 'awacc31a7e',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem028.addChild( text092 );


            var text093 = new Text({
               'resourceAttribute' : 'localacceptqty',
               'editable' : true,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_6_quantityaccepted',
               'id' : 'aw73884e80',
               'label' : MessageService.createStaticMessage('Quantity Accepted'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem028.addChild( text093 );


            var text094 = new Text({
               'resourceAttribute' : 'localrejectqty',
               'editable' : true,
               'artifactId' : 'Transfers.InspectPOItemView_groupitem_7_rejectquantity',
               'id' : 'awe62e29cb',
               'label' : MessageService.createStaticMessage('Reject Quanity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem028.addChild( text094 );


            var footer023 = new Footer({
               'artifactId' : 'Transfers.InspectPOItemView_footer',
               'id' : 'awb34289e5',
            });
            view032.addChild( footer023 );


            var button072 = new Button({
               'artifactId' : 'Transfers.InspectPOItemView_Cancel_button',
               'id' : 'awac4b20f3',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers148 = [
               {
                     'method' : 'discardView',
                     'artifactId' : 'Transfers.InspectPOItemView_cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw914b85ec',
                     'event' : 'click',
                     'class' : 'application.handlers.TransfersHandler',
               }
            ];
            button072.eventHandlers = eventHandlers148;
            footer023.addChild( button072 );


            var button073 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Transfers.InspectPOItemView_Ship_button',
               'id' : 'aw873d32c9',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers149 = [
               {
                     'method' : 'approveInspection',
                     'artifactId' : 'Transfers.InspectPOItemView_Done_button_eventHandlers_click_Done',
                     'id' : 'aw49294bdd',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button073.eventHandlers = eventHandlers149;
            footer023.addChild( button073 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.InspectRotatingItemView', false);
               trackTimer.startTracking();
            }

            var view033 = new View({
               'resource' : 'receivedMatrectrans',
               'id' : 'Transfers.InspectRotatingItemView',
               'label' : MessageService.createStaticMessage('Inspect Rotating Item'),
            });
            ui001.addChild( view033 );


            var container049 = new Container({
               'resource' : 'receivedMatrectrans',
               'artifactId' : 'Transfers.InspectRotatingItemView_container_1',
               'id' : 'aw61249df4',
            });
            view033.addChild( container049 );


            var group022 = new Group({
               'artifactId' : 'Transfers.InspectRotatingItemView_group_0',
               'id' : 'aw297a2f68',
            });
            container049.addChild( group022 );


            var groupitem029 = new GroupItem({
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_0',
               'id' : 'aw53f83c71',
            });
            group022.addChild( groupitem029 );


            var text095 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_1_item',
               'id' : 'awdd6c2439',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem029.addChild( text095 );


            var text096 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_2_itemdesc',
               'id' : 'aw63cfc482',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem029.addChild( text096 );


            var text097 = new Text({
               'resourceAttribute' : 'tostoreloc',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_3_tostoreroom',
               'id' : 'aweb1532c8',
               'label' : MessageService.createStaticMessage('To Storeroom'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem029.addChild( text097 );


            var text098 = new Text({
               'resourceAttribute' : 'quantity',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_4_shippedquantity',
               'id' : 'awf86204ef',
               'label' : MessageService.createStaticMessage('Shipped Quantity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem029.addChild( text098 );


            var text099 = new Text({
               'resourceAttribute' : 'receivedunit',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_5_unitofmeasure',
               'id' : 'awe06b41c3',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem029.addChild( text099 );


            var text100 = new Text({
               'resourceAttribute' : 'rotassetnum',
               'editable' : false,
               'artifactId' : 'Transfers.InspectRotatingItemView_groupitem_6_rotassetnum',
               'id' : 'awb113f331',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            groupitem029.addChild( text100 );


            var footer024 = new Footer({
               'artifactId' : 'Transfers.InspectRotatingItemView_footer',
               'id' : 'aw8c08d0af',
            });
            view033.addChild( footer024 );


            var button074 = new Button({
               'artifactId' : 'Transfers.InspectRotatingItemView_Cancel_button',
               'id' : 'awddbafbe4',
               'label' : MessageService.createStaticMessage('Accept'),
            });
            var eventHandlers150 = [
               {
                     'method' : 'acceptRotatingInpection',
                     'artifactId' : 'Transfers.InspectRotatingItemView_reject_button_eventHandlers_click_Cancel',
                     'id' : 'awe2d33961',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button074.eventHandlers = eventHandlers150;
            footer024.addChild( button074 );


            var button075 = new Button({
               'artifactId' : 'Transfers.InspectRotatingItemView_Ship_button',
               'id' : 'aw6a81023',
               'label' : MessageService.createStaticMessage('Reject'),
            });
            var eventHandlers151 = [
               {
                     'method' : 'rejectRotatingInpection',
                     'artifactId' : 'Transfers.InspectRotatingItemView_accept_button_eventHandlers_click_accept',
                     'id' : 'aw1d1d8606',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button075.eventHandlers = eventHandlers151;
            footer024.addChild( button075 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceiveRotatingItemView', false);
               trackTimer.startTracking();
            }

            var view034 = new View({
               'resource' : 'receivedMatrectrans',
               'id' : 'Transfers.ReceiveRotatingItemView',
               'label' : MessageService.createStaticMessage('Receive Rotating Item'),
            });
            ui001.addChild( view034 );


            var container050 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'Transfers.ReceiveRotatingItemView_container_0',
               'id' : 'awda089a82',
            });
            view034.addChild( container050 );


            var link022 = new Link({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_link',
               'id' : 'awdb971a9c',
               'label' : MessageService.createStaticMessage(''),
            });
            container050.addChild( link022 );

            var eventHandlers152 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'Transfers.ReceiveRotatingItemView_link_eventHandlers_click',
                     'id' : 'awdb52864e',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'Transfers.ReceiveRotatingItemView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw5581ce65',
                     'event' : 'render',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            link022.eventHandlers = eventHandlers152;

            var container051 = new Container({
               'resource' : 'receivedMatrectrans',
               'artifactId' : 'Transfers.ReceiveRotatingItemView_container_1',
               'id' : 'awad0faa14',
            });
            view034.addChild( container051 );


            var group023 = new Group({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_group_0',
               'id' : 'aw7cb5d2b8',
            });
            container051.addChild( group023 );


            var groupitem030 = new GroupItem({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_groupitem_0',
               'id' : 'aw9fd30b91',
            });
            group023.addChild( groupitem030 );


            var text101 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'Transfers.ReceiveRotatingItemView_groupitem_1_item',
               'id' : 'awcb1312bd',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem030.addChild( text101 );


            var text102 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : false,
               'artifactId' : 'Transfers.ReceiveRotatingItemView_groupitem_2_itemdesc',
               'id' : 'aw7d61aca4',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem030.addChild( text102 );


            var text103 = new Text({
               'resourceAttribute' : 'newassetnumber',
               'editable' : true,
               'artifactId' : 'Transfers.ReceiveRotatingItemView_groupitem_6_rotassetnum',
               'id' : 'aw1199a63d',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
            });
            groupitem030.addChild( text103 );


            var footer025 = new Footer({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_footer',
               'id' : 'aw46d32f18',
            });
            view034.addChild( footer025 );


            var button076 = new Button({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_Autonumber_button',
               'id' : 'awd7fe1102',
               'label' : MessageService.createStaticMessage('Autonumber'),
            });
            var eventHandlers153 = [
               {
                     'method' : 'receiveRotatingItemProcessAsset',
                     'artifactId' : 'Transfers.ReceiveRotatingItemView_Autonumber_eventHandlers_click_Autonumber',
                     'id' : 'aw2506f26c',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button076.eventHandlers = eventHandlers153;
            footer025.addChild( button076 );


            var button077 = new Button({
               'artifactId' : 'Transfers.ReceiveRotatingItemView_Done_button',
               'id' : 'awffa8bf74',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers154 = [
               {
                     'method' : 'receiveRotatingItemProcessAsset',
                     'artifactId' : 'Transfers.ReceiveRotatingItemView_Autonumber_eventHandlers_click_Done',
                     'id' : 'aw16d38b31',
                     'event' : 'click',
                     'class' : 'application.handlers.ReceiveShipmentHandler',
               }
            ];
            button077.eventHandlers = eventHandlers154;
            footer025.addChild( button077 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.ReceiveExternalPORotatingItemView', false);
               trackTimer.startTracking();
            }

            var view035 = new View({
               'resource' : 'assignRotatingItemsMatrectransResource',
               'id' : 'Transfers.ReceiveExternalPORotatingItemView',
               'label' : MessageService.createStaticMessage('Receive Rotating Item'),
            });
            ui001.addChild( view035 );



            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'SplitQtyRotateList',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_listItemTemplate',
               'id' : 'awbeb30f5c',
            });

            var listtext066 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_itemnum',
               'id' : 'aw477b654a',
            });
            listItemTemplate016.addChild( listtext066 );


            var listtext067 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_itemdesc',
               'id' : 'aw372d704f',
            });
            listItemTemplate016.addChild( listtext067 );


            var listtext068 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_qty',
               'id' : 'aw85223c9b',
            });
            listItemTemplate016.addChild( listtext068 );


            var listtext069 = new ListText({
               'resourceAttribute' : 'receivedunit',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_issueunit',
               'id' : 'aw118ad44',
            });
            listItemTemplate016.addChild( listtext069 );


            var text104 = new Text({
               'resourceAttribute' : 'newassetnumber',
               'editable' : true,
               'layoutInsertAt' : 'item7',
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_groupitem_6_rotassetnum',
               'id' : 'aw569e8d24',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
            });
            listItemTemplate016.addChild( text104 );



            var list016 = new List({
               'resource' : 'assignRotatingItemsMatrectransResource',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_list',
               'hideEmpty' : 'true',
               'id' : 'awae5065b3',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view035.addChild( list016 );


            var footer026 = new Footer({
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_footer',
               'id' : 'aw217c6510',
            });
            view035.addChild( footer026 );


            var button078 = new Button({
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_Autonumber_button',
               'id' : 'aw59683b1',
               'label' : MessageService.createStaticMessage('Autonumber'),
            });
            var eventHandlers155 = [
               {
                     'method' : 'receiveRotatingItemProcessAssetAutonum',
                     'artifactId' : 'Transfers.ReceivePORotatingItemsView_Autonumber_eventHandlers_click_Autonumber',
                     'id' : 'awc48c1c6b',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button078.eventHandlers = eventHandlers155;
            footer026.addChild( button078 );


            var button079 = new Button({
               'artifactId' : 'Transfers.ReceivePORotatingItemsView_Done_button',
               'id' : 'awc3e9abd1',
               'label' : MessageService.createStaticMessage('Done'),
            });
            var eventHandlers156 = [
               {
                     'method' : 'receiveRotatingItemProcessAsset',
                     'artifactId' : 'Transfers.ReceivePORotatingItemsView_Autonumber_eventHandlers_click_Done',
                     'id' : 'aw7af02178',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button079.eventHandlers = eventHandlers156;
            footer026.addChild( button079 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.POListView', false);
               trackTimer.startTracking();
            }

            var view036 = new View({
               'resource' : 'poResource',
               'id' : 'Transfers.POListView',
               'label' : MessageService.createStaticMessage('Select Purchase Order'),
            });
            ui001.addChild( view036 );

            var requiredResources024 = {
               'poExternalResource' : {
                  'artifactId' : 'Transfers.POListView_requiredResource_transfers',
                  'id' : 'awa98d468',
               },
               'domainpostatus' : {
                  'artifactId' : 'Transfers.POListView_requiredResource_domainpostatus',
                  'id' : 'aw32a06dba',
               },
            };
            view036.addRequiredResources( requiredResources024 );


            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'POListItem',
               'artifactId' : 'Transfers.POListView_listItemTemplate',
               'id' : 'aw8ee4a32e',
            });

            var listtext070 = new ListText({
               'resourceAttribute' : 'ponum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.POListView_ponum',
               'id' : 'aw804a4401',
            });
            listItemTemplate017.addChild( listtext070 );


            var listtext071 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.POListView_description',
               'id' : 'aw80ac3b75',
            });
            listItemTemplate017.addChild( listtext071 );


            var listtext072 = new ListText({
               'resourceAttribute' : 'vendor',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.POListView_vendor',
               'id' : 'awa8b5d536',
            });
            listItemTemplate017.addChild( listtext072 );


            var listtext073 = new ListText({
               'resourceAttribute' : 'orderdate',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.POListView_orderdate',
               'id' : 'aw534ea570',
            });
            listItemTemplate017.addChild( listtext073 );


            var listtext074 = new ListText({
               'resourceAttribute' : 'receipts',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.POListView_receipts',
               'id' : 'aw9f782e36',
            });
            listItemTemplate017.addChild( listtext074 );

            var eventHandlers157 = [
               {
                     'method' : 'selectPOSelection',
                     'artifactId' : 'Transfers.POListView_eventHandlers_click',
                     'id' : 'awb306313f',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            listItemTemplate017.eventHandlers = eventHandlers157;


            var list017 = new List({
               'resource' : 'poResource',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'Transfers.POListView_list',
               'hideEmpty' : 'true',
               'id' : 'awb66072c1',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view036.addChild( list017 );


            var footer027 = new Footer({
               'artifactId' : 'Transfers.POListView_footer',
               'id' : 'awbfa6e393',
            });
            view036.addChild( footer027 );


            var button080 = new Button({
               'artifactId' : 'Transfers.POListView_footer_Cancel_button',
               'id' : 'aw3544c253',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers158 = [
               {
                     'method' : 'cancelPOSelection',
                     'artifactId' : 'Transfers.POListView_button_eventHandlers_click_Cancel',
                     'id' : 'awc5481cda',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button080.eventHandlers = eventHandlers158;
            footer027.addChild( button080 );


            var button081 = new Button({
               'artifactId' : 'Transfers.POListView_footer_Clear_button',
               'id' : 'awde0363',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers159 = [
               {
                     'method' : 'clearPOSelection',
                     'artifactId' : 'Transfers.POListView_button_eventHandlers_click_Clear',
                     'id' : 'awb297c48b',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button081.eventHandlers = eventHandlers159;
            footer027.addChild( button081 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Transfers.MultiPOListView', false);
               trackTimer.startTracking();
            }

            var view037 = new View({
               'resource' : 'vendorPOResource',
               'id' : 'Transfers.MultiPOListView',
               'label' : MessageService.createStaticMessage('Purchase Orders'),
            });
            ui001.addChild( view037 );



            var listItemTemplate018 = new ListItemTemplate({
               'layout' : 'POListItem',
               'cssClass' : '.mblListItem .mblDomButtonArrow',
               'artifactId' : 'Transfers.MultiPOListView_listItemTemplate',
               'id' : 'aw2f04f9f1',
            });

            var listtext075 = new ListText({
               'resourceAttribute' : 'ponum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.MultiPOListView_ponum',
               'id' : 'awb60216ac',
            });
            listItemTemplate018.addChild( listtext075 );


            var listtext076 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.MultiPOListView_description',
               'id' : 'aw19bb4c1e',
            });
            listItemTemplate018.addChild( listtext076 );


            var listtext077 = new ListText({
               'resourceAttribute' : 'vendor',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'Transfers.MultiPOListView_vendor',
               'id' : 'awe44231',
            });
            listItemTemplate018.addChild( listtext077 );


            var listtext078 = new ListText({
               'resourceAttribute' : 'orderdate',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'Transfers.MultiPOListView_orderdate',
               'id' : 'aw746dcee2',
            });
            listItemTemplate018.addChild( listtext078 );


            var listtext079 = new ListText({
               'resourceAttribute' : 'receipts',
               'layoutInsertAt' : 'item5',
               'artifactId' : 'Transfers.MultiPOListView_receipts',
               'id' : 'awbe521647',
            });
            listItemTemplate018.addChild( listtext079 );

            var eventHandlers160 = [
               {
                     'method' : 'searchVendorPO',
                     'artifactId' : 'Transfers.MultiPOListView_eventHandlers_click',
                     'id' : 'awd58d1435',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            listItemTemplate018.eventHandlers = eventHandlers160;


            var list018 = new List({
               'resource' : 'vendorPOResource',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'Transfers.MultiPOListView_list',
               'hideEmpty' : 'true',
               'id' : 'awfd78296b',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view037.addChild( list018 );

            var eventHandlers161 = [
               {
                     'method' : 'transitsBackToMultiPOListView',
                     'artifactId' : 'Transfers.MultiPOListView_eventHandlers_back',
                     'id' : 'awa66f35e1',
                     'event' : 'back',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            view037.eventHandlers = eventHandlers161;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog004 = new Dialog({
               'id' : 'Transfers.TransactionSubmitDialog',
            });
            ui001.addChild( dialog004 );


            var container052 = new Container({
               'artifactId' : 'Transfers.TransactionSubmitDialog_container_0',
               'id' : 'aw533f1ef8',
            });
            dialog004.addChild( container052 );


            var text105 = new Text({
               'editable' : false,
               'artifactId' : 'Transfers.TransactionSubmitDialog_text_0',
               'id' : 'aw51d600f9',
               'value' : MessageService.createDynamicMessage('{0}', 'application.handlers.ManagePurchaseOrderHandler', 'resolveConfirmationMessage'),
               'resolverFunction' : 'resolveConfirmationMessage',
               'resolverClass' : 'application.handlers.ManagePurchaseOrderHandler',
            });
            container052.addChild( text105 );


            var button082 = new Button({
               'artifactId' : 'Transfers.TransactionSubmitDialogr_button',
               'id' : 'awff5f3918',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers162 = [
               {
                     'method' : 'receiveTransSubmitted',
                     'artifactId' : 'Transfers.TransactionSubmitDialog_OK_eventHandlers',
                     'id' : 'awc942da76',
                     'event' : 'click',
                     'class' : 'application.handlers.ManagePurchaseOrderHandler',
               }
            ];
            button082.eventHandlers = eventHandlers162;
            container052.addChild( button082 );


            var lookup001 = new Lookup({
               'filterMethod' : 'filterAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.AssetLookup',
               'label' : MessageService.createStaticMessage('Select Asset'),
            });
            ui001.addChild( lookup001 );

            var requiredResources025 = {
               'additionalasset' : {
                  'artifactId' : 'Transfers.AssetLookup_additionalasset',
                  'id' : 'awf487f6d6',
               },
            };
            lookup001.addRequiredResources( requiredResources025 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'Transfers.AssetLookup_additionalasset_searchAttributes',
               'id' : 'aw313c2dc',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw13cfe5bc',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_searchAttribute_description',
               'id' : 'aw12120be8',
            });
            searchAttributes001.addChild( searchAttribute002 );


            var searchAttribute003 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_searchAttribute_location',
               'id' : 'awf2891f68',
            });
            searchAttributes001.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'locationdesc',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_searchAttribute_locationdesc',
               'id' : 'aw5baf27c7',
            });
            searchAttributes001.addChild( searchAttribute004 );



            var listItemTemplate019 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_listItemTemplate_Item2Desc2',
               'id' : 'awb17abec7',
            });

            var listtext080 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_Item2Desc2_assetnum',
               'id' : 'aw49381e78',
            });
            listItemTemplate019.addChild( listtext080 );


            var listtext081 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_Item2Desc2_description',
               'id' : 'aw50256ae7',
            });
            listItemTemplate019.addChild( listtext081 );


            var listtext082 = new ListText({
               'resourceAttribute' : 'location',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_Item2Desc2_location',
               'id' : 'awa87ee4ac',
            });
            listItemTemplate019.addChild( listtext082 );


            var listtext083 = new ListText({
               'resourceAttribute' : 'locationdesc',
               'layoutInsertAt' : 'desc2',
               'artifactId' : 'Transfers.AssetLookup_additionalasset_Item2Desc2_locationdesc',
               'id' : 'awcb520d37',
            });
            listItemTemplate019.addChild( listtext083 );



            var list019 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate019,
               'artifactId' : 'Transfers.AssetLookup_additionalasset_list',
               'id' : 'aw28ff623d',
               'searchAttributes' : searchAttributes001,
            });
            lookup001.addChild( list019 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'Transfers.AssetLookup_returnAttributes',
               'id' : 'aw3d125732',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'asset',
               'artifactId' : 'Transfers.AssetLookup_assetnum_asset',
               'id' : 'aw15ed3398',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'assetdesc',
               'artifactId' : 'Transfers.AssetLookup_description_assetdesc',
               'id' : 'awb8afbb1c',
               'sourceAttribute' : 'description',
            });
            returnAttributes001.addChild( returnAttribute002 );


            var lookup002 = new Lookup({
               'filterMethod' : 'filterShiptoForLookup',
               'resource' : 'billtoshipto',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.BilltoShiptoLookup',
               'label' : MessageService.createStaticMessage('Select Shipping'),
            });
            ui001.addChild( lookup002 );

            var requiredResources026 = {
               'billtoshipto' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.BilltoLookup_billtoshipto',
                  'id' : 'aw2c98e066',
               },
            };
            lookup002.addRequiredResources( requiredResources026 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_searchAttributes',
               'id' : 'awa86f0b7a',
            });

            var searchAttribute005 = new SearchAttribute({
               'name' : 'locationForSearch',
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_searchAttribute_addresscode',
               'id' : 'aw7214a658',
            });
            searchAttributes002.addChild( searchAttribute005 );


            var searchAttribute006 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_searchAttribute_description',
               'id' : 'aw6ec09593',
            });
            searchAttributes002.addChild( searchAttribute006 );



            var listItemTemplate020 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers_BilltoShiptoLookup_billtoshipto_listItemTemplate_Item1Desc1',
               'id' : 'aw590dbd86',
            });

            var listtext084 = new ListText({
               'resourceAttribute' : 'addresscode',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_Item1Desc1_location',
               'id' : 'awcc4a45bf',
            });
            listItemTemplate020.addChild( listtext084 );


            var listtext085 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_Item1Desc1_description',
               'id' : 'awd8ed0eb7',
            });
            listItemTemplate020.addChild( listtext085 );



            var list020 = new List({
               'resource' : 'billtoshipto',
               'listItemTemplate' : listItemTemplate020,
               'artifactId' : 'Transfers.BilltoShiptoLookup_billtoshipto_list',
               'id' : 'awe0b6d889',
               'searchAttributes' : searchAttributes002,
            });
            lookup002.addChild( list020 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'Transfers.BilltoShiptoLookup_returnAttributes',
               'id' : 'awe74775b3',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'shipto',
               'artifactId' : 'Transfers.BilltoShiptoLookup_addresscode_addresscode',
               'id' : 'aw848fd18e',
               'sourceAttribute' : 'addresscode',
            });
            returnAttributes002.addChild( returnAttribute003 );


            var lookup003 = new Lookup({
               'filterMethod' : 'filterLocationForLookup',
               'resource' : 'additionallocations',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.LocationLookup',
               'label' : MessageService.createStaticMessage('Select Location'),
            });
            ui001.addChild( lookup003 );

            var requiredResources027 = {
               'additionallocations' : {
                  'artifactId' : 'Transfers.LocationLookup_additionallocations',
                  'id' : 'awf1a5b3c',
               },
            };
            lookup003.addRequiredResources( requiredResources027 );


            var searchAttributes003 = new SearchAttributes({
               'artifactId' : 'Transfers.LocationLookup_additionallocations_searchAttributes',
               'id' : 'aw6a112f01',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'Transfers.LocationLookup_additionallocations_searchAttribute_location',
               'id' : 'awd40c0f45',
            });
            searchAttributes003.addChild( searchAttribute007 );


            var searchAttribute008 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.LocationLookup_additionallocations_searchAttribute_description',
               'id' : 'awf597bb83',
            });
            searchAttributes003.addChild( searchAttribute008 );



            var listItemTemplate021 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.LocationLookup_additionallocations_listItemTemplate_Item1Desc1',
               'id' : 'aw49622db8',
            });

            var listtext086 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.LocationLookup_additionallocations_Item1Desc1_location',
               'id' : 'awd2bb7f51',
            });
            listItemTemplate021.addChild( listtext086 );


            var listtext087 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.LocationLookup_additionallocations_Item1Desc1_description',
               'id' : 'aw9482eff0',
            });
            listItemTemplate021.addChild( listtext087 );



            var list021 = new List({
               'resource' : 'additionallocations',
               'listItemTemplate' : listItemTemplate021,
               'artifactId' : 'Transfers.LocationLookup_additionallocations_list',
               'id' : 'awf7196f4e',
               'searchAttributes' : searchAttributes003,
            });
            lookup003.addChild( list021 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'Transfers.LocationLookup_returnAttributes',
               'id' : 'aw7dfb0613',
            });
            lookup003.addChild( returnAttributes003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'location',
               'artifactId' : 'Transfers.LocationLookup_location_location',
               'id' : 'aw757f2ece',
               'sourceAttribute' : 'location',
            });
            returnAttributes003.addChild( returnAttribute004 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'locationdesc',
               'artifactId' : 'Transfers.LocationLookup_description_locationdesc',
               'id' : 'aw69bc654a',
               'sourceAttribute' : 'description',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var lookup004 = new Lookup({
               'filterMethod' : 'filterStoreroomForLookup',
               'resource' : 'additionalstoreroom',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.StoreroomLookup',
               'label' : MessageService.createStaticMessage('Select Storeroom'),
            });
            ui001.addChild( lookup004 );

            var requiredResources028 = {
               'additionalstoreroom' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom',
                  'id' : 'awf5772d08',
               },
            };
            lookup004.addRequiredResources( requiredResources028 );


            var searchAttributes004 = new SearchAttributes({
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_searchAttributes',
               'id' : 'awa907c867',
            });

            var searchAttribute009 = new SearchAttribute({
               'name' : 'locationForSearch',
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_searchAttribute_locationForSearch',
               'id' : 'awacae0cd8',
            });
            searchAttributes004.addChild( searchAttribute009 );


            var searchAttribute010 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_searchAttribute_description',
               'id' : 'awb33b8adf',
            });
            searchAttributes004.addChild( searchAttribute010 );



            var listItemTemplate022 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_listItemTemplate_Item1Desc1',
               'id' : 'awfce1ce4',
            });

            var listtext088 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_Item1Desc1_location',
               'id' : 'aw7b0a187a',
            });
            listItemTemplate022.addChild( listtext088 );


            var listtext089 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_Item1Desc1_description',
               'id' : 'aw36403822',
            });
            listItemTemplate022.addChild( listtext089 );



            var list022 = new List({
               'resource' : 'additionalstoreroom',
               'listItemTemplate' : listItemTemplate022,
               'artifactId' : 'Transfers.StoreroomLookup_additionalstoreroom_list',
               'id' : 'aw43b0df0c',
               'searchAttributes' : searchAttributes004,
            });
            lookup004.addChild( list022 );


            var lookup005 = new Lookup({
               'filterMethod' : 'filterToStoreroomForLookup',
               'resource' : 'additionalstoreroom',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.ToStoreroomLookup',
               'label' : MessageService.createStaticMessage('Select Storeroom'),
            });
            ui001.addChild( lookup005 );

            var requiredResources029 = {
               'additionalstoreroom' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom',
                  'id' : 'awe0a632dd',
               },
            };
            lookup005.addRequiredResources( requiredResources029 );


            var searchAttributes005 = new SearchAttributes({
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_searchAttributes',
               'id' : 'aw5e0bd74e',
            });

            var searchAttribute011 = new SearchAttribute({
               'name' : 'locationForSearch',
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_searchAttribute_locationForSearch',
               'id' : 'awc252bcd8',
            });
            searchAttributes005.addChild( searchAttribute011 );


            var searchAttribute012 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_searchAttribute_description',
               'id' : 'aw8bd50faf',
            });
            searchAttributes005.addChild( searchAttribute012 );



            var listItemTemplate023 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_listItemTemplate_Item1Desc1',
               'id' : 'aw37209994',
            });

            var listtext090 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_Item1Desc1_location',
               'id' : 'aw887a2757',
            });
            listItemTemplate023.addChild( listtext090 );


            var listtext091 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_Item1Desc1_description',
               'id' : 'awe0eb662',
            });
            listItemTemplate023.addChild( listtext091 );



            var list023 = new List({
               'resource' : 'additionalstoreroom',
               'listItemTemplate' : listItemTemplate023,
               'artifactId' : 'Transfers.ToStoreroomLookup_additionalstoreroom_list',
               'id' : 'awb121d1ff',
               'searchAttributes' : searchAttributes005,
            });
            lookup005.addChild( list023 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'Transfers.ToStoreroomLookup.returnAttributes',
               'id' : 'aw95fd74df',
            });
            lookup005.addChild( returnAttributes004 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'tositeid',
               'artifactId' : 'Transfers.ToStoreroomLookup.returnAttributes.tosite',
               'id' : 'aw363a5d0d',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes004.addChild( returnAttribute006 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'tostoreroom',
               'artifactId' : 'Transfers.ToStoreroomLookup.returnAttributes.tostoreroom',
               'id' : 'aw3988bdb7',
               'sourceAttribute' : 'location',
            });
            returnAttributes004.addChild( returnAttribute007 );


            var lookup006 = new Lookup({
               'filterMethod' : 'filterToStoreroomForLookup',
               'resource' : 'additionalstoreroom',
               'filterClass' : 'application.handlers.TransfersAvailableItemsHandler',
               'id' : 'Transfers.TransferDetails_ToStoreroomLookup',
               'label' : MessageService.createStaticMessage('Select Storeroom'),
            });
            ui001.addChild( lookup006 );

            var requiredResources030 = {
               'additionalstoreroom' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom',
                  'id' : 'awba2980fb',
               },
            };
            lookup006.addRequiredResources( requiredResources030 );


            var searchAttributes006 = new SearchAttributes({
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_searchAttributes',
               'id' : 'aw12eafde8',
            });

            var searchAttribute013 = new SearchAttribute({
               'name' : 'locationForSearch',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_searchAttribute_locationForSearch',
               'id' : 'awcccb3bff',
            });
            searchAttributes006.addChild( searchAttribute013 );


            var searchAttribute014 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_searchAttribute_description',
               'id' : 'aw991daeb7',
            });
            searchAttributes006.addChild( searchAttribute014 );



            var listItemTemplate024 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_listItemTemplate_Item1Desc1',
               'id' : 'aw25e8388c',
            });

            var listtext092 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_Item1Desc1_location',
               'id' : 'awede9180f',
            });
            listItemTemplate024.addChild( listtext092 );


            var listtext093 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_Item1Desc1_description',
               'id' : 'aw5d7921cd',
            });
            listItemTemplate024.addChild( listtext093 );



            var list024 = new List({
               'resource' : 'additionalstoreroom',
               'listItemTemplate' : listItemTemplate024,
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup_additionalstoreroom_list',
               'id' : 'awe2e66429',
               'searchAttributes' : searchAttributes006,
            });
            lookup006.addChild( list024 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup.returnAttributes',
               'id' : 'awcd24292',
            });
            lookup006.addChild( returnAttributes005 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'tositeid',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup.returnAttributes.tosite',
               'id' : 'aw421cbbff',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes005.addChild( returnAttribute008 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'tostoreroom',
               'artifactId' : 'Transfers.TransferDetails_ToStoreroomLookup.returnAttributes.tostoreroom',
               'id' : 'aw8ffb26ce',
               'sourceAttribute' : 'location',
            });
            returnAttributes005.addChild( returnAttribute009 );


            var lookup007 = new Lookup({
               'resource' : 'site',
               'id' : 'Transfers.SiteLookup',
               'label' : MessageService.createStaticMessage('Select Site'),
            });
            ui001.addChild( lookup007 );

            var requiredResources031 = {
               'site' : {
                  'artifactId' : 'Transfers.SiteLookup.requiredResources.site',
                  'id' : 'awa68ccbda',
               },
            };
            lookup007.addRequiredResources( requiredResources031 );


            var searchAttributes007 = new SearchAttributes({
               'artifactId' : 'Transfers.SiteLookup.list.site.searchAttributes',
               'id' : 'aw66a544d7',
            });

            var searchAttribute015 = new SearchAttribute({
               'name' : 'siteid',
               'artifactId' : 'Transfers.SiteLookup.list.site.searchAttributes.siteid',
               'id' : 'aw13fc71cb',
            });
            searchAttributes007.addChild( searchAttribute015 );


            var searchAttribute016 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.SiteLookup.list.site.searchAttributes.description',
               'id' : 'awa20bb0f6',
            });
            searchAttributes007.addChild( searchAttribute016 );



            var listItemTemplate025 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.SiteLookup.listItemTemplate',
               'id' : 'aw13add45a',
            });

            var listtext094 = new ListText({
               'resourceAttribute' : 'siteid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.SiteLookup.listItemTemplate.siteid',
               'id' : 'aw8bcaf7d5',
            });
            listItemTemplate025.addChild( listtext094 );


            var listtext095 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.SiteLookup.listItemTemplate.description',
               'id' : 'aw2c97e9c2',
            });
            listItemTemplate025.addChild( listtext095 );



            var list025 = new List({
               'resource' : 'site',
               'listItemTemplate' : listItemTemplate025,
               'artifactId' : 'Transfers.SiteLookup.list.site',
               'id' : 'aw4692ca54',
               'searchAttributes' : searchAttributes007,
            });
            lookup007.addChild( list025 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'Transfers.SiteLookup.returnAttributes',
               'id' : 'awdde3626',
            });
            lookup007.addChild( returnAttributes006 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'tositeid',
               'artifactId' : 'Transfers.SiteLookup.returnAttributes.tosite',
               'id' : 'aw7bd915ff',
               'sourceAttribute' : 'siteid',
            });
            returnAttributes006.addChild( returnAttribute010 );


            var lookup008 = new Lookup({
               'filterMethod' : 'filterRotAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.RotatingAssetLookup',
               'label' : MessageService.createStaticMessage('Select Rotating Asset'),
            });
            ui001.addChild( lookup008 );



            var searchAttributes008 = new SearchAttributes({
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_searchAttributes',
               'id' : 'awacdf51db',
            });

            var searchAttribute017 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw5377568c',
            });
            searchAttributes008.addChild( searchAttribute017 );


            var searchAttribute018 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_searchAttribute_description',
               'id' : 'aw3c2b28fd',
            });
            searchAttributes008.addChild( searchAttribute018 );



            var listItemTemplate026 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_listItemTemplate_Item1Desc1',
               'id' : 'aw80debec6',
            });

            var listtext096 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_Item1Desc1_assetnum',
               'id' : 'aw7e838e6a',
            });
            listItemTemplate026.addChild( listtext096 );


            var listtext097 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_Item1Desc1_description',
               'id' : 'aw6275fdd0',
            });
            listItemTemplate026.addChild( listtext097 );



            var list026 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate026,
               'artifactId' : 'Transfers.RotatingAssetLookup_additionalasset_list',
               'id' : 'awae01842e',
               'searchAttributes' : searchAttributes008,
            });
            lookup008.addChild( list026 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'Transfers.RotatingAssetLookup_returnAttributes',
               'id' : 'aw9e416f88',
            });
            lookup008.addChild( returnAttributes007 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'rotassetnum',
               'artifactId' : 'Transfers.RotatingAssetLookup_item_itemnum',
               'id' : 'awb7b2f4e9',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes007.addChild( returnAttribute011 );


            var lookup009 = new Lookup({
               'resource' : 'additionalbin',
               'id' : 'Transfers.BinLookup',
               'label' : MessageService.createStaticMessage('Select Bin'),
            });
            ui001.addChild( lookup009 );

            var requiredResources032 = {
               'additionalbin' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.BinLookup_additionalbin',
                  'id' : 'awa8df83c1',
               },
               'additionalInventory' : {
                  'artifactId' : 'Transfers.BinLookup_additionalInventory',
                  'id' : 'aw8701fad6',
               },
            };
            lookup009.addRequiredResources( requiredResources032 );


            var searchAttributes009 = new SearchAttributes({
               'artifactId' : 'Transfers.BinLookup_additionalbin_searchAttributes',
               'id' : 'awdd013be0',
            });

            var searchAttribute019 = new SearchAttribute({
               'name' : 'binnum',
               'artifactId' : 'Transfers.BinLookup_additionalbin_searchAttribute_binnum',
               'id' : 'aw6d62ec79',
            });
            searchAttributes009.addChild( searchAttribute019 );



            var listItemTemplate027 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.BinLookup_additionalbin_listItemTemplate_Item1Desc1',
               'id' : 'awf16fed82',
            });

            var listtext098 = new ListText({
               'resourceAttribute' : 'binnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.BinLookup_additionalbin_Item1Desc1_binnum',
               'id' : 'aw7cd22bad',
            });
            listItemTemplate027.addChild( listtext098 );


            var listtext099 = new ListText({
               'resourceAttribute' : 'currentbalance',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.BinLookup_additionalbin_Item1Desc1_currentbalance',
               'id' : 'awe3e91a59',
            });
            listItemTemplate027.addChild( listtext099 );



            var list027 = new List({
               'resource' : 'additionalbin',
               'listItemTemplate' : listItemTemplate027,
               'artifactId' : 'Transfers.BinLookup_additionalbin_list',
               'id' : 'awd27f1451',
               'searchAttributes' : searchAttributes009,
            });
            lookup009.addChild( list027 );


            var lookup010 = new Lookup({
               'filterMethod' : 'asyncfilterItemForLookup',
               'resource' : 'additionalInventory',
               'filterClass' : 'application.handlers.TransfersHandler',
               'id' : 'Transfers.ItemLookup',
               'label' : MessageService.createStaticMessage('Select Item'),
            });
            ui001.addChild( lookup010 );



            var searchAttributes010 = new SearchAttributes({
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_searchAttributes',
               'id' : 'awf6bd1fcd',
            });

            var searchAttribute020 = new SearchAttribute({
               'name' : 'itemnum',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_searchAttribute_itemnum',
               'id' : 'aw12a484c2',
            });
            searchAttributes010.addChild( searchAttribute020 );


            var searchAttribute021 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_searchAttribute_itemdesc',
               'id' : 'awd41ba4bc',
            });
            searchAttributes010.addChild( searchAttribute021 );


            var searchAttribute022 = new SearchAttribute({
               'name' : 'binnum',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_searchAttribute_defaultbin',
               'id' : 'aw98c28dc4',
            });
            searchAttributes010.addChild( searchAttribute022 );



            var listItemTemplate028 = new ListItemTemplate({
               'layout' : 'ItemLookup',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_listItemTemplate_Item',
               'id' : 'aw266bd3db',
            });

            var listtext100 = new ListText({
               'resourceAttribute' : 'itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_ItemElement_itemnum',
               'id' : 'awffa97554',
            });
            listItemTemplate028.addChild( listtext100 );


            var listtext101 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_ItemElement_itemdesc',
               'id' : 'awcd9a9f3c',
            });
            listItemTemplate028.addChild( listtext101 );


            var listtext102 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_ItemElement_defaultbin',
               'id' : 'aw124ae52a',
            });
            listItemTemplate028.addChild( listtext102 );



            var list028 = new List({
               'resource' : 'additionalInventory',
               'listItemTemplate' : listItemTemplate028,
               'artifactId' : 'Transfers.ItemLookup_additionalInventory_list',
               'id' : 'awb72f2eb9',
               'searchAttributes' : searchAttributes010,
            });
            lookup010.addChild( list028 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'Transfers.ItemLookup_returnAttributes',
               'id' : 'awb241b518',
            });
            lookup010.addChild( returnAttributes008 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'itemnum',
               'artifactId' : 'Transfers.ItemLookup_item_itemnum',
               'id' : 'aw523fa564',
               'sourceAttribute' : 'itemnum',
            });
            returnAttributes008.addChild( returnAttribute012 );


            var lookup011 = new Lookup({
               'id' : 'Transfers.AttentionLookup',
               'label' : MessageService.createStaticMessage('Select Person'),
            });
            ui001.addChild( lookup011 );

            var requiredResources033 = {
               'additionalperson' : {
                  'artifactId' : 'Transfers.AttentionLookup_additionalperson',
                  'id' : 'awdb8269f1',
               },
            };
            lookup011.addRequiredResources( requiredResources033 );


            var searchAttributes011 = new SearchAttributes({
               'artifactId' : 'Transfers.AttentionLookup_searchAttributes',
               'id' : 'aw91d5033f',
            });

            var searchAttribute023 = new SearchAttribute({
               'name' : 'personid',
               'artifactId' : 'Transfers.AttentionLookup_searchAttribute_personid',
               'id' : 'aw90ddc679',
            });
            searchAttributes011.addChild( searchAttribute023 );


            var searchAttribute024 = new SearchAttribute({
               'name' : 'displayname',
               'artifactId' : 'Transfers.AttentionLookup_searchAttribute_displayname',
               'id' : 'aw3739ee1f',
            });
            searchAttributes011.addChild( searchAttribute024 );



            var listItemTemplate029 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.AttentionLookup_listItemTemplate_Item1Desc1',
               'id' : 'aw2135f4a4',
            });

            var listtext103 = new ListText({
               'resourceAttribute' : 'personid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.AttentionLookup_Item1Desc1_personid',
               'id' : 'aw30603c42',
            });
            listItemTemplate029.addChild( listtext103 );


            var listtext104 = new ListText({
               'resourceAttribute' : 'displayname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.AttentionLookup_Item1Desc1_displayname',
               'id' : 'aw448422c8',
            });
            listItemTemplate029.addChild( listtext104 );



            var list029 = new List({
               'resource' : 'additionalperson',
               'listItemTemplate' : listItemTemplate029,
               'artifactId' : 'Transfers.AttentionLookup_list',
               'id' : 'aw3ed372e7',
               'searchAttributes' : searchAttributes011,
            });
            lookup011.addChild( list029 );


            var returnAttributes009 = new ReturnAttributes({
               'artifactId' : 'Transfers.AttentionLookup_returnAttributes',
               'id' : 'awdfd7ad27',
            });
            lookup011.addChild( returnAttributes009 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'shiptoattn',
               'artifactId' : 'Transfers.AttentionLookup_personid_shiptoattn',
               'id' : 'aw4c12bfca',
               'sourceAttribute' : 'personid',
            });
            returnAttributes009.addChild( returnAttribute013 );


            var lookup012 = new Lookup({
               'filterMethod' : 'filterVendorForLookup',
               'resource' : 'additionalvendor',
               'filterClass' : 'application.handlers.ManagePurchaseOrderHandler',
               'id' : 'Transfers.VendorLookup',
               'label' : MessageService.createStaticMessage('Select Vendor'),
            });
            ui001.addChild( lookup012 );

            var requiredResources034 = {
               'additionalvendor' : {
                  'reload' : true,
                  'artifactId' : 'Transfers.VendorLookup.requiredResources.site',
                  'id' : 'awa1f7af2d',
               },
            };
            lookup012.addRequiredResources( requiredResources034 );


            var searchAttributes012 = new SearchAttributes({
               'artifactId' : 'Transfers.VendorLookup.list.site.searchAttributes',
               'id' : 'aw60653cab',
            });

            var searchAttribute025 = new SearchAttribute({
               'name' : 'companyForSearch',
               'artifactId' : 'Transfers.VendorLookup.list.site.searchAttributes.company',
               'id' : 'aw2e2a464',
            });
            searchAttributes012.addChild( searchAttribute025 );


            var searchAttribute026 = new SearchAttribute({
               'name' : 'name',
               'artifactId' : 'Transfers.VendorLookup.list.site.searchAttributes.name',
               'id' : 'aw515f4c90',
            });
            searchAttributes012.addChild( searchAttribute026 );



            var listItemTemplate030 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.VendorLookup.listItemTemplate',
               'id' : 'aw921d31ea',
            });

            var listtext105 = new ListText({
               'resourceAttribute' : 'company',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.VendorLookup.listItemTemplate.company',
               'id' : 'aw53878b46',
            });
            listItemTemplate030.addChild( listtext105 );


            var listtext106 = new ListText({
               'resourceAttribute' : 'name',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.VendorLookup.listItemTemplate.name',
               'id' : 'awbace5f63',
            });
            listItemTemplate030.addChild( listtext106 );



            var list030 = new List({
               'resource' : 'additionalvendor',
               'listItemTemplate' : listItemTemplate030,
               'artifactId' : 'Transfers.VendorLookup.list.site',
               'id' : 'aw4fd55561',
               'searchAttributes' : searchAttributes012,
            });
            lookup012.addChild( list030 );


            var returnAttributes010 = new ReturnAttributes({
               'artifactId' : 'Transfers.VendorLookup.returnAttributes',
               'id' : 'aw8c6ed396',
            });
            lookup012.addChild( returnAttributes010 );


            var returnAttribute014 = new ReturnAttribute({
               'targetAttribute' : 'vendor',
               'artifactId' : 'Transfers.VendorLookup.returnAttributes.vendor',
               'id' : 'awdf31e2c2',
               'sourceAttribute' : 'company',
            });
            returnAttributes010.addChild( returnAttribute014 );


            var lookup013 = new Lookup({
               'id' : 'Transfers.IssueToLookup',
               'label' : MessageService.createStaticMessage('Select Person'),
            });
            ui001.addChild( lookup013 );

            var requiredResources035 = {
               'additionalperson' : {
                  'artifactId' : 'Transfers.IssueToLookup_workOrder',
                  'id' : 'aw1bac2b9c',
               },
            };
            lookup013.addRequiredResources( requiredResources035 );


            var listItemTemplate031 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'Transfers.IssueToLookup_listItemTemplate_Item1Desc1',
               'id' : 'aw92f89e4',
            });

            var listtext107 = new ListText({
               'resourceAttribute' : 'personid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Transfers.IssueToLookup_Item1Desc1_personid',
               'id' : 'aw279f4e8b',
            });
            listItemTemplate031.addChild( listtext107 );


            var listtext108 = new ListText({
               'resourceAttribute' : 'displayname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'Transfers.IssueToLookup_Item1Desc1_displayname',
               'id' : 'aweaf17be9',
            });
            listItemTemplate031.addChild( listtext108 );



            var list031 = new List({
               'resource' : 'additionalperson',
               'listItemTemplate' : listItemTemplate031,
               'artifactId' : 'Transfers.IssueToLookup_list',
               'id' : 'aw3a3faa22',
            });
            lookup013.addChild( list031 );


            var returnAttributes011 = new ReturnAttributes({
               'artifactId' : 'Transfers.IssueToLookup_returnAttributes',
               'id' : 'awd27eb72a',
            });
            lookup013.addChild( returnAttributes011 );


            var returnAttribute015 = new ReturnAttribute({
               'targetAttribute' : 'issueTo',
               'artifactId' : 'Transfers.IssueToLookup_personid',
               'id' : 'aw2b66a6e4',
               'sourceAttribute' : 'personid',
            });
            returnAttributes011.addChild( returnAttribute015 );


            var actions001 = new Actions({
               'artifactId' : 'actions',
               'id' : 'aw548f1ef',
            });
            ui001.addChild( actions001 );


            var action001 = new Action({
               'overflow' : true,
               'artifactId' : 'ResetWorkList_action',
               'id' : 'aw956f5d3b',
               'label' : MessageService.createStaticMessage('Reset Work List'),
            });
            actions001.addChild( action001 );

            var eventHandlers163 = [
               {
                     'method' : 'resetWorkList',
                     'artifactId' : 'ResetWorkList_action_eventHandlers_click_findByScan',
                     'id' : 'aw11a2bd29',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               },
               {
                     'method' : 'enableResetWorkList',
                     'artifactId' : 'ResetWorkList_action_eventHandlers_render_enableResetWorkList',
                     'id' : 'awfb6356a8',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action001.eventHandlers = eventHandlers163;

            var action002 = new Action({
               'overflow' : true,
               'enableFeatureByProperty' : 'pushnotification.enabled',
               'transitionTo' : 'Platform.Notifications',
               'artifactId' : 'Notifications_action',
               'id' : 'aw1fc4c6b4',
               'label' : MessageService.createStaticMessage('Notifications'),
            });
            actions001.addChild( action002 );

            var eventHandlers164 = [
               {
                     'method' : 'enableNotification',
                     'artifactId' : 'Notifications_action_eventHandlers_render_enableResetWorkList',
                     'id' : 'awc608296f',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers164;

            var action003 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions001.addChild( action003 );

            var eventHandlers165 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action003.eventHandlers = eventHandlers165;

            var action004 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.Settings',
               'artifactId' : 'Settings_action',
               'id' : 'awc0b1927e',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            actions001.addChild( action004 );


            var action005 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.HelpAbout',
               'artifactId' : 'About_action',
               'id' : 'aw49fae06b',
               'label' : MessageService.createStaticMessage('About'),
            });
            actions001.addChild( action005 );


            var action006 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.LogOutPrompt',
               'artifactId' : 'LogOut_action',
               'id' : 'awd566efa2',
               'label' : MessageService.createStaticMessage('Log Out'),
            });
            actions001.addChild( action006 );


            var action007 = new Action({
               'artifactId' : 'action',
               'id' : 'aw47cc8c92',
            });
            actions001.addChild( action007 );

            var eventHandlers166 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action007.eventHandlers = eventHandlers166;

            var erroractions001 = new ErrorActions({
               'artifactId' : 'erroractions',
               'id' : 'aw6a5d95e9',
            });
            ui001.addChild( erroractions001 );


            var action008 = new Action({
               'artifactId' : 'UndoChanges_action',
               'id' : 'aw2236d58a',
               'label' : MessageService.createStaticMessage('Undo Changes'),
            });
            erroractions001.addChild( action008 );

            var eventHandlers167 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action008.eventHandlers = eventHandlers167;

            var action009 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action009 );

            var eventHandlers168 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action009.eventHandlers = eventHandlers168;
            var eventHandlers169 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers169;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view038 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view038 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view039 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view039 );

            var requiredResources036 = {
               'osusernotification' : {
                  'reload' : true,
                  'artifactId' : 'Platform.Notifications_osusernotification',
                  'id' : 'awed6a5e70',
               },
               'PlatformTempPushNotification' : {
                  'reload' : true,
                  'artifactId' : 'Platform.Notifications_PlatformTempPushNotification',
                  'id' : 'aw9993c5cb',
               },
            };
            view039.addRequiredResources( requiredResources036 );


            var listItemTemplate032 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext109 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate032.addChild( listtext109 );


            var listtext110 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate032.addChild( listtext110 );


            var listtext111 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate032.addChild( listtext111 );

            var eventHandlers170 = [
               {
                     'method' : 'openFromMsgHistory',
                     'artifactId' : 'Platform.Notifications_Open_button_eventHandlers_click_FromList',
                     'id' : 'awf03f57bd',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               },
               {
                     'method' : 'renderMsgHistoryItem',
                     'artifactId' : 'Platform.Notifications_Open_button_eventHandlers_render_FromList',
                     'id' : 'awfd2341e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            listItemTemplate032.eventHandlers = eventHandlers170;


            var list032 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate032,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view039.addChild( list032 );

            var eventHandlers171 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view039.eventHandlers = eventHandlers171;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view040 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view040 );

            var requiredResources037 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view040.addRequiredResources( requiredResources037 );

            var container053 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view040.addChild( container053 );


            var group024 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container053.addChild( group024 );


            var groupitem031 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group024.addChild( groupitem031 );


            var text106 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem031.addChild( text106 );


            var groupitem032 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group024.addChild( groupitem032 );


            var text107 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem032.addChild( text107 );


            var groupitem033 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group024.addChild( groupitem033 );


            var text108 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem033.addChild( text108 );

            var eventHandlers172 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text108.eventHandlers = eventHandlers172;

            var groupitem034 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group024.addChild( groupitem034 );


            var text109 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem034.addChild( text109 );


            var groupitem035 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group024.addChild( groupitem035 );


            var text110 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem035.addChild( text110 );


            var footer028 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view040.addChild( footer028 );


            var button083 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers173 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button083.eventHandlers = eventHandlers173;
            footer028.addChild( button083 );


            var button084 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers174 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button084.eventHandlers = eventHandlers174;
            footer028.addChild( button084 );

            var eventHandlers175 = [
               {
                     'method' : 'init',
                     'artifactId' : 'Platform.AttachmentInfoView_eventHandlers_initialize_init',
                     'id' : 'awbe3d1849',
                     'event' : 'initialize',
                     'class' : 'platform.handlers.AttachmentHandler',
               },
               {
                     'method' : 'cancelAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_eventHandlers_cleanup_handleBackButtonAttachmentDetailsView',
                     'id' : 'awb6598e9',
                     'event' : 'cleanup',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            view040.eventHandlers = eventHandlers175;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view041 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view041 );


            var footer029 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view041.addChild( footer029 );


            var button085 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers176 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button085.eventHandlers = eventHandlers176;
            footer029.addChild( button085 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup014 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup014 );

            var requiredResources038 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup014.addRequiredResources( requiredResources038 );


            var searchAttributes013 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute027 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes013.addChild( searchAttribute027 );



            var listItemTemplate033 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext112 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate033.addChild( listtext112 );



            var list033 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate033,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes013,
            });
            lookup014.addChild( list033 );


            var returnAttributes012 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup014.addChild( returnAttributes012 );


            var returnAttribute016 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes012.addChild( returnAttribute016 );


            var dialog005 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog005 );

            var requiredResources039 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog005.addRequiredResources( requiredResources039 );

            var container054 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog005.addChild( container054 );


            var group025 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container054.addChild( group025 );


            var groupitem036 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group025.addChild( groupitem036 );


            var text111 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem036.addChild( text111 );


            var text112 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'password',
               'cssClass' : 'loginPassword',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_password',
               'id' : 'awd836fb92',
               'label' : MessageService.createStaticMessage('Password'),
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Password'),
               'required' : true,
            });
            groupitem036.addChild( text112 );


            var text113 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem036.addChild( text113 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog005.addChild( container055 );


            var button086 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers177 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button086.eventHandlers = eventHandlers177;
            container055.addChild( button086 );


            var button087 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers178 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button087.eventHandlers = eventHandlers178;
            container055.addChild( button087 );

            var eventHandlers179 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog005.eventHandlers = eventHandlers179;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view042 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view042 );

            var requiredResources040 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view042.addRequiredResources( requiredResources040 );

            var footer030 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view042.addChild( footer030 );


            var button088 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers180 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button088.eventHandlers = eventHandlers180;
            footer030.addChild( button088 );


            var button089 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers181 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button089.eventHandlers = eventHandlers181;
            footer030.addChild( button089 );


            var button090 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers182 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button090.eventHandlers = eventHandlers182;
            footer030.addChild( button090 );

            var eventHandlers183 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view042.eventHandlers = eventHandlers183;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog006 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog006 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog006.addChild( container056 );


            var button091 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers184 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button091.eventHandlers = eventHandlers184;
            container056.addChild( button091 );


            var button092 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers185 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button092.eventHandlers = eventHandlers185;
            container056.addChild( button092 );


            var button093 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers186 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button093.eventHandlers = eventHandlers186;
            container056.addChild( button093 );

            var eventHandlers187 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog006.eventHandlers = eventHandlers187;

            var dialog007 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog007 );

            var eventHandlers188 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog007.eventHandlers = eventHandlers188;

            var container057 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog007.addChild( container057 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container057.addChild( datetimepicker001 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog007.addChild( container058 );


            var button094 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers189 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button094.eventHandlers = eventHandlers189;
            container058.addChild( button094 );


            var button095 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers190 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button095.eventHandlers = eventHandlers190;
            container058.addChild( button095 );


            var button096 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers191 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button096.eventHandlers = eventHandlers191;
            container058.addChild( button096 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view043 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view043 );


            var container059 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view043.addChild( container059 );


            var image009 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container059.addChild( image009 );


            var text114 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container059.addChild( text114 );


            var text115 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container059.addChild( text115 );


            var text116 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container059.addChild( text116 );


            var text117 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container059.addChild( text117 );


            var group026 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container059.addChild( group026 );


            var groupitem037 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group026.addChild( groupitem037 );


            var text118 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem037.addChild( text118 );


            var text119 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem037.addChild( text119 );


            var text120 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem037.addChild( text120 );


            var text121 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem037.addChild( text121 );


            var text122 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem037.addChild( text122 );


            var text123 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem037.addChild( text123 );


            var text124 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem037.addChild( text124 );


            var text125 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem037.addChild( text125 );


            var text126 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem037.addChild( text126 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view044 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view044 );

            var requiredResources041 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view044.addRequiredResources( requiredResources041 );

            var actions002 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view044.addChild( actions002 );


            var action010 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions002.addChild( action010 );

            var eventHandlers192 = [
               {
                     'method' : 'openDownloadSystemDataDialog',
                     'artifactId' : 'Platform.Settings_RefreshSystemData_action_eventHandlers_click_downloadSystemData',
                     'id' : 'aw490b2801',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'renderDownloadSytemDataActionButton',
                     'artifactId' : 'Platform.Settings_RefreshSystemData_action_eventHandlers_render_renderDownloadSytemDataActionButton',
                     'id' : 'awa42bdfcc',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            action010.eventHandlers = eventHandlers192;

            var container060 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view044.addChild( container060 );


            var group027 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container060.addChild( group027 );


            var groupitem038 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group027.addChild( groupitem038 );


            var text127 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem038.addChild( text127 );

            var eventHandlers193 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem038.eventHandlers = eventHandlers193;

            var groupitem039 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group027.addChild( groupitem039 );


            var text128 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem039.addChild( text128 );


            var text129 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem039.addChild( text129 );

            var eventHandlers194 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text129.eventHandlers = eventHandlers194;

            var text130 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem039.addChild( text130 );

            var eventHandlers195 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem039.eventHandlers = eventHandlers195;

            var groupitem040 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group027.addChild( groupitem040 );


            var text131 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem040.addChild( text131 );

            var eventHandlers196 = [
               {
                     'method' : 'renderDayToSYnc',
                     'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync_eventHandlers_renderDayToSYnc',
                     'id' : 'awdc11c959',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'saveDayToSync',
                     'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync_eventHandlers_saveDayToSYnc',
                     'id' : 'aw57729721',
                     'event' : 'validate',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            text131.eventHandlers = eventHandlers196;

            var groupitem041 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group027.addChild( groupitem041 );


            var text132 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem041.addChild( text132 );


            var container061 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view044.addChild( container061 );


            var group028 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container061.addChild( group028 );


            var groupitem042 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group028.addChild( groupitem042 );


            var text133 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem042.addChild( text133 );


            var text134 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem042.addChild( text134 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem042.addChild( radiobutton001 );

            var eventHandlers197 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler1',
                     'id' : 'awe9d7776d',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.allCOnnection.click.EventHandler',
                     'id' : 'aw76203443',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton001.eventHandlers = eventHandlers197;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem042.addChild( radiobutton002 );

            var eventHandlers198 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler2',
                     'id' : 'aw70de26d7',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.WiFi.click.EventHandler',
                     'id' : 'aw183e4c0c',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton002.eventHandlers = eventHandlers198;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem042.addChild( radiobutton003 );

            var eventHandlers199 = [
               {
                     'method' : 'renderConnetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.AllConnection.EventHandler3',
                     'id' : 'aw7d91641',
                     'event' : 'render',
                     'class' : 'platform.handlers.SettingsHandler',
               },
               {
                     'method' : 'connetionManagementSetting',
                     'artifactId' : 'Platform.Settings.ConnectionManagement.Cellular.EventHandler',
                     'id' : 'aw2a978e73',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            radiobutton003.eventHandlers = eventHandlers199;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view045 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view045 );


            var container062 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view045.addChild( container062 );


            var group029 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container062.addChild( group029 );


            var groupitem043 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group029.addChild( groupitem043 );


            var text135 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem043.addChild( text135 );


            var text136 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem043.addChild( text136 );


            var groupitem044 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group029.addChild( groupitem044 );


            var text137 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem044.addChild( text137 );


            var text138 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem044.addChild( text138 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view046 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view046 );


            var actions003 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view046.addChild( actions003 );


            var action011 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions003.addChild( action011 );

            var eventHandlers200 = [
               {
                     'method' : 'enableDisableLoggerErro',
                     'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action_eventHandlers_click_enableDisableLoggerErro',
                     'id' : 'awf5ad7151',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelError',
                     'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action_eventHandlers_render_setLabelError',
                     'id' : 'aw4faa4e07',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action011.eventHandlers = eventHandlers200;

            var action012 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions003.addChild( action012 );

            var eventHandlers201 = [
               {
                     'method' : 'enableDisableLoggerInfo',
                     'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action_eventHandlers_click_enableDisableLoggerInfo',
                     'id' : 'aw164710f9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelInfo',
                     'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action_eventHandlers_render_setLabelInfo',
                     'id' : 'awc8b2e890',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action012.eventHandlers = eventHandlers201;

            var action013 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions003.addChild( action013 );

            var eventHandlers202 = [
               {
                     'method' : 'enableDisableLoggerDebug',
                     'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action_eventHandlers_click_enableDisableLoggerDebug',
                     'id' : 'aw49ea32aa',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'setLabelDebug',
                     'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action_eventHandlers_render_setLabelDebug',
                     'id' : 'aw1cc86c8a',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action013.eventHandlers = eventHandlers202;

            var action014 = new Action({
               'overflow' : true,
               'transitionTo' : 'Platform.TransLoggerReport',
               'artifactId' : 'Platform.LoggerReport_ViewTransactionLog_action',
               'id' : 'awdaed3d40',
               'label' : MessageService.createStaticMessage('View Transaction Log'),
            });
            actions003.addChild( action014 );


            var action015 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_ClearLogData_action',
               'id' : 'awb6d3895c',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions003.addChild( action015 );

            var eventHandlers203 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action015.eventHandlers = eventHandlers203;

            var action016 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions003.addChild( action016 );

            var eventHandlers204 = [
               {
                     'method' : 'showIfConnected',
                     'artifactId' : 'Platform.LoggerReport_UploadLog_action_eventHandlers_render_uploadCurrent',
                     'id' : 'aw4d53a4f5',
                     'event' : 'render',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               },
               {
                     'method' : 'uploadCurrent',
                     'artifactId' : 'Platform.LoggerReport_UploadLog_action_eventHandlers_click_uploadCurrent',
                     'id' : 'aw2b172289',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action016.eventHandlers = eventHandlers204;

            var action017 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions003.addChild( action017 );

            var eventHandlers205 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action017.eventHandlers = eventHandlers205;
            var eventHandlers206 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view046.eventHandlers = eventHandlers206;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view047 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view047 );


            var actions004 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view047.addChild( actions004 );


            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions004.addChild( action018 );

            var eventHandlers207 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action018.eventHandlers = eventHandlers207;

            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions004.addChild( action019 );

            var eventHandlers208 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action019.eventHandlers = eventHandlers208;
            var eventHandlers209 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view047.eventHandlers = eventHandlers209;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view048 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view048 );


            var container063 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view048.addChild( container063 );


            var text139 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container063.addChild( text139 );


            var text140 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container063.addChild( text140 );


            var text141 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container063.addChild( text141 );

            var eventHandlers210 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text141.eventHandlers = eventHandlers210;

            var text142 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container063.addChild( text142 );


            var text143 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container063.addChild( text143 );


            var button097 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers211 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button097.eventHandlers = eventHandlers211;
            container063.addChild( button097 );


            var button098 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers212 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button098.eventHandlers = eventHandlers212;
            container063.addChild( button098 );

            var eventHandlers213 = [
               {
                     'method' : 'initializeChangePasswordView',
                     'artifactId' : 'Platform.ChangePassword_eventHandlers_show_initializeChangePasswordView',
                     'id' : 'awbbd173b',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               },
               {
                     'method' : 'changePasswordBack',
                     'artifactId' : 'Platform.ChangePassword_eventHandlers_back_changePasswordBack',
                     'id' : 'awc25c9010',
                     'event' : 'back',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view048.eventHandlers = eventHandlers213;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view049 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view049 );


            var container064 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view049.addChild( container064 );


            var text144 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container064.addChild( text144 );


            var text145 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container064.addChild( text145 );


            var text146 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container064.addChild( text146 );


            var button099 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers214 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button099.eventHandlers = eventHandlers214;
            container064.addChild( button099 );


            var button100 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers215 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button100.eventHandlers = eventHandlers215;
            container064.addChild( button100 );

            var eventHandlers216 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view049.eventHandlers = eventHandlers216;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog008 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog008 );


            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog008.addChild( container065 );


            var text147 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container065.addChild( text147 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog008.addChild( container066 );


            var button101 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers217 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button101.eventHandlers = eventHandlers217;
            container066.addChild( button101 );


            var button102 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers218 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button102.eventHandlers = eventHandlers218;
            container066.addChild( button102 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view050 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view050 );

            var requiredResources042 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view050.addRequiredResources( requiredResources042 );

            var actions005 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view050.addChild( actions005 );


            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions005.addChild( action020 );

            var eventHandlers219 = [
               {
                     'method' : 'enableDisableTT',
                     'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action_eventHandlers_click_enableDisableTT',
                     'id' : 'aw10972127',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               },
               {
                     'method' : 'setLabel',
                     'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action_eventHandlers_render_setLabel',
                     'id' : 'awf9abf636',
                     'event' : 'render',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action020.eventHandlers = eventHandlers219;

            var action021 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions005.addChild( action021 );

            var eventHandlers220 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action021.eventHandlers = eventHandlers220;

            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions005.addChild( action022 );

            var eventHandlers221 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action022.eventHandlers = eventHandlers221;
            var eventHandlers222 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view050.eventHandlers = eventHandlers222;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog009 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog009 );



            var listItemTemplate034 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext113 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate034.addChild( listtext113 );



            var list034 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate034,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog009.addChild( list034 );


            var dialog010 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog010 );


            var container067 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog010.addChild( container067 );


            var text148 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container067.addChild( text148 );


            var button103 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers223 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button103.eventHandlers = eventHandlers223;
            container067.addChild( button103 );


            var dialog011 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog011 );


            var container068 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog011.addChild( container068 );


            var text149 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container068.addChild( text149 );


            var container069 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog011.addChild( container069 );


            var button104 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers224 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button104.eventHandlers = eventHandlers224;
            container069.addChild( button104 );


            var dialog012 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog012 );


            var container070 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog012.addChild( container070 );


            var text150 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container070.addChild( text150 );


            var container071 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog012.addChild( container071 );


            var button105 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers225 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button105.eventHandlers = eventHandlers225;
            container071.addChild( button105 );


            var button106 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers226 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button106.eventHandlers = eventHandlers226;
            container071.addChild( button106 );


            var dialog013 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog013 );


            var container072 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog013.addChild( container072 );


            var text151 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container072.addChild( text151 );


            var dialog014 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog014 );


            var container073 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog014.addChild( container073 );


            var text152 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container073.addChild( text152 );


            var container074 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog014.addChild( container074 );


            var button107 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers227 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button107.eventHandlers = eventHandlers227;
            container074.addChild( button107 );


            var dialog015 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog015 );


            var container075 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog015.addChild( container075 );


            var text153 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container075.addChild( text153 );


            var text154 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container075.addChild( text154 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog016 );


            var container076 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog016.addChild( container076 );


            var text155 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container076.addChild( text155 );

            var eventHandlers228 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text155.eventHandlers = eventHandlers228;

            var text156 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container076.addChild( text156 );

            var eventHandlers229 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text156.eventHandlers = eventHandlers229;

            var text157 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container076.addChild( text157 );

            var eventHandlers230 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text157.eventHandlers = eventHandlers230;

            var container077 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog016.addChild( container077 );


            var button108 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers231 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw257121b',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'setBtLabelLaterOrCancel',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_setBtLabelLaterOrCancel',
                     'id' : 'aw6ece4695',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button108.eventHandlers = eventHandlers231;
            container077.addChild( button108 );


            var button109 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers232 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'aw7df27335',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'setBtLabelNowOrRefresh',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_setBtLabelNowOrRefresh',
                     'id' : 'aw83fe125f',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button109.eventHandlers = eventHandlers232;
            container077.addChild( button109 );


            var button110 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers233 = [
               {
                     'method' : 'retryADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_click_retryADDownload',
                     'id' : 'aw7bef6fb1',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               },
               {
                     'method' : 'renderRetryButton',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button_eventHandlers_render_retryADDownload',
                     'id' : 'awfa4998f7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button110.eventHandlers = eventHandlers233;
            container077.addChild( button110 );


            var dialog017 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog017 );


            var container078 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog017.addChild( container078 );


            var text158 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container078.addChild( text158 );


            var text159 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container078.addChild( text159 );


            var text160 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container078.addChild( text160 );


            var text161 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container078.addChild( text161 );


            var text162 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container078.addChild( text162 );

            var eventHandlers234 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text162.eventHandlers = eventHandlers234;

            var container079 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog017.addChild( container079 );


            var button111 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers235 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button111.eventHandlers = eventHandlers235;
            container079.addChild( button111 );


            var button112 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers236 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button112.eventHandlers = eventHandlers236;
            container079.addChild( button112 );


            var button113 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers237 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button113.eventHandlers = eventHandlers237;
            container079.addChild( button113 );


            var dialog018 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog018 );


            var container080 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog018.addChild( container080 );


            var text163 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container080.addChild( text163 );


            var text164 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container080.addChild( text164 );


            var text165 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container080.addChild( text165 );


            var text166 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container080.addChild( text166 );


            var text167 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container080.addChild( text167 );

            var eventHandlers238 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text167.eventHandlers = eventHandlers238;

            var container081 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog018.addChild( container081 );


            var button114 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers239 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button114.eventHandlers = eventHandlers239;
            container081.addChild( button114 );


            var button115 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers240 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button115.eventHandlers = eventHandlers240;
            container081.addChild( button115 );


            var button116 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers241 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button116.eventHandlers = eventHandlers241;
            container081.addChild( button116 );


            var dialog019 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog019 );


            var container082 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog019.addChild( container082 );


            var text168 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container082.addChild( text168 );


            var container083 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog019.addChild( container083 );


            var button117 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers242 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button117.eventHandlers = eventHandlers242;
            container083.addChild( button117 );


            var button118 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers243 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button118.eventHandlers = eventHandlers243;
            container083.addChild( button118 );


            var dialog020 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog020 );


            var container084 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog020.addChild( container084 );


            var text169 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container084.addChild( text169 );


            var container085 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog020.addChild( container085 );


            var button119 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers244 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button119.eventHandlers = eventHandlers244;
            container085.addChild( button119 );


            var button120 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers245 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button120.eventHandlers = eventHandlers245;
            container085.addChild( button120 );


            var dialog021 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog021 );

            var eventHandlers246 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog021.eventHandlers = eventHandlers246;

            var container086 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog021.addChild( container086 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container086.addChild( durationpicker001 );


            var container087 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog021.addChild( container087 );


            var button121 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers247 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button121.eventHandlers = eventHandlers247;
            container087.addChild( button121 );


            var button122 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers248 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button122.eventHandlers = eventHandlers248;
            container087.addChild( button122 );


            var button123 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers249 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button123.eventHandlers = eventHandlers249;
            container087.addChild( button123 );


            var dialog022 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog022 );


            var container088 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog022.addChild( container088 );


            var text170 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container088.addChild( text170 );


            var container089 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog022.addChild( container089 );


            var button124 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers250 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button124.eventHandlers = eventHandlers250;
            container089.addChild( button124 );


            var button125 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers251 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button125.eventHandlers = eventHandlers251;
            container089.addChild( button125 );


            var dialog023 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog023 );


            var container090 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog023.addChild( container090 );


            var text171 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container090.addChild( text171 );


            var container091 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog023.addChild( container091 );


            var button126 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers252 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button126.eventHandlers = eventHandlers252;
            container091.addChild( button126 );


            var button127 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers253 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button127.eventHandlers = eventHandlers253;
            container091.addChild( button127 );


            var dialog024 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog024 );


            var container092 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog024.addChild( container092 );


            var text172 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container092.addChild( text172 );


            var container093 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog024.addChild( container093 );


            var button128 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers254 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button128.eventHandlers = eventHandlers254;
            container093.addChild( button128 );


            var dialog025 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog025 );


            var container094 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog025.addChild( container094 );


            var text173 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container094.addChild( text173 );


            var container095 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog025.addChild( container095 );


            var button129 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers255 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button129.eventHandlers = eventHandlers255;
            container095.addChild( button129 );


            var dialog026 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog026 );


            var container096 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog026.addChild( container096 );


            var text174 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container096.addChild( text174 );


            var container097 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog026.addChild( container097 );


            var button130 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers256 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button130.eventHandlers = eventHandlers256;
            container097.addChild( button130 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog027 );


            var container098 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog027.addChild( container098 );


            var text175 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container098.addChild( text175 );


            var container099 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog027.addChild( container099 );


            var button131 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers257 = [
               {
                     'method' : 'openRecord',
                     'artifactId' : 'Platform.PushNotificationDialog_Open_button_eventHandlers_click_WOStartedDialogNoClickHandler',
                     'id' : 'aw32cc643',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               },
               {
                     'method' : 'renderOpen',
                     'artifactId' : 'Platform.PushNotificationDialog_Open_button_eventHandlers_render_RenderOpenButton',
                     'id' : 'awff1adc93',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button131.eventHandlers = eventHandlers257;
            container099.addChild( button131 );


            var button132 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers258 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button132.eventHandlers = eventHandlers258;
            container099.addChild( button132 );


            var dialog028 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog028 );


            var container100 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog028.addChild( container100 );


            var text176 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container100.addChild( text176 );


            var container101 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog028.addChild( container101 );


            var button133 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers259 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button133.eventHandlers = eventHandlers259;
            container101.addChild( button133 );


            var button134 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers260 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button134.eventHandlers = eventHandlers260;
            container101.addChild( button134 );

            app001.addHandler( {name : 'application.handlers.ManagePurchaseOrderHandler', 'class': new ManagePurchaseOrderHandler()} );
            app001.addHandler( {name : 'application.handlers.ReceiveShipmentHandler', 'class': new ReceiveShipmentHandler()} );
            app001.addHandler( {name : 'application.handlers.TransfersAvailableItemsHandler', 'class': new TransfersAvailableItemsHandler()} );
            app001.addHandler( {name : 'application.handlers.TransfersHandler', 'class': new TransfersHandler()} );
            app001.addHandler( {name : 'platform.handlers.AdditionalDataDialogHandler', 'class': new AdditionalDataDialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.AttachmentHandler', 'class': new AttachmentHandler()} );
            app001.addHandler( {name : 'platform.handlers.ChangePasswordHandler', 'class': new ChangePasswordHandler()} );
            app001.addHandler( {name : 'platform.handlers.CreateQueryBaseHandler', 'class': new CreateQueryBaseHandler()} );
            app001.addHandler( {name : 'platform.handlers.DialogHandler', 'class': new DialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.EsigHandler', 'class': new EsigHandler()} );
            app001.addHandler( {name : 'platform.handlers.LoginHandler', 'class': new LoginHandler()} );
            app001.addHandler( {name : 'platform.handlers.LookupHandler', 'class': new LookupHandler()} );
            app001.addHandler( {name : 'platform.handlers.PseudoOfflineModeHandler', 'class': new PseudoOfflineModeHandler()} );
            app001.addHandler( {name : 'platform.handlers.PushNotificationDialogHandler', 'class': new PushNotificationDialogHandler()} );
            app001.addHandler( {name : 'platform.handlers.SSOHandler', 'class': new SSOHandler()} );
            app001.addHandler( {name : 'platform.handlers.SettingsHandler', 'class': new SettingsHandler()} );
            app001.addHandler( {name : 'platform.handlers.WorkOfflineHandler', 'class': new WorkOfflineHandler()} );
            app001.addHandler( {name : 'platform.handlers._ApplicationHandlerBase', 'class': new _ApplicationHandlerBase()} );
            app001.addHandler( {name : 'platform.logging.handler.LoggerReportHandler', 'class': new LoggerReportHandler()} );
            app001.addHandler( {name : 'platform.performance.handler.TimeTrackHandler', 'class': new TimeTrackHandler()} );
            app001.addHandler( {name : 'platform.signature.handler.SignatureHandler', 'class': new SignatureHandler()} );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating Resources in ApplicationUIBuilder', false);
               trackTimer.startTracking();
            }
            var that001 = this;
            all([
               app001.createResource(null, null, 'PlatformDemoModeResource'),
               app001.createResource(null, null, 'LastADDownload'),
               app001.createResource(null, null, 'DeviceSizeResource'),
               app001.createResource(null, null, 'SSODialogResource'),
               app001.createResource(null, null, 'PlatformLongPressResource'),
               app001.createResource(null, null, 'PlatformDateLookupResource')
            ]).then(
               function(){
                  that001.addApplication( app001 );
               }
            );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }
            console.log('Finished Creating App');
         }
      });
});
