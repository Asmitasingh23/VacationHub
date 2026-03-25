let taxSwitch = document.getElementById("switchCheckDefault");

// Check if the element exists on the current page
if (taxSwitch) {
  taxSwitch.addEventListener("click", () => {
    let taxInfo = document.getElementsByClassName("tax-info");
    let basePrice = document.getElementsByClassName("base-price");

    for (let info of taxInfo) {
      info.style.display = info.style.display !== "inline" ? "inline" : "none";
    }
    for (let base of basePrice) {
      base.style.display = base.style.display !== "none" ? "none" : "inline";
    }
  });
}
