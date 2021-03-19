var express = require('express')
var transactiondata = require('../model/transactionschema')
//  var ObjectId= require('mongoose').Types.ObjectId


module.exports.get = (async function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const transactions = await transactiondata.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }

})

//  module.exports.findbyid = (req,res)=>{  
//     transactiondata.find(id=>{re.params.id==id})
//             res.send(transactiondata)           

// }

module.exports.post = (async function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    try {
        const { text, amount } = req.body;

        const transaction = await transactiondata.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            const messages = Object.values(err.errors).map(val => val.message).join(',');

            return res.status(400).json({
                success: false,
                error: messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }

})

// module.exports.put = (req,res)=>{
//  let  updateindex= transactiondata.findIndex(id==req.bod.id)
//  transactiondata[updateindex]=req.body
//     }     


module.exports.delete = (async function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    try {
        const transaction = await transactiondata.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'No transaction found'
            });
        }

        await transaction.remove();

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (err) {
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });

    }
})