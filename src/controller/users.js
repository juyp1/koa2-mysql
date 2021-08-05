const {ErrorModel,SuccessModel} = require("../model/ResModel");
const {createUser,editUser,getUserInfo} = require('../services/users')
/**
 * 注册
 */
async function register({ username, upass,nickname }) {
    const userInfo = await getUserInfo(username)
    if (userInfo) {
        // 用户名已存在
        return new ErrorModel({errno:-1,message:'当前用户已存在'})
    }
    try {
        await createUser({
            username,
            upass,
            nickname
        })
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return  new ErrorModel({errno:-1,message:ex.message})
    }
}

async function upPassword({userid,upass}){
    try {
        await editUser({userid,upass})
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return  new ErrorModel({errno:-1,message:ex.message})
    }

}

module.exports = {
    register,
    upPassword
}