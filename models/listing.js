const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
title: {
type: String,
required:true,
    },
description: String,
image: {
  url: {
    type: String,
    default: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    set: (v) => v === "" ? "https://images.unsplash.com/photo-1566073771259-6a8506099945" : v,
  },
  filename: {
    type: String,
    default: "listingimage",
  },
},

price: Number,
location: String,
country: String,

reviews:[{
  type:Schema.Types.ObjectId,
  ref:"Review"
}],
owner: {
  type:Schema.Types.ObjectId,
  ref:"User",
},
category: {
  type: String,
enum: ["Trending", "Rooms", "City", "Mountains", "Castles", "Amazing Pool", "Camping", "Farms", "Arctic", "Domes", "Boats"]},

});

listingSchema.post("findOneAndDelete", async(listing)=>{
 if(listing){
    await Review.deleteMany({_id:{$in: listing.reviews} });
  }
});


const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing; 