const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'desafio-node', 
    'giodou',
    '123456',
    {
        dialect:  'mysql',
        host:  'db',
        port:  '3306',
        logging: true
    });

    module.exports = sequelize;