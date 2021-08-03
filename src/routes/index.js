const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    message:'我是内容',
    name:"测试123",
    types:1,
    lists:[{
      id:1,
      title:'Vue'
    },{
      id:2,
      title:'React'
    },{
      id:3,
      title:'Angular'
    }]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
