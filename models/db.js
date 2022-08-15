const Sequelize = require('sequelize');

const sequelize = new Sequelize('contato', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
    .then( () => {
     console.log("Conexão realizada com sucesso!")
    }).catch( () => {
     console.log("ERRO: conexão não realizada com sucesso!")
    });

module.exports = sequelize;