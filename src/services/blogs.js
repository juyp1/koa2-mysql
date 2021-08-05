const {Blogs} = require('../db/model/blogmodel')
const {Users} = require('../db/model/usermodel')
const uuid = require('uuid')

// 分页
async function getBlogsList(username, pageIndex = 0, pageSize = 10) {
    Blogs.belongsTo(Users, {foreignKey: 'userid', targetKey: 'uid'}) //
    const result = await Blogs.findAndCountAll({
        limit: pageSize, // 每页多少条
        offset: (pageIndex - 1) * pageSize, // 跳过多少条
        order: [
            ['id', 'desc']
        ],
        include: [{
            model: Users,
            attributes: ['username', 'nickname'],

        }],
        subQuery: false   //不让在子查询分页
    })

    let dataresult = result.rows.map(row => row.dataValues)
    dataresult.map(item => {
        item.username = item.user.username
        item.nickname = item.user.nickname
    })
    return {
        count: result.count,
        List: dataresult
    }
}

// 新增
async function createBlog(title, content, userid) {
    const result = await Blogs.create({
        title,
        content,
        userid
    })
    const data = result.dataValues
    return data;
}

module.exports = {
    createBlog,
    getBlogsList
}
