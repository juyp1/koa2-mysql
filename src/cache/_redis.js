/**
 * 操作redis方法
 */

const redis = require('redis')
const {REDIS_CONF} = require('../conf/config')

// 创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host)
redisClient.on('error', err => {
    console.log('redis err', err)
})

const set = (key, val, timeout = 60 * 60) => {
    if (typeof val == 'object') {
        val = JSON.stringify(val)
    }
    console.log('=========redis start =======')
    console.log(`=======key${key} val${val} ======`)
    console.log('=========redis end =======')
    redisClient.set(key, val)
    redisClient.expire(key, timeout)
}
const get = (key) => {
    const promise = new Promise((resolve,reject)=>{
        redisClient.get(key,(err,val)=>{
            if(err){
                reject(err)
                return
            }
            if(val==null){
                resolve(null)
                return
            }
            try{
                resolve(JSON.parse(val))
            }catch (ex) {
                resolve(val)
            }
        })
    })
    return promise

}

module.exports = {
    set,
    get
}