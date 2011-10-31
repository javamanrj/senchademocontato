Ext.regModel('Contato', {
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'nome',
            type: 'string'
        },
        {
            name: 'sobrenome',
            type: 'string'
        },
        {
            name: 'email',
            type: 'string'
        },
        {
            name: 'telefone',
            type: 'string'
        },
        {
            name: 'endereco',
            type: 'string'
        }
    ],
    
    proxy: 'contatostorage'
});