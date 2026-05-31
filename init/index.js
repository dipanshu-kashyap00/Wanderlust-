const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

//conncting to databse 
main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
})
//till here

//connceted to mongo db URL to use it 
async function main() {
    await mongoose.connect(MONGO_URL);
}
//till here

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
    ...obj,owner:"6a1c12b610ab83d2c9812e22"
}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};
initDB();