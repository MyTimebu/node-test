const mysql=require('mysql')
const conn=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'root',
    database:'alishow'
})

module.exports=conn