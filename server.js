const express = require('express')
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
var cors = require('cors')

dotenv.config({ path: './config/config.env' });
const app = express()
app.use(cors())
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies
app.key = process.env.MASTERKEY

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}


require('./db.js')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

require('./routes/transactions')(app)
require('./routes/users')(app)



const PORT = process.env.PORT || 5000;
//app.get('/',function(req,res){res.send('welcome')})
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
