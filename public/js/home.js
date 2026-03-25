const exploreBtn = document.getElementById("redirectBtn");

// Only attach the listener if the button is actually found in the DOM
if (exploreBtn) {
  exploreBtn.addEventListener("click", (e) => {
    console.log("Redirecting to stayFinder Listings...");
  });
}
