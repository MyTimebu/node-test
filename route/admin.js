const express=require('express')
const router =express.Router()
const db=require('../utils/db')

router
.get('/admin',(req,res)=>{
    res.render('admin/index.html')
})
.get('/admin/comments',(req,res)=>{
    res.render('admin/comments.html')
})
.get('/admin/categories.html',(req,res)=>{
    res.render('admin/categories.html')
})
.get('/admin/posts.html',(req,res,next)=>{
    const sql='SELECT * FROM `ali_article`;'
    db.query(sql,(err,relust)=>{
        if(err){
          return next(err)
        }
        res.render('admin/posts.html',{list:relust})
    })
    
})
.get('/admin/post-add.html',(req,res)=>{
    const sql='SELECT * FROM `ali_cate`'
    db.query(sql,(err,relust)=>{
        if(err){
          return next(err)
        }
        res.render('admin/post-add.html',{list:relust})
    })
    
})
.get('/admin/users',(req,res,next)=>{
    res.render('admin/users.html')
})
.get('/admin/login',(req,res,next)=>{
    res.render('admin/login.html')
})
.get('/post_add/edit',(req,res,next)=>{
    
    db.query('SELECT * FROM `ali_article` WHERE `article_id`=?',[req.query.id],(err,relust)=>{
        if(err){
          return next(err)
        }
        res.render('admin/post-add_edit.html',{list:relust})
    })
})
module.exports=router