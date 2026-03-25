const Listing = require("../models/listing.js");

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");
    console.log("OWNER DATA:", listing.owner); // 👈 ADD THIS
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing });
};

module.exports.createListing = async (req, res) => {
  // Use 'path' if available, otherwise 'secure_url'
  let url = req.file.path || req.file.secure_url;
  let filename = req.file.filename || req.file.public_id;

  delete req.body.listing.image;

  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;

  // Save as an object to match your model
  newListing.image = { url, filename };

  await newListing.save();
  req.flash("success", "New Listing Created!");
  res.redirect("/listings");
};

module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested does not exist!");
    return res.redirect("/listings");
  }
  res.render("listings/edit.ejs", { listing });
};

module.exports.updateListing = async (req, res) => {
  const { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
    image: {
      url: req.body.listing.image,
      filename: "listing-image",
    },
  });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

module.exports.deleteListing = async (req, res) => {
  const { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted!");
  return res.redirect("/listings");
};

// controller/listing.js

module.exports.searchListing = async (req, res) => {
  const { search, category } = req.query; // Capture both search and filter category
  let allListings;

  if (search) {
    // SCENARIO 1: Search is active
    allListings = await Listing.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } },
        { country: { $regex: search, $options: "i" } },
      ],
    });
  } else if (category) {
    // SCENARIO 2: A Filter/Category icon was clicked
    // This assumes your Listing Schema has a 'category' field
    allListings = await Listing.find({ category: category });
  } else {
    // SCENARIO 3: Show everything (Default)
    allListings = await Listing.find({});
  }

  // Handle "Not Found" for both search and filters
  if (allListings.length === 0) {
    req.flash("error", "No listings found for your request!");
    return res.redirect("/listings");
  }

  res.render("listings/index.ejs", { allListings });
};
