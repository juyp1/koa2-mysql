const router = require('koa-router')({prefix: '/score'})
const {createScoreCtl, scoreListCtl} = require('../controller/uscore')
router.post('/add', async (ctx, next) => {
    const {scorenum, uid, describe} = ctx.request.body
    ctx.body = await createScoreCtl({scorenum, uid, describe})
})
router.get('/list', async (ctx, next) => {
    const {username, pageIndex, pageSize} = ctx.request.query
    ctx.body = await scoreListCtl(
        username,
        pageIndex,
        pageSize
    )
})
module.exports = router
