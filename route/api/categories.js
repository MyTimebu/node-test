const express=require('express')
const router=express.Router()
const db=require('../../utils/db')
router.use(express.urlencoded())

router
.get('/api/categories',(req,res,next)=>{
    const sql='SELECT * FROM `ali_cate`'
    
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
.post('/api/t',(req,res,next)=>{
    const sql='insert into `ali_cate` set cate_name=?,cate_slug=?'
    db.query(sql,[req.body.name,req.body.slug],(err,sult)=>{
        if (err) {
           return next(err)
        }
        res.status(200).json({
            success:true,
        }) 
    })
})
.get('/api/dele',(req,res,next)=>{
    db.query('delete from `ali_cate` where cate_id=?',req.query.shu,(err,relust)=>{
        if (err) {
           return next(err)
        }
       res.status(200).json({
           success:true,
       }) 
    })

})
.get('/api/edit',(req,res,next)=>{
    db.query('select * from `ali_cate` where cate_id='+req.query.id,(err,ret)=>{
        if (err) {
            return next(err)            
        }
        res.status(200).json({
            success:true,
            listst:ret[0],
        })
    })
})
.post('/api/editt',(req,res,next)=>{
    let cate_id=req.body.cate_id
    let cate_name=req.body.cate_name
    let cate_slug=req.body.cate_slug
    db.query('UPDATE `ali_cate` SET `cate_name`=?, `cate_slug`=? WHERE `cate_id`=?',[cate_name,cate_slug,cate_id],(err,ret)=>{
        if (err) {
           return next(err)
        }
        res.status(200).json({
            success:true
        })
    })
})
.post('/api/deletes',(req,res,next)=>{
    let sql='delete from `ali_cate` where cate_id in ('+req.body.s+')'
    console.log(req.body.s)
    db.query(sql,(err,set)=>{
        if (err) {
            return next(err)
        }
        res.status(200).json({
            success:true
        })
    })
})
module.exports=router