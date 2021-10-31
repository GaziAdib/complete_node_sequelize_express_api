const productController = require('../controllers/productController.js')
const reviewController = require('../controllers/reviewController.js');

var router = require('express').Router()

router.post('/create', productController.addProduct);

router.get('/allReviews', reviewController.getAllReviews)

// review in each product
router.get('/getProductReview', productController.getProductReviews);

router.get('/allProducts', productController.getAllProducts);

router.get('/published', productController.getPublishedProduct);

router.get('/:id', productController.getOneProduct);

router.put('/:id', productController.updateProduct);

router.delete('/:id', productController.deleteProduct);

// review create
router.post('/addReview', reviewController.addReview);




module.exports = router