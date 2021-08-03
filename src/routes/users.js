const router = require('koa-router')()
const {register} = require('../controller/users')
router.prefix('/users')
const jwt = require('jsonwebtoken')
router.post('/signin',(ctx,next)=>{
    const token = jwt.sign({
        name:'lisi',
        _id: 1
    }, 'my_token', { expiresIn: '2h' });
    ctx.body = {
        code: '000001',
        data: token,
        msg: '登录成功'
    }

})

 router.post('/register',async (ctx,next)=>{
     const {username,upass,nickname}= ctx.request.body
     ctx.body = await register({
         username,
         upass,
         nickname
     })
 })

module.exports = router