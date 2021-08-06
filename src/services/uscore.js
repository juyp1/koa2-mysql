const {Uscore} = require('../db/model/uscoremodel')
const {Users} = require('../db/model/usermodel')

// 记录积分
async function createScore({scorenum, uid, describe}) {
    const result = Uscore.create({
        scorenum,
        uid,
        describe
    })
    const data = result.dataValues


    return data;
}

async function scoreList(username, pageIndex=0,pageSize=10 ) {
    Uscore.belongsTo(Users, {foreignKey: 'uid', targetKey: 'uid'}) //
    const result = await Uscore.findAndCountAll({
        limit: parseInt(pageSize.toString()), // 每页多少条
        offset: (pageIndex - 1) * parseInt(pageSize.toString()), // 跳过多少条
        order: [['id', 'desc']],
        attributes:['scoreid','scorenum','describe'],
        include: [
            {
                model: Users,
                attributes: ['username', 'nickname'],
                where: {
                    username
                },
            }
        ],
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

module.exports = {
    scoreList,
    createScore
}
