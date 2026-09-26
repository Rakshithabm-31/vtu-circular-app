const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Correct path to db.js

const Circular = sequelize.define('Circular', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    issued_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'Circulars',
});

module.exports = Circular;
