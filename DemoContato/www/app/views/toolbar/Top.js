Ext.ns('ContatoDemo.views.toolbar');

ContatoDemo.views.toolbar.Top = Ext.extend(Ext.Toolbar, {
   dock     : 'top',
   title    : 'Top title',
   defaults : {
       iconMask : true,
       ui       : 'plain'
   },
   initComponent: function(){
       this.items = this.buildItems();
       ContatoDemo.views.toolbar.Top.superclass.initComponent.apply(this, arguments);
   },
   
   buildItems: function(){
       return [
           {
               xtype: 'spacer'
           },
           {
               iconCls  : 'info',
               text     : '',
               itemId   : 'infoTopBarId'
           }
       ]
   }
});

Ext.reg('topbar', ContatoDemo.views.toolbar.Top);