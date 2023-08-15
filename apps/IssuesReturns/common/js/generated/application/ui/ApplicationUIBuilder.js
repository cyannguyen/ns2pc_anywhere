/* 
 * Licensed Materials - Property of IBM
 * "Restricted Materials of IBM"
 *
 * 5725-M39
 *
 * (C) COPYRIGHT IBM CORP. 2023 All Rights Reserved.
 * US Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA ADP Schedule Contract with
 * IBM Corp. 
 *
 */
 
//----------------------------------------------------------------//
// This is auto generated code. Do not modify it manually.
// Product and Version: IBM Maximo Anywhere Version 7.5
// Build: 2023-08-15 11:35:06
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
         "platform/ui/control/Group", 
         "platform/ui/control/GroupItem", 
         "application/handlers/IssuesReturnsHandler", 
         "application/handlers/IssuesAvailableItemsHandler", 
         "platform/ui/control/Link", 
         "platform/ui/control/Footer", 
         "application/handlers/ReturnIssuedItemsHandler", 
         "platform/ui/control/List", 
         "platform/ui/control/SortOptions", 
         "platform/ui/control/SortOption", 
         "platform/ui/control/SortAttribute", 
         "platform/ui/control/ListItemTemplate", 
         "platform/ui/control/ListText", 
         "platform/ui/control/CheckBox", 
         "application/handlers/TaskHandler", 
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

function(declare, all, BuilderBase, window, array, ioQuery, AdditionalDataManager, AdditionalDataUIManager, MessageService, Application, UserInterface, Dialog, Container, Text, Button, SSOHandler, LoginHandler, View, Image, _ApplicationHandlerBase, Group, GroupItem, IssuesReturnsHandler, IssuesAvailableItemsHandler, Link, Footer, ReturnIssuedItemsHandler, List, SortOptions, SortOption, SortAttribute, ListItemTemplate, ListText, CheckBox, TaskHandler, TextArea, Lookup, SearchAttributes, SearchAttribute, ReturnAttributes, ReturnAttribute, Actions, Action, WorkOfflineHandler, PseudoOfflineModeHandler, CreateQueryBaseHandler, ErrorActions, LookupHandler, PushNotificationDialogHandler, AttachmentHandler, EsigHandler, SignatureHandler, DateTimePicker, SettingsHandler, ChangePasswordHandler, AdditionalDataDialogHandler, RadioButton, LoggerReportHandler, TimeTrackHandler, DialogHandler, DurationPicker) {
      return declare("generated.application.ui.ApplicationUIBuilder", BuilderBase, {

         build : function() {
            console.log('Creating App');

            MessageService.init('artifact');


            var app001 = new Application({
               'logLevel' : 0,
               'xsi:noNamespaceSchemaLocation' : '..\/..\/..\/build\/app.xsd',
               'xmlns:xsi' : 'http:\/\/www.w3.org\/2001\/XMLSchema-instance',
               'id' : 'issuesReturns',
               'blindQuerySupport' : 'false',
               'version' : '201509031814',
               'requiredRole' : 'ANYWHERE_ISSUES_RETURNS',
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
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.StoreroomSelectionView', false);
               trackTimer.startTracking();
            }

            var view002 = new View({
               'showBackButton' : 'false',
               'resource' : 'issuesReturns',
               'id' : 'IssuesReturns.StoreroomSelectionView',
               'label' : MessageService.createStaticMessage('Issues and Returns'),
            });
            ui001.addChild( view002 );


            var container008 = new Container({
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_IssuesReturns_container_0',
               'id' : 'awc9d542b8',
            });
            view002.addChild( container008 );


            var group001 = new Group({
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_group_0',
               'id' : 'awaa652e38',
            });
            container008.addChild( group001 );


            var groupitem001 = new GroupItem({
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_siteid_groupitem_1',
               'id' : 'aw8bed287f',
            });
            group001.addChild( groupitem001 );


            var text011 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_siteid_groupitem_0',
               'id' : 'awfcea18e9',
               'label' : MessageService.createStaticMessage('Site'),
            });
            groupitem001.addChild( text011 );

            var eventHandlers007 = [
               {
                     'method' : 'storeroomSiteRender',
                     'artifactId' : 'IssuesReturns.StoreroomSelectionView_groupitem_0_siteid_eventHandlers_render_view',
                     'id' : 'aw2b7c615d',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text011.eventHandlers = eventHandlers007;

            var group002 = new Group({
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_group_1',
               'id' : 'awdd621eae',
            });
            container008.addChild( group002 );


            var groupitem002 = new GroupItem({
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_storeroom_groupitem_1',
               'id' : 'aw668fe200',
            });
            group002.addChild( groupitem002 );


            var text012 = new Text({
               'resourceAttribute' : 'storeroom',
               'lookup' : 'IssuesReturns.StoreroomLookup',
               'editable' : true,
               'labelCss' : 'editableLabel',
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_storeroom_groupitem_1_text',
               'id' : 'awc316cef3',
               'label' : MessageService.createStaticMessage('Storeroom'),
               'lookupAttribute' : 'location',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem002.addChild( text012 );

            var eventHandlers008 = [
               {
                     'method' : 'validateStoreroom',
                     'artifactId' : 'IssuesReturns.StoreroomSelectionView_groupitem_1_storeroom_eventHandlers_datachange_storeroom',
                     'id' : 'awb96dd123',
                     'event' : 'datachange',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text012.eventHandlers = eventHandlers008;

            var button005 = new Button({
               'cssClass' : 'mblPrimaryButton mblGroupButtonIssueReturnMainView',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_IssueReserved_button',
               'id' : 'awef49b1c3',
               'label' : MessageService.createStaticMessage('Issue Reserved Items'),
            });
            var eventHandlers009 = [
               {
                     'method' : 'transitsToIssuePlannedSearchView',
                     'artifactId' : 'IssuesReturns.StoreroomSelectionView_issueplanned_button_eventHandlers_click',
                     'id' : 'awd1ca91bd',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button005.eventHandlers = eventHandlers009;
            container008.addChild( button005 );


            var button006 = new Button({
               'cssClass' : 'mblPrimaryButton mblGroupButtonIssueReturnMainView',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_IssueUnreserved_button',
               'id' : 'awfcc8300b',
               'label' : MessageService.createStaticMessage('Issue Additional Items'),
            });
            var eventHandlers010 = [
               {
                     'method' : 'transitsToIssueAdditionalSearchView',
                     'artifactId' : 'IssuesReturns.StoreroomSelectionView_issueadditionl_button_eventHandlers_click',
                     'id' : 'awbea5cf6f',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            button006.eventHandlers = eventHandlers010;
            container008.addChild( button006 );


            var button007 = new Button({
               'cssClass' : 'mblPrimaryButton mblGroupButtonIssueReturnMainView',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'IssuesReturns.StoreroomSelectionView_Return_button',
               'id' : 'aw81a739b6',
               'label' : MessageService.createStaticMessage('Return Items'),
            });
            var eventHandlers011 = [
               {
                     'method' : 'transitsToReturnSearchView',
                     'artifactId' : 'IssuesReturns.StoreroomSelectionView_returnitem_button_eventHandlers_click',
                     'id' : 'aw1fdd89b7',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button007.eventHandlers = eventHandlers011;
            container008.addChild( button007 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.SearchInvreserveView', false);
               trackTimer.startTracking();
            }

            var view003 = new View({
               'resource' : 'issuesReturns',
               'id' : 'IssuesReturns.SearchInvreserveView',
               'label' : MessageService.createStaticMessage('Search Reserved Items'),
            });
            ui001.addChild( view003 );

            var requiredResources002 = {
               'errorResource' : {
                  'artifactId' : 'IssuesReturns.SearchInvreserveView_requiredResource_errorResource',
                  'id' : 'aw68850231',
               },
            };
            view003.addRequiredResources( requiredResources002 );

            var container009 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'IssuesReturns.SearchInvreserve_container_0',
               'id' : 'aw24f5b4bc',
            });
            view003.addChild( container009 );


            var link001 = new Link({
               'artifactId' : 'link',
               'id' : 'aw36ac99f1',
               'label' : MessageService.createStaticMessage(''),
            });
            container009.addChild( link001 );

            var eventHandlers012 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'link_eventHandlers_click',
                     'id' : 'aw2ea586b5',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw6f7bdfb3',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            link001.eventHandlers = eventHandlers012;

            var container010 = new Container({
               'resource' : 'issuesReturns',
               'artifactId' : 'IssuesReturns.SearchInvreserve_container_1',
               'id' : 'aw53f2842a',
            });
            view003.addChild( container010 );


            var group003 = new Group({
               'artifactId' : 'IssuesReturns.SearchInvreserve_group_1',
               'id' : 'aw419737e7',
            });
            container010.addChild( group003 );


            var groupitem003 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchInvreserve_workorder_groupitem_0',
               'id' : 'aw5ab36a58',
            });
            group003.addChild( groupitem003 );


            var text013 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchInvreserve_siteid',
               'id' : 'awa2652270',
               'label' : MessageService.createStaticMessage('Site'),
            });
            groupitem003.addChild( text013 );


            var text014 = new Text({
               'resourceAttribute' : 'storeroom',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchInvreserve_storeroom',
               'id' : 'aw8f01bf28',
               'label' : MessageService.createStaticMessage('Storeroom'),
            });
            groupitem003.addChild( text014 );


            var groupitem004 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchInvreserve_workorder_groupitem_1',
               'id' : 'aw2db45ace',
            });
            group003.addChild( groupitem004 );


            var text015 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchInvreserve_wonum',
               'id' : 'aw81cc7b93',
               'label' : MessageService.createStaticMessage('Work Order'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem004.addChild( text015 );

            var eventHandlers013 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'IssuesReturns.SearchInvreserve_wonum_eventHandler',
                     'id' : 'aw93d0c858',
                     'event' : 'datachange',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text015.eventHandlers = eventHandlers013;

            var groupitem005 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchInvreserve_asset_groupitem_2',
               'id' : 'aw66024224',
            });
            group003.addChild( groupitem005 );


            var text016 = new Text({
               'resourceAttribute' : 'asset',
               'lookup' : 'IssuesReturns.AssetLookup',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchInvreserve_asset',
               'id' : 'aw4ef47b24',
               'label' : MessageService.createStaticMessage('Asset'),
               'lookupAttribute' : 'assetnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem005.addChild( text016 );

            var eventHandlers014 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'IssuesReturns.SearchInvreserve_asset_eventHandler',
                     'id' : 'aw52adf94d',
                     'event' : 'datachange',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text016.eventHandlers = eventHandlers014;

            var footer001 = new Footer({
               'artifactId' : 'IssuesReturns.SearchInvreserve_footer',
               'id' : 'awbca3a77c',
            });
            view003.addChild( footer001 );


            var button008 = new Button({
               'artifactId' : 'IssuesReturns.SearchInvreserve_Clear_button',
               'id' : 'aw276aaeee',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers015 = [
               {
                     'method' : 'clearSearchFields',
                     'artifactId' : 'IssuesReturns.SearchInvreserve_clear_button_eventHandlers_click_Clear',
                     'id' : 'aw62133ec3',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button008.eventHandlers = eventHandlers015;
            footer001.addChild( button008 );


            var button009 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.SearchInvreserve_Search_button',
               'id' : 'awbdaf7da6',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers016 = [
               {
                     'method' : 'searchReservedItem',
                     'artifactId' : 'IssuesReturns.SearchInvreserve_Search_button_eventHandlers_click_Search',
                     'id' : 'awe7fa7f19',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button009.eventHandlers = eventHandlers016;
            footer001.addChild( button009 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.SearchUnreservedView', false);
               trackTimer.startTracking();
            }

            var view004 = new View({
               'resource' : 'issuesReturns',
               'id' : 'IssuesReturns.SearchUnreservedView',
               'label' : MessageService.createStaticMessage('Search Additional Items'),
            });
            ui001.addChild( view004 );

            var requiredResources003 = {
               'errorResource' : {
                  'artifactId' : 'IssuesReturns.SearchUnreservedView_requiredResource_errorResource',
                  'id' : 'awba4a9f18',
               },
               'domainitemstatus' : {
                  'artifactId' : 'IssuesReturns.SearchUnreservedView_domainitemstatus',
                  'id' : 'aw4f75dbf7',
               },
               'domainitemtype' : {
                  'artifactId' : 'IssuesReturns.SearchUnreservedView_domainitemtype',
                  'id' : 'awea6c457c',
               },
            };
            view004.addRequiredResources( requiredResources003 );

            var container011 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'IssuesReturns.SearchUnreservedView_container_0',
               'id' : 'aw73bbff2f',
            });
            view004.addChild( container011 );


            var link002 = new Link({
               'artifactId' : 'IssuesReturns.SearchUnreservedView_link',
               'id' : 'aw3ff29272',
               'label' : MessageService.createStaticMessage(''),
            });
            container011.addChild( link002 );

            var eventHandlers017 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'IssuesReturns.SearchUnreservedView_link_eventHandlers_click',
                     'id' : 'awacbfaa53',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'IssuesReturns.SearchUnreservedView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw3b76569c',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            link002.eventHandlers = eventHandlers017;

            var container012 = new Container({
               'resource' : 'issuesReturns',
               'artifactId' : 'IssuesReturns.SearchUnreserved_container_1',
               'id' : 'awce2b8d21',
            });
            view004.addChild( container012 );


            var group004 = new Group({
               'artifactId' : 'IssuesReturns.SearchUnreserved_group_1',
               'id' : 'awe1b699a3',
            });
            container012.addChild( group004 );


            var groupitem006 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchUnreserved_location_groupitem_0',
               'id' : 'aw498a8c2f',
            });
            group004.addChild( groupitem006 );


            var text017 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchUnreserved_siteid',
               'id' : 'aw89291e90',
               'label' : MessageService.createStaticMessage('Site'),
            });
            groupitem006.addChild( text017 );


            var text018 = new Text({
               'resourceAttribute' : 'storeroom',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchUnreserved_storeroom',
               'id' : 'aw2a7a1be7',
               'label' : MessageService.createStaticMessage('Storeroom'),
            });
            groupitem006.addChild( text018 );


            var groupitem007 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchUnreserved_itemnum_groupitem_1',
               'id' : 'aw2d346a5f',
            });
            group004.addChild( groupitem007 );


            var text019 = new Text({
               'resourceAttribute' : 'itemnum',
               'lookup' : 'IssuesReturns.ItemLookup',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchUnreserved_itemnum',
               'id' : 'awa3c339bf',
               'label' : MessageService.createStaticMessage('Item'),
               'codeScannable' : true,
               'lookupAttribute' : 'itemnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem007.addChild( text019 );


            var groupitem008 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchUnreserved_itemdesc_groupitem_2',
               'id' : 'aw66613ab',
            });
            group004.addChild( groupitem008 );


            var text020 = new Text({
               'resourceAttribute' : 'itemdesc',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchUnreserved_itemdesc',
               'id' : 'awfa1ece80',
               'label' : MessageService.createStaticMessage('Item Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem008.addChild( text020 );


            var groupitem009 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchUnreserved_bin_groupitem_3',
               'id' : 'awb581aab9',
            });
            group004.addChild( groupitem009 );


            var text021 = new Text({
               'resourceAttribute' : 'bin',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchUnreserved_bin',
               'id' : 'aw44985047',
               'label' : MessageService.createStaticMessage('Bin'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem009.addChild( text021 );


            var footer002 = new Footer({
               'artifactId' : 'IssuesReturns.SearchUnreservedView_footer',
               'id' : 'aw654d1e0d',
            });
            view004.addChild( footer002 );


            var button010 = new Button({
               'artifactId' : 'IssuesReturns.SearchUnreservedView_Clear_button',
               'id' : 'aw4e3b225b',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers018 = [
               {
                     'method' : 'clearUnreservedSearchFields',
                     'artifactId' : 'IssuesReturns.SearchUnreservedView_Clear_button_eventHandlers_click_handleClearButtonClickSearchUnreservedView',
                     'id' : 'aw51bf0e6d',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            button010.eventHandlers = eventHandlers018;
            footer002.addChild( button010 );


            var button011 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.SearchUnreservedView_Search_button',
               'id' : 'aw6cd6b29',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers019 = [
               {
                     'method' : 'searchUnreservedItem',
                     'artifactId' : 'IssuesReturns.SearchUnreserved_Search_button_eventHandlers_click_Search',
                     'id' : 'aw4eecd748',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            button011.eventHandlers = eventHandlers019;
            footer002.addChild( button011 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.SearchReturnView', false);
               trackTimer.startTracking();
            }

            var view005 = new View({
               'resource' : 'issuesReturns',
               'id' : 'IssuesReturns.SearchReturnView',
               'label' : MessageService.createStaticMessage('Search Items for Return'),
            });
            ui001.addChild( view005 );

            var requiredResources004 = {
               'errorResource' : {
                  'artifactId' : 'IssuesReturns.SearchReturnView_requiredResource_errorResource',
                  'id' : 'aw9093b0ac',
               },
               'domainissuetype' : {
                  'artifactId' : 'IssuesReturns.SearchReturnView_requiredResource_domainissuetype',
                  'id' : 'aw3b78433d',
               },
               'domainitemstatus' : {
                  'artifactId' : 'IssuesReturns.SearchReturnView_domainitemstatus',
                  'id' : 'awf14939f1',
               },
               'domainitemtype' : {
                  'artifactId' : 'IssuesReturns.SearchReturnView_domainitemtype',
                  'id' : 'awc041c797',
               },
            };
            view005.addRequiredResources( requiredResources004 );

            var container013 = new Container({
               'cssClass' : 'errorheader',
               'artifactId' : 'IssuesReturns.SearchReturnView_container_0',
               'id' : 'aw9589ad7a',
            });
            view005.addChild( container013 );


            var link003 = new Link({
               'artifactId' : 'IssuesReturns.SearchReturnView_link',
               'id' : 'awbe2fcef1',
               'label' : MessageService.createStaticMessage(''),
            });
            container013.addChild( link003 );

            var eventHandlers020 = [
               {
                     'method' : 'showErrorPage',
                     'artifactId' : 'IssuesReturns.SearchReturnView_link_eventHandlers_click',
                     'id' : 'aw22a06549',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'hideShowErrorLink',
                     'artifactId' : 'IssuesReturns.SearchReturnView_link_eventHandlers_render_hideShowSelectLink',
                     'id' : 'aw3b57343f',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            link003.eventHandlers = eventHandlers020;

            var container014 = new Container({
               'resource' : 'issuesReturns',
               'artifactId' : 'IssuesReturns.SearchReturnView_container_1',
               'id' : 'awe28e9dec',
            });
            view005.addChild( container014 );


            var group005 = new Group({
               'artifactId' : 'IssuesReturns.SearchReturnView_group_1',
               'id' : 'aw6b53819d',
            });
            container014.addChild( group005 );


            var groupitem010 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchReturnView_groupitem_0',
               'id' : 'awd0523c69',
            });
            group005.addChild( groupitem010 );


            var text022 = new Text({
               'resourceAttribute' : 'siteid',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchReturnView_siteid',
               'id' : 'aw9f8cc8b',
               'label' : MessageService.createStaticMessage('Site'),
            });
            groupitem010.addChild( text022 );


            var text023 = new Text({
               'resourceAttribute' : 'storeroom',
               'editable' : false,
               'artifactId' : 'IssuesReturns.SearchReturnView_storeroom',
               'id' : 'aw78d31229',
               'label' : MessageService.createStaticMessage('Storeroom'),
            });
            groupitem010.addChild( text023 );


            var groupitem011 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchReturnView_groupitem_1',
               'id' : 'awa7550cff',
            });
            group005.addChild( groupitem011 );


            var text024 = new Text({
               'resourceAttribute' : 'itemnum',
               'lookup' : 'IssuesReturns.ItemLookup',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchReturnView_itemnum',
               'id' : 'aw29262181',
               'label' : MessageService.createStaticMessage('Item'),
               'codeScannable' : true,
               'lookupAttribute' : 'itemnum',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem011.addChild( text024 );

            var eventHandlers021 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'IssuesReturns.SearchReturn_itemnum_eventHandlers_datachange',
                     'id' : 'aw3b4fd77',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            text024.eventHandlers = eventHandlers021;

            var groupitem012 = new GroupItem({
               'artifactId' : 'IssuesReturns.SearchReturnView_groupitem_2',
               'id' : 'aw3e5c5d45',
            });
            group005.addChild( groupitem012 );


            var text025 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : true,
               'artifactId' : 'IssuesReturns.SearchReturnView_workorder',
               'id' : 'aw173cd23a',
               'label' : MessageService.createStaticMessage('Work Order'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem012.addChild( text025 );

            var eventHandlers022 = [
               {
                     'method' : 'setFieldsReadonly',
                     'artifactId' : 'IssuesReturns.SearchReturn_wonum_eventHandlers_datachange',
                     'id' : 'awe2b61002',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            text025.eventHandlers = eventHandlers022;

            var footer003 = new Footer({
               'artifactId' : 'IssuesReturns.SearchReturnView_footer',
               'id' : 'aw173e4987',
            });
            view005.addChild( footer003 );


            var button012 = new Button({
               'artifactId' : 'IssuesReturns.SearchReturnView_Clear_button',
               'id' : 'aw55dcb572',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers023 = [
               {
                     'method' : 'clearReturnSearchFields',
                     'artifactId' : 'IssuesReturns.SearchReturn_Clear_button_eventHandlers_click_handleClearButtonClickSearchReturnView',
                     'id' : 'aweacadc8a',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button012.eventHandlers = eventHandlers023;
            footer003.addChild( button012 );


            var button013 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.SearchReturnView_Search_button',
               'id' : 'aw446414d2',
               'label' : MessageService.createStaticMessage('Search'),
               'primary' : 'true',
            });
            var eventHandlers024 = [
               {
                     'method' : 'searchIssuedItems',
                     'artifactId' : 'IssuesReturns.SearchReturn_Search_button_eventHandlers_click_Search',
                     'id' : 'awe2a00bdb',
                     'event' : 'click',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            button013.eventHandlers = eventHandlers024;
            footer003.addChild( button013 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.InvreserveListView', false);
               trackTimer.startTracking();
            }

            var view006 = new View({
               'resource' : 'invreserve',
               'id' : 'IssuesReturns.InvreserveListView',
               'label' : MessageService.createStaticMessage('Issue Reserved Items'),
            });
            ui001.addChild( view006 );

            var requiredResources005 = {
               'oslcmaxvars' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_requiredResource_oslcmaxvars',
                  'id' : 'aw1d08b19d',
               },
               'statusChangeResource' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_statusChangeResource',
                  'id' : 'aw97e6fbcd',
               },
               'domaininvusestatus' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_domaininvusestatus',
                  'id' : 'aw2e33b913',
               },
               'domainitemtype' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_domainitemtype',
                  'id' : 'aw859894e2',
               },
               'splitrotateresource' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_splitrotateresource',
                  'id' : 'aw3c1f7361',
               },
               'invuse' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_requiredResource_invuse',
                  'id' : 'aw69fab2e3',
                  'related' : {
                     'invuseline' : {
                        'artifactId' : 'IssuesReturns.InvreserveListView_requiredResource_invuseline',
                        'id' : 'aw939a095',
                     },
                  },
               },
               'domaininvusetype' : {
                  'artifactId' : 'IssuesReturns.InvreserveListView_domaininvusetype',
                  'id' : 'aw75b41683',
               },
            };
            view006.addRequiredResources( requiredResources005 );


            var sortOptions001 = new SortOptions({
               'artifactId' : 'IssuesReturns.InvreserveListView_invreserve_list_sortOptions',
               'id' : 'aw62e1a31c',
            });

            var sortOption001 = new SortOption({
               'artifactId' : 'IssuesReturns.InvreserveListView_sortOption_bin',
               'id' : 'aw6d956642',
               'label' : MessageService.createStaticMessage('Bin'),
            });
            sortOptions001.addChild( sortOption001 );


            var sortAttribute001 = new SortAttribute({
               'name' : 'binnum',
               'artifactId' : 'IssuesReturns.InvreserveListView_binnum_sortAttribute',
               'id' : 'aw7a435a18',
               'direction' : 'asc',
            });
            sortOption001.addChild( sortAttribute001 );


            var sortOption002 = new SortOption({
               'artifactId' : 'IssuesReturns.InvreserveListView_invreserve_sortOption_Item',
               'id' : 'awd30efcec',
               'label' : MessageService.createStaticMessage('Item'),
            });
            sortOptions001.addChild( sortOption002 );


            var sortAttribute002 = new SortAttribute({
               'name' : 'item',
               'artifactId' : 'IssuesReturns.InvreserveListView_invreserve_Item_sortAttribute_item',
               'id' : 'aw2ee72842',
               'direction' : 'asc',
            });
            sortOption002.addChild( sortAttribute002 );



            var listItemTemplate001 = new ListItemTemplate({
               'layout' : 'InvreserveListItem',
               'artifactId' : 'IssuesReturns.InvreserveListView_listItemTemplate',
               'id' : 'awf92070a7',
            });

            var listtext001 = new ListText({
               'resourceAttribute' : 'item',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.InvreserveListView_itemnum',
               'id' : 'aw1774c552',
            });
            listItemTemplate001.addChild( listtext001 );


            var listtext002 = new ListText({
               'resourceAttribute' : 'itemdesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.InvreserveListView_itemdesc',
               'id' : 'aw2411e7b9',
            });
            listItemTemplate001.addChild( listtext002 );


            var listtext003 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'IssuesReturns.InvreserveListView_issueunit',
               'id' : 'aw55d5c6fa',
            });
            listItemTemplate001.addChild( listtext003 );


            var listtext004 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'IssuesReturns.InvreserveListView_binnum',
               'id' : 'aw51bba8b1',
            });
            listItemTemplate001.addChild( listtext004 );


            var text026 = new Text({
               'layoutInsertAt' : 'item5',
               'artifactId' : 'IssuesReturns.InvreserveListView_tasklabel',
               'id' : 'aw6bb0bae6',
               'label' : MessageService.createStaticMessage('Task:'),
            });
            listItemTemplate001.addChild( text026 );

            var eventHandlers025 = [
               {
                     'method' : 'hideTaskLabel',
                     'artifactId' : 'IssuesReturns.InvreserveListView_label_eventHandlers_render_Task',
                     'id' : 'awb24b7c8f',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text026.eventHandlers = eventHandlers025;

            var listtext005 = new ListText({
               'resourceAttribute' : 'taskid',
               'layoutInsertAt' : 'item7',
               'artifactId' : 'IssuesReturns.InvreserveListView_taskid',
               'id' : 'aw8f57aaa6',
            });
            listItemTemplate001.addChild( listtext005 );


            var text027 = new Text({
               'resourceAttribute' : 'localreservedqty',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'item6',
               'artifactId' : 'IssuesReturns.InvreserveListView_localreservedqty',
               'id' : 'awfff9be61',
            });
            listItemTemplate001.addChild( text027 );

            var eventHandlers026 = [
               {
                     'method' : 'validateQty',
                     'artifactId' : 'IssuesReturns.InvreserveListView_label_eventHandlers_localreservedqty',
                     'id' : 'aw3e8c2b6f',
                     'event' : 'validate',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text027.eventHandlers = eventHandlers026;

            var text028 = new Text({
               'resourceAttribute' : 'issueTo',
               'lookup' : 'IssuesReturns.IssueToLookup',
               'editable' : false,
               'layoutInsertAt' : 'item9',
               'artifactId' : 'IssuesReturns.InvreserveListView_issueto',
               'id' : 'aw8b3c5734',
               'label' : MessageService.createStaticMessage('Issue To'),
               'lookupAttribute' : 'personid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            listItemTemplate001.addChild( text028 );

            var eventHandlers027 = [
               {
                     'method' : 'hideIssueToLabel',
                     'artifactId' : 'IssuesReturns.InvreserveListView_label_eventHandlers_render_issueto',
                     'id' : 'aw9882a5a1',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text028.eventHandlers = eventHandlers027;

            var listtext006 = new ListText({
               'resourceAttribute' : 'wonum',
               'layoutInsertAt' : 'item8',
               'artifactId' : 'IssuesReturns.InvreserveListView_wonum',
               'id' : 'aw5df3ef98',
            });
            listItemTemplate001.addChild( listtext006 );



            var list001 = new List({
               'resource' : 'invreserve',
               'sortOptions' : sortOptions001,
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate001,
               'artifactId' : 'IssuesReturns.InvreserveListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw9f601a17',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view006.addChild( list001 );


            var footer004 = new Footer({
               'artifactId' : 'IssuesReturns.InvreserveListView_footer',
               'id' : 'aw2bad4160',
            });
            view006.addChild( footer004 );


            var button014 = new Button({
               'artifactId' : 'IssuesReturns.InvreserveListView_Cancel_button',
               'id' : 'aw59aee03a',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers028 = [
               {
                     'method' : 'cancelReservation',
                     'artifactId' : 'IssuesReturns.InvreserveListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw22bc35ad',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button014.eventHandlers = eventHandlers028;
            footer004.addChild( button014 );


            var button015 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.InvreserveListView_Complete_button',
               'id' : 'aw197012d1',
               'label' : MessageService.createStaticMessage('Complete'),
               'primary' : 'true',
            });
            var eventHandlers029 = [
               {
                     'method' : 'completeReservation',
                     'artifactId' : 'IssuesReturns.InvreserveListView_Complete_button_eventHandlers_click_Complete',
                     'id' : 'awea3110de',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button015.eventHandlers = eventHandlers029;
            footer004.addChild( button015 );

            var eventHandlers030 = [
               {
                     'method' : 'transitsBackToIssuePlannedSearchView',
                     'artifactId' : 'IssuesReturns.InvreserveListView_eventHandlers_back',
                     'id' : 'awdeea2293',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            view006.eventHandlers = eventHandlers030;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.AdditionalItemsListView', false);
               trackTimer.startTracking();
            }

            var view007 = new View({
               'resource' : 'inventory',
               'id' : 'IssuesReturns.AdditionalItemsListView',
               'label' : MessageService.createStaticMessage('Issue Additional Items'),
            });
            ui001.addChild( view007 );



            var listItemTemplate002 = new ListItemTemplate({
               'layout' : 'InvbalanceListItem',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_listItemTemplate',
               'id' : 'aw20b8eae0',
            });

            var listtext007 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_itemnum',
               'id' : 'awfb7e5cce',
            });
            listItemTemplate002.addChild( listtext007 );


            var listtext008 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_itemdesc',
               'id' : 'awdd44324f',
            });
            listItemTemplate002.addChild( listtext008 );


            var listtext009 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_binnum',
               'id' : 'aw38d01270',
            });
            listItemTemplate002.addChild( listtext009 );


            var listtext010 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_issueunit',
               'id' : 'aw1f2c406',
            });
            listItemTemplate002.addChild( listtext010 );


            var text029 = new Text({
               'layoutInsertAt' : 'item5',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_tasklabel',
               'id' : 'aw3f97b81a',
               'label' : MessageService.createStaticMessage('Quantity Available'),
            });
            listItemTemplate002.addChild( text029 );


            var listtext011 = new ListText({
               'resourceAttribute' : 'avblbalance',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_avblbalance',
               'id' : 'aw8f026a88',
            });
            listItemTemplate002.addChild( listtext011 );



            var list002 = new List({
               'resource' : 'inventory',
               'transitionTo' : 'IssuesReturns.AdditionalItemsDetailsView',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate002,
               'artifactId' : 'IssuesReturns.AdditionalItemsListView_list',
               'hideEmpty' : 'true',
               'id' : 'aw3abb6202',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view007.addChild( list002 );

            var eventHandlers031 = [
               {
                     'method' : 'transitsBackToIssueAdditionalSearchView',
                     'artifactId' : 'IssuesReturns.AdditionalItemsListView_eventHandlers_back',
                     'id' : 'aw71085893',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            view007.eventHandlers = eventHandlers031;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.IssuedItemsListView', false);
               trackTimer.startTracking();
            }

            var view008 = new View({
               'resource' : 'matusetrans',
               'id' : 'IssuesReturns.IssuedItemsListView',
               'label' : MessageService.createStaticMessage('Return Issued Items'),
            });
            ui001.addChild( view008 );

            var requiredResources006 = {
               'domaininvusestatus' : {
                  'artifactId' : 'IssuesReturns.IssuedItemsListView_requiredResource_invreserve',
                  'id' : 'awd1725172',
               },
               'domaininvusetype' : {
                  'artifactId' : 'IssuesReturns.IssuedItemsListView_requiredResource_domaininvusetype',
                  'id' : 'aw9508e29',
               },
               'invuse' : {
                  'artifactId' : 'IssuesReturns.IssuedItemsListView_requiredResource_invuse',
                  'id' : 'awfade4a24',
               },
               'statusChangeResource' : {
                  'artifactId' : 'IssuesReturns.IssuedItemsListView_requiredResource_statusChangeResource',
                  'id' : 'aw2591e01b',
               },
            };
            view008.addRequiredResources( requiredResources006 );


            var sortOptions002 = new SortOptions({
               'artifactId' : 'IssuesReturns.IssuedItemsListView_invissued_list_sortOptions',
               'id' : 'aw65b444e0',
            });

            var sortOption003 = new SortOption({
               'artifactId' : 'IssuesReturns.IssuedItemsListView_invissued_sortOption_bin',
               'id' : 'aw70e3bb1b',
               'label' : MessageService.createStaticMessage('Item'),
            });
            sortOptions002.addChild( sortOption003 );


            var sortAttribute003 = new SortAttribute({
               'name' : 'itemnum',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_invissued_sortAttribute_bin',
               'id' : 'awb5580639',
               'direction' : 'asc',
            });
            sortOption003.addChild( sortAttribute003 );


            var sortOption004 = new SortOption({
               'artifactId' : 'IssuesReturns.IssuedItemsListView_invissued_sortOption_item',
               'id' : 'aw4b1fb6d6',
               'label' : MessageService.createStaticMessage('Work Order'),
            });
            sortOptions002.addChild( sortOption004 );


            var sortAttribute004 = new SortAttribute({
               'name' : 'wonum',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_invissued_sortAttribute_item',
               'id' : 'aw9eba4c8f',
               'direction' : 'asc',
            });
            sortOption004.addChild( sortAttribute004 );



            var listItemTemplate003 = new ListItemTemplate({
               'layout' : 'IssuedItemList',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_listItemTemplate',
               'id' : 'awc2bbd2ec',
            });

            var listtext012 = new ListText({
               'resourceAttribute' : 'itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'id_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_itemnum',
               'id' : 'aw3ae94bfb',
            });
            listItemTemplate003.addChild( listtext012 );


            var listtext013 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'description_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_itemdesc',
               'id' : 'aw8b36617b',
            });
            listItemTemplate003.addChild( listtext013 );


            var listtext014 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'bin_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_binnum',
               'id' : 'awceda8c4e',
            });
            listItemTemplate003.addChild( listtext014 );


            var listtext015 = new ListText({
               'resourceAttribute' : 'wonum',
               'layoutInsertAt' : 'wonum_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_wonum',
               'id' : 'aw8333b5de',
            });
            listItemTemplate003.addChild( listtext015 );


            var listtext016 = new ListText({
               'resourceAttribute' : 'rotassetnum',
               'layoutInsertAt' : 'rotating_asset_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_rotassetnum',
               'id' : 'awdcaed304',
            });
            listItemTemplate003.addChild( listtext016 );


            var text030 = new Text({
               'layoutInsertAt' : 'rotating_asset_label_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_rotatinglabel',
               'id' : 'awc6598ada',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
            });
            listItemTemplate003.addChild( text030 );

            var eventHandlers032 = [
               {
                     'method' : 'hideRotatingAssetLabel',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_rotasset_eventHandlers_render',
                     'id' : 'awab53a0b9',
                     'event' : 'render',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            text030.eventHandlers = eventHandlers032;

            var text031 = new Text({
               'resourceAttribute' : 'localreturnqty',
               'cssClass' : 'copyPlanActual',
               'editable' : true,
               'layoutInsertAt' : 'return_qty_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_returnqtd',
               'id' : 'awd18f9b57',
            });
            listItemTemplate003.addChild( text031 );

            var eventHandlers033 = [
               {
                     'method' : 'renderReturnQuantity',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_returnQty_eventHandlers_render',
                     'id' : 'aw592d727',
                     'event' : 'render',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               },
               {
                     'method' : 'validateQuantity',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_returnQty_eventHandlers_datachange',
                     'id' : 'aw45dba71b',
                     'event' : 'datachange',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            text031.eventHandlers = eventHandlers033;

            var checkbox001 = new CheckBox({
               'resourceAttribute' : 'returnindicator',
               'cssClass' : 'rightCheckBox',
               'layoutInsertAt' : 'flag_cel',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_returnflag_checkbox',
               'id' : 'aw209367cb',
            });
            listItemTemplate003.addChild( checkbox001 );



            var list003 = new List({
               'resource' : 'matusetrans',
               'sortOptions' : sortOptions002,
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate003,
               'artifactId' : 'IssuesReturns.IssuedItemsListView_list',
               'hideEmpty' : 'true',
               'id' : 'awe4a499fa',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view008.addChild( list003 );


            var footer005 = new Footer({
               'artifactId' : 'IssuesReturns.IssuedItemsListView_footer',
               'id' : 'awb4cc659f',
            });
            view008.addChild( footer005 );


            var button016 = new Button({
               'artifactId' : 'IssuesReturns.IssuedItemsListView_Cancel_button',
               'id' : 'aw16d44225',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers034 = [
               {
                     'method' : 'cancelReturn',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw36ed41fa',
                     'event' : 'click',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            button016.eventHandlers = eventHandlers034;
            footer005.addChild( button016 );


            var button017 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.IssuedItemsListView_Complete_button',
               'id' : 'awecf291f1',
               'label' : MessageService.createStaticMessage('Complete'),
               'primary' : 'true',
            });
            var eventHandlers035 = [
               {
                     'method' : 'completeReturn',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_Complete_button_eventHandlers_click_Complete',
                     'id' : 'awd9ce977f',
                     'event' : 'click',
                     'class' : 'application.handlers.ReturnIssuedItemsHandler',
               }
            ];
            button017.eventHandlers = eventHandlers035;
            footer005.addChild( button017 );

            var eventHandlers036 = [
               {
                     'method' : 'transitsBackToReturnSearchView',
                     'artifactId' : 'IssuesReturns.IssuedItemsListView_eventHandlers_back',
                     'id' : 'awf5bf4d02',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            view008.eventHandlers = eventHandlers036;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.RotatingItemListView', false);
               trackTimer.startTracking();
            }

            var view009 = new View({
               'resource' : 'asset',
               'id' : 'IssuesReturns.RotatingItemListView',
               'label' : MessageService.createStaticMessage('Select Rotating Asset'),
            });
            ui001.addChild( view009 );

            var requiredResources007 = {
               'rotatingAssetUsage' : {
                  'artifactId' : 'IssuesReturns.RotatingItemListView_requiredResource_rotatingAssetUsage',
                  'id' : 'aw360e3eff',
               },
            };
            view009.addRequiredResources( requiredResources007 );


            var listItemTemplate004 = new ListItemTemplate({
               'layout' : 'InvbalanceListItem',
               'artifactId' : 'IssuesReturns.RotatingItemListView_listItemTemplate',
               'id' : 'aw7cdca06',
            });

            var listtext017 = new ListText({
               'resourceAttribute' : 'assetnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.RotatingItemListView_itemnum',
               'id' : 'awdf6ceed8',
            });
            listItemTemplate004.addChild( listtext017 );


            var listtext018 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.RotatingItemListView_itemdesc',
               'id' : 'aw29b495ac',
            });
            listItemTemplate004.addChild( listtext018 );

            var eventHandlers037 = [
               {
                     'method' : 'selectRotatingAsset',
                     'artifactId' : 'IssuesReturns.RotatingItemListView_eventHandlers_click',
                     'id' : 'aw73d56e6c',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            listItemTemplate004.eventHandlers = eventHandlers037;


            var list004 = new List({
               'resource' : 'asset',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate004,
               'artifactId' : 'IssuesReturns.RotatingItemListView_list',
               'hideEmpty' : 'true',
               'id' : 'awbaa78168',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view009.addChild( list004 );


            var footer006 = new Footer({
               'artifactId' : 'IssuesReturns.RotatingItemListView_footer',
               'id' : 'awe4d74b52',
            });
            view009.addChild( footer006 );


            var button018 = new Button({
               'artifactId' : 'IssuesReturns.RotatingItemListView_footer_Cancel_button',
               'id' : 'awc7e61142',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers038 = [
               {
                     'method' : 'cancelRotatingAssetSelection',
                     'artifactId' : 'IssuesReturns.RotatingItemListView_button_eventHandlers_click_Cancel',
                     'id' : 'aw3a53dbb4',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button018.eventHandlers = eventHandlers038;
            footer006.addChild( button018 );


            var button019 = new Button({
               'artifactId' : 'IssuesReturns.RotatingItemListView_footer_Clear_button',
               'id' : 'awc00d5c30',
               'label' : MessageService.createStaticMessage('Clear Value'),
            });
            var eventHandlers039 = [
               {
                     'method' : 'clearRotatingAssetSelection',
                     'artifactId' : 'IssuesReturns.RotatingItemListView_button_eventHandlers_click_Clear',
                     'id' : 'awa63ada52',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button019.eventHandlers = eventHandlers039;
            footer006.addChild( button019 );

            var eventHandlers040 = [
               {
                     'method' : 'transitsBackToIssueAdditionalSearchView',
                     'artifactId' : 'IssuesReturns.RotatingItemListView_eventHandlers_back',
                     'id' : 'aw42420b44',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            view009.eventHandlers = eventHandlers040;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.SplitQtyRotatingAssetView', false);
               trackTimer.startTracking();
            }

            var view010 = new View({
               'resource' : 'splitrotateresource',
               'id' : 'IssuesReturns.SplitQtyRotatingAssetView',
               'label' : MessageService.createStaticMessage('Split Usage Quantity'),
            });
            ui001.addChild( view010 );

            var requiredResources008 = {
               'additionalasset' : {
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_additionalasset',
                  'id' : 'aw3575a1ce',
               },
               'rotatingAssets' : {
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_rotatingAssets',
                  'id' : 'aw61a2cdbf',
               },
               'splitrotateresource' : {
                  'reload' : false,
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_invreserve',
                  'id' : 'awa4d073c8',
               },
               'splitqtyacrossbins' : {
                  'reload' : false,
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_splitqtyacrossbins',
                  'id' : 'awb92862df',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'awef59a8e8',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_requiredResource_originalData',
                  'id' : 'awc9ff1326',
               },
            };
            view010.addRequiredResources( requiredResources008 );


            var listItemTemplate005 = new ListItemTemplate({
               'layout' : 'SplitQtyRotateList',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_listItemTemplate',
               'id' : 'aw3e375367',
            });

            var listtext019 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_itemnum',
               'id' : 'aw7042d531',
            });
            listItemTemplate005.addChild( listtext019 );


            var listtext020 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_itemdesc',
               'id' : 'awf0cde14b',
            });
            listItemTemplate005.addChild( listtext020 );


            var listtext021 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_issueunit',
               'id' : 'aw6b289cc',
            });
            listItemTemplate005.addChild( listtext021 );


            var listtext022 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_binnum',
               'id' : 'awbae1072a',
            });
            listItemTemplate005.addChild( listtext022 );


            var listtext023 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_qty',
               'id' : 'aw9af0fedb',
            });
            listItemTemplate005.addChild( listtext023 );


            var button020 = new Button({
               'image' : '\/images\/action_split_off.png',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_imagesaction_action_split_off.png_button',
               'id' : 'aw8c66414a',
            });
            var eventHandlers041 = [
               {
                     'method' : 'autoSplit',
                     'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_eventhandler_click',
                     'id' : 'awfe7abe0c',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'showSplitButton',
                     'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_eventhandler_render',
                     'id' : 'awa6c079f5',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button020.eventHandlers = eventHandlers041;
            listItemTemplate005.addChild( button020 );


            var button021 = new Button({
               'image' : '\/images\/action_rotatingAsset_off.png',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_imagesaction_rotate.png_button',
               'id' : 'awc4e10b9c',
            });
            var eventHandlers042 = [
               {
                     'method' : 'autoSplit',
                     'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_eventhandler_click_rotate',
                     'id' : 'awfc013404',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'showRotateButton',
                     'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_eventhandler_render_rotate',
                     'id' : 'aw55c452fa',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button021.eventHandlers = eventHandlers042;
            listItemTemplate005.addChild( button021 );



            var list005 = new List({
               'resource' : 'splitrotateresource',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate005,
               'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_list',
               'hideEmpty' : 'true',
               'id' : 'awd893f6e1',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view010.addChild( list005 );

            var eventHandlers043 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyRotView',
                     'artifactId' : 'IssuesReturns.SplitQtyRotatingAssetView_backbutton',
                     'id' : 'aw4439a482',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            view010.eventHandlers = eventHandlers043;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.SplitQtyAcrossBinsView', false);
               trackTimer.startTracking();
            }

            var view011 = new View({
               'resource' : 'splitqtyacrossbins',
               'id' : 'IssuesReturns.SplitQtyAcrossBinsView',
               'label' : MessageService.createDynamicMessage('{0}', 'application.handlers.IssuesReturnsHandler', 'resolveViewLabel'),
               'resolverFunction' : 'resolveViewLabel',
               'resolverClass' : 'application.handlers.IssuesReturnsHandler',
            });
            ui001.addChild( view011 );

            var requiredResources009 = {
               'rotatingAssetUsage' : {
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_rotatingAssetUsage',
                  'id' : 'awcbb892ef',
               },
               'additionalasset' : {
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_additionalasset',
                  'id' : 'awb195ebba',
               },
               'splitqtyacrossbins' : {
                  'reload' : false,
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_splitqtyacrossbins',
                  'id' : 'aw404ce720',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'awa4ceef13',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_originalDataSplitBinQty',
                  'id' : 'aw7ac2a6a',
               },
               'invuse' : {
                  'reload' : false,
                  'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_invuse',
                  'id' : 'awdfbe7053',
                  'related' : {
                     'npinvuselinesplit' : {
                        'reload' : false,
                        'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_requiredResource_npinvuselinesplit',
                        'id' : 'aw3cf3b797',
                     },
                  },
               },
            };
            view011.addRequiredResources( requiredResources009 );


            var listItemTemplate006 = new ListItemTemplate({
               'layout' : 'SplitQtyRotateList',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_listItemTemplate',
               'id' : 'aw355be848',
            });

            var listtext024 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_itemnum',
               'id' : 'awdc2f7978',
            });
            listItemTemplate006.addChild( listtext024 );


            var listtext025 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_itemdesc',
               'id' : 'awff6175d3',
            });
            listItemTemplate006.addChild( listtext025 );


            var listtext026 = new ListText({
               'resourceAttribute' : 'issueunit',
               'layoutInsertAt' : 'item3',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_issueunit',
               'id' : 'awf8693e2e',
            });
            listItemTemplate006.addChild( listtext026 );


            var listtext027 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item4',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_binnum',
               'id' : 'aw6bb40e01',
            });
            listItemTemplate006.addChild( listtext027 );


            var listtext028 = new ListText({
               'resourceAttribute' : 'quantity',
               'layoutInsertAt' : 'item6',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_qty',
               'id' : 'aw91f62944',
            });
            listItemTemplate006.addChild( listtext028 );


            var text032 = new Text({
               'resourceAttribute' : 'rotassetnum',
               'editable' : true,
               'layoutInsertAt' : 'item5',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_rotasset',
               'id' : 'awfc3d2c51',
               'label' : MessageService.createStaticMessage('Rotating Asset'),
               'codeScannable' : true,
               'placeHolder' : MessageService.createStaticMessage('Tap to Enter'),
            });
            listItemTemplate006.addChild( text032 );

            var eventHandlers044 = [
               {
                     'method' : 'hideRotatingField',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_hiderotating',
                     'id' : 'aw4e34abb2',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               },
               {
                     'method' : 'validateRotatingAsset',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_eventhandler_clickddd',
                     'id' : 'aw1386c943',
                     'event' : 'validate',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            text032.eventHandlers = eventHandlers044;

            var button022 = new Button({
               'image' : '\/images\/action_lookup_OFF.svg',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_imagesaction_action_lookup_OFF.svg_button',
               'id' : 'aw9a969acb',
            });
            var eventHandlers045 = [
               {
                     'method' : 'rotateLookup',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_eventhandler_click',
                     'id' : 'awb0d5e709',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button022.eventHandlers = eventHandlers045;
            text032.addChild( button022 );



            var list006 = new List({
               'resource' : 'splitqtyacrossbins',
               'showHeader' : true,
               'listItemTemplate' : listItemTemplate006,
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_list',
               'hideEmpty' : 'true',
               'id' : 'awb8287ee3',
               'label' : MessageService.createStaticMessage('Records'),
               'displayPageSize' : '20',
            });
            view011.addChild( list006 );


            var footer007 = new Footer({
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_footer',
               'id' : 'aw11a2e7d0',
            });
            view011.addChild( footer007 );


            var button023 = new Button({
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_Clear_button',
               'id' : 'aw785b8e64',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers046 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyAcrossBinsView',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw8b96f702',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button023.eventHandlers = eventHandlers046;
            footer007.addChild( button023 );


            var button024 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_Search_button',
               'id' : 'awb09d26b8',
               'label' : MessageService.createStaticMessage('Done'),
               'primary' : 'true',
            });
            var eventHandlers047 = [
               {
                     'method' : 'doneSplitQtyAcrossBins',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_Search_button_eventHandlers_click_Search',
                     'id' : 'aw4cd22b37',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button024.eventHandlers = eventHandlers047;
            footer007.addChild( button024 );

            var eventHandlers048 = [
               {
                     'method' : 'handleBackButtonOnSplitQtyAcrossBinsView',
                     'artifactId' : 'IssuesReturns.SplitQtyAcrossBinsView_backbutton',
                     'id' : 'awac3fc61',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            view011.eventHandlers = eventHandlers048;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.AdditionalItemsDetailsView', false);
               trackTimer.startTracking();
            }

            var view012 = new View({
               'resource' : 'inventory',
               'id' : 'IssuesReturns.AdditionalItemsDetailsView',
               'label' : MessageService.createStaticMessage('Item Details'),
            });
            ui001.addChild( view012 );

            var requiredResources010 = {
               'oslcmaxvars' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_oslcmaxvars',
                  'id' : 'awe9fe6f9f',
               },
               'issueAdditionalItems' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_issueAdditionalItems',
                  'id' : 'aw5c309c0d',
               },
               'additionalperson' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_person',
                  'id' : 'awba66c217',
               },
               'invuse' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_invuse',
                  'id' : 'aw1325cf65',
               },
               'splitrotateresource' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_splitrotateresource',
                  'id' : 'awf651b95',
               },
               'domaininvusestatus' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_domaininvusestatus',
                  'id' : 'aw5746a87e',
               },
               'domainitemtype' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_domainitemtype',
                  'id' : 'aw4fcfd512',
               },
               'domaininvusetype' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_domaininvusetype',
                  'id' : 'aw60d34c6f',
               },
               'splitqtyacrossbins' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_splitqtyacrossbins',
                  'id' : 'aw10937dc3',
               },
               'originalDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_originalDataSplitBinQty',
                  'id' : 'aw864bb9fc',
               },
               'calculatedDataSplitBinQty' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_calculatedDataSplitBinQty',
                  'id' : 'awead38196',
               },
               'statusChangeResource' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_statusChangeResource',
                  'id' : 'aw2d05b7a0',
               },
               'rotatingAssets' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_rotatingAssets',
                  'id' : 'awf172e145',
               },
               'additionalasset' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_additionalasset',
                  'id' : 'aw688d6ae0',
               },
               'domainwostatus' : {
                  'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_requiredResource_domainwostatus',
                  'id' : 'aw1de45fa0',
               },
            };
            view012.addRequiredResources( requiredResources010 );

            var container015 = new Container({
               'resource' : 'inventory',
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_container_1',
               'id' : 'awd50783b6',
            });
            view012.addChild( container015 );


            var group006 = new Group({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_group_1',
               'id' : 'aw477b6390',
            });
            container015.addChild( group006 );


            var groupitem013 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_itemnum_groupitem_1',
               'id' : 'aw3f10cf34',
            });
            group006.addChild( groupitem013 );


            var text033 = new Text({
               'resourceAttribute' : 'itemnum',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_itemnum',
               'id' : 'aw50ec38c',
               'label' : MessageService.createStaticMessage('Item'),
            });
            groupitem013.addChild( text033 );


            var text034 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_itemdesc',
               'id' : 'aw4568626c',
               'label' : MessageService.createStaticMessage('Item Description'),
            });
            groupitem013.addChild( text034 );


            var text035 = new Text({
               'resourceAttribute' : 'binnum',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_bin',
               'id' : 'awb44c1db7',
               'label' : MessageService.createStaticMessage('Bin'),
            });
            groupitem013.addChild( text035 );


            var text036 = new Text({
               'resourceAttribute' : 'issueunit',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_unit',
               'id' : 'aw571bdffe',
               'label' : MessageService.createStaticMessage('Unit of Measure'),
            });
            groupitem013.addChild( text036 );


            var text037 = new Text({
               'resourceAttribute' : 'avblbalance',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_qty',
               'id' : 'awd693e945',
               'label' : MessageService.createStaticMessage('Quantity Available'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem013.addChild( text037 );


            var container016 = new Container({
               'resource' : 'issueAdditionalItems',
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_container_2',
               'id' : 'aw4c0ed20c',
            });
            view012.addChild( container016 );


            var group007 = new Group({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_group_2',
               'id' : 'awde72322a',
            });
            container016.addChild( group007 );


            var groupitem014 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_issue_groupitem_2',
               'id' : 'aw3b5c506',
            });
            group007.addChild( groupitem014 );


            var text038 = new Text({
               'resourceAttribute' : 'issueTo',
               'lookup' : 'IssuesReturns.IssueToLookup',
               'editable' : true,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_issue',
               'id' : 'awba415cb8',
               'label' : MessageService.createStaticMessage('Issue To'),
               'lookupAttribute' : 'personid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem014.addChild( text038 );


            var groupitem015 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_wo_groupitem_3',
               'id' : 'aw85f9bfab',
            });
            group007.addChild( groupitem015 );


            var text039 = new Text({
               'resourceAttribute' : 'wonum',
               'editable' : true,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_wo',
               'id' : 'aw961fb395',
               'label' : MessageService.createStaticMessage('Work Order'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
               'required' : true,
            });
            groupitem015.addChild( text039 );

            var eventHandlers049 = [
               {
                     'method' : 'additionalItemWODataChanged',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_wo_eventHandlers_1',
                     'id' : 'aw2b5d3130',
                     'event' : 'datachange',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            text039.eventHandlers = eventHandlers049;

            var groupitem016 = new GroupItem({
               'artifactId' : 'IssuesReturns.IAdditionalItemsDetailsView_task_groupitem_4',
               'id' : 'awb4828b55',
            });
            group007.addChild( groupitem016 );


            var text040 = new Text({
               'resourceAttribute' : 'taskid',
               'lookup' : 'IssuesReturns.TaskLookup',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_task',
               'id' : 'awd9de0888',
               'label' : MessageService.createStaticMessage('Task ID'),
               'lookupAttribute' : 'taskid',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem016.addChild( text040 );


            var groupitem017 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_account_groupitem_5',
               'id' : 'aw5e4b40bd',
            });
            group007.addChild( groupitem017 );


            var text041 = new Text({
               'resourceAttribute' : 'glaccount',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_account',
               'id' : 'awd055ad28',
               'label' : MessageService.createStaticMessage('GL Account'),
            });
            groupitem017.addChild( text041 );


            var groupitem018 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_location_groupitem_6',
               'id' : 'aw7a9bb56f',
            });
            group007.addChild( groupitem018 );


            var text042 = new Text({
               'resourceAttribute' : 'location',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_location',
               'id' : 'awba3d253b',
               'label' : MessageService.createStaticMessage('Location'),
            });
            groupitem018.addChild( text042 );


            var groupitem019 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_asset_groupitem_7',
               'id' : 'aw9aec3d24',
            });
            group007.addChild( groupitem019 );


            var text043 = new Text({
               'resourceAttribute' : 'asset',
               'editable' : false,
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_asset',
               'id' : 'awaa4325da',
               'label' : MessageService.createStaticMessage('Asset'),
            });
            groupitem019.addChild( text043 );


            var groupitem020 = new GroupItem({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_issueQty_groupitem_8',
               'id' : 'awa447e4ea',
            });
            group007.addChild( groupitem020 );


            var text044 = new Text({
               'resourceAttribute' : 'issueQty',
               'editable' : true,
               'enableNumericKeyboard' : 'true',
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_isseQty',
               'id' : 'aw1ee9fe68',
               'label' : MessageService.createStaticMessage('Issue Quantity'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
               'required' : true,
            });
            groupitem020.addChild( text044 );

            var eventHandlers050 = [
               {
                     'method' : 'validateQty',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_isseQty_eventHandlers_0',
                     'id' : 'aw8bc9f508',
                     'event' : 'validate',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            text044.eventHandlers = eventHandlers050;

            var footer008 = new Footer({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_footer',
               'id' : 'awe642cf39',
            });
            view012.addChild( footer008 );


            var button025 = new Button({
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_Cancel_button',
               'id' : 'awe5fa5f23',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers051 = [
               {
                     'method' : 'cancelAdditionalItems',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_Cancel_button_eventHandlers_click',
                     'id' : 'aw29327855',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            button025.eventHandlers = eventHandlers051;
            footer008.addChild( button025 );


            var button026 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_Complete_button',
               'id' : 'awd9aea980',
               'label' : MessageService.createStaticMessage('Complete'),
               'primary' : 'true',
            });
            var eventHandlers052 = [
               {
                     'method' : 'completeAvailableItems',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_Complete_button_eventHandlers_click',
                     'id' : 'awbbf96f65',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            button026.eventHandlers = eventHandlers052;
            footer008.addChild( button026 );

            var eventHandlers053 = [
               {
                     'method' : 'validateTask',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_groupitem_0_actualstaskid_Task_eventHandlers_validate_validateTask',
                     'id' : 'awd62b5046',
                     'event' : 'initialize',
                     'class' : 'application.handlers.TaskHandler',
               },
               {
                     'method' : 'transitsBackToIssueAdditionalSearchView',
                     'artifactId' : 'IssuesReturns.AdditionalItemsDetailsView_groupitem_0_eventHandlers_back',
                     'id' : 'awa7af95c9',
                     'event' : 'back',
                     'class' : 'application.handlers.IssuesAvailableItemsHandler',
               }
            ];
            view012.eventHandlers = eventHandlers053;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'IssuesReturns.ErrorDetailPage', false);
               trackTimer.startTracking();
            }

            var view013 = new View({
               'resource' : 'invuse',
               'id' : 'IssuesReturns.ErrorDetailPage',
               'label' : MessageService.createStaticMessage('Error Handling'),
            });
            ui001.addChild( view013 );


            var container017 = new Container({
               'resource' : 'invuse',
               'artifactId' : 'IssuesReturns.ErrorDetailPage_container_2',
               'id' : 'aw287d92d3',
            });
            view013.addChild( container017 );


            var group008 = new Group({
               'artifactId' : 'IssuesReturns.ErrorDetailPage_group_2',
               'id' : 'aw50b609d0',
            });
            container017.addChild( group008 );


            var groupitem021 = new GroupItem({
               'artifactId' : 'IssuesReturns.ErrorDetailPage_issue_groupitem_2',
               'id' : 'aw8e7a5f3b',
            });
            group008.addChild( groupitem021 );


            var text045 = new Text({
               'resourceAttribute' : 'invusenum',
               'editable' : false,
               'artifactId' : 'IssuesReturns.ErrorDetailPage_invuse',
               'id' : 'awe33815f3',
               'label' : MessageService.createStaticMessage('Invuse'),
            });
            groupitem021.addChild( text045 );


            var text046 = new Text({
               'resourceAttribute' : 'description',
               'editable' : false,
               'artifactId' : 'IssuesReturns.ErrorDetailPage_description',
               'id' : 'awf13e727a',
               'label' : MessageService.createStaticMessage('Description'),
            });
            groupitem021.addChild( text046 );


            var button027 = new Button({
               'image' : '\/images\/status_error.png',
               'artifactId' : 'errorImage',
               'id' : 'aw1dae967c',
            });
            groupitem021.addChild( button027 );


            var textarea001 = new TextArea({
               'resourceAttribute' : 'errorMessage',
               'editable' : false,
               'artifactId' : 'IssuesReturns.ErrorDetailPage_errorMessage',
               'id' : 'aw7454aa08',
            });
            groupitem021.addChild( textarea001 );

            var eventHandlers054 = [
               {
                     'method' : 'setErrorMessage',
                     'artifactId' : 'IssuesReturns.ErrorDetailPage_groupitem_0_errormessage',
                     'id' : 'aw35356bfa',
                     'event' : 'render',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            textarea001.eventHandlers = eventHandlers054;

            var button028 = new Button({
               'artifactId' : 'IssuesReturns.ErrorDetailPage_button',
               'id' : 'aw44a165ca',
               'label' : MessageService.createStaticMessage('RollBack Error'),
               'primary' : 'true',
            });
            var eventHandlers055 = [
               {
                     'method' : 'undoAndDelete',
                     'artifactId' : 'IssuesReturns.ErrorDetailPage_eventhandler_click',
                     'id' : 'awc426904b',
                     'event' : 'click',
                     'class' : 'application.handlers.IssuesReturnsHandler',
               }
            ];
            button028.eventHandlers = eventHandlers055;
            groupitem021.addChild( button028 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup001 = new Lookup({
               'filterMethod' : 'filterAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.IssuesReturnsHandler',
               'id' : 'IssuesReturns.AssetLookup',
               'label' : MessageService.createStaticMessage('Select Asset'),
            });
            ui001.addChild( lookup001 );

            var requiredResources011 = {
               'additionalasset' : {
                  'artifactId' : 'IssuesReturns.AssetLookup_additionalasset',
                  'id' : 'aw3270523d',
               },
            };
            lookup001.addRequiredResources( requiredResources011 );


            var searchAttributes001 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_searchAttributes',
               'id' : 'aw9d1e686',
            });

            var searchAttribute001 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'awfa4bb023',
            });
            searchAttributes001.addChild( searchAttribute001 );


            var searchAttribute002 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_searchAttribute_description',
               'id' : 'awc9441ae4',
            });
            searchAttributes001.addChild( searchAttribute002 );


            var searchAttribute003 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_searchAttribute_location',
               'id' : 'aw1b0d4af7',
            });
            searchAttributes001.addChild( searchAttribute003 );


            var searchAttribute004 = new SearchAttribute({
               'name' : 'locationdesc',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_searchAttribute_locationdesc',
               'id' : 'aw52c23dfd',
            });
            searchAttributes001.addChild( searchAttribute004 );



            var listItemTemplate007 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_listItemTemplate_Item2Desc2',
               'id' : 'aw6a2cafcb',
            });

            var listtext029 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_Item2Desc2_assetnum',
               'id' : 'awac91f72e',
            });
            listItemTemplate007.addChild( listtext029 );


            var listtext030 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_Item2Desc2_description',
               'id' : 'aw18a26be9',
            });
            listItemTemplate007.addChild( listtext030 );


            var listtext031 = new ListText({
               'resourceAttribute' : 'location',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_Item2Desc2_location',
               'id' : 'aw4dd70dfa',
            });
            listItemTemplate007.addChild( listtext031 );


            var listtext032 = new ListText({
               'resourceAttribute' : 'locationdesc',
               'layoutInsertAt' : 'desc2',
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_Item2Desc2_locationdesc',
               'id' : 'aw2ca2a731',
            });
            listItemTemplate007.addChild( listtext032 );



            var list007 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate007,
               'artifactId' : 'IssuesReturns.AssetLookup_additionalasset_list',
               'id' : 'aw98d90f3c',
               'searchAttributes' : searchAttributes001,
            });
            lookup001.addChild( list007 );


            var returnAttributes001 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.AssetLookup_returnAttributes',
               'id' : 'awa0c9b66',
            });
            lookup001.addChild( returnAttributes001 );


            var returnAttribute001 = new ReturnAttribute({
               'targetAttribute' : 'asset',
               'artifactId' : 'IssuesReturns.AssetLookup_assetnum_asset',
               'id' : 'awee906aa2',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes001.addChild( returnAttribute001 );


            var returnAttribute002 = new ReturnAttribute({
               'targetAttribute' : 'assetdesc',
               'artifactId' : 'IssuesReturns.AssetLookup_description_assetdesc',
               'id' : 'awcf18ade7',
               'sourceAttribute' : 'description',
            });
            returnAttributes001.addChild( returnAttribute002 );


            var lookup002 = new Lookup({
               'filterMethod' : 'filterLocationForLookup',
               'resource' : 'additionallocations',
               'filterClass' : 'application.handlers.IssuesReturnsHandler',
               'id' : 'IssuesReturns.LocationLookup',
               'label' : MessageService.createStaticMessage('Select Location'),
            });
            ui001.addChild( lookup002 );

            var requiredResources012 = {
               'additionallocations' : {
                  'artifactId' : 'IssuesReturns.LocationLookup_additionallocations',
                  'id' : 'aw2502c7be',
               },
            };
            lookup002.addRequiredResources( requiredResources012 );


            var searchAttributes002 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_searchAttributes',
               'id' : 'aw8de18507',
            });

            var searchAttribute005 = new SearchAttribute({
               'name' : 'location',
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_searchAttribute_location',
               'id' : 'aw7ede8834',
            });
            searchAttributes002.addChild( searchAttribute005 );


            var searchAttribute006 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_searchAttribute_description',
               'id' : 'awbcbb043a',
            });
            searchAttributes002.addChild( searchAttribute006 );



            var listItemTemplate008 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_listItemTemplate_Item1Desc1',
               'id' : 'aw4e9201',
            });

            var listtext033 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_Item1Desc1_location',
               'id' : 'aw3f63a57b',
            });
            listItemTemplate008.addChild( listtext033 );


            var listtext034 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_Item1Desc1_description',
               'id' : 'aw52875b58',
            });
            listItemTemplate008.addChild( listtext034 );



            var list008 = new List({
               'resource' : 'additionallocations',
               'listItemTemplate' : listItemTemplate008,
               'artifactId' : 'IssuesReturns.LocationLookup_additionallocations_list',
               'id' : 'awb6f7ec40',
               'searchAttributes' : searchAttributes002,
            });
            lookup002.addChild( list008 );


            var returnAttributes002 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.LocationLookup_returnAttributes',
               'id' : 'aw8b0e2569',
            });
            lookup002.addChild( returnAttributes002 );


            var returnAttribute003 = new ReturnAttribute({
               'targetAttribute' : 'location',
               'artifactId' : 'IssuesReturns.LocationLookup_location_location',
               'id' : 'awc55943cf',
               'sourceAttribute' : 'location',
            });
            returnAttributes002.addChild( returnAttribute003 );


            var returnAttribute004 = new ReturnAttribute({
               'targetAttribute' : 'locationdesc',
               'artifactId' : 'IssuesReturns.LocationLookup_description_locationdesc',
               'id' : 'aw2852e644',
               'sourceAttribute' : 'description',
            });
            returnAttributes002.addChild( returnAttribute004 );


            var lookup003 = new Lookup({
               'resource' : 'additionalstoreroom',
               'id' : 'IssuesReturns.StoreroomLookup',
               'label' : MessageService.createStaticMessage('Select Storeroom'),
            });
            ui001.addChild( lookup003 );

            var requiredResources013 = {
               'additionalstoreroom' : {
                  'reload' : true,
                  'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom',
                  'id' : 'awf6ebd798',
               },
               'additionalInventory' : {
                  'artifactId' : 'IssuesReturns.StoreroomLookup_additionalInventory',
                  'id' : 'awfb178da5',
               },
            };
            lookup003.addRequiredResources( requiredResources013 );


            var searchAttributes003 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_searchAttributes',
               'id' : 'aw40839df8',
            });

            var searchAttribute007 = new SearchAttribute({
               'name' : 'locationForSearch',
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_searchAttribute_locationForSearch',
               'id' : 'aw10f272b9',
            });
            searchAttributes003.addChild( searchAttribute007 );


            var searchAttribute008 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_searchAttribute_description',
               'id' : 'aw1cfad48',
            });
            searchAttributes003.addChild( searchAttribute008 );



            var listItemTemplate009 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_listItemTemplate_Item1Desc1',
               'id' : 'awbd3a3b73',
            });

            var listtext035 = new ListText({
               'resourceAttribute' : 'location',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_Item1Desc1_location',
               'id' : 'awa05c0976',
            });
            listItemTemplate009.addChild( listtext035 );


            var listtext036 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_Item1Desc1_description',
               'id' : 'awee8b164c',
            });
            listItemTemplate009.addChild( listtext036 );



            var list009 = new List({
               'resource' : 'additionalstoreroom',
               'listItemTemplate' : listItemTemplate009,
               'artifactId' : 'IssuesReturns.StoreroomLookup_additionalstoreroom_list',
               'id' : 'awa4491c88',
               'searchAttributes' : searchAttributes003,
            });
            lookup003.addChild( list009 );


            var lookup004 = new Lookup({
               'filterMethod' : 'filterRotAssetForLookup',
               'resource' : 'additionalasset',
               'filterClass' : 'application.handlers.IssuesReturnsHandler',
               'id' : 'IssuesReturns.RotatingAssetLookup',
               'label' : MessageService.createStaticMessage('Select Rotating Asset'),
            });
            ui001.addChild( lookup004 );



            var searchAttributes004 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_searchAttributes',
               'id' : 'aw455b0444',
            });

            var searchAttribute009 = new SearchAttribute({
               'name' : 'assetnum',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_searchAttribute_assetnum',
               'id' : 'aw74dfc5a1',
            });
            searchAttributes004.addChild( searchAttribute009 );


            var searchAttribute010 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_searchAttribute_description',
               'id' : 'aw8edf0f6a',
            });
            searchAttributes004.addChild( searchAttribute010 );



            var listItemTemplate010 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_listItemTemplate_Item1Desc1',
               'id' : 'aw322a9951',
            });

            var listtext037 = new ListText({
               'resourceAttribute' : 'assetnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_Item1Desc1_assetnum',
               'id' : 'awa5d59f66',
            });
            listItemTemplate010.addChild( listtext037 );


            var listtext038 = new ListText({
               'resourceAttribute' : 'description',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_Item1Desc1_description',
               'id' : 'awbabed3be',
            });
            listItemTemplate010.addChild( listtext038 );



            var list010 = new List({
               'resource' : 'additionalasset',
               'listItemTemplate' : listItemTemplate010,
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_additionalasset_list',
               'id' : 'aw49f847aa',
               'searchAttributes' : searchAttributes004,
            });
            lookup004.addChild( list010 );


            var returnAttributes003 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_returnAttributes',
               'id' : 'aw6e4d6036',
            });
            lookup004.addChild( returnAttributes003 );


            var returnAttribute005 = new ReturnAttribute({
               'targetAttribute' : 'rotassetnum',
               'artifactId' : 'IssuesReturns.RotatingAssetLookup_item_itemnum',
               'id' : 'aw79499e8',
               'sourceAttribute' : 'assetnum',
            });
            returnAttributes003.addChild( returnAttribute005 );


            var lookup005 = new Lookup({
               'resource' : 'additionalbin',
               'id' : 'IssuesReturns.BinLookup',
               'label' : MessageService.createStaticMessage('Select Bin'),
            });
            ui001.addChild( lookup005 );

            var requiredResources014 = {
               'additionalbin' : {
                  'reload' : true,
                  'artifactId' : 'IssuesReturns.BinLookup_additionalbin',
                  'id' : 'awe57d3c2d',
               },
               'additionalInventory' : {
                  'artifactId' : 'IssuesReturns.BinLookup_additionalInventory',
                  'id' : 'aweb3071f7',
               },
            };
            lookup005.addRequiredResources( requiredResources014 );


            var searchAttributes005 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_searchAttributes',
               'id' : 'aw3af8f864',
            });

            var searchAttribute011 = new SearchAttribute({
               'name' : 'binnum',
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_searchAttribute_binnum',
               'id' : 'aw1135b7b4',
            });
            searchAttributes005.addChild( searchAttribute011 );



            var listItemTemplate011 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_listItemTemplate_Item1Desc1',
               'id' : 'aw169f4784',
            });

            var listtext039 = new ListText({
               'resourceAttribute' : 'binnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_Item1Desc1_binnum',
               'id' : 'aw96e09557',
            });
            listItemTemplate011.addChild( listtext039 );


            var listtext040 = new ListText({
               'resourceAttribute' : 'currentbalance',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_Item1Desc1_currentbalance',
               'id' : 'awd6de5ffe',
            });
            listItemTemplate011.addChild( listtext040 );



            var list011 = new List({
               'resource' : 'additionalbin',
               'listItemTemplate' : listItemTemplate011,
               'artifactId' : 'IssuesReturns.BinLookup_additionalbin_list',
               'id' : 'awe561d805',
               'searchAttributes' : searchAttributes005,
            });
            lookup005.addChild( list011 );


            var lookup006 = new Lookup({
               'filterMethod' : 'asyncfilterItemForLookup',
               'resource' : 'additionalInventory',
               'filterClass' : 'application.handlers.IssuesReturnsHandler',
               'id' : 'IssuesReturns.ItemLookup',
               'label' : MessageService.createStaticMessage('Select Item'),
            });
            ui001.addChild( lookup006 );

            var requiredResources015 = {
               'additionalInventory' : {
                  'reload' : true,
                  'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory',
                  'id' : 'aw8f2cb001',
               },
            };
            lookup006.addRequiredResources( requiredResources015 );


            var searchAttributes006 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_searchAttributes',
               'id' : 'aw1314f69b',
            });

            var searchAttribute012 = new SearchAttribute({
               'name' : 'itemnum',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_searchAttribute_itemnum',
               'id' : 'awff7c5ee8',
            });
            searchAttributes006.addChild( searchAttribute012 );


            var searchAttribute013 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_searchAttribute_itemdesc',
               'id' : 'awf4db5b0',
            });
            searchAttributes006.addChild( searchAttribute013 );


            var searchAttribute014 = new SearchAttribute({
               'name' : 'binnum',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_searchAttribute_defaultbin',
               'id' : 'aw5ec7396c',
            });
            searchAttributes006.addChild( searchAttribute014 );



            var listItemTemplate012 = new ListItemTemplate({
               'layout' : 'ItemLookup',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_listItemTemplate_Item',
               'id' : 'awcfef8644',
            });

            var listtext041 = new ListText({
               'resourceAttribute' : 'itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_ItemElement_itemnum',
               'id' : 'awb72e745a',
            });
            listItemTemplate012.addChild( listtext041 );


            var listtext042 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_ItemElement_itemdesc',
               'id' : 'aw2a6a353a',
            });
            listItemTemplate012.addChild( listtext042 );


            var listtext043 = new ListText({
               'resourceAttribute' : 'binnum',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_ItemElement_defaultbin',
               'id' : 'aw7213efaa',
            });
            listItemTemplate012.addChild( listtext043 );



            var list012 = new List({
               'resource' : 'additionalInventory',
               'listItemTemplate' : listItemTemplate012,
               'artifactId' : 'IssuesReturns.ItemLookup_additionalInventory_list',
               'id' : 'awb4b3d429',
               'searchAttributes' : searchAttributes006,
            });
            lookup006.addChild( list012 );


            var returnAttributes004 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.ItemLookup_returnAttributes',
               'id' : 'aw74b611f3',
            });
            lookup006.addChild( returnAttributes004 );


            var returnAttribute006 = new ReturnAttribute({
               'targetAttribute' : 'itemnum',
               'artifactId' : 'IssuesReturns.ItemLookup_item_itemnum',
               'id' : 'aw1f9d1a88',
               'sourceAttribute' : 'itemnum',
            });
            returnAttributes004.addChild( returnAttribute006 );


            var lookup007 = new Lookup({
               'filterMethod' : 'filterUsedItemLookup',
               'resource' : 'additionalInventory',
               'filterClass' : 'application.handlers.ReturnIssuedItemsHandler',
               'id' : 'IssuesReturns.UsedItemLookup',
               'label' : MessageService.createStaticMessage('Select Item'),
            });
            ui001.addChild( lookup007 );



            var searchAttributes007 = new SearchAttributes({
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_searchAttributes',
               'id' : 'awcb20b0b6',
            });

            var searchAttribute015 = new SearchAttribute({
               'name' : 'itemnum',
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_searchAttribute_itemnum',
               'id' : 'aw3f5660f5',
            });
            searchAttributes007.addChild( searchAttribute015 );


            var searchAttribute016 = new SearchAttribute({
               'name' : 'description',
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_searchAttribute_description',
               'id' : 'awec2a3064',
            });
            searchAttributes007.addChild( searchAttribute016 );



            var listItemTemplate013 = new ListItemTemplate({
               'layout' : 'ItemLookup',
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_listItemTemplate_Item',
               'id' : 'aw2242684b',
            });

            var listtext044 = new ListText({
               'resourceAttribute' : 'itemnum',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_ItemElement_itemnum',
               'id' : 'aw2cbd07',
            });
            listItemTemplate013.addChild( listtext044 );


            var listtext045 = new ListText({
               'resourceAttribute' : 'description',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.UsedItemLookup_matusetrans_ItemElement_itemdesc',
               'id' : 'aw3f071aba',
            });
            listItemTemplate013.addChild( listtext045 );



            var list013 = new List({
               'resource' : 'additionalInventory',
               'listItemTemplate' : listItemTemplate013,
               'artifactId' : 'IssuesReturns.UsedItemLookup_additionalInventory_list',
               'id' : 'awb7495c0d',
               'searchAttributes' : searchAttributes007,
            });
            lookup007.addChild( list013 );


            var returnAttributes005 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.UsedItemLookup_returnAttributes',
               'id' : 'awcae170cd',
            });
            lookup007.addChild( returnAttributes005 );


            var returnAttribute007 = new ReturnAttribute({
               'targetAttribute' : 'itemnum',
               'artifactId' : 'IssuesReturns.UsedItemLookup_item_itemnum',
               'id' : 'aw9f7e3b05',
               'sourceAttribute' : 'itemnum',
            });
            returnAttributes005.addChild( returnAttribute007 );


            var lookup008 = new Lookup({
               'filterMethod' : 'filterAndSortTasks',
               'filterClass' : 'application.handlers.TaskHandler',
               'id' : 'IssuesReturns.TaskLookup',
               'label' : MessageService.createStaticMessage('Select Task'),
            });
            ui001.addChild( lookup008 );

            var requiredResources016 = {
               'workOrder' : {
                  'artifactId' : 'IssuesReturns.TaskLookup_workOrder',
                  'id' : 'aw7adb805d',
                  'related' : {
                     'tasklist' : {
                        'reload' : true,
                        'artifactId' : 'IssuesReturns.TaskLookup_workOrder_tasklist',
                        'id' : 'aw9bba06e6',
                     },
                  },
               },
            };
            lookup008.addRequiredResources( requiredResources016 );


            var listItemTemplate014 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.TaskLookup_workOrder_tasklist_listItemTemplate_Item1Desc1',
               'id' : 'aw970a524',
            });

            var listtext046 = new ListText({
               'resourceAttribute' : 'taskid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.TaskLookup_workOrder_Item1Desc1_taskid',
               'id' : 'awd13c5832',
            });
            listItemTemplate014.addChild( listtext046 );


            var listtext047 = new ListText({
               'resourceAttribute' : 'taskdescription',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.TaskLookup_workOrder_Item1Desc1_taskdescription',
               'id' : 'aw235ae958',
            });
            listItemTemplate014.addChild( listtext047 );



            var list014 = new List({
               'resource' : 'workOrder',
               'listItemTemplate' : listItemTemplate014,
               'artifactId' : 'IssuesReturns.TaskLookup_workOrder_tasklist_list',
               'attribute' : 'tasklist',
               'id' : 'awc16ecdb7',
            });
            lookup008.addChild( list014 );


            var returnAttributes006 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.TaskLookup_returnAttributes',
               'id' : 'aw3a76e81',
            });
            lookup008.addChild( returnAttributes006 );


            var returnAttribute008 = new ReturnAttribute({
               'targetAttribute' : 'taskid',
               'artifactId' : 'IssuesReturns.TaskLookup_taskid',
               'id' : 'aw4d79eb61',
               'sourceAttribute' : 'taskid',
            });
            returnAttributes006.addChild( returnAttribute008 );


            var returnAttribute009 = new ReturnAttribute({
               'targetAttribute' : 'glaccount',
               'artifactId' : 'IssuesReturns.TaskLookup_glaccount',
               'id' : 'aw53c0390f',
               'sourceAttribute' : 'glaccount',
            });
            returnAttributes006.addChild( returnAttribute009 );


            var returnAttribute010 = new ReturnAttribute({
               'targetAttribute' : 'asset',
               'artifactId' : 'IssuesReturns.TaskLookup_asset',
               'id' : 'aw6b758f93',
               'sourceAttribute' : 'asset',
            });
            returnAttributes006.addChild( returnAttribute010 );


            var returnAttribute011 = new ReturnAttribute({
               'targetAttribute' : 'location',
               'artifactId' : 'IssuesReturns.TaskLookup_location',
               'id' : 'aw5e24524f',
               'sourceAttribute' : 'location',
            });
            returnAttributes006.addChild( returnAttribute011 );


            var lookup009 = new Lookup({
               'id' : 'IssuesReturns.IssueToLookup',
               'label' : MessageService.createStaticMessage('Select Person'),
            });
            ui001.addChild( lookup009 );

            var requiredResources017 = {
               'additionalperson' : {
                  'reload' : true,
                  'artifactId' : 'IssuesReturns.IssueToLookup_workOrder',
                  'id' : 'aw560e9470',
               },
            };
            lookup009.addRequiredResources( requiredResources017 );


            var listItemTemplate015 = new ListItemTemplate({
               'layout' : 'Item1Desc1',
               'artifactId' : 'IssuesReturns.IssueToLookup_listItemTemplate_Item1Desc1',
               'id' : 'awe31d371e',
            });

            var listtext048 = new ListText({
               'resourceAttribute' : 'personid',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'IssuesReturns.IssueToLookup_Item1Desc1_personid',
               'id' : 'aw50285870',
            });
            listItemTemplate015.addChild( listtext048 );


            var listtext049 = new ListText({
               'resourceAttribute' : 'displayname',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'desc1',
               'artifactId' : 'IssuesReturns.IssueToLookup_Item1Desc1_displayname',
               'id' : 'aw1afd7457',
            });
            listItemTemplate015.addChild( listtext049 );



            var list015 = new List({
               'resource' : 'additionalperson',
               'listItemTemplate' : listItemTemplate015,
               'artifactId' : 'IssuesReturns.IssueToLookup_list',
               'id' : 'aw94294518',
            });
            lookup009.addChild( list015 );


            var returnAttributes007 = new ReturnAttributes({
               'artifactId' : 'IssuesReturns.IssueToLookup_returnAttributes',
               'id' : 'aw9e7b96ff',
            });
            lookup009.addChild( returnAttributes007 );


            var returnAttribute012 = new ReturnAttribute({
               'targetAttribute' : 'issueTo',
               'artifactId' : 'IssuesReturns.IssueToLookup_personid',
               'id' : 'aw3bb81284',
               'sourceAttribute' : 'personid',
            });
            returnAttributes007.addChild( returnAttribute012 );


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

            var eventHandlers056 = [
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
            action001.eventHandlers = eventHandlers056;

            var action002 = new Action({
               'overflow' : true,
               'enableFeatureByProperty' : 'pushnotification.enabled',
               'transitionTo' : 'Platform.Notifications',
               'artifactId' : 'Notifications_action',
               'id' : 'aw1fc4c6b4',
               'label' : MessageService.createStaticMessage('Notifications'),
            });
            actions001.addChild( action002 );

            var eventHandlers057 = [
               {
                     'method' : 'enableNotification',
                     'artifactId' : 'Notifications_action_eventHandlers_render_enableResetWorkList',
                     'id' : 'awc608296f',
                     'event' : 'render',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action002.eventHandlers = eventHandlers057;

            var action003 = new Action({
               'overflow' : true,
               'artifactId' : 'PseudoOffline_goOffline',
               'id' : 'aw90309912',
               'label' : MessageService.createStaticMessage('Enable Offline Mode'),
            });
            actions001.addChild( action003 );

            var eventHandlers058 = [
               {
                     'method' : 'toggleOfflineMode',
                     'artifactId' : 'PseudoOffline_enableoffline_action_eventHandlers_click',
                     'id' : 'aw33d3b70c',
                     'event' : 'click',
                     'class' : 'platform.handlers.PseudoOfflineModeHandler',
               }
            ];
            action003.eventHandlers = eventHandlers058;

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

            var eventHandlers059 = [
               {
                     'artifactId' : 'action_eventHandlers_click',
                     'id' : 'aw871940b2',
                     'event' : 'click',
                     'class' : 'platform.handlers.CreateQueryBaseHandler',
               }
            ];
            action007.eventHandlers = eventHandlers059;

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

            var eventHandlers060 = [
               {
                     'method' : 'confirmClearChanges',
                     'artifactId' : 'UndoChanges_action_eventHandlers_click_confirmClearChanges',
                     'id' : 'awcf857f5c',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action008.eventHandlers = eventHandlers060;

            var action009 = new Action({
               'artifactId' : 'ResendChanges_action',
               'id' : 'awccf9e70e',
               'label' : MessageService.createStaticMessage('Resend Changes'),
            });
            erroractions001.addChild( action009 );

            var eventHandlers061 = [
               {
                     'method' : 'retryRecordChanges',
                     'artifactId' : 'ResendChanges_action_eventHandlers_click_retryRecordChanges',
                     'id' : 'aw543ac47e',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            action009.eventHandlers = eventHandlers061;
            var eventHandlers062 = [
               {
                     'method' : 'none',
                     'artifactId' : 'eventHandlers_none_none',
                     'id' : 'aw1e2e7ded',
                     'event' : 'none',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            ui001.eventHandlers = eventHandlers062;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.emptyview', false);
               trackTimer.startTracking();
            }

            var view014 = new View({
               'showHeader' : false,
               'id' : 'Platform.emptyview',
               'showFooter' : false,
            });
            ui001.addChild( view014 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Notifications', false);
               trackTimer.startTracking();
            }

            var view015 = new View({
               'id' : 'Platform.Notifications',
               'label' : MessageService.createStaticMessage('My Notifications'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view015 );

            var requiredResources018 = {
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
            view015.addRequiredResources( requiredResources018 );


            var listItemTemplate016 = new ListItemTemplate({
               'layout' : 'NotificationList',
               'artifactId' : 'Platform.Notifications_listItemTemplate',
               'id' : 'aw718eb447',
            });

            var listtext050 = new ListText({
               'resourceAttribute' : 'uiDate',
               'layoutInsertAt' : 'date1',
               'artifactId' : 'Platform.Notifications_uiDate',
               'id' : 'aw56b07378',
            });
            listItemTemplate016.addChild( listtext050 );


            var listtext051 = new ListText({
               'resourceAttribute' : 'itemnum',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'Platform.Notifications_itemnum',
               'id' : 'aw4dbbd111',
            });
            listItemTemplate016.addChild( listtext051 );


            var listtext052 = new ListText({
               'resourceAttribute' : 'itemDesc',
               'layoutInsertAt' : 'item2',
               'artifactId' : 'Platform.Notifications_itemDesc',
               'id' : 'aw6bac97b9',
            });
            listItemTemplate016.addChild( listtext052 );

            var eventHandlers063 = [
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
            listItemTemplate016.eventHandlers = eventHandlers063;


            var list016 = new List({
               'resource' : 'osusernotification',
               'listItemTemplate' : listItemTemplate016,
               'artifactId' : 'Platform.Notifications_list',
               'id' : 'awb4916253',
               'label' : MessageService.createStaticMessage('List of notifications'),
            });
            view015.addChild( list016 );

            var eventHandlers064 = [
               {
                     'method' : 'renderMsgHistory',
                     'artifactId' : 'Platform.Notifications_eventHandlers_render_FromList',
                     'id' : 'awa8aedc90',
                     'event' : 'render',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            view015.eventHandlers = eventHandlers064;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentInfoView', false);
               trackTimer.startTracking();
            }

            var view016 = new View({
               'resource' : 'PlatformAttachmentInfoResource',
               'id' : 'Platform.AttachmentInfoView',
               'label' : MessageService.createStaticMessage('Attachment Details'),
            });
            ui001.addChild( view016 );

            var requiredResources019 = {
               'PlatformAttachmentInfoResource' : {
                  'reload' : true,
                  'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource',
                  'id' : 'awedbd920b',
               },
            };
            view016.addRequiredResources( requiredResources019 );

            var container018 = new Container({
               'resource' : 'PlatformAttachmentInfoResource',
               'artifactId' : 'Platform.AttachmentInfoView_container_0',
               'id' : 'aw22b80d5f',
            });
            view016.addChild( container018 );


            var group009 = new Group({
               'artifactId' : 'Platform.AttachmentInfoView_group_0',
               'id' : 'aw80e7b381',
            });
            container018.addChild( group009 );


            var groupitem022 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0',
               'id' : 'aw15768e0',
            });
            group009.addChild( groupitem022 );


            var text047 = new Text({
               'resourceAttribute' : 'name',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_0_name_Name',
               'id' : 'awddf675f4',
               'label' : MessageService.createStaticMessage('Name'),
               'required' : true,
            });
            groupitem022.addChild( text047 );


            var groupitem023 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1',
               'id' : 'aw76505876',
            });
            group009.addChild( groupitem023 );


            var text048 = new Text({
               'resourceAttribute' : 'description',
               'editable' : true,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_1_description_Description',
               'id' : 'awc2735258',
               'label' : MessageService.createStaticMessage('Description'),
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem023.addChild( text048 );


            var groupitem024 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2',
               'id' : 'awef5909cc',
            });
            group009.addChild( groupitem024 );


            var text049 = new Text({
               'resourceAttribute' : 'category',
               'lookup' : 'PlatformAttachmentIn.CategoryLookup',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder',
               'id' : 'aw3a5ae064',
               'label' : MessageService.createStaticMessage('Folder'),
               'lookupAttribute' : 'folderName',
               'placeHolder' : MessageService.createStaticMessage('Tap to enter'),
            });
            groupitem024.addChild( text049 );

            var eventHandlers065 = [
               {
                     'method' : 'renderCategory',
                     'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_2_category_Folder_eventHandlers_render_renderCategory',
                     'id' : 'awa205ff23',
                     'event' : 'render',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            text049.eventHandlers = eventHandlers065;

            var groupitem025 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3',
               'id' : 'aw985e395a',
            });
            group009.addChild( groupitem025 );


            var text050 = new Text({
               'resourceAttribute' : 'fileType',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_3_fileType_FileType',
               'id' : 'awf0b55f9',
               'label' : MessageService.createStaticMessage('File Type'),
            });
            groupitem025.addChild( text050 );


            var groupitem026 = new GroupItem({
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4',
               'id' : 'aw63aacf9',
            });
            group009.addChild( groupitem026 );


            var text051 = new Text({
               'resourceAttribute' : 'fileSize',
               'editable' : false,
               'artifactId' : 'Platform.AttachmentInfoView_PlatformAttachmentInfoResource_groupitem_4_fileSize_FileSizeKB',
               'id' : 'awa8aac05f',
               'label' : MessageService.createStaticMessage('File Size (KB)'),
            });
            groupitem026.addChild( text051 );


            var footer009 = new Footer({
               'artifactId' : 'Platform.AttachmentInfoView_footer',
               'id' : 'awad3a6a43',
            });
            view016.addChild( footer009 );


            var button029 = new Button({
               'artifactId' : 'Platform.AttachmentInfoView_Cancel_button',
               'id' : 'aw61842429',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers066 = [
               {
                     'method' : 'handleBackButtonAttachmentDetailsView',
                     'artifactId' : 'Platform.AttachmentInfoView_Cancel_button_eventHandlers_click_handleBackButtonAttachmentDetailsView',
                     'id' : 'aw2e660b65',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button029.eventHandlers = eventHandlers066;
            footer009.addChild( button029 );


            var button030 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.AttachmentInfoView_Save_button',
               'id' : 'aw8904293b',
               'label' : MessageService.createStaticMessage('Save'),
            });
            var eventHandlers067 = [
               {
                     'method' : 'commitAttachmentEntry',
                     'artifactId' : 'Platform.AttachmentInfoView_Save_button_eventHandlers_click_commitAttachmentEntry',
                     'id' : 'awbff90b7f',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button030.eventHandlers = eventHandlers067;
            footer009.addChild( button030 );

            var eventHandlers068 = [
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
            view016.eventHandlers = eventHandlers068;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AttachmentFileDialog', false);
               trackTimer.startTracking();
            }

            var view017 = new View({
               'id' : 'Platform.AttachmentFileDialog',
            });
            ui001.addChild( view017 );


            var footer010 = new Footer({
               'artifactId' : 'Platform.AttachmentFileDialog_footer',
               'id' : 'awb513dc05',
            });
            view017.addChild( footer010 );


            var button031 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.UnsavedSketch_doNotAllow_button',
               'id' : 'aw150d1bc',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers069 = [
               {
                     'method' : 'closeFileDialog',
                     'artifactId' : 'Platform.AttachmentFileDialog_closeDialog',
                     'id' : 'awc0d2f7fd',
                     'event' : 'click',
                     'class' : 'platform.handlers.AttachmentHandler',
               }
            ];
            button031.eventHandlers = eventHandlers069;
            footer010.addChild( button031 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var lookup010 = new Lookup({
               'resource' : 'PlatformAttachmentCategoryResource',
               'id' : 'PlatformAttachmentIn.CategoryLookup',
               'label' : MessageService.createStaticMessage('Select Folder'),
            });
            ui001.addChild( lookup010 );

            var requiredResources020 = {
               'PlatformAttachmentCategoryResource' : {
                  'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource',
                  'id' : 'aw18cc3542',
               },
            };
            lookup010.addRequiredResources( requiredResources020 );


            var searchAttributes008 = new SearchAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttributes',
               'id' : 'awb7d9341f',
            });

            var searchAttribute017 = new SearchAttribute({
               'name' : 'folderName',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_searchAttribute_folderName',
               'id' : 'aw9514e6e6',
            });
            searchAttributes008.addChild( searchAttribute017 );



            var listItemTemplate017 = new ListItemTemplate({
               'layout' : 'Item2Desc2',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_listItemTemplate_Item2Desc2',
               'id' : 'aweb3659e3',
            });

            var listtext053 = new ListText({
               'resourceAttribute' : 'folderName',
               'cssClass' : 'bold textappearance-medium',
               'layoutInsertAt' : 'item1',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_Item2Desc2_folderName',
               'id' : 'aw48fc196b',
            });
            listItemTemplate017.addChild( listtext053 );



            var list017 = new List({
               'resource' : 'PlatformAttachmentCategoryResource',
               'listItemTemplate' : listItemTemplate017,
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_PlatformAttachmentCategoryResource_list',
               'id' : 'awe6857cc4',
               'searchAttributes' : searchAttributes008,
            });
            lookup010.addChild( list017 );


            var returnAttributes008 = new ReturnAttributes({
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_returnAttributes',
               'id' : 'aw4860e6b5',
            });
            lookup010.addChild( returnAttributes008 );


            var returnAttribute013 = new ReturnAttribute({
               'targetAttribute' : 'category',
               'artifactId' : 'PlatformAttachmentIn.CategoryLookup_folderName_category',
               'id' : 'awb2f5d728',
               'sourceAttribute' : 'folderName',
            });
            returnAttributes008.addChild( returnAttribute013 );


            var dialog004 = new Dialog({
               'resource' : 'PlatformEsigResource',
               'id' : 'Platform.EsigLoginView',
               'label' : MessageService.createStaticMessage('Electronic Signature Authentication'),
            });
            ui001.addChild( dialog004 );

            var requiredResources021 = {
               'attemptResultDomain' : {
                  'enableFeatureByProperty' : 'esig.enabled',
                  'artifactId' : 'Platform.EsigLoginView_attemptResultDomain',
                  'id' : 'aw3c53638b',
               },
            };
            dialog004.addRequiredResources( requiredResources021 );

            var container019 = new Container({
               'artifactId' : 'Platform.EsigLoginView_container_0',
               'id' : 'aw44fd9611',
            });
            dialog004.addChild( container019 );


            var group010 = new Group({
               'artifactId' : 'Platform.EsigLoginView_group_0',
               'id' : 'aw7bf6135f',
            });
            container019.addChild( group010 );


            var groupitem027 = new GroupItem({
               'artifactId' : 'Platform.EsigLoginView_group_0_groupitem_1',
               'id' : 'aw209714b9',
            });
            group010.addChild( groupitem027 );


            var text052 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'userName',
               'cssClass' : 'loginUsername',
               'editable' : false,
               'artifactId' : 'Platform.EsigLoginView_container_0_username',
               'id' : 'aw15aabb30',
               'label' : MessageService.createStaticMessage('User Name'),
               'placeHolder' : MessageService.createStaticMessage('User name'),
            });
            groupitem027.addChild( text052 );


            var text053 = new Text({
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
            groupitem027.addChild( text053 );


            var text054 = new Text({
               'resourceAttribute' : 'reason',
               'cssClass' : 'loginUsername',
               'editable' : true,
               'artifactId' : 'Platform.EsigLoginView_container_0_reason',
               'id' : 'aw6ccf562d',
               'label' : MessageService.createStaticMessage('Reason for Change'),
               'placeHolder' : MessageService.createStaticMessage('Reason for Change'),
               'required' : true,
            });
            groupitem027.addChild( text054 );


            var container020 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.EsigLoginView_footer',
               'id' : 'aw68d6d11c',
            });
            dialog004.addChild( container020 );


            var button032 = new Button({
               'artifactId' : 'Platform.EsigLoginView_Cancel_button',
               'id' : 'aw68a36a2b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers070 = [
               {
                     'method' : 'cancelEsig',
                     'artifactId' : 'Platform.EsigLoginView_Cancel_button_eventHandlers_click_cancelEsig',
                     'id' : 'awdba9800d',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button032.eventHandlers = eventHandlers070;
            container020.addChild( button032 );


            var button033 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.EsigLoginView_Save_button',
               'id' : 'awef41b275',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers071 = [
               {
                     'method' : 'submitEsig',
                     'artifactId' : 'Platform.EsigLoginView_Save_button_eventHandlers_click_submitEsig',
                     'id' : 'awa9f3497f',
                     'event' : 'click',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            button033.eventHandlers = eventHandlers071;
            container020.addChild( button033 );

            var eventHandlers072 = [
               {
                     'method' : 'initializeEsig',
                     'artifactId' : 'Platform.EsigLoginView_eventHandlers_show_initializeEsig',
                     'id' : 'aw681e6384',
                     'event' : 'show',
                     'class' : 'platform.handlers.EsigHandler',
               }
            ];
            dialog004.eventHandlers = eventHandlers072;

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Signature', false);
               trackTimer.startTracking();
            }

            var view018 = new View({
               'id' : 'Platform.Signature',
               'label' : MessageService.createStaticMessage('Capture Real Signature'),
            });
            ui001.addChild( view018 );

            var requiredResources022 = {
               'PlatformAttachmentInfoResource' : {
                  'artifactId' : 'Platform.Signature_PlatformAttachmentInfoResource',
                  'id' : 'aw8cc44736',
               },
            };
            view018.addRequiredResources( requiredResources022 );

            var footer011 = new Footer({
               'artifactId' : 'Platform.Signature_footer',
               'id' : 'aw16b9ee39',
            });
            view018.addChild( footer011 );


            var button034 = new Button({
               'artifactId' : 'Platform.Signature_Cancel_button',
               'id' : 'aw9088fe5b',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers073 = [
               {
                     'method' : 'cancelSignature',
                     'artifactId' : 'Platform.Signature_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'awc27cd6a4',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button034.eventHandlers = eventHandlers073;
            footer011.addChild( button034 );


            var button035 = new Button({
               'artifactId' : 'Platform.Signature_Clear_button',
               'id' : 'awc6576044',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers074 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.Signature_Clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw90653ab1',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button035.eventHandlers = eventHandlers074;
            footer011.addChild( button035 );


            var button036 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.Signature_Save_button',
               'id' : 'awbc1f2293',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers075 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.Signature_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'aw7d8e432b',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button036.eventHandlers = eventHandlers075;
            footer011.addChild( button036 );

            var eventHandlers076 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.Signature_eventHandlers_show_initStopWorkView',
                     'id' : 'awb8cf4cb7',
                     'event' : 'initialize',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            view018.eventHandlers = eventHandlers076;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog005 = new Dialog({
               'id' : 'Platform.SignatureDialog',
            });
            ui001.addChild( dialog005 );


            var container021 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.SignatureDialog_container_buttons',
               'id' : 'aw91450791',
            });
            dialog005.addChild( container021 );


            var button037 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button',
               'id' : 'aw51ebe6e8',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers077 = [
               {
                     'method' : 'cancelSignatureDialog',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Cancel_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw198ca753',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button037.eventHandlers = eventHandlers077;
            container021.addChild( button037 );


            var button038 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button',
               'id' : 'awdc63a382',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers078 = [
               {
                     'method' : 'clearSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_clear_button_eventHandlers_click_handleBackButtonClickEditAssetView',
                     'id' : 'aw72eacc40',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button038.eventHandlers = eventHandlers078;
            container021.addChild( button038 );


            var button039 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button',
               'id' : 'awd4941650',
               'label' : MessageService.createStaticMessage('Save'),
               'primary' : 'true',
            });
            var eventHandlers079 = [
               {
                     'method' : 'saveSignature',
                     'artifactId' : 'Platform.SignatureDialog_container_buttons_Save_button_eventHandlers_click_saveSignature',
                     'id' : 'awa59c7577',
                     'event' : 'click',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            button039.eventHandlers = eventHandlers079;
            container021.addChild( button039 );

            var eventHandlers080 = [
               {
                     'method' : 'initSignature',
                     'artifactId' : 'Platform.SignatureDialog_eventHandlers_show_initStopWorkView',
                     'id' : 'aw71e7bce4',
                     'event' : 'show',
                     'class' : 'platform.signature.handler.SignatureHandler',
               }
            ];
            dialog005.eventHandlers = eventHandlers080;

            var dialog006 = new Dialog({
               'cssClass' : 'dialogDateTimeLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DateTimeLookup',
               'label' : MessageService.createStaticMessage('Change Time or Date'),
            });
            ui001.addChild( dialog006 );

            var eventHandlers081 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DateTimeLookup_eventHandlers_show_initLookup',
                     'id' : 'aw576c44ec',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog006.eventHandlers = eventHandlers081;

            var container022 = new Container({
               'artifactId' : 'Platform.DateTimeLookup_container_0',
               'id' : 'aw3cdb37d7',
            });
            dialog006.addChild( container022 );


            var datetimepicker001 = new DateTimePicker({
               'artifactId' : 'Platform.DateTimeLookup_datetimepicker_0',
               'id' : 'aw7d2f0e0d',
            });
            container022.addChild( datetimepicker001 );


            var container023 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DateTimeLookup_container_1',
               'id' : 'aw4bdc0741',
            });
            dialog006.addChild( container023 );


            var button040 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Cancel_button',
               'id' : 'aw54d2f1bb',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers082 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DateTimeLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw5ced0c47',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button040.eventHandlers = eventHandlers082;
            container023.addChild( button040 );


            var button041 = new Button({
               'artifactId' : 'Platform.DateTimeLookup_Clear_button',
               'id' : 'awfd1238bd',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers083 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DateTimeLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw47510f1f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button041.eventHandlers = eventHandlers083;
            container023.addChild( button041 );


            var button042 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DateTimeLookup_OK_button',
               'id' : 'awb1e0d280',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers084 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DateTimeLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aw6c08b2ff',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button042.eventHandlers = eventHandlers084;
            container023.addChild( button042 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.HelpAbout', false);
               trackTimer.startTracking();
            }

            var view019 = new View({
               'resource' : 'PlatformLoginResource',
               'id' : 'Platform.HelpAbout',
               'label' : MessageService.createStaticMessage('About'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view019 );


            var container024 = new Container({
               'cssClass' : 'platformHelpAboutContainer',
               'artifactId' : 'Platform.HelpAbout_container_0',
               'id' : 'awf8c0259e',
            });
            view019.addChild( container024 );


            var image003 = new Image({
               'image' : 'ibmLogoDark.svg',
               'artifactId' : 'Platform.HelpAbout_image_0',
               'id' : 'awfebf608a',
            });
            container024.addChild( image003 );


            var text055 = new Text({
               'resourceAttribute' : 'appName',
               'cssClass' : 'productName bold textappearance-large',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_appName',
               'id' : 'aw27632fa8',
            });
            container024.addChild( text055 );


            var text056 = new Text({
               'cssClass' : 'version',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Version7.5.2.1',
               'id' : 'awf060501a',
               'value' : MessageService.createStaticMessage('Version 7.6.4.0'),
            });
            container024.addChild( text056 );


            var text057 = new Text({
               'cssClass' : 'build',
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_Buildnumberbuild',
               'id' : 'awd289f042',
               'value' : MessageService.createStaticMessage('Build number @build@'),
            });
            container024.addChild( text057 );


            var text058 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.HelpAbout_container_0_LicensedMaterials-',
               'id' : 'aw31046f88',
               'value' : MessageService.createStaticMessage('Licensed Materials - Property of IBM. \u00A9IBM Corp. 2020. IBM, the IBM logo, and ibm.com are trademarks of IBM Corp., registered in many jurisdictions worldwide. Other product and service names might be trademarks of IBM or other companies. A current list of IBM trademarks is available on the Web at www.ibm.com\/legal\/copytrade.shtml. This Program is licensed under the terms of the license agreement for the Program. Please read this agreement carefully before using the Program. By using the Program, you agree to these terms.'),
            });
            container024.addChild( text058 );


            var group011 = new Group({
               'debugOnly' : 'true',
               'artifactId' : 'Platform.Settings_group_2',
               'id' : 'awc5ac5572',
            });
            container024.addChild( group011 );


            var groupitem028 = new GroupItem({
               'layout' : 'ScreenInfo',
               'cssClass' : 'screenInfo',
               'artifactId' : 'Platform.Settings_screenInfo_item',
               'id' : 'aw5de3d82',
            });
            group011.addChild( groupitem028 );


            var text059 = new Text({
               'cssClass' : 'textappearance-large',
               'layoutInsertAt' : 'title',
               'artifactId' : 'Platform.Settings_screenInfo_title',
               'id' : 'awd295621c',
               'value' : MessageService.createStaticMessage('Screen Information'),
            });
            groupitem028.addChild( text059 );


            var text060 = new Text({
               'resourceAttribute' : 'ppi',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pixels',
               'artifactId' : 'Platform.Settings_screenInfo_ppi_text',
               'id' : 'aw4219624',
               'label' : MessageService.createStaticMessage('PPI'),
            });
            groupitem028.addChild( text060 );


            var text061 = new Text({
               'resourceAttribute' : 'width',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'width',
               'artifactId' : 'Platform.Settings_screenInfo_width_text',
               'id' : 'aw6564040e',
               'label' : MessageService.createStaticMessage('Width'),
            });
            groupitem028.addChild( text061 );


            var text062 = new Text({
               'resourceAttribute' : 'height',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'height',
               'artifactId' : 'Platform.Settings_screenInfo_height_text',
               'id' : 'awcd6ab682',
               'label' : MessageService.createStaticMessage('Height'),
            });
            groupitem028.addChild( text062 );


            var text063 = new Text({
               'resourceAttribute' : 'layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'size',
               'artifactId' : 'Platform.Settings_screenInfo_layout_text',
               'id' : 'awd74c1b0',
               'label' : MessageService.createStaticMessage('Layout Size'),
            });
            groupitem028.addChild( text063 );


            var text064 = new Text({
               'resourceAttribute' : 'orientation',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'orientation',
               'artifactId' : 'Platform.Settings_screenInfo_orientation_text',
               'id' : 'aw22df9e6f',
               'label' : MessageService.createStaticMessage('Orientation'),
            });
            groupitem028.addChild( text064 );


            var text065 = new Text({
               'resourceAttribute' : 'density',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'density',
               'artifactId' : 'Platform.Settings_screenInfo_density_text',
               'id' : 'aw6b4b20e2',
               'label' : MessageService.createStaticMessage('Density'),
            });
            groupitem028.addChild( text065 );


            var text066 = new Text({
               'resourceAttribute' : 'pane0_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane0',
               'artifactId' : 'Platform.Settings_screenInfo_pane0',
               'id' : 'aw39d3d4a7',
               'label' : MessageService.createStaticMessage('Pane 1 Size'),
            });
            groupitem028.addChild( text066 );


            var text067 = new Text({
               'resourceAttribute' : 'pane1_layoutSize',
               'resource' : 'DeviceSizeResource',
               'editable' : false,
               'layoutInsertAt' : 'pane1',
               'artifactId' : 'Platform.Settings_screenInfo_pane1',
               'id' : 'aw4ed4e431',
               'label' : MessageService.createStaticMessage('Pane 2 Size'),
            });
            groupitem028.addChild( text067 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.Settings', false);
               trackTimer.startTracking();
            }

            var view020 = new View({
               'id' : 'Platform.Settings',
               'label' : MessageService.createStaticMessage('Settings'),
               'fullScreen' : 'true',
            });
            ui001.addChild( view020 );

            var requiredResources023 = {
               'LastADDownload' : {
                  'artifactId' : 'Platform.Settings_LastADDownload',
                  'id' : 'aw879343e2',
               },
            };
            view020.addRequiredResources( requiredResources023 );

            var actions002 = new Actions({
               'artifactId' : 'Platform.Settings_actions',
               'id' : 'awb3f56d3b',
            });
            view020.addChild( actions002 );


            var action010 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.Settings_RefreshSystemData_action',
               'id' : 'awccb0ee65',
               'label' : MessageService.createStaticMessage('Refresh System Data'),
            });
            actions002.addChild( action010 );

            var eventHandlers085 = [
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
            action010.eventHandlers = eventHandlers085;

            var container025 = new Container({
               'resource' : 'LastADDownload',
               'artifactId' : 'Platform.Settings_container_0',
               'id' : 'aw74ff68b5',
            });
            view020.addChild( container025 );


            var group012 = new Group({
               'artifactId' : 'Platform.Settings_group_0',
               'id' : 'aw2ba2345e',
            });
            container025.addChild( group012 );


            var groupitem029 = new GroupItem({
               'transitionTo' : 'Platform.ChangePassword',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0',
               'id' : 'awd48342a3',
            });
            group012.addChild( groupitem029 );


            var text068 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_ChangePassword',
               'id' : 'aw6c14924a',
               'value' : MessageService.createStaticMessage('Change Password'),
            });
            groupitem029.addChild( text068 );

            var eventHandlers086 = [
               {
                     'method' : 'enableChangePasswordFunction',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.ChangePassword_0_eventHandlers_render_enableChangePasswordFunction',
                     'id' : 'awa81f4a5',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            groupitem029.eventHandlers = eventHandlers086;

            var groupitem030 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0',
               'id' : 'aw82635ebb',
            });
            group012.addChild( groupitem030 );


            var text069 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_RefreshLookupData',
               'id' : 'awcddf2167',
               'value' : MessageService.createStaticMessage('Refresh Lookup Data'),
            });
            groupitem030.addChild( text069 );


            var text070 = new Text({
               'resourceAttribute' : 'downloadStatus',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus',
               'id' : 'aw8a1673e3',
            });
            groupitem030.addChild( text070 );

            var eventHandlers087 = [
               {
                     'method' : 'renderLastDownload',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_downloadStatus_eventHandlers_render_renderLastDownload',
                     'id' : 'aw72547fb7',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text070.eventHandlers = eventHandlers087;

            var text071 = new Text({
               'cssClass' : 'textappearance-small',
               'editable' : false,
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_Updatesthelookupd',
               'id' : 'aw38a24bec',
               'value' : MessageService.createStaticMessage('Updates the lookup data on your device. Lookup data includes objects, such as assets and locations, that can be added to records.'),
            });
            groupitem030.addChild( text071 );

            var eventHandlers088 = [
               {
                     'method' : 'refreshAdditionalData',
                     'artifactId' : 'Platform.Settings_LastADDownload_groupitem_0_eventHandlers_click_refreshAdditionalData',
                     'id' : 'aw93ad06fe',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            groupitem030.eventHandlers = eventHandlers088;

            var groupitem031 = new GroupItem({
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_3_Number_of_day_to_sync',
               'id' : 'aw97e66cd6',
            });
            group012.addChild( groupitem031 );


            var text072 = new Text({
               'resourceAttribute' : 'numberOfDaysToSync',
               'editable' : true,
               'artifactId' : 'Platform.Settings_LastADDownload_text_Number_of_day_to_sync',
               'id' : 'aw69a517e3',
               'label' : MessageService.createStaticMessage('How often changes need to be refresh in days:'),
            });
            groupitem031.addChild( text072 );

            var eventHandlers089 = [
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
            text072.eventHandlers = eventHandlers089;

            var groupitem032 = new GroupItem({
               'transitionTo' : 'Platform.AdvancedSettings',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0',
               'id' : 'aw741c4d60',
            });
            group012.addChild( groupitem032 );


            var text073 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.Settings_LastADDownload_groupitem_Platform.AdvancedSettings_0_AdvancedSettings',
               'id' : 'aw2d662633',
               'value' : MessageService.createStaticMessage('Advanced Settings'),
            });
            groupitem032.addChild( text073 );


            var container026 = new Container({
               'artifactId' : 'ConnectionContainer',
               'id' : 'awef0b2658',
            });
            view020.addChild( container026 );


            var group013 = new Group({
               'artifactId' : 'Platform.Settings.ConnectionManagement.group',
               'id' : 'aw9ad5002d',
            });
            container026.addChild( group013 );


            var groupitem033 = new GroupItem({
               'layout' : 'ConnectionManagementLayout',
               'artifactId' : 'Platform.Settings.ConnectionManagement.groupItem1',
               'id' : 'aw81b0980b',
            });
            group013.addChild( groupitem033 );


            var text074 = new Text({
               'cssClass' : 'relatedRecords',
               'layoutInsertAt' : 'Title',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Title',
               'id' : 'aw1de21387',
               'value' : MessageService.createStaticMessage('Connection Behavior'),
            });
            groupitem033.addChild( text074 );


            var text075 = new Text({
               'cssClass' : 'wrap-content',
               'layoutInsertAt' : 'description',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Description',
               'id' : 'aw6b506a6f',
               'value' : MessageService.createStaticMessage('Specifies which network connections should enable the application to work online'),
            });
            groupitem033.addChild( text075 );


            var radiobutton001 = new RadioButton({
               'cssClass' : 'firstradiobutton',
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button1',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.AllConnections',
               'id' : 'awcb83aecb',
               'label' : MessageService.createStaticMessage('All Types'),
            });
            groupitem033.addChild( radiobutton001 );

            var eventHandlers090 = [
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
            radiobutton001.eventHandlers = eventHandlers090;

            var radiobutton002 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button2',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.WiFi',
               'id' : 'aw42dec2bb',
               'label' : MessageService.createStaticMessage('Only WiFi'),
            });
            groupitem033.addChild( radiobutton002 );

            var eventHandlers091 = [
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
            radiobutton002.eventHandlers = eventHandlers091;

            var radiobutton003 = new RadioButton({
               'name' : 'Connectiongrp',
               'layoutInsertAt' : 'button3',
               'artifactId' : 'Platform.Settings.ConnectionManagement.Button.Cellular',
               'id' : 'aw7032481d',
               'label' : MessageService.createStaticMessage('Only Cellular'),
            });
            groupitem033.addChild( radiobutton003 );

            var eventHandlers092 = [
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
            radiobutton003.eventHandlers = eventHandlers092;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.AdvancedSettings', false);
               trackTimer.startTracking();
            }

            var view021 = new View({
               'id' : 'Platform.AdvancedSettings',
               'label' : MessageService.createStaticMessage('Settings'),
            });
            ui001.addChild( view021 );


            var container027 = new Container({
               'artifactId' : 'Platform.AdvancedSettings_container_0',
               'id' : 'aw5c13274d',
            });
            view021.addChild( container027 );


            var group014 = new Group({
               'artifactId' : 'Platform.AdvancedSettings_group_0',
               'id' : 'awebdfb82c',
            });
            container027.addChild( group014 );


            var groupitem034 = new GroupItem({
               'transitionTo' : 'Platform.TimeTrackReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0',
               'id' : 'awba4384a8',
            });
            group014.addChild( groupitem034 );


            var text076 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_TrackPerformanceDa',
               'id' : 'awc0a6dde7',
               'value' : MessageService.createStaticMessage('Track Performance Data'),
            });
            groupitem034.addChild( text076 );


            var text077 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.TimeTrackReport_0_Thisoptionusesmem',
               'id' : 'aw4367e95f',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable performance tracking when you are done.'),
            });
            groupitem034.addChild( text077 );


            var groupitem035 = new GroupItem({
               'transitionTo' : 'Platform.LoggerReport',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0',
               'id' : 'aw10ca73e0',
            });
            group014.addChild( groupitem035 );


            var text078 = new Text({
               'cssClass' : 'relatedRecords',
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Logging',
               'id' : 'awffa3ff9c',
               'value' : MessageService.createStaticMessage('Logging'),
            });
            groupitem035.addChild( text078 );


            var text079 = new Text({
               'cssClass' : 'red-text',
               'editable' : false,
               'artifactId' : 'Platform.AdvancedSettings_groupitem_Platform.LoggerReport_0_Thisoptionusesmem',
               'id' : 'aw30da1efa',
               'value' : MessageService.createStaticMessage('This option uses memory and might slow the performance of your device. Disable logging when you are done.'),
            });
            groupitem035.addChild( text079 );

            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.LoggerReport', false);
               trackTimer.startTracking();
            }

            var view022 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.LoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view022 );


            var actions003 = new Actions({
               'artifactId' : 'Platform.LoggerReport_actions',
               'id' : 'aw5b090344',
            });
            view022.addChild( actions003 );


            var action011 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableErrorLogging_action',
               'id' : 'awc05e82b4',
               'label' : MessageService.createStaticMessage('Enable Error Logging'),
            });
            actions003.addChild( action011 );

            var eventHandlers093 = [
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
            action011.eventHandlers = eventHandlers093;

            var action012 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableInfoLogging_action',
               'id' : 'aw6d618335',
               'label' : MessageService.createStaticMessage('Enable Info Logging'),
            });
            actions003.addChild( action012 );

            var eventHandlers094 = [
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
            action012.eventHandlers = eventHandlers094;

            var action013 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EnableDebugLogging_action',
               'id' : 'awaa11689b',
               'label' : MessageService.createStaticMessage('Enable Debug Logging'),
            });
            actions003.addChild( action013 );

            var eventHandlers095 = [
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
            action013.eventHandlers = eventHandlers095;

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

            var eventHandlers096 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.LoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw10958c5',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action015.eventHandlers = eventHandlers096;

            var action016 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_UploadLog_action',
               'id' : 'aw7510fce3',
               'label' : MessageService.createStaticMessage('Save Log'),
            });
            actions003.addChild( action016 );

            var eventHandlers097 = [
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
            action016.eventHandlers = eventHandlers097;

            var action017 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.LoggerReport_EmailLog_action',
               'id' : 'aw90d8a401',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions003.addChild( action017 );

            var eventHandlers098 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.LoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awf10881b9',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action017.eventHandlers = eventHandlers098;
            var eventHandlers099 = [
               {
                     'method' : 'renderLoggerReport',
                     'artifactId' : 'Platform.LoggerReport_eventHandlers_show_renderLoggerReport',
                     'id' : 'aw9b7c5c73',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view022.eventHandlers = eventHandlers099;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TransLoggerReport', false);
               trackTimer.startTracking();
            }

            var view023 = new View({
               'scrollDir' : 'vh',
               'id' : 'Platform.TransLoggerReport',
               'label' : MessageService.createStaticMessage('Logging Data'),
            });
            ui001.addChild( view023 );


            var actions004 = new Actions({
               'artifactId' : 'Platform.TransLoggerReport_actions',
               'id' : 'aw49b00040',
            });
            view023.addChild( actions004 );


            var action018 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action',
               'id' : 'awdce21e26',
               'label' : MessageService.createStaticMessage('Clear Log Data'),
            });
            actions004.addChild( action018 );

            var eventHandlers100 = [
               {
                     'method' : 'clearTransLog',
                     'artifactId' : 'Platform.TransLoggerReport_ClearLogData_action_eventHandlers_click_clear',
                     'id' : 'aw71c2398e',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action018.eventHandlers = eventHandlers100;

            var action019 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TransLoggerReport_EmailLog_action',
               'id' : 'aw29f3639',
               'label' : MessageService.createStaticMessage('Email Log'),
            });
            actions004.addChild( action019 );

            var eventHandlers101 = [
               {
                     'method' : 'emailCurrentTranslog',
                     'artifactId' : 'Platform.TransLoggerReport_EmailLog_action_eventHandlers_click_emailCurrent',
                     'id' : 'awfd97a236',
                     'event' : 'click',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            action019.eventHandlers = eventHandlers101;
            var eventHandlers102 = [
               {
                     'method' : 'renderTransLoggerReport',
                     'artifactId' : 'Platform.TransLoggerReport_eventHandlers_show_renderTransLoggerReport',
                     'id' : 'aw4261a98a',
                     'event' : 'show',
                     'class' : 'platform.logging.handler.LoggerReportHandler',
               }
            ];
            view023.eventHandlers = eventHandlers102;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.ChangePassword', false);
               trackTimer.startTracking();
            }

            var view024 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'id' : 'Platform.ChangePassword',
               'label' : MessageService.createStaticMessage('Change Password'),
            });
            ui001.addChild( view024 );


            var container028 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.ChangePassword_container_0',
               'id' : 'awf7c2a2a',
            });
            view024.addChild( container028 );


            var text080 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_errorMsg',
               'id' : 'aw3ed16fe1',
            });
            container028.addChild( text080 );


            var text081 = new Text({
               'resourceAttribute' : 'infoMsg',
               'cssClass' : 'infoMsg',
               'editable' : false,
               'artifactId' : 'Platform.ChangePassword_container_0_infoMsg',
               'id' : 'awe28ebedd',
            });
            container028.addChild( text081 );


            var text082 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_currentpassword',
               'id' : 'aw7df0b045',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Current password'),
            });
            container028.addChild( text082 );

            var eventHandlers103 = [
               {
                     'method' : 'hidePasswordField',
                     'artifactId' : 'Platform.ChangePassword_container_0_currentpassword_eventHandlers_render_hidePasswordField',
                     'id' : 'aw27f3eacb',
                     'event' : 'render',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            text082.eventHandlers = eventHandlers103;

            var text083 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'newpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_newpassword',
               'id' : 'aw618d08b5',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('New password'),
            });
            container028.addChild( text083 );


            var text084 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'confirmnewpassword',
               'editable' : true,
               'artifactId' : 'Platform.ChangePassword_container_0_confirmnewpassword',
               'id' : 'awd274537a',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Confirm password'),
            });
            container028.addChild( text084 );


            var button043 = new Button({
               'artifactId' : 'Platform.ChangePassword_Cancel_button',
               'id' : 'aw96c63135',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers104 = [
               {
                     'method' : 'cancelPasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Cancel_button_eventHandlers_click_cancelPasswordClickHandler',
                     'id' : 'aw7492b621',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button043.eventHandlers = eventHandlers104;
            container028.addChild( button043 );


            var button044 = new Button({
               'artifactId' : 'Platform.ChangePassword_Change_button',
               'id' : 'aw5cd0477f',
               'label' : MessageService.createStaticMessage('Change'),
               'primary' : 'true',
            });
            var eventHandlers105 = [
               {
                     'method' : 'changePasswordClickHandler',
                     'artifactId' : 'Platform.ChangePassword_Change_button_eventHandlers_click_changePasswordClickHandler',
                     'id' : 'awfdba8feb',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button044.eventHandlers = eventHandlers105;
            container028.addChild( button044 );

            var eventHandlers106 = [
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
            view024.eventHandlers = eventHandlers106;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.RetrieveOldPassword', false);
               trackTimer.startTracking();
            }

            var view025 = new View({
               'resource' : 'PlatformChangePasswordForm',
               'showHeader' : false,
               'showOverflow' : false,
               'id' : 'Platform.RetrieveOldPassword',
               'label' : MessageService.createStaticMessage('Recover App Data'),
            });
            ui001.addChild( view025 );


            var container029 = new Container({
               'cssClass' : 'changePasswordForm',
               'artifactId' : 'Platform.RetrieveOldPassword_container_0',
               'id' : 'awecdef66d',
            });
            view025.addChild( container029 );


            var text085 = new Text({
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_Enterthepasswordt',
               'id' : 'aw14ebf03b',
               'value' : MessageService.createStaticMessage('Enter the password that you last used to log in to the app. If you do not have this password, you must reset the app before you can log in.'),
            });
            container029.addChild( text085 );


            var text086 = new Text({
               'resourceAttribute' : 'errorMsg',
               'cssClass' : 'errorMsg',
               'editable' : false,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_errorMsg',
               'id' : 'aw9574c917',
            });
            container029.addChild( text086 );


            var text087 = new Text({
               'border' : 'true',
               'resourceAttribute' : 'currentpassword',
               'editable' : true,
               'artifactId' : 'Platform.RetrieveOldPassword_container_0_currentpassword',
               'id' : 'aw97b6c3b7',
               'type' : 'password',
               'placeHolder' : MessageService.createStaticMessage('Previous password'),
            });
            container029.addChild( text087 );


            var button045 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Recover_button',
               'id' : 'aw3a0ff2',
               'label' : MessageService.createStaticMessage('Recover'),
               'primary' : 'true',
            });
            var eventHandlers107 = [
               {
                     'method' : 'recoverOldPasswordClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Recover_button_eventHandlers_click_recoverOldPasswordClickHandler',
                     'id' : 'awecb18d1c',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button045.eventHandlers = eventHandlers107;
            container029.addChild( button045 );


            var button046 = new Button({
               'artifactId' : 'Platform.RetrieveOldPassword_Reset_button',
               'id' : 'aw8bb551dc',
               'label' : MessageService.createStaticMessage('Reset'),
            });
            var eventHandlers108 = [
               {
                     'method' : 'resetStorageClickHandler',
                     'artifactId' : 'Platform.RetrieveOldPassword_Reset_button_eventHandlers_click_resetStorageClickHandler',
                     'id' : 'awfe7a73d2',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button046.eventHandlers = eventHandlers108;
            container029.addChild( button046 );

            var eventHandlers109 = [
               {
                     'method' : 'initializeRetrieveOldPasswordView',
                     'artifactId' : 'Platform.RetrieveOldPassword_eventHandlers_show_initializeRetrieveOldPasswordView',
                     'id' : 'aw26f17c5a',
                     'event' : 'show',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            view025.eventHandlers = eventHandlers109;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog007 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ConfirmResetDataStore',
            });
            ui001.addChild( dialog007 );


            var container030 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0',
               'id' : 'awacb7e535',
            });
            dialog007.addChild( container030 );


            var text088 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmResetDataStore_container_0_WarningAllappdat',
               'id' : 'aw68bdf3e8',
               'value' : MessageService.createStaticMessage('Warning! All app data on the device will be cleared. Any data that has not been sent to the server will be lost.'),
            });
            container030.addChild( text088 );


            var container031 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmResetDataStore_container_1',
               'id' : 'awdbb0d5a3',
            });
            dialog007.addChild( container031 );


            var button047 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button',
               'id' : 'awba645d10',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers110 = [
               {
                     'method' : 'resetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Continue_button_eventHandlers_click_resetDataStoreClickHandler',
                     'id' : 'aw5074e6c8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button047.eventHandlers = eventHandlers110;
            container031.addChild( button047 );


            var button048 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button',
               'id' : 'aw50474341',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers111 = [
               {
                     'method' : 'cancelResetDataStoreClickHandler',
                     'artifactId' : 'Platform.ConfirmResetDataStore_Cancel_button_eventHandlers_click_cancelResetDataStoreClickHandler',
                     'id' : 'awda7121b8',
                     'event' : 'click',
                     'class' : 'platform.handlers.ChangePasswordHandler',
               }
            ];
            button048.eventHandlers = eventHandlers111;
            container031.addChild( button048 );


            if (trackTimeEnabled) {
               var trackTimer = new TrackTime('ApplicationUIBuilder', 'build', 'Creating View: ' + 'Platform.TimeTrackReport', false);
               trackTimer.startTracking();
            }

            var view026 = new View({
               'cssClass' : 'loggerReport',
               'scrollDir' : 'vh',
               'id' : 'Platform.TimeTrackReport',
               'label' : MessageService.createStaticMessage('Performance Data'),
            });
            ui001.addChild( view026 );

            var requiredResources024 = {
               'timeTrack' : {
                  'artifactId' : 'Platform.TimeTrackReport_timeTrack',
                  'id' : 'aw8d707cee',
               },
            };
            view026.addRequiredResources( requiredResources024 );

            var actions005 = new Actions({
               'artifactId' : 'Platform.TimeTrackReport_actions',
               'id' : 'aw9d9a4864',
            });
            view026.addChild( actions005 );


            var action020 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EnablePerformanceTracking_action',
               'id' : 'aw34736a63',
               'label' : MessageService.createStaticMessage('Enable Performance Tracking'),
            });
            actions005.addChild( action020 );

            var eventHandlers112 = [
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
            action020.eventHandlers = eventHandlers112;

            var action021 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action',
               'id' : 'aw1edf54cf',
               'label' : MessageService.createStaticMessage('Clear Performance Data'),
            });
            actions005.addChild( action021 );

            var eventHandlers113 = [
               {
                     'method' : 'clear',
                     'artifactId' : 'Platform.TimeTrackReport_ClearPerformanceData_action_eventHandlers_click_clear',
                     'id' : 'aw85273d1b',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action021.eventHandlers = eventHandlers113;

            var action022 = new Action({
               'overflow' : true,
               'artifactId' : 'Platform.TimeTrackReport_EmailReport_action',
               'id' : 'aw6ff8fae1',
               'label' : MessageService.createStaticMessage('Email Report'),
            });
            actions005.addChild( action022 );

            var eventHandlers114 = [
               {
                     'method' : 'emailCurrent',
                     'artifactId' : 'Platform.TimeTrackReport_EmailReport_action_eventHandlers_click_emailCurrent',
                     'id' : 'awc00583a0',
                     'event' : 'click',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            action022.eventHandlers = eventHandlers114;
            var eventHandlers115 = [
               {
                     'method' : 'renderTT',
                     'artifactId' : 'Platform.TimeTrackReport_eventHandlers_show_renderTT',
                     'id' : 'awca05a315',
                     'event' : 'show',
                     'class' : 'platform.performance.handler.TimeTrackHandler',
               }
            ];
            view026.eventHandlers = eventHandlers115;
            if (trackTimeEnabled) {
               trackTimer.stopTracking();
            }

            var dialog008 = new Dialog({
               'closeOnBackgroundClick' : 'true',
               'id' : 'Platform.ListLongPressDialog',
            });
            ui001.addChild( dialog008 );



            var listItemTemplate018 = new ListItemTemplate({
               'cssClass' : 'dialogListItem textappearance-medium',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_listItemTemplate',
               'id' : 'awefd72fd8',
            });

            var listtext054 = new ListText({
               'resourceAttribute' : 'label',
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_label',
               'id' : 'awe2e495b2',
            });
            listItemTemplate018.addChild( listtext054 );



            var list018 = new List({
               'resource' : 'PlatformLongPressResource',
               'showHeader' : false,
               'listItemTemplate' : listItemTemplate018,
               'artifactId' : 'Platform.ListLongPressDialog_PlatformLongPressResource_list',
               'id' : 'aw64ff84d9',
               'queryBase' : '',
            });
            dialog008.addChild( list018 );


            var dialog009 = new Dialog({
               'id' : 'Platform.LoadingAdditionalData',
            });
            ui001.addChild( dialog009 );


            var container032 = new Container({
               'artifactId' : 'Platform.LoadingAdditionalData_container_0',
               'id' : 'aw48b509d9',
            });
            dialog009.addChild( container032 );


            var text089 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingAdditionalData_container_0_Downloadinglookupd',
               'id' : 'aw4cec47c0',
               'value' : MessageService.createStaticMessage('Downloading lookup data.'),
            });
            container032.addChild( text089 );


            var button049 = new Button({
               'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button',
               'id' : 'awb30b5f0',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers116 = [
               {
                     'method' : 'cancelADDownload',
                     'artifactId' : 'Platform.LoadingAdditionalData_Cancel_button_eventHandlers_click_cancelADDownload',
                     'id' : 'awc41dac4c',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button049.eventHandlers = eventHandlers116;
            container032.addChild( button049 );


            var dialog010 = new Dialog({
               'id' : 'Platform.AdditionalDataNoConn',
            });
            ui001.addChild( dialog010 );


            var container033 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0',
               'id' : 'aw666da461',
            });
            dialog010.addChild( container033 );


            var text090 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataNoConn_container_0_Lookupdatacouldno',
               'id' : 'aw96b90fd8',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. Go to Settings > Refresh Lookup Data when you are online.'),
            });
            container033.addChild( text090 );


            var container034 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataNoConn_container_1',
               'id' : 'aw116a94f7',
            });
            dialog010.addChild( container034 );


            var button050 = new Button({
               'artifactId' : 'Platform.AdditionalDataNoConn_OK_button',
               'id' : 'aw9b370278',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers117 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataNoConn_OK_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw108159b3',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button050.eventHandlers = eventHandlers117;
            container034.addChild( button050 );


            var dialog011 = new Dialog({
               'id' : 'Platform.ConfirmReloadWorkList',
            });
            ui001.addChild( dialog011 );


            var container035 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0',
               'id' : 'aw2054aa9e',
            });
            dialog011.addChild( container035 );


            var text091 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_0_Doyouwanttoclose',
               'id' : 'aw83f81a4b',
               'value' : MessageService.createStaticMessage('Reloading the work list takes time if you are downloading large amounts of data.  Are you sure that you want to continue?'),
            });
            container035.addChild( text091 );


            var container036 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmReloadWorkList_container_1',
               'id' : 'aw57539a08',
            });
            dialog011.addChild( container036 );


            var button051 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button',
               'id' : 'aw5bc89627',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers118 = [
               {
                     'method' : 'reloadConfirmed',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awafdb701f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button051.eventHandlers = eventHandlers118;
            container036.addChild( button051 );


            var button052 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ConfirmReloadWorkList_No_button',
               'id' : 'aw4487e9e7',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers119 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ConfirmReloadWorkList_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw56d1743',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button052.eventHandlers = eventHandlers119;
            container036.addChild( button052 );


            var dialog012 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.ReloadingCurrentWorklist',
            });
            ui001.addChild( dialog012 );


            var container037 = new Container({
               'cssClass' : 'mblSimpleMessageText',
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0',
               'id' : 'awce0c0b72',
            });
            dialog012.addChild( container037 );


            var text092 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.ReloadCurrentWorklist_container_0_progressMsg',
               'id' : 'awaa894933',
            });
            container037.addChild( text092 );


            var dialog013 = new Dialog({
               'id' : 'Platform.AdditionalDataFailed',
            });
            ui001.addChild( dialog013 );


            var container038 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.AdditionalDataFailed.container',
               'id' : 'aw275627fb',
            });
            dialog013.addChild( container038 );


            var text093 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.AdditionalDataFailed.text',
               'id' : 'awb25e5b66',
               'value' : MessageService.createStaticMessage('Lookup data could not be downloaded. If you are connected, go to Settings > Refresh Lookup Data.'),
            });
            container038.addChild( text093 );


            var container039 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.AdditionalDataFailed.container2',
               'id' : 'aw309dc3be',
            });
            dialog013.addChild( container039 );


            var button053 = new Button({
               'artifactId' : 'Platform.AdditionalDataFailed.button',
               'id' : 'aw39111677',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers120 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.AdditionalDataFailed.eventHandler',
                     'id' : 'awacbc5440',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button053.eventHandlers = eventHandlers120;
            container039.addChild( button053 );


            var dialog014 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.LoadingSystemData',
            });
            ui001.addChild( dialog014 );


            var container040 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadingSystemData_container_0',
               'id' : 'aw13d3cc6a',
            });
            dialog014.addChild( container040 );


            var text094 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_Downloadingsystemd',
               'id' : 'awfc1b5f79',
               'value' : MessageService.createStaticMessage('Downloading system data.'),
            });
            container040.addChild( text094 );


            var text095 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.LoadingSystemData_container_0_progressMsg',
               'id' : 'aw635d9968',
            });
            container040.addChild( text095 );


            var dialog015 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataYesNo',
            });
            ui001.addChild( dialog015 );


            var container041 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0',
               'id' : 'aw22834650',
            });
            dialog015.addChild( container041 );


            var text096 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor',
               'id' : 'aw89be3f27',
               'value' : MessageService.createStaticMessage('The lookup data for this app must be downloaded. Download it now or later?'),
            });
            container041.addChild( text096 );

            var eventHandlers121 = [
               {
                     'method' : 'theLookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Thelookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw9051ca24',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text096.eventHandlers = eventHandlers121;

            var text097 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor',
               'id' : 'awb287d1cc',
               'value' : MessageService.createStaticMessage('Lookup data was partially downloaded. Click Retry to download the remaining lookup data. Click Reset to refresh all of the lookup data. Click Close if you are through downloading lookup data.'),
            });
            container041.addChild( text097 );

            var eventHandlers122 = [
               {
                     'method' : 'retrylookupdataText',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Retrylookupdatafor_eventHandlers_render_setAdditionalDownloadText',
                     'id' : 'aw5ad2ed31',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text097.eventHandlers = eventHandlers122;

            var text098 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr',
               'id' : 'awb757e4d5',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container041.addChild( text098 );

            var eventHandlers123 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'awb7d271e9',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text098.eventHandlers = eventHandlers123;

            var container042 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_container_1',
               'id' : 'aw558476c6',
            });
            dialog015.addChild( container042 );


            var button054 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Later_button',
               'id' : 'awa2501fe3',
               'label' : MessageService.createStaticMessage('Later'),
            });
            var eventHandlers124 = [
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
            button054.eventHandlers = eventHandlers124;
            container042.addChild( button054 );


            var button055 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Now_button',
               'id' : 'aw35a14c11',
               'label' : MessageService.createStaticMessage('Now'),
            });
            var eventHandlers125 = [
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
            button055.eventHandlers = eventHandlers125;
            container042.addChild( button055 );


            var button056 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataYesNo_Retry_button',
               'id' : 'aw626b616d',
               'label' : MessageService.createStaticMessage('Retry'),
            });
            var eventHandlers126 = [
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
            button056.eventHandlers = eventHandlers126;
            container042.addChild( button056 );


            var dialog016 = new Dialog({
               'id' : 'Platform.LoadAdditionalDataDeltaDownload',
            });
            ui001.addChild( dialog016 );


            var container043 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0',
               'id' : 'aw79883531',
            });
            dialog016.addChild( container043 );


            var text099 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw3d94f20f',
               'value' : MessageService.createStaticMessage('Click Changes to download only lookup data changes.'),
            });
            container043.addChild( text099 );


            var text100 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'awa0f7541',
               'value' : MessageService.createStaticMessage('Click All to download all the lookup data.'),
            });
            container043.addChild( text100 );


            var text101 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_cancel',
               'id' : 'aw62270e4c',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the lookup download.'),
            });
            container043.addChild( text101 );


            var text102 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_action',
               'id' : 'aw73fd47ac',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container043.addChild( text102 );


            var text103 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw37d29fd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per lookup.'),
            });
            container043.addChild( text103 );

            var eventHandlers127 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw1edf10f3',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text103.eventHandlers = eventHandlers127;

            var container044 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_container_1',
               'id' : 'awe8f05a7',
            });
            dialog016.addChild( container044 );


            var button057 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Cancel_button',
               'id' : 'awb2f881ae',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers128 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'awcaa29f5a',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button057.eventHandlers = eventHandlers128;
            container044.addChild( button057 );


            var button058 = new Button({
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshAll_button',
               'id' : 'aw8ab2882',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers129 = [
               {
                     'method' : 'confirmADDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Now_button_eventHandlers_click_confirmADDownload',
                     'id' : 'awa5526bd4',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button058.eventHandlers = eventHandlers129;
            container044.addChild( button058 );


            var button059 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw9c0cf49a',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers130 = [
               {
                     'method' : 'confirmADDeltaDownload',
                     'artifactId' : 'Platform.LoadAdditionalDataDeltaDownload_Later_button_eventHandlers_click_confirmADDeltaDownload',
                     'id' : 'aw46619626',
                     'event' : 'click',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            button059.eventHandlers = eventHandlers130;
            container044.addChild( button059 );


            var dialog017 = new Dialog({
               'id' : 'Platform.LoadSystemDataDeltaDownload',
            });
            ui001.addChild( dialog017 );


            var container045 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0',
               'id' : 'aw47beed1c',
            });
            dialog017.addChild( container045 );


            var text104 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Thelookupdatafor',
               'id' : 'aw682ebd2f',
               'value' : MessageService.createStaticMessage('Click Changes to download only the system data changes.'),
            });
            container045.addChild( text104 );


            var text105 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Retrylookupdatafor',
               'id' : 'aw79e85858',
               'value' : MessageService.createStaticMessage('Click All to download all the system data.'),
            });
            container045.addChild( text105 );


            var text106 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_cancel',
               'id' : 'awcb50ae6',
               'value' : MessageService.createStaticMessage('Click Cancel to cancel the system download.'),
            });
            container045.addChild( text106 );


            var text107 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_action',
               'id' : 'aw1d6f4306',
               'value' : MessageService.createStaticMessage('Which refresh do you want to perform?'),
            });
            container045.addChild( text107 );


            var text108 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr',
               'id' : 'aw56c766dd',
               'value' : MessageService.createStaticMessage('When running in a browser, a maximum of 200 records are downloaded per System.'),
            });
            container045.addChild( text108 );

            var eventHandlers131 = [
               {
                     'method' : 'showInPreview',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_0_Whenrunninginabr_eventHandlers_render_showInPreview',
                     'id' : 'aw37b2ac2a',
                     'event' : 'render',
                     'class' : 'platform.handlers.AdditionalDataDialogHandler',
               }
            ];
            text108.eventHandlers = eventHandlers131;

            var container046 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_container_1',
               'id' : 'aw30b9dd8a',
            });
            dialog017.addChild( container046 );


            var button060 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Cancel_button',
               'id' : 'aw1adabf91',
               'label' : MessageService.createStaticMessage('cancel'),
            });
            var eventHandlers132 = [
               {
                     'method' : 'closeDialogAndShowDefaultViewIfNeeded',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_closeDialogAndShowDefaultViewIfNeeded',
                     'id' : 'aw2569598a',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button060.eventHandlers = eventHandlers132;
            container046.addChild( button060 );


            var button061 = new Button({
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshAll_button',
               'id' : 'awf1a96515',
               'label' : MessageService.createStaticMessage('All'),
            });
            var eventHandlers133 = [
               {
                     'method' : 'downloadSystemData',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Now_button_eventHandlers_click_confirmdownloadSystemData',
                     'id' : 'aw8d600b10',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button061.eventHandlers = eventHandlers133;
            container046.addChild( button061 );


            var button062 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LoadSystemDataDeltaDownload_RefreshChanges_button',
               'id' : 'aw328e1b2e',
               'label' : MessageService.createStaticMessage('Changes'),
            });
            var eventHandlers134 = [
               {
                     'method' : 'confirmSystemDataDeltaDownload',
                     'artifactId' : 'Platform.LoadSystemDataDeltaDownload_Later_button_eventHandlers_click_confirmSystemDataDeltaDownload',
                     'id' : 'awbd23e928',
                     'event' : 'click',
                     'class' : 'platform.handlers.SettingsHandler',
               }
            ];
            button062.eventHandlers = eventHandlers134;
            container046.addChild( button062 );


            var dialog018 = new Dialog({
               'id' : 'Platform.ExitApplicationPrompt',
            });
            ui001.addChild( dialog018 );


            var container047 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0',
               'id' : 'aw71d2ddca',
            });
            dialog018.addChild( container047 );


            var text109 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ExitApplicationPrompt_container_0_Doyouwanttoclose',
               'id' : 'aw4e0184c3',
               'value' : MessageService.createStaticMessage('Do you want to close the app?'),
            });
            container047.addChild( text109 );


            var container048 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ExitApplicationPrompt_container_1',
               'id' : 'aw6d5ed5c',
            });
            dialog018.addChild( container048 );


            var button063 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button',
               'id' : 'aw3bff816',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers135 = [
               {
                     'method' : 'processDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_Yes_button_eventHandlers_click_processDialog',
                     'id' : 'awfa220200',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button063.eventHandlers = eventHandlers135;
            container048.addChild( button063 );


            var button064 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.ExitApplicationPrompt_No_button',
               'id' : 'aw5ba5c9da',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers136 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.ExitApplicationPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw5256cc3',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button064.eventHandlers = eventHandlers136;
            container048.addChild( button064 );


            var dialog019 = new Dialog({
               'id' : 'Platform.LogOutPrompt',
            });
            ui001.addChild( dialog019 );


            var container049 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.LogOutPrompt_container_0',
               'id' : 'awcf20d41b',
            });
            dialog019.addChild( container049 );


            var text110 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.LogOutPrompt_container_0_Doyouwanttologo',
               'id' : 'aw15a96005',
               'value' : MessageService.createStaticMessage('Do you want to log out of the app?'),
            });
            container049.addChild( text110 );


            var container050 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.LogOutPrompt_container_1',
               'id' : 'awb827e48d',
            });
            dialog019.addChild( container050 );


            var button065 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_No_button',
               'id' : 'awfbbbd446',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers137 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.LogOutPrompt_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw364ad2c7',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button065.eventHandlers = eventHandlers137;
            container050.addChild( button065 );


            var button066 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.LogOutPrompt_Yes_button',
               'id' : 'awfaa63964',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers138 = [
               {
                     'method' : 'logoutDialog',
                     'artifactId' : 'Platform.LogOutPrompt_Yes_button_eventHandlers_click_logoutDialog',
                     'id' : 'aw82db52a6',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button066.eventHandlers = eventHandlers138;
            container050.addChild( button066 );


            var dialog020 = new Dialog({
               'cssClass' : 'dialogDurationLookup',
               'resource' : 'PlatformDateLookupResource',
               'id' : 'Platform.DurationLookup',
               'label' : MessageService.createStaticMessage('Change Duration'),
            });
            ui001.addChild( dialog020 );

            var eventHandlers139 = [
               {
                     'method' : 'initLookup',
                     'artifactId' : 'Platform.DurationLookup_eventHandlers_show_initLookup',
                     'id' : 'aw2898d5b1',
                     'event' : 'show',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            dialog020.eventHandlers = eventHandlers139;

            var container051 = new Container({
               'artifactId' : 'Platform.DurationLookup_container_0',
               'id' : 'awc7b6d6e2',
            });
            dialog020.addChild( container051 );


            var durationpicker001 = new DurationPicker({
               'artifactId' : 'Platform.DurationLookup_durationpicker_0',
               'id' : 'awbdafea4f',
            });
            container051.addChild( durationpicker001 );


            var container052 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DurationLookup_container_1',
               'id' : 'awb0b1e674',
            });
            dialog020.addChild( container052 );


            var button067 = new Button({
               'artifactId' : 'Platform.DurationLookup_Cancel_button',
               'id' : 'aw21ee1a8e',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers140 = [
               {
                     'method' : 'Cancel',
                     'artifactId' : 'Platform.DurationLookup_Cancel_button_eventHandlers_click_Cancel',
                     'id' : 'aw7fc46e19',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button067.eventHandlers = eventHandlers140;
            container052.addChild( button067 );


            var button068 = new Button({
               'artifactId' : 'Platform.DurationLookup_Clear_button',
               'id' : 'awab5a917f',
               'label' : MessageService.createStaticMessage('Clear'),
            });
            var eventHandlers141 = [
               {
                     'method' : 'Clear',
                     'artifactId' : 'Platform.DurationLookup_Clear_button_eventHandlers_click_Clear',
                     'id' : 'aw4d23bc8f',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button068.eventHandlers = eventHandlers141;
            container052.addChild( button068 );


            var button069 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.DurationLookup_OK_button',
               'id' : 'aw7a6484f6',
               'label' : MessageService.createStaticMessage('OK'),
               'primary' : 'true',
            });
            var eventHandlers142 = [
               {
                     'method' : 'SetSelection',
                     'artifactId' : 'Platform.DurationLookup_OK_button_eventHandlers_click_SetSelection',
                     'id' : 'aweb8ce178',
                     'event' : 'click',
                     'class' : 'platform.handlers.LookupHandler',
               }
            ];
            button069.eventHandlers = eventHandlers142;
            container052.addChild( button069 );


            var dialog021 = new Dialog({
               'id' : 'Platform.CancelDownload',
            });
            ui001.addChild( dialog021 );


            var container053 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.CancelDownload_container_0',
               'id' : 'awf839de44',
            });
            dialog021.addChild( container053 );


            var text111 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.CancelDownload_container_0_Doyouwanttostop',
               'id' : 'awdb2316b3',
               'value' : MessageService.createStaticMessage('Do you want to stop downloading work list records?'),
            });
            container053.addChild( text111 );


            var container054 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.CancelDownload_container_1',
               'id' : 'aw8f3eeed2',
            });
            dialog021.addChild( container054 );


            var button070 = new Button({
               'cssClass' : 'mblPrimaryButton dialogButton',
               'artifactId' : 'Platform.CancelDownload_Yes_button',
               'id' : 'aw3b97968f',
               'label' : MessageService.createStaticMessage('Yes'),
            });
            var eventHandlers143 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.CancelDownload_Yes_button_eventHandlers_click_cancelDownload',
                     'id' : 'awadc6ff1d',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button070.eventHandlers = eventHandlers143;
            container054.addChild( button070 );


            var button071 = new Button({
               'cssClass' : 'dialogButton',
               'artifactId' : 'Platform.CancelDownload_No_button',
               'id' : 'awab099478',
               'label' : MessageService.createStaticMessage('No'),
            });
            var eventHandlers144 = [
               {
                     'method' : 'closeDialog',
                     'artifactId' : 'Platform.CancelDownload_No_button_eventHandlers_click_closeDialog',
                     'id' : 'aw9ceda703',
                     'event' : 'click',
                     'class' : 'platform.handlers.DialogHandler',
               }
            ];
            button071.eventHandlers = eventHandlers144;
            container054.addChild( button071 );


            var dialog022 = new Dialog({
               'id' : 'Platform.ConfirmClearChanges',
            });
            ui001.addChild( dialog022 );


            var container055 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.ConfirmClearChanges_container_0',
               'id' : 'aw3965500f',
            });
            dialog022.addChild( container055 );


            var text112 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.ConfirmClearChanges_container_0_Changesthathaveno',
               'id' : 'aw66e22f87',
               'value' : MessageService.createStaticMessage('Changes that have not been sent to the server will be discarded.'),
            });
            container055.addChild( text112 );


            var container056 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.ConfirmClearChanges_container_1',
               'id' : 'aw4e626099',
            });
            dialog022.addChild( container056 );


            var button072 = new Button({
               'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button',
               'id' : 'awcee54fe9',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers145 = [
               {
                     'method' : 'cancelClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_Cancel_button_eventHandlers_click_cancelClearChanges',
                     'id' : 'awb208eba2',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button072.eventHandlers = eventHandlers145;
            container056.addChild( button072 );


            var button073 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.ConfirmClearChanges_OK_button',
               'id' : 'aw8a3b05f2',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers146 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.ConfirmClearChanges_OK_button_eventHandlers_click_doClearChanges',
                     'id' : 'aw32f778d4',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button073.eventHandlers = eventHandlers146;
            container056.addChild( button073 );


            var dialog023 = new Dialog({
               'resource' : 'PlatformProgressResource',
               'id' : 'Platform.DownloadCurrentWorklist',
            });
            ui001.addChild( dialog023 );


            var container057 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0',
               'id' : 'awfd35c5df',
            });
            dialog023.addChild( container057 );


            var text113 = new Text({
               'resourceAttribute' : 'progressMsg',
               'editable' : false,
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_0_progressMsg',
               'id' : 'aw3c55ae56',
            });
            container057.addChild( text113 );


            var container058 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DownloadCurrentWorklist_container_1',
               'id' : 'aw8a32f549',
            });
            dialog023.addChild( container058 );


            var button074 = new Button({
               'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button',
               'id' : 'awcfb8296d',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers147 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DownloadCurrentWorklist_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'aw5541afbb',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button074.eventHandlers = eventHandlers147;
            container058.addChild( button074 );


            var dialog024 = new Dialog({
               'id' : 'Platform.NoRecordFoundDialog',
            });
            ui001.addChild( dialog024 );


            var container059 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0',
               'id' : 'awa73a1c57',
            });
            dialog024.addChild( container059 );


            var text114 = new Text({
               'artifactId' : 'Platform.NoRecordFoundDialog_container_0_Stopthetimeronwo',
               'id' : 'awd6cf8f25',
               'value' : MessageService.createStaticMessage('No record was found. If you are working offline, try downloading worklist when online to access your workorder'),
            });
            container059.addChild( text114 );


            var container060 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.NoRecordFoundDialog_container_1',
               'id' : 'awd03d2cc1',
            });
            dialog024.addChild( container060 );


            var button075 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.NoRecordFoundDialog_OK_button',
               'id' : 'aw3de0cad2',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers148 = [
               {
                     'method' : 'closeNoRecord',
                     'artifactId' : 'Platform.NoRecordFoundDialog_OK_button_multiple',
                     'id' : 'aw41a4b840',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button075.eventHandlers = eventHandlers148;
            container060.addChild( button075 );


            var dialog025 = new Dialog({
               'id' : 'Platform.MultiplePushNotificationDialog',
            });
            ui001.addChild( dialog025 );


            var container061 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0',
               'id' : 'aw7b338e5e',
            });
            dialog025.addChild( container061 );


            var text115 = new Text({
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw72fc5fcc',
               'value' : MessageService.createStaticMessage('Multiple notification were recieved. Go to notification view to access them.'),
            });
            container061.addChild( text115 );


            var container062 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_container_1',
               'id' : 'awc34bec8',
            });
            dialog025.addChild( container062 );


            var button076 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button',
               'id' : 'awc2c9277e',
               'label' : MessageService.createStaticMessage('Close'),
            });
            var eventHandlers149 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.MultiplePushNotificationDialog_OK_button_multiple',
                     'id' : 'awe5002e8b',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button076.eventHandlers = eventHandlers149;
            container062.addChild( button076 );


            var dialog026 = new Dialog({
               'resource' : 'PlatformTempPushNotification',
               'id' : 'Platform.PushNotificationDialog',
            });
            ui001.addChild( dialog026 );


            var container063 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.PushNotificationDialog_container_0',
               'id' : 'awb0eedc9',
            });
            dialog026.addChild( container063 );


            var text116 = new Text({
               'artifactId' : 'Platform.PushNotificationDialog_container_0_Stopthetimeronwo',
               'id' : 'aw35fc28ff',
               'value' : MessageService.createDynamicMessage('{0} {1} {2}', 'platform.handlers.PushNotificationDialogHandler', 'resolveMessageProps'),
               'resolverFunction' : 'resolveMessageProps',
               'resolverClass' : 'platform.handlers.PushNotificationDialogHandler',
            });
            container063.addChild( text116 );


            var container064 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.PushNotificationDialog_container_1',
               'id' : 'aw7c09dd5f',
            });
            dialog026.addChild( container064 );


            var button077 = new Button({
               'artifactId' : 'Platform.PushNotificationDialog_Open_button',
               'id' : 'aw4151795',
               'label' : MessageService.createStaticMessage('Open'),
            });
            var eventHandlers150 = [
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
            button077.eventHandlers = eventHandlers150;
            container064.addChild( button077 );


            var button078 = new Button({
               'cssClass' : 'mblPrimaryButton',
               'artifactId' : 'Platform.PushNotificationDialog_OK_button',
               'id' : 'aw3d64070a',
               'label' : MessageService.createStaticMessage('OK'),
            });
            var eventHandlers151 = [
               {
                     'method' : 'close',
                     'artifactId' : 'Platform.PushNotificationDialog_OK_button_eventHandlers_click_WOStartedDialogYesClickHandler',
                     'id' : 'aw40f88c32',
                     'event' : 'click',
                     'class' : 'platform.handlers.PushNotificationDialogHandler',
               }
            ];
            button078.eventHandlers = eventHandlers151;
            container064.addChild( button078 );


            var dialog027 = new Dialog({
               'resource' : 'PlatformDemoModeResource',
               'id' : 'Platform.DemoDownloadWarning',
            });
            ui001.addChild( dialog027 );


            var container065 = new Container({
               'cssClass' : 'mblSimpleDialogText',
               'artifactId' : 'Platform.DemoDownloadWarning_container_0',
               'id' : 'awf840ab79',
            });
            dialog027.addChild( container065 );


            var text117 = new Text({
               'editable' : false,
               'artifactId' : 'Platform.DemoDownloadWarning_container_0_progressMsg',
               'id' : 'awf3cb0903',
               'value' : MessageService.createStaticMessage('MessageText'),
            });
            container065.addChild( text117 );


            var container066 = new Container({
               'cssClass' : 'mblSimpleDialogFooter',
               'artifactId' : 'Platform.DemoDownloadWarning_container_1',
               'id' : 'aw8f479bef',
            });
            dialog027.addChild( container066 );


            var button079 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Continue_button',
               'id' : 'aw2659f8c8',
               'label' : MessageService.createStaticMessage('Continue'),
            });
            var eventHandlers152 = [
               {
                     'method' : 'doClearChanges',
                     'artifactId' : 'Platform.DemoDownloadWarning_Continue_button_eventHandlers_click_doClearChanges',
                     'id' : 'awbdf1879f',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button079.eventHandlers = eventHandlers152;
            container066.addChild( button079 );


            var button080 = new Button({
               'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button',
               'id' : 'aw9def7b28',
               'label' : MessageService.createStaticMessage('Cancel'),
            });
            var eventHandlers153 = [
               {
                     'method' : 'cancelDownload',
                     'artifactId' : 'Platform.DemoDownloadWarning_Cancel_button_eventHandlers_click_cancelDownload',
                     'id' : 'awd4960a86',
                     'event' : 'click',
                     'class' : 'platform.handlers.WorkOfflineHandler',
               }
            ];
            button080.eventHandlers = eventHandlers153;
            container066.addChild( button080 );

            app001.addHandler( {name : 'application.handlers.IssuesAvailableItemsHandler', 'class': new IssuesAvailableItemsHandler()} );
            app001.addHandler( {name : 'application.handlers.IssuesReturnsHandler', 'class': new IssuesReturnsHandler()} );
            app001.addHandler( {name : 'application.handlers.ReturnIssuedItemsHandler', 'class': new ReturnIssuedItemsHandler()} );
            app001.addHandler( {name : 'application.handlers.TaskHandler', 'class': new TaskHandler()} );
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
