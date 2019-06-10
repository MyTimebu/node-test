const express=require('express');
const app=express()
const errorhandler=require('errorhandler')
const session=require('express-session')
const MySQLStore = require('express-mysql-session')
const panduan=require('./middlewares/panduan')

const indexRouter=require('./route/index')
const adminRouter=require('./route/admin')
const categories=require('./route/api/categories')
const commentsa=require('./route/api/comments')
const confing=require('./config')
const usersRouter=require('./route/api/users')
const loginRouter=require('./route/api/longin')
const postAddRouter=require('./route/api/postAdd')
const wangRount=require('./route/api/wangEditor')
const postsRouter=require('./route/api/posts')

const path=require('path')
app.engine('html',require('express-art-template'))

app.use('/public',express.static(path.join(__dirname,'./public')))
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules')))

app.use(session({
    secret: 'keyboard cat',  
    resave: false,              
    saveUninitialized:true,
    store: new MySQLStore(confing.db)
}))
app.use('/admin',panduan,(req,res,next)=>{
    app.locals.sessionUser=req.session.con
    next()
});


app.use(indexRouter)
app.use(adminRouter)
app.use(categories)
app.use(commentsa)
app.use(usersRouter)
app.use(loginRouter)
app.use(postAddRouter)
app.use(wangRount)
app.use(postsRouter)

if (confing.dev) {
    errorhandler()
}else{
    app.use((err,req,res,next)=>{
        res.status(500).send('错误')
    })
}

app.listen(4399,()=>{console.log('卍')})