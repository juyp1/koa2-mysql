const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const koajwt = require('koa-jwt');
const index = require('./routes')
const users = require('./routes/users')
const blogs = require('./routes/blogs')
const uscore = require('./routes/uscore')
const cors = require('koa2-cors'); //跨域处理
// error handler
onerror(app)
// 错误处理
app.use(
    cors({
      // origin: function(ctx) { //设置允许来自指定域名请求
      //   if (ctx.url === '/test') {
      //     return '*'; // 允许来自所有域名请求
      //   }
      //   return 'http://localhost:3001'; //只允许http://localhost:8080这个域名的请求
      // },
      maxAge: 5, //指定本次预检请求的有效期，单位为秒。
      credentials: true, //是否允许发送Cookie
      allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
      allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
      exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);

app.use((ctx, next) => {


  return next().catch((err) => {
    if(err.status === 401){
      ctx.status = 401;
      ctx.body = 'Protected resource, use Authorization header to get access\n';
    }else{
      throw err;
    }
  })
})

app.use(koajwt({
  secret: 'my_token'
}).unless({
  path: [/\/users\/signin/,/\/users\/register/,/\/users\/uppass/,/\/blog\/list/,/\/blog\/add/,/\/score\/add/,/\/score\/list/]
}));
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(blogs.routes(),blogs.allowedMethods())
app.use(uscore.routes(),uscore.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
