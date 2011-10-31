Ext.ns('ContatoDemo.views.contato');

ContatoDemo.views.contato.Map = Ext.extend(Ext.Panel, {
   
   layout       : 'fit',
   scroll       : false,
   html         : '',
   
   initComponent: function(){
       this.items       = this.buildItems();
       this.dockedItems = this.buildDockedItems();
       ContatoDemo.views.contato.Map.superclass.initComponent.apply(this, arguments);
   },
   
   buildItems: function(){
       return [
           {
               xtype    : 'map',
               itemId   : 'mapaContatoId'
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
           title    : 'Mapa de contatos'
       }
   }
   
});

Ext.reg('mapacontato', ContatoDemo.views.contato.Map);