
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

//define edit route
productRoutes.route('/edit/:id').get(function(req, res){
    const id = req.params.id
    Product.findById(id, function(err, product){
        res.json(product)
    })
})

//define update route
productRoutes.route('/update/:id').post(function(req, res){
    Product.findById(req.params.id, function(err, product){
        if (!product)
            return next(new Error('Could not load Document'))
        else {
            product.productName = req.body.productName
            product.price = req.body.price

            product.save().then(product => {
                res.json('Update complete')
            })
            .catch(err => {
                res.status(400).send('unable to update the database')
            })
        }
    })
})

//define delete | remove | destroy route
productRoutes.route('/delete/:id').get(function(req, res){
    Product.findByIdAndRemove({id : req.params.id}, function(err, product){
        if (err)
            res.json(err)
        else 
            res.json('Sucessfully removed')
    })
})

module.exports = productRoutes




