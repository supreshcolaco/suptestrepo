const express = require('express')


module.exports = (app) => {
    var transactionComtroller = require('../controller/transactionController')

    const gateKey = (req, res, next) => {
        if (req.headers['trans-key'] !== app.key) {
            return res.status(404).json({
                success: false,
                error: 'Enter correct secret key'
            })
        } else {
            next()
        }

    }


    app.get('/transactions', transactionComtroller.get)
    // app.get('/transaction/:id',transactionComtroller.findbyid)

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static('client/build'));

        app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
    }
    app.use(gateKey)
    app.post('/transactions', transactionComtroller.post)
    // app.put('/transaction/:id',transactionComtroller.put)
    // //app.patch('/postmessage/:id',PostMessageComtroller.)
    app.delete('/transactions/:id', transactionComtroller.delete)
}

