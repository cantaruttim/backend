const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('./db');

const MsgContact = db.define('msgs_Contacts', {
    id: {
    type: sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    subject: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
});

// MsgContact.sync();
// MsgContact.synce( {alter: true } );
module.exports = MsgContact;