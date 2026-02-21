require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

const configs = {
  dev: require('./dev'),
  release: require('./release'),
  prod: require('./prod')
};

module.exports = configs[env];