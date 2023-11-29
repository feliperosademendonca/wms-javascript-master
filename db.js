const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'end',
 'root',
 '1234',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Conexão com sucesso');
 }).catch((error) => {
    console.error('Erro ao realizar conexão com Banco de Dados: ');
 });
