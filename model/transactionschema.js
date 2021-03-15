var express = require('express');
var mongoose = require('mongoose');
require('mongoose-double')(mongoose);


var transactionschema = mongoose.Schema(
    {

        user_name: { type: String, required: [true, "please add name"] },
        amount: { type: Number, required: [true, "please enter amount"] },
        description: { type: String },
        date: {
            type: Date, default: Date.now
        }
    }
);

var transactions = mongoose.model('transactions', transactionschema);
module.exports = transactions