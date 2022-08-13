const Sequelize = require('sequelize');

const sequelize = new Sequelize('contato', 'root', '123456'{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(() => {
    console.log("Conexão realizada com sucesso");
}).catch(() => {
    console.log("Erro: conexão com o banco de dados não realizada corretamente");
});

module.exports = sequelize;