var express= require('express');
var mongoose=require('mongoose');



var userschema= mongoose.Schema(
    {
        userid:{type:Number},
        name :{type:String,required:[true,"please add name"]},
       
         
    }
);

var user =mongoose.model('users',userschema);
module.exports=user