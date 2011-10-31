Ext.regController('Contato', {
    index: function(){
        if(!this.painelContato){
            this.painelContato = this.render({
                xtype       : 'painelcontato',
                itemId      : 'painelContatoId',
                listeners   : {
                    activate: function(painelContato){
                        painelContato.query('#listContatoId')[0].getSelectionModel().deselectAll();
                    }
                }
            });
        }else{
            this.setAtivoPainelContato();
        }
        
        this.painelContato.query('#infoTopBarId')[0].on({
            tap     : this.showInfo,
            scope   : this
        });
        
        this.painelContato.query('#mapaBottomBarId')[0].on({
            tap     : this.showMapa,
            scope   : this
        });
        
        this.painelContato.query('#listContatoId')[0].on({
            select      : this.showDetalheContato,
            scope       : this
        });
    },
    
    setAtivoPainelContato: function(){
        this.application.viewport.setActiveItem(this.painelContato, null);
    },
    
    showInfo: function(){
        Ext.dispatch({
           controller       : 'Info',
           action           : 'index',
           controllerBack   : 'Contato',
           actionBack       : 'index'
        });
    },
    
    showMapa: function(){
        Ext.dispatch({
           controller   : 'ContatoMapa',
           action       : 'index'
        });
    },
    
    showDetalheContato: function(list, record){
        Ext.dispatch({
           controller   : 'ContatoDetalhe',
           action       : 'index',
           record       : record
        });
    }
});