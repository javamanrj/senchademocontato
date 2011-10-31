Ext.regController('Info', {
    
    controllerBack  : '',
    actionBack      : '',
    
    index: function(options){
        if(!this.painelInfo){
            this.painelInfo = this.render({
                xtype   : 'painelinfo',
                itemId  : 'painelInfoId'
            });
        }else{
            this.setAtivoPainelInfo();
        }
        
        this.painelInfo.query('#voltarTopBackBarId')[0].on({
            tap     : this.showContato,
            scope   : this
        });
        
        this.controllerBack = options.controllerBack;
        this.actionBack = options.actionBack;
        
    },
    
    setAtivoPainelInfo: function(){
        this.application.viewport.setActiveItem(this.painelInfo, null);
    },
    
    showContato: function(){
        Ext.dispatch({
           controller   : this.controllerBack || 'Contato',
           action       : this.actionBack || 'index'
        });
    }
    
});