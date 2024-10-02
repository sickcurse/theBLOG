const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,  // Render PostgreSQL requires SSL
      rejectUnauthorized: false,  // Allows self-signed certs
    }
  }
});

module.exports = sequelize;
