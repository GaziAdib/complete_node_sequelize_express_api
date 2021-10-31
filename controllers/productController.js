var db = require('../models');

const Product = db.products
const Review = db.reviews


// function to add data Product in API

var addProduct = async (req, res) => {

    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ?req.body.published: false
    }

    let product = await Product.create(info);
    res.send(product)
    console.log(product);
    
}

// function to get All Data Product From Api

var getAllProducts = async (req, res) => {

    // let products = await Product.findAll({ attributes: [
    //     'title',
    //     'price',
    //     'description'
    // ] })
    let products = await Product.findAll({})
    res.status(200).send(products)

}

// function to get single Data Product From Api

var getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id:id }})
    res.status(200).send(product)

}



// function to update one product by id

var updateProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.update(req.body, { where: { id:id }})
    res.status(200).send(product)
    
}


// function to delete one product by id

var deleteProduct = async (req, res) => {

    let id = req.params.id;
     await Product.destroy({ where: { id:id }} )
    res.status(200).send('Product deleted successfully!')
    
}


// function to get published product


var getPublishedProduct = async (req, res) => {

    let product = await Product.findAll({ where : { published: true } })
    res.status(200).send(product)

}






// get Reviews of each product


// var getReviewsOfEachProduct =  (req, res) => {

//     Review.findAll({
//         include:[{
//             model: Product,
//             as: 'product'
//         }],
//         where : {id : 1}
//     }).then(data =>{
//         res.send(data)
//     }).catch(err => {
//         res.status(404).send({ message: err.message })
//     })

    //res.status(200).send(data);

//}


// all product reviews

var getProductReviews = async (req, res) => {

   const data = await Product.findAll({
        include:[{
            model: Review,
            as: 'review'
        }],
        where : {id : 1}
    })

    res.status(200).send(data);

}





module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReviews
}






























// const db = require('../models')

// const Product = db.products
// const Review = db.reviews

// // create new Product

// exports.createProduct = (req, res) => {
//     const product = {
//         title: req.body.title,
//         price: req.body.price,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false
//     }

//     Product.create(product).then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.status(500).send({
//             message : err.message || 'error while creating product'
//         })
//     })

//     const review = {
//         rating: req.body.rating,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false,
//         productId: Product.id
               
//        }

//     Review.create(review).then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.status(500).send({
//             message : err.message || 'error while creating review'
//         })
//     })   
    
// }


// // create a review for a product id

// // // create new Product

// // exports.createReview = (req, res) => {
// //     const review = {
// //         rating: req.body.rating,
// //         description: req.body.description,
// //         published: req.body.published ? req.body.published : false
       
// //     }

// //     Review.create(review).then(data => {
// //         res.send(data)
// //     })
// //     .catch(err => {
// //         res.status(500).send({
// //             message : err.message || 'error while creating review'
// //         })
// //     })
    
// // }


// // get all products

// exports.getAllProducts = (req, res) => {

//     Product.findAll({}).then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.status(500).send({ message: err.message || 'error while getting products info' })
//     })

// }



// // get all reviews of products

// exports.getAllReviews = (req, res) => {

//     Review.findAll({}).then(data => {
//         res.send(data)
//     })
//     .catch(err => {
//         res.status(500).send({ message: err.message || 'error while getting reviews info' })
//     })

// }
