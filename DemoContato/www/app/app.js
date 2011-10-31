Ext.regApplication({
   name             : 'ContatoDemo',
   defaultTarget    : 'viewport',
   defaultUrl       : 'contato/index',
   launch: function(){
       this.viewport = new ContatoDemo.Viewport({
           application: this
       });
   }
});