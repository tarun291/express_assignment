const { DataTypes } = require('sequelize');
const sequelize = require('../db/index');
const EndUser = sequelize.define('EndUser', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = EndUser;