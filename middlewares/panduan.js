module.exports = (req, res, next) => {
  
    if (req.originalUrl === '/admin/login') {
      return next()
    }
  
    const sessionUser = req.session.con
    
    if (!sessionUser) {
      return res.redirect('/admin/login')
    }
    
    next()
  }
  