

module.exports =(app)=>{
    var transactionComtroller= require('../controller/transactionController')
     app.get('/transaction',transactionComtroller.get)
    // app.get('/transaction/:id',transactionComtroller.findbyid)
     app.post('/transaction',transactionComtroller.post)
    // app.put('/transaction/:id',transactionComtroller.put)
    // //app.patch('/postmessage/:id',PostMessageComtroller.)
    app.delete('/transaction/:id',transactionComtroller.delete)
}

