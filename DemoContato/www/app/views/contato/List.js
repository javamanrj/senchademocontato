Ext.ns('ContatoDemo.views.contato');

ContatoDemo.views.contato.List = Ext.extend(Ext.List, {
    grouped     : false,
    indexBar    : false,
    fullscreen  : true,
    itemTpl     : '{nome} {sobrenome}',
    store       : 'Contatos',
    
    initComponent: function(){
        ContatoDemo.views.contato.List.superclass.initComponent.apply(this, arguments);
        this.store.load();
    }
});

Ext.reg('listcontato', ContatoDemo.views.contato.List);