

module.exports = (app) => {
    var transactionComtroller = require('../controller/transactionController')
    
    const gateKey = (req,res,next)=>{       
            if (req.headers['trans-key'] !==app.key ) {
                return res.status(404).json({
                    success: false,
                    error: 'Enter correct secret key'})
            } else {
              next()
            }
    
        }
  
    
    app.get('/transactions', transactionComtroller.get)
    // app.get('/transaction/:id',transactionComtroller.findbyid)
    app.use(gateKey)
    app.post('/transactions', transactionComtroller.post)
    // app.put('/transaction/:id',transactionComtroller.put)
    // //app.patch('/postmessage/:id',PostMessageComtroller.)
    app.delete('/transactions/:id', transactionComtroller.delete)
}

