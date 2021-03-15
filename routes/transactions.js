

module.exports = (app) => {
    var transactionComtroller = require('../controller/transactionController')
    app.get('/transactions', transactionComtroller.get)
    // app.get('/transaction/:id',transactionComtroller.findbyid)
    app.post('/transactions', transactionComtroller.post)
    // app.put('/transaction/:id',transactionComtroller.put)
    // //app.patch('/postmessage/:id',PostMessageComtroller.)
    app.delete('/transactions/:id', transactionComtroller.delete)
}

