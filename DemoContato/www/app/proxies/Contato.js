Ext.data.ProxyMgr.registerType('contatostorage',
    
    Ext.extend(Ext.data.Proxy, {
        
        read: function(operation, callback, scope){
           
            var thisProxy = this;
           
            navigator.contacts.find(
            
                ['id', 'name', 'emails', 'phoneNumbers', 'addresses'],
                
                function(deviceContatos){
                    
                    var contatos = [];
                    
                    for(var i = 0; i < deviceContatos.length; i++){
                        
                        var deviceContato = deviceContatos[i];
                        
                        var contato = new thisProxy.model({
                           id           :  deviceContato.id,
                           nome         :  deviceContato.name.givenName,
                           sobrenome    :  deviceContato.name.familyName,
                           email        :  deviceContato.emails[0].value,
                           telefone     :  deviceContato.phoneNumbers[0].value,
                           endereco     :  deviceContato.addresses[0].value
                        });
                        
                        contatos.push(contato);
                        
                    }
                    
                    operation.resultSet = new Ext.data.ResultSet({
                        records : contatos,
                        total   : contatos.length,
                        loaded  : true
                    });
                    
                    operation.setSuccessful();
                    operation.setCompleted();
                    
                    if(typeof callback == "function"){
                        callback.call(scope || thisProxy, operation);
                    }
                    
                },
                
                function(error){
                    console.log('Erro ao ler os contatos do device');
                },
                {
                    multiple: true
                }
            );
           
        },
        
        update: function(operation, callback, scope){
        },
        
        destroy: function(operation, callback, scope){
        },
        
        create: function(operation, callback, scope){
        }
    })
)