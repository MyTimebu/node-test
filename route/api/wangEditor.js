const express=require('express')
const upload=require('../../middlewares/upload')
const rount=express.Router()

rount.post('/api/upload',upload.single('file'),(req,res,next)=>{
    res.status(200).json({
        "errno": 0,

         // data 是一个数组，返回若干图片的线上地址
         "data": [
            `/public/uploads/${req.file.filename}` 
          ]
    })
})

module.exports=rount