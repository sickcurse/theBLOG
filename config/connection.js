const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 5432,
    dialectOptions: {
      ssl: {
        require: true,  // Render PostgreSQL usually requires SSL
        rejectUnauthorized: false  // To avoid self-signed cert issues
      }
    }
  }
);

module.exports = sequelize;
