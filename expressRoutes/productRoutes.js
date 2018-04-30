const express = require('express')
const app = express()
const productRoutes = express.Router()

//require Item model in our routes module
const Product = require('../models/Product')

//define store routen
productRoutes.route('/add').post(function(req, res){
     const product = new Product(req.body)
     product.save()
     .then(item => {
        res.status(200).json({'product': 'Product added sucessfully'})
     })
     .catch(err => {
         res.status(400).send('Unable to save to database')
     })
})

//define get data (index or listing) route
productRoutes.route('/').get(function(req, res){
    const id = req.params.id
    Product.findById(id, function(err, product){
        res.json(product)
    })
})


