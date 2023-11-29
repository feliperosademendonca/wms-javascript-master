//criar regras de validação para limitar e restringir os objetos no estoque.



var End = [
    {"id":"1","predio":"1","codigo":"1","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{"EAN":7894900011511, "codigo":"1","descricao":"Achou mizerável","validade":"1/1/23","quantidade":900}},
    {"id":"2","predio":"1","codigo":"2","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':7894900011523, 'codigo':"2", 'descricao':'pepse 220ml','quantidade':350,'validade':'1/1/25',"quantidade":900 }},
    {"id":"3","predio":"1","codigo":"3","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"4","predio":"1","codigo":"4","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"5","predio":"2","codigo":"5","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"6","predio":"2","codigo":"6","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':7894900011523, 'codigo':"2", 'descricao':'pepse 220ml','quantidade':350,'validade':'1/1/25',"quantidade":900 }},
    {"id":"7","predio":"2","codigo":"7","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25', "quantidade":900 }},
    {"id":"8","predio":"2","codigo":"8","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25', "quantidade":0}},
    {"id":"9","predio":"3","codigo":"9","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"10","predio":"3","codigo":"10","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"11","predio":"3","codigo":"11","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"12","predio":"3","codigo":"12","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':7894900011511, 'codigo':1, 'descricao':'coca 350ml unid','validade':'1/1/25',"quantidade":800 }},
    {"id":"13","predio":"4","codigo":"13","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25', "quantidade":0}},
    {"id":"14","predio":"4","codigo":"14","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"15","predio":"4","codigo":"15","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':7894900011523, 'codigo':"2", 'descricao':'pepse 220ml','quantidade':350,'validade':'1/1/25',"quantidade":900 }},
    {"id":"16","predio":"4","codigo":"16","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"16","predio":"5","codigo":"17","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"17","predio":"5","codigo":"18","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':7894900011523, 'codigo':"2", 'descricao':'pepse 220ml','quantidade':350,'validade':'1/1/25',"quantidade":900 }},
    {"id":"18","predio":"5","codigo":"19","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':'', 'codigo':"", 'descricao':'','quantidade':'','validade':'1/1/25', 'quantidade': 0}},
    {"id":"19","predio":"5","codigo":"20","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25', "quantidade":0}},
    {"id":"20","predio":"6","codigo":"21","rua":"1", "lado":"a","andar":"1",'produtoNoEndereco':{'EAN':0, 'codigo':0, 'descricao':'','validade':'1/1/25',"quantidade":900 }},
    {"id":"21","predio":"6","codigo":"22","rua":"1", "lado":"a","andar":"2",'produtoNoEndereco':{'EAN':'', 'codigo':"", 'descricao':' ','quantidade':' ','validade':'1/1/25', 'quantidade':0}},
    {"id":"22","predio":"6","codigo":"23","rua":"1", "lado":"a","andar":"3",'produtoNoEndereco':{'EAN':7894900011511, 'codigo':1, 'descricao':'coca 350ml unid','validade':'1/1/25',"quantidade":100 }},
    {"id":"23","predio":"6","codigo":"24","rua":"1", "lado":"a","andar":"4",'produtoNoEndereco':{'EAN':'', 'codigo':0, 'descricao':'','validade':'1/1/25', "quantidade":0}},
  
  ]

  exports.End= End 
