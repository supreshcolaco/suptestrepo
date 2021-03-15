

module.exports =(app)=>{
    var userController= require('../controller/usercontroller')
     app.get('/user',userController.get)
     app.post('/user',userController.post)


}

