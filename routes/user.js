const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controller/user.js");

// --- Signup Routes ---
router
  .route("/signup")
  .get(userController.renderNewFrom) // Render signup form
  .post(saveRedirectUrl, wrapAsync(userController.signup)); // Handle signup logic

// --- Login Routes ---
router
  .route("/login")
  .get(userController.renderLoginFrom) // Render login form
  .post(
    saveRedirectUrl, // Save the URL the user was trying to access
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login // Handle login logic
  );

// --- Logout Route ---
router.get("/logout", userController.logout);

module.exports = router;
