Ext.ns('ContatoDemo.views.contato');

ContatoDemo.views.contato.Panel = Ext.extend(Ext.Panel, {
   
   layout       : 'fit',
   scroll       : false,
   html         : '',
   
   initComponent: function(){
       this.items       = this.buildItems();
       this.dockedItems = this.buildDockedItems();
       ContatoDemo.views.contato.Panel.superclass.initComponent.apply(this, arguments);
   },
   
   buildItems: function(){
       return [
           {
               xtype    : 'listcontato',
               itemId   : 'listContatoId'
           }
       ];
   },
   
   buildDockedItems: function(){
       return [
           this.buildBottomDock(),
           this.buildTopDock()
       ]
   },
   
   buildBottomDock: function(){
       return {
           xtype    : 'bottombar',
           itemId   : 'bottomBarId',
           title    : ''
       }
   },
   
   buildTopDock: function(){
       return {
           xtype    : 'topbar',
           itemId   : 'topBarId',
           title    : 'Lista de contatos'
       }
   }
   
});

Ext.reg('painelcontato', ContatoDemo.views.contato.Panel);