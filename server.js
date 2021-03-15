const express = require('express')
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

require('./db.js')
require('./routes/transactions')(app)
require('./routes/users')(app)

//app.get('/',function(req,res){res.send('welcome')})
app.listen(5000, () => console.log(`server is running`.yellow.bold))