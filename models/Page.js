const db = require('./models/index');
const Sequelize = require('sequelize')

const Page = db.define('page', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed'),
});

module.exports = Page;
