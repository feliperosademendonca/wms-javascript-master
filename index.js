//Configuração das Rotas
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const fs = require('fs');
const path = require('path');
const db = require("./bd/models")
app.set('views', path.join(__dirname, 'views'));
const bd = fs.readFileSync('bd.csv', 'utf8');
const end = require("./end.js")


 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
 
//Configuração da ViewEngine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');


// rota do handlebars
app.get('/', function(req, res) {
  res.render('menu');
});


// página de Login
app.get('/login', function(req, res) {
  res.render('login');
});

// Rota para autenticar o usuário
app.post('/login', (req, res) => {
  const { username, password } = req.body;
console.log("user: "+username,",pswd: "+password)
app.use(express.json());

// Função para verificar as credenciais do usuário
function authenticateUser(username, password) {
  const usersTable = loadUsersFromCSV(); // Carrega os usuários do arquivo CSV

  const user = usersTable.find(u => u.username === username && u.password === password);
  return user ? { privilege: user.privilege } : null;
}

// Função para carregar usuários do arquivo CSV
function loadUsersFromCSV() {
  const users = [];

  // Lê o arquivo CSV e adiciona os usuários ao array
  const fileContents = fs.readFileSync('users.csv', 'utf8');
  const rows = fileContents.split('\n');

  rows.forEach(row => {
    const [username, password, privilege] = row.split(',');
    if (username && password && privilege) {
      users.push({ username, password, privilege });
    }
  });

  return users;
}
  if (authenticateUser(username, password)) {
    res.json({ message: 'Login bem-sucedido' });
  } else {
    res.status(401).json({ message: 'Credenciais inválidas' });
  }
});

// Rota para obter todos os usuários (requer autenticação)
app.get('/users', (req, res) => {
  // Verifica se o usuário está autenticado (pode ser uma verificação mais robusta em uma aplicação real)
  const isAuthenticated = req.headers.authorization === 'Bearer token123';

  if (!isAuthenticated) {
    return res.status(401).json({ message: 'Acesso não autorizado' });
  }

  const users = [];

  // Lê o arquivo CSV e adiciona os usuários ao array
  fs.createReadStream('users.csv')
    .pipe(csv())
    .on('data', (row) => {
      users.push(row);
    })
    .on('end', () => {
      res.json(users);
    });
});

// Rota para criar um novo usuário (requer autenticação)
app.post('/users', (req, res) => {
  // Verifica se o usuário está autenticado (pode ser uma verificação mais robusta em uma aplicação real)
  const isAuthenticated = req.headers.authorization === 'Bearer token123';

  if (!isAuthenticated) {
    return res.status(401).json({ message: 'Acesso não autorizado' });
  }

  const newUser = req.body;

  // Adiciona o novo usuário ao arquivo CSV
  fs.appendFile('users.csv', `\n${Object.values(newUser).join(',')}`, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar o usuário.');
    } else {
      res.status(201).send('Usuário adicionado com sucesso.');
    }
  });
});


// Tela Inicial HOMEPage
app.get('/menu', function(req, res) {
  res.render('menu');

});

//Pesquisar  Produto
app.get('/find', function(req, res) {
  res.render('find');
});

//Resultado da Pesquisa Produto
app.post('/result', function(req, res) {
  var btnRmv = req.body.btnRmv
  console.log(btnRmv)

    if( btnRmv !== undefined){
              rmv(btnRmv)
    }else{
    var pesquisado = req.body.pesquisado
    console.log("Pesquisado " +pesquisado)

   //percorre o arrey de objetos e seus valores
  
  

// Array para armazenar os objetosEncontrados
var objetosEncontrados = [];

// Ler o arquivo CSV
fs.createReadStream(bd)
  .pipe(csv())
  .on('data', (row) => {
    // Verificar se o elemento é o procurado (ajuste conforme necessário)
    if (row.EAN === pesquisado || row.descricao === pesquisado ) {
      objetosEncontrados.push(row);
    }
  })
  .on('end', () => {
    // Exibir os objetosEncontrados
    console.log('Elementos encontrados no .CSV:', objetosEncontrados);
  });

  var objetosEncontrados = objetosEncontrados.filter(objeto => objeto.produtoNoEndereco.EAN == pesquisado)


  if(objetosEncontrados.length > 0){
 
    var soma = objetosEncontrados.reduce(function (acumulador, item) {
      return acumulador + item.produtoNoEndereco.quantidade;
    }, 0);
    //console.log(objetosEncontrados)
    res.render('result',{objetosEncontrados, pesquisado, soma})   

  }else{

    console.log("Nenhum EAN")
    console.log("Pesquisando pela Descrição")

    
  var objetosEncontrados = end.filter(objeto => objeto.produtoNoEndereco.descricao.indexOf(pesquisado) !== -1);
    var soma = objetosEncontrados.reduce(function (acumulador, item) {
      return acumulador + item.produtoNoEndereco.quantidade;
    }, 0);

    //console.log("Encontrado: "+objetosEncontrados)

    res.render('result',{objetosEncontrados, pesquisado, soma})   

   // res.render('result',{pesquisado})  
  }
}
}
)
;

app.post('/resultend', function(req, res) {
  console.log('Carregou resultend')
  // Coordenada específica que você deseja encontrar
  var pesquisado = req.body.pesquisadoEndEstante
  var coordenadaAlvo = {
      rua:pesquisado[0],
      lado:pesquisado[1],
      predio:pesquisado[2],
      andar:pesquisado[3],
    }


    console.log(coordenadaAlvo)

// Encontrando a ocorrência única com a coordenada específica
let objetosEncontrados = end.filter(objeto => {
  return (
          objeto.rua == coordenadaAlvo.predio && 
          objeto.lado == coordenadaAlvo.lado &&
          objeto.predio == coordenadaAlvo.predio &&
          objeto.andar == coordenadaAlvo.andar 


          );
      });

// Exibindo o resultado
console.log(objetosEncontrados);
var acao ='ADCIONAR'
  res.render('resultend',{objetosEncontrados,pesquisado, acao });
});

//Pesquisa Endereço
app.get('/end', function(req, res) {
  res.render('end');
});

//Resultado Pesquisa Endereço Vazio
app.post('/resultendvazio', function(req, res) {


  var pesquisado = 'Endereço Vazio'
  console.log('EndSolicitado: '+pesquisado)

  // Nome da propriedade a ser verificada
let propriedadeAlvo = 'produtoNoEndereco';

// Filtrando o array para encontrar objetos com a propriedade nula ou inexistente
let objetosEncontrados = end.filter(objeto => {  return objeto[propriedadeAlvo].EAN === '';
});
  // Exibindo o resultado
  console.log(objetosEncontrados);

  res.render('resultendvazio',{objetosEncontrados, pesquisado,})   

})

app.get('/add', function(req, res) {

  res.render('add');
});

app.post('/resultadd', function(req, res) {
    let addprod = req.body.ADD
    console.error("carregou resultadd e "+addprod);
    add(addprod)

  //escreva no banco de dados.
    escrevaBd()
    res.render('resultadd');
});

app.get('/rmv', function(req, res) {
  res.render('rmv');
});

// rota para endereço pública
app.use(express.static(__dirname + '/pg/public/'));

// rota para CSS
app.get('/public/estilo.css', function(req, res) {
  res.sendFile(__dirname+'/pg/public/estilo.css');

});

const port = process.env.PORT || 3000;

app.listen(port, () => 
console.log('Servidor iniciado na porta ' + port),
 
);
