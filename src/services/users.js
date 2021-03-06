const {Users} = require('../db/model/usermodel')
const uuid = require('uuid')

async function  createUser({username,upass,nickname}){
    const result = await Users.create({
        uid:uuid.v4(),
        username,
        upass,
        nickname
    })
    const data = result.dataValues
    return data;
}

async  function editUser ({userid,upass}){
    const result = await Users.update({
        upass
    },{
        where:{
            uid:userid
        }
    })
    const data = result.dataValues
    return data;
}

async  function  getUserInfo(username){
    const result = await Users.findOne({
        attributes: ['uid', 'username', 'nickname'],
        where:{
            username
        }
    })
    if (result == null) {
        // 未找到
        return result
    }
    return result.dataValues

}

async function  getsignin(username,userpass){
    const result = await Users.findOne({
        attributes: ['uid', 'username', 'nickname'],
        where:{
            username,
            upass:userpass
        }
    })
    if (result == null) {
        // 未找到
        return result
    }
    return result.dataValues
}
module.exports = {
    createUser,
    editUser,
    getUserInfo,
    getsignin
}
