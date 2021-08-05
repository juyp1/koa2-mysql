const {bloglist} = require("../controller/blogs");
const router = require('koa-router')({prefix: '/blog'})

router.get('/list',async (ctx,next)=>{
    const {username,pageIndex,pageSize}= ctx.request.query
    ctx.body = await bloglist({
        username,
        pageIndex,
        pageSize
    })
})
module.exports = router
