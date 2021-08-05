const {Blogs} = require('../db/model/blogmodel')
const {Users} = require('../db/model/usermodel')
const uuid = require('uuid')

async function getBlogsList(username, pageIndex = 1, pageSize = 10) {
    Blogs.belongsTo(Users, { foreignKey: 'userid', targetKey: 'uid' }) //

    const result = await Blogs.findAndCountAll({
        limit: pageSize,
        offset: pageSize * pageIndex,
        order: [
            ['id', 'desc']
        ],
        include:[{
            model:Users,
            attributes:['username','nickname'],

        }]

    })
    console.log('row.dataValues',row.dataValues)
    let blogList = result.rows.map(row=>row.dataValues)
    return {
        count:result.count,
        blogList
    }
}
module.exports ={
    getBlogsList
}
