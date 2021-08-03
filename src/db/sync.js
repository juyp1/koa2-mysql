const seq = require('./seq')
require('./model/usermodel')
// 测试链接
seq.authenticate().then(()=>{
    console.log('链接成功')
}).catch(()=>{
    console.log('链接失败')
})
// 执行同步
seq.sync({force:true}).then(()=>{
    console.log('同步成功')
    process.exit();
})