const express= require("express");
const router = express.Router({mergeParams:true});
//here we are using mergeParams to access the params of listing in review routes as we are using nested routes for reviews
const wrapAsync=require("../utils/wrapAsync.js");
const ExpressError=require("../utils/Express.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Review route 
//POST
router.post(
    "/",
    isLoggedIn,
    validateReview,
    wrapAsync(reviewController.createReview)
);

//Deleting Review Route
router.delete(
    "/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports=router;