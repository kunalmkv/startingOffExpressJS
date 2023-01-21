const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const user = sequelize.define('userAppoint', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },
    phone: {
        type: Sequelize.STRING,
        unique: true
    },
    date: {
        type: Sequelize.STRING,
    }
});
module.exports = user;