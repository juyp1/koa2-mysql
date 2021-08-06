const router = require('koa-router')()
const {register,upPassword,usignin} = require('../controller/users')
router.prefix('/users')
router.post('/signin', async(ctx,next)=>{
    const {userpass,username}= ctx.request.body
    ctx.body = await usignin(username,userpass)
})

 router.post('/register',async (ctx,next)=>{
     const {username,upass,nickname}= ctx.request.body
     ctx.body = await register({
         username,
         upass,
         nickname
     })
 })
router.post('/uppass',async (ctx,next)=>{
    const {userid,upass}= ctx.request.body
    ctx.body = await upPassword({
        userid,
        upass,

    })
})

module.exports = router
