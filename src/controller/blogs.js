const {ErrorModel,SuccessModel} = require("../model/ResModel");
const {getBlogsList} =require("../services/blogs")
async function bloglist(username, pageIndex = 1, pageSize = 10){
    const blogList = await getBlogsList(username,pageIndex,pageSize)
    // 拼接返回数据
    return new SuccessModel({
        isEmpty: blogList.length === 0,
        blogList,
        pageSize,
        pageIndex,
        count: blogList.count
    })
}

module.exports = {
    bloglist
}
