// 1. Import cloudinary (the main object)
const cloudinary = require("cloudinary");

// 2. Import CloudinaryStorage using destructuring
const CloudinaryStorage = require("multer-storage-cloudinary");

// 3. Configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECERT,
});

// 4. Create the storage engine (this line will now work)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "stayFinder",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

module.exports = {
  cloudinary,
  storage,
};
