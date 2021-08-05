const {bloglist, addBlog} = require("../controller/blogs");
const router = require('koa-router')({prefix: '/blog'})

router.get('/list', async (ctx, next) => {
    const {username, pageIndex, pageSize} = ctx.request.query
    ctx.body = await bloglist({
        username,
        pageIndex,
        pageSize
    })
})

router.post('/add', async (ctx, next) => {
    const {title, content, userid} = ctx.request.body
    ctx.body = await addBlog(title, content, userid)
})
module.exports = router
