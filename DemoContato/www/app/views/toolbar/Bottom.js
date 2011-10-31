Ext.ns('ContatoDemo.views.toolbar');

ContatoDemo.views.toolbar.Bottom = Ext.extend(Ext.Toolbar, {
   dock     : 'bottom',
   title    : 'Bottom title',
   defaults : {
       iconMask : true,
       ui       : 'plain'
   },
   layout: {
       pack: 'center'
   },
   initComponent: function(){
       this.items = this.buildItems();
       ContatoDemo.views.toolbar.Bottom.superclass.initComponent.apply(this, arguments);
   },
   
   buildItems: function(){
       return [
           {
               iconCls  : 'user',
               text     : 'Contatos',
               itemId   : 'contatoBottomBarId'
           },
           {
               iconCls  : 'maps',
               text     : 'Mapa dos contatos',
               itemId   : 'mapaBottomBarId'
           }
       ]
   }
});

Ext.reg('bottombar', ContatoDemo.views.toolbar.Bottom);