const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Sample-Project', 'postgres', 'user', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });
// Export the sequelize instance to be used in models and elsewhere
module.exports = sequelize;
