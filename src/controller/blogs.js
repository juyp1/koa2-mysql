const {ErrorModel,SuccessModel} = require("../model/ResModel");
const {getBlogsList,createBlog} =require("../services/blogs")
async function bloglist(username, pageIndex = 1, pageSize = 10){
    const blogList = await getBlogsList(username,pageIndex,pageSize)
    // 拼接返回数据
    return new SuccessModel({

        info:blogList,
        pageSize,
        pageIndex,
        count: blogList.count
    })
}
// 新增
async function addBlog(title,content,userid){
    try {
         await  createBlog(title,content,userid)
        return new SuccessModel()
    } catch (ex) {
        console.error(ex.message, ex.stack)
        return  new ErrorModel({errno:-1,message:ex.message})
    }

}

module.exports = {
    addBlog,
    bloglist
}
