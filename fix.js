const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
require("dotenv").config();

async function fix() {
  await mongoose.connect(process.env.MONGO_URL);

  const listings = await Listing.find({ "image.filename": "listingimage" });
  console.log("Found listings to fix:", listings.length);

  for (let listing of listings) {
    let url = listing.image.url;
    let parts = url.split("/upload/");
    if (parts.length > 1) {
      let filename = parts[1].replace(/^v\d+\//, "").replace(/\.[^/.]+$/, "");
      listing.image.filename = filename;
      await listing.save();
      console.log("Fixed:", listing.title, "->", filename);
    }
  }

  console.log("All done!");
  mongoose.connection.close();
}

fix();