const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('./db');

const Home = db.define('contato', {
    id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
    text_one: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text_two: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text_three: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    btn_title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    btn_link: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

// Home.sync();
// home.synce( {alter: true } );
module.exports = Home;