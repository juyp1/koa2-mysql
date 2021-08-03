
const Sequelize = require('sequelize')
const seq = require('../seq')

const blogs =  seq.define('users', {
    uid:{
        type:Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4 // 或 Sequelize.UUIDV1
    },
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
    }
})