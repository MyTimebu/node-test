const express=require('express')
const router=express.Router()
const db=require('../../utils/db')
const md5=require('blueimp-md5')


router
.get('/api/users',(req,res,next)=>{
    db.query('SELECT * FROM `ali_admin`',(err,relust)=>{
        if(err){
            return next(err)
        }

        res.status(200).json({
            success:true,
            messages:relust,
        })
    })
})
.post('/api/users/addto',(req,res,next)=>{
    req.body.password=md5(md5(req.body.password))
    db.query('INSERT INTO `ali_admin` SET `admin_email`=?, `admin_nickname`=?, `admin_pwd`=?, `admin_slug`=?',[req.body.email,req.body.nickname,req.body.password,req.body.slug],(err,ret)=>{
        if(err)return next(err)
        res.status(200).json({
            success:true
        })
    })
})
.get('/api/users/check/admin_email',(req,res,next)=>{
    const {email}=req.query
    db.query('SELECT * FROM `ali_admin` WHERE `admin_email`=?',email,(err,reslut)=>{
        if(err)return next(err)
        if(reslut.length===0){
            
            res.send(true)
        }else{
           
            res.send(false)
        }
    })
})
.get('/api/users/del',(req,res,next)=>{
    db.query('delete from `ali_admin` where `admin_id`=?',req.query.admin,(err,ret)=>{
        if(err)return next(err)
        res.status(200).json({
            success:true,
        })
    })
})
module.exports=router