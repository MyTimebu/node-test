const express=require('express')
const router =express.Router()
const db=require('../utils/db')

router
.get('/',(req,res)=>{
    res.render('index.html')
})
.get('/detail',(req,res)=>{
    res.render('detail.html')
})

.get('/list',(req,res)=>{
    res.render('list.html')
})
module.exports=router