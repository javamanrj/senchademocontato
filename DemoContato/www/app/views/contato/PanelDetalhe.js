Ext.ns('ContatoDemo.views.contato');

ContatoDemo.views.contato.PanelDetalhe = Ext.extend(Ext.Panel, {
   
   layout       : 'fit',
   scroll       : false,
   html         : 'Teste',
   
   initComponent: function(){
       this.dockedItems = this.buildDockedItems();
       ContatoDemo.views.contato.PanelDetalhe.superclass.initComponent.apply(this, arguments);
   },
   
   buildDockedItems: function(){
       return [
           this.buildTopDock()
       ]
   },
   
   buildTopDock: function(){
       return {
           xtype    : 'topbackbar',
           itemId   : 'topBackBarId',
           title    : 'Detalhes do contato'
       }
   }
   
});

Ext.reg('painelcontatodetalhe', ContatoDemo.views.contato.PanelDetalhe);