var express = require('express')
 var transactiondata = require('../model/transactionschema')
//  var ObjectId= require('mongoose').Types.ObjectId
 

module.exports.get=(function(req,res){ 
    // var query = req.query;
    transactiondata.find(function(err,result){
        res.json(result);
    });
  
})

//  module.exports.findbyid = (req,res)=>{  
//     transactiondata.find(id=>{re.params.id==id})
//             res.send(transactiondata)           
     
// }

module.exports.post = (req,res)=>{    
     var newtransaction = new transactiondata(req.body);
     newtransaction.save();
     res.send(newtransaction)
    // res.send(req.body);

}

// module.exports.put = (req,res)=>{
//  let  updateindex= transactiondata.findIndex(id==req.bod.id)
//  transactiondata[updateindex]=req.body
//     }     


module.exports.delete=(req,res)=>
            {
               

                 transactiondata.findById(req.params.id,function(err,result){
                    result.remove(function(err){
                        if (err)
                        res.status(204).send(err);
                        else
                        res.status(205).send('deleted')
                    })
                });
    
            

            }