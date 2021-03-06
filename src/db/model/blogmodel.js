
const Sequelize = require('sequelize')
const seq = require('../seq')
const _moment = require('moment')
const Blogs =  seq.define('blogs', {

    title:{
        type:Sequelize.STRING,
        allowNull: false,
        comment:"文章标题"
    },
    content:{
        type:Sequelize.TEXT,
        allowNull: false,
        comment:"文章内容"
    },
    userid:{
        type:Sequelize.STRING,
        allowNull: false,
        comment:"用户"
    },
    createtime: {
        type: Sequelize.STRING,
        defaultValue: _moment().format("YYYY-MM-DD HH:mm:ss"),
        comment: '创建时间'
    }
}, {
    freezeTableName: true,
    // 不要忘记启用时间戳！
    timestamps: true,
    // 不想要 createdAt
    createdAt: false,

    // 想要 updatedAt 但是希望名称叫做 updateTimestamp
    updatedAt: false
})

module.exports = {
    Blogs,
}
