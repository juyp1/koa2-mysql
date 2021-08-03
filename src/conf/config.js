/**
 * 存储配置
 */
let REDIS_CONF = {
    port:6379,
    host:'127.0.0.1',
}
let MYSQL_CONF = {
    host:'localhost',
    dialect:'mysql'
}
MYSQL_CONF.pool={
    max:5,
    min:0,
    idle:10000 // 如果一个连接池10秒内没有使用直接释放
}
module.exports ={
    REDIS_CONF,
    MYSQL_CONF
}