const {ErrorModel, SuccessModel} = require("../model/ResModel");
const {createScore,scoreList} = require('../services/uscore')

 async function createScoreCtl({ scorenum, uid,describe }) {
    try {
        await createScore({
            scorenum,
            uid,
            describe
        })
        return new SuccessModel({
            message:"添加成功"
        })
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return  new ErrorModel({errno:-1,message:ex.message})
    }
}

async function  scoreListCtl(username,pageIndex,pageSize){

    const data = await scoreList(username,pageIndex,pageSize)
    // 拼接返回数据
    return new SuccessModel({
        info:data,
        pageSize,
        pageIndex,
        count: data.count
    })
}

module.exports = {
    scoreListCtl,
    createScoreCtl
}
