const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config();
const User = require("../models/user");

// const user = await User.findById("69c3a272a63fe22a46cbd432");
// console.log(user);

const MONGO_URL = process.env.ATLASDB_URL;

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}



const initDB = async () => {
  await Listing.deleteMany({});

  const user = await User.findOne(); // 👈 get ANY real user
  if (!user) {
    console.log("No user found. Create a user first.");
    return;
  }

  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: user._id,
  }));

  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();

