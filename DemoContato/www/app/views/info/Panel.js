Ext.ns('ContatoDemo.views.info');

ContatoDemo.views.info.Panel = Ext.extend(Ext.Panel, {
   
   layout       : 'fit',
   scroll       : false,
   html         : 'Demo feito por Zaedy Sayão <br /> Disponível em http://github.com/javamanrj',
   
   initComponent: function(){
       this.dockedItems = this.buildDockedItems();
       ContatoDemo.views.info.Panel.superclass.initComponent.apply(this, arguments);
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
           title    : 'Painel de Informações'
       }
   }
   
});

Ext.reg('painelinfo', ContatoDemo.views.info.Panel);