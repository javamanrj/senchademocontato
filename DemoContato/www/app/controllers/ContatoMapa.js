Ext.regController('ContatoMapa', {
    index: function(){
        if(!this.mapaContato){
            this.mapaContato = this.render({
                xtype   : 'mapacontato',
                itemId  : 'mapaContatoId'
            });
        }else{
            this.setAtivoMapaContato();
        }
        
        this.mapaContato.query('#infoTopBarId')[0].on({
            tap     : this.showInfo,
            scope   : this
        });
        
        this.mapaContato.query('#contatoBottomBarId')[0].on({
            tap     : this.showContato,
            scope   : this
        });
    },
    
    setAtivoMapaContato: function(){
        this.application.viewport.setActiveItem(this.mapaContato, null);
    },
    
    showInfo: function(){
        Ext.dispatch({
           controller       : 'Info',
           action           : 'index',
           controllerBack   : 'ContatoMapa',
           actionBack       : 'index'
        });
    },
    
    showContato: function(){
        Ext.dispatch({
           controller   : 'Contato',
           action       : 'index'
        });
    }
});