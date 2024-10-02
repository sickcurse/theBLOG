const Sequelize = require('sequelize');
require('dotenv').config(); // Ensure you have dotenv configured for environment variables

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', // Adjust the dialect for your database
    port: process.env.DB_PORT || 5432,
  }
);

module.exports = sequelize;
