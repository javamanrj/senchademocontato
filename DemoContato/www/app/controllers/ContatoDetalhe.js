Ext.regController('ContatoDetalhe', {
    index: function(options){
        if(!this.painelContatoDetalhe){
            this.painelContatoDetalhe = this.render({
                xtype   : 'painelcontatodetalhe',
                itemId  : 'painelContatoDetalheId'
            });
        }else{
            this.setAtivoPainelContatoDetalhe();
        }
        
        this.showDadosContato(options.record);
        
        this.painelContatoDetalhe.query('#voltarTopBackBarId')[0].on({
            tap         : this.showContato,
            scope       : this
        });
    },
    
    setAtivoPainelContatoDetalhe: function(){
        this.application.viewport.setActiveItem(this.painelContatoDetalhe, null);
    },
    
    showDadosContato: function(record){
        var htmlContato =   "Nome: " + record.get('nome') + "<br />" + 
                            "Sobrenome: " + record.get('sobrenome') + "<br />" + 
                            "Email: " + record.get('email') + "<br />" + 
                            "Telefone: " + record.get('telefone') + "<br />" + 
                            "Endereco: " + record.get('endereco');
        
        this.painelContatoDetalhe.update(htmlContato);
    },
    
    showContato: function(){
        Ext.dispatch({
           controller   : 'Contato',
           action       : 'index'
        });
    }
});