const express=require('express')
const router=express.Router()
const db=require('../../utils/db')
const md5=require('blueimp-md5')

router
.post('/api/login/send',(req,res,next)=>{

    db.query('select*from `ali_admin` WHERE `admin_email`=?',req.body.email,(err,ret)=>{
        if(err) return next(err)
        
        let con=ret[0]
        
        
        if(!con){
            return res.status(200).json({
                success:false,
                cent:'用户名为注册或用户名错误'
            })
        }
        if(md5(md5(req.body.pwd)) !==con.admin_pwd){
            return res.status(200).json({
                success:false,
                cent:'密码错误或用户名错误'
            })
        }

        req.session.con = con
    
        res.status(200).json({
            success:true,
            cent:'登录成功'
        })
    })
})
.get('/admin/api/del',(req,res,next)=>{
    console.log(123)
    req.session.destroy();
    res.status(200).json({
        success:true
    })
})

module.exports=router