const express=require('express')
const app=express.Router()
const db=require('../../utils/db')

app
.get('/api/comment',(req,res,next)=>{
    const sql='SELECT * FROM `ali_comment`'
    
    db.query(sql,(err,result)=>{
        if (err) {
            return next(err)
        }
        
        res.status(200).json({
            success:true,
            str:result,
        })
    })
})
module.exports=app

