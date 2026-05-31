const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
    try {
        const { category, search } = req.query;
        let filter = {};
        if (category) filter.category = category;
        if (search) {
            filter.$or = [
                { title: { $regex: search, $options: "i" } },
                { location: { $regex: search, $options: "i" } },
                { country: { $regex: search, $options: "i" } },
            ];
        }
        const allListings = await Listing.find(filter);
        res.render("listings/index", { allListings });
    } catch (err) {
        console.error(err);
        res.send("Something went wrong while fetching listings");
    }
};


module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};


module.exports.showListing = async (req, res) => {
  
        let { id } = req.params;
        const listing = await Listing.findById(id)
        .populate({
            path : "reviews",
        populate : {
            path : "author",
        },
    })
        .populate("owner");
        if(!listing){
            req.flash("error","Listing you requested does not exist");
            return res.redirect("/listings");
        }
        console.log(listing);
        res.render("listings/show", { listing });
};

module.exports.createListing = async(req,res,next)=>{
        let url =req.file.path;
        let filename=req.file.filename;
        const newListing=new Listing(req.body. listing);
        newListing.owner=req.user._id;
        newListing.image = {url,filename};
        await newListing.save();
        req.flash("success","New listing created successfully");
        res.redirect("/listings");
};


module.exports.renderEditForm = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
            req.flash("error","Listing you requested does not exist");
            return res.redirect("/listings");
        }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("upload","upload/w_250");
    res.render("listings/edit", { listing,originalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let updateData = { ...req.body.listing };
  delete updateData.image;

  let listing = await Listing.findByIdAndUpdate(id, updateData, { new: true });

  if (req.file) {
    listing.image = {
      url: req.file.path,
      filename: req.file.filename,
    };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};


module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success","Listing Deleted!");
    res.redirect("/listings");
};

