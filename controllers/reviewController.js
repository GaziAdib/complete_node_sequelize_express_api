
var db = require('../models');
const Review = db.reviews

// function to add data Reviews in API

var addReview = async (req, res) => {

    let info = {
        rating: req.body.rating,
        description: req.body.description
    }

    let review = await Review.create(info);
    res.send(review)
    console.log(review);
    
}

// getAllReviews
var getAllReviews = async (req, res) => {

    let reviews = await Review.findAll({})
    res.status(200).send(reviews)

}


module.exports = {
    addReview,
    getAllReviews
}