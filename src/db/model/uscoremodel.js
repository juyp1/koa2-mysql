const Sequelize = require('sequelize')
const seq = require('../seq')
const _moment = require('moment')
const Uscore = seq.define('uscore', {
    scoreid: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4, // 或 Sequelize.UUIDV1
        allowNull: false,
    },
    scorenum: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: '积分'
    },
    uid: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '用户id'
    },
    describe: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: '积分描述'
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
    Uscore
}
