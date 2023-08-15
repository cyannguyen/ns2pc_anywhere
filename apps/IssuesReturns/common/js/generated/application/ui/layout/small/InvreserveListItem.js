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
// Build: 2023-08-15 11:35:11
//----------------------------------------------------------------//
define(   "generated/application/ui/layout/small/InvreserveListItem", 
      [
         "dojo/_base/declare", 
         "platform/ui/layout/_LayoutWidgetBase", 
         "dojo/_base/array", 
         "dojo/dom-construct", 
         "dojo/dom-class"
      ],

function(declare, _LayoutWidgetBase, array, domConstruct, domClass) {
      return declare("generated.application.ui.layout.small.InvreserveListItem", _LayoutWidgetBase, {

         buildRendering : function() {
            this.inherited(arguments);

            var table = domConstruct.create('table', {role:'presentation'} );
            table.style.width = '100%';
            domClass.add(table, 'layout InvreserveListItem ');

            var row = table.insertRow(-1);
            row.className  = 'InvreserveListItem_row_0';

            var col_item1 = row.insertCell(-1);
            col_item1.className  = 'InvreserveListItem_item3_column';
            col_item1.colSpan = '3';
            var div_item1 = domConstruct.create('div');
            col_item1.appendChild(div_item1);
            domClass.add(div_item1, 'hideextra');
            this._storeAttachToDomReference('item1', div_item1);
            
            var col_item2 = row.insertCell(-1);
            col_item2.className  = 'InvreserveListItem_button1_column';
            col_item2.colSpan = '6';
            col_item2.style['text-align'] = 'left';
            var div_item2 = domConstruct.create('div');
            col_item2.appendChild(div_item2);
            domClass.add(div_item2, 'hideextra');
            this._storeAttachToDomReference('item2', div_item2);
            
            var col_item6 = row.insertCell(-1);
            col_item6.className  = 'InvreserveListItem_item5_column';
            col_item6.colSpan = '3';
            col_item6.rowSpan = '4';
            col_item6.style['vertical-align'] = 'middle';
            var div_item6 = domConstruct.create('div');
            col_item6.appendChild(div_item6);
            domClass.add(div_item6, 'hideextra');
            this._storeAttachToDomReference('item6', div_item6);
            
            var row = table.insertRow(-1);
            row.className  = 'InvreserveListItem_row_1';

            var col_item3 = row.insertCell(-1);
            col_item3.className  = 'InvreserveListItem_item1_column';
            col_item3.colSpan = '3';
            col_item3.style['text-align'] = 'left';
            var div_item3 = domConstruct.create('div');
            col_item3.appendChild(div_item3);
            domClass.add(div_item3, 'hideextra');
            this._storeAttachToDomReference('item3', div_item3);
            
            var col_item4 = row.insertCell(-1);
            col_item4.className  = 'InvreserveListItem_item2_column';
            col_item4.colSpan = '6';
            col_item4.style['text-align'] = 'left';
            var div_item4 = domConstruct.create('div');
            col_item4.appendChild(div_item4);
            domClass.add(div_item4, 'hideextra');
            this._storeAttachToDomReference('item4', div_item4);
            
            var row = table.insertRow(-1);
            row.className  = 'InvreserveListItem_row_2';

            var col_item5 = row.insertCell(-1);
            col_item5.className  = 'InvreserveListItem_item4_column';
            col_item5.colSpan = '3';
            var div_item5 = domConstruct.create('div');
            col_item5.appendChild(div_item5);
            domClass.add(div_item5, 'hideextra');
            this._storeAttachToDomReference('item5', div_item5);
            
            var col_item7 = row.insertCell(-1);
            col_item7.className  = 'InvreserveListItem_item6_column';
            col_item7.colSpan = '3';
            var div_item7 = domConstruct.create('div');
            col_item7.appendChild(div_item7);
            domClass.add(div_item7, 'hideextra');
            this._storeAttachToDomReference('item7', div_item7);
            
            var col_item8 = row.insertCell(-1);
            col_item8.className  = 'InvreserveListItem_item8_column';
            col_item8.colSpan = '3';
            var div_item8 = domConstruct.create('div');
            col_item8.appendChild(div_item8);
            domClass.add(div_item8, 'hideextra');
            this._storeAttachToDomReference('item8', div_item8);
            
            var row = table.insertRow(-1);
            row.className  = 'InvreserveListItem_row_3';

            var col_item9 = row.insertCell(-1);
            col_item9.className  = 'InvreserveListItem_item9_column';
            col_item9.colSpan = '9';
            var div_item9 = domConstruct.create('div');
            col_item9.appendChild(div_item9);
            domClass.add(div_item9, 'hideextra');
            this._storeAttachToDomReference('item9', div_item9);
            
            this.domNode = table;
         }
      });
});
