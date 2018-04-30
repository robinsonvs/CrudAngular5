const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    productName : {
        type : String
    },
    price : {
        type : Number
    }
},{
    collection : 'products'
});

modulo.exports = mongoose.model('Product', Product)