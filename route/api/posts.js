const express=require('express')
const db=require('../../utils/db')
const router=express.Router()
const moment=require('moment')

router
.get('/posts/tem',(req,res,next)=>{
    let sql='SELECT aa.article_title, aa.article_id, ad.admin_nickname, ac.cate_name, aa.article_addtime, aa.article_status FROM `ali_article` aa INNER JOIN `ali_cate` ac ON aa.article_cateid=ac.cate_id INNER JOIN `ali_admin` ad ON aa.article_adminid=ad.admin_id'
    db.query(sql,(err,ret)=>{
        if (err) {
            return next(err)
        }
        ret.article_addtime=moment(ret.article_addtime).format("YYYY-MM-DD HH:mm")
    
        res.status(200).json({
            success:true,
            list:ret
        })
    })
})
.get('/posts/add/edit/C',(req,res,next)=>{
    let sql='SELECT * FROM `ali_cate`'
    db.query(sql,(err,ret)=>{
        if(err)return next(err)
        console.log(ret)
        res.status(200).json({
            success:true,
            list:ret
        })
    })
})
module.exports=router