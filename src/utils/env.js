/**
 * 线上线下环境
 */
const {isprod} =require('./utils/env.js')
const ENV = process.env.NODE_ENV

module.exports = {
    isprod: ENV === 'dev' ? false : true
}