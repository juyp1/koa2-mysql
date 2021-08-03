const {set,get} = require('./_redis')
const uuid = require('uuid')
set('token',uuid.v4())
get('token').then(res=>{
    console.log('res',res)
})