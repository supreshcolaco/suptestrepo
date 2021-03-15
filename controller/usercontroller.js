var express = require('express')
var userndata = require('../model/userschema')
//  var ObjectId= require('mongoose').Types.ObjectId


module.exports.get=(function(req,res){ 
   // var query = req.query;
   userndata.find(function(err,result){
       res.json(result);
   });
 
})

module.exports.post = (req,res)=>{    
    var newuser = new userndata(req.body);
    newuser.save();
    res.send(newuser)
   // res.send(req.body);

}