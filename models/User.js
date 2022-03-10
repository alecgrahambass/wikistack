const db = require('./models/index');
const Sequelize = require('sequelize')

const User = db.define('user', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique: true
  }
});

module.exports = User;
