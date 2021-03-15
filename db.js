const mongoose = require('mongoose')

// const url = `mongodb+srv://admin:adminadmin@cluster0.sffyv.mongodb.net/test/income-expense-tracker`;

const url = `mongodb+srv://admin:adminadmin@cluster0.sffyv.mongodb.net/income-expense-tracker?retryWrites=true&w=majority`
// const url =mongodb+srv://admin:adminadmin@cluster0.sffyv.mongodb.net/income-expense-tracker?retryWrites=true&w=majority`
const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })