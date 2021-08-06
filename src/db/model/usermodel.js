
const Sequelize = require('sequelize')
const seq = require('../seq')
const _moment = require('moment')
const Users= seq.define('users', {
    uid:{
        type:Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4 // 或 Sequelize.UUIDV1
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        comment:'注释'
    },
    upass: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING,
    },
    createtime:{
        type:Sequelize.STRING,
        defaultValue: _moment().format("YYYY-MM-DD HH:mm:ss")
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
    Users,
}
