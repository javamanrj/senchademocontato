Ext.ns('ContatoDemo.views.toolbar');

ContatoDemo.views.toolbar.TopBack = Ext.extend(Ext.Toolbar, {
   dock     : 'top',
   title    : 'Top Back title',
   defaults : {
       iconMask : true,
       ui       : 'plain'
   },
   initComponent: function(){
       this.items = this.buildItems();
       ContatoDemo.views.toolbar.TopBack.superclass.initComponent.apply(this, arguments);
   },
   
   buildItems: function(){
       return [
           {
               text     : 'Voltar',
               itemId   : 'voltarTopBackBarId',
               ui       : 'back'
           }
       ]
   }
});

Ext.reg('topbackbar', ContatoDemo.views.toolbar.TopBack);