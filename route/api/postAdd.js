const express=require('express')
const router=express.Router()
const upload=require('../../middlewares/upload')
const db=require('../../utils/db')

router
.post('/postAdd',upload.single('feature'),(req,res,next)=>{
    var body=req.body
    console.log(body)
   db.query(
'INSERT INTO `ali_article` SET `article_title`=?, `article_body`=?, `article_cateid`=?, `article_slug`=?, `article_addtime`=?, `article_status`=?, `article_file`=?, `article_adminid`=?',
   [body.title,
    body.content,
    body.category,
    body.slug,
    body.created,
    body.status,
    `../../public/uploads/${req.file.filename}`,
    req.session.con.admin_id
],
   (err,ret)=>{
       if(err)return next(err)
       res.status(200).json({
           success:true,
           content:'添加成功'
       })
   })
})
.post('/posts/postAdd/edit',upload.single('feature'),(req,res,next)=>{
    var body=req.body
    var {id}=req.query
   db.query(
'UPDATE `ali_article` SET `article_title`=?, `article_body`=?, `article_cateid`=?, `article_slug`=?, `article_addtime`=?, `article_status`=?, `article_file`=?, `article_adminid`=?,`article_id`=?',
   [body.title,
    body.content,
    body.category,
    body.slug,
    body.created,
    body.status,
    `../../public/uploads/${req.file.filename}`,
    req.session.con.admin_id,
    id
],
   (err,ret)=>{
       if(err)return next(err)
       res.status(200).json({
           success:true,
           content:'添加成功'
       })
   })
})
module.exports=router