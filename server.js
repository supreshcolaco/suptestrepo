const express= require('express')
const app = express()
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

require('./db.js')
  require('./routes/transactions')(app)
  require('./routes/users')(app)

app.get('/',function(req,res){res.send('welcome')})
app.listen(4200,()=>console.log("server is running"))