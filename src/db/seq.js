const {MYSQL_CONF} = require('../conf/config')
const  Sequlize = require('sequelize')
const seq = new Sequlize('koa_weibo', 'root', '66666666', {...MYSQL_CONF})
module.exports = seq