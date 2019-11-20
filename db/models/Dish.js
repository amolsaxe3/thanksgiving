const Sequelize = require('sequelize');
const { db } = require('../connection');

const Dish = db.define('dish', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    preparedBy: {
        type: Sequelize.INTEGER,
    }
});
module.exports = { Dish };