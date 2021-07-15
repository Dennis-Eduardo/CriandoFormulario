const Sequelize = require("sequelize")

const sequelize = new Sequelize('sys', 'dennis', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}