var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Product = new Schema({
    productName : {
        type : String
    },
    price : {
        type : Number
    }
},{
    collection : 'products'
});

modulo.exports = mongoose.model('Product', Product);