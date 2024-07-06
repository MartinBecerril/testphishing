document.getElementById("learnMoreBtn").addEventListener("click", function() {
    var moreInfoDiv = document.getElementById("moreInfo");
    if (moreInfoDiv.classList.contains("hidden")) {
        moreInfoDiv.classList.remove("hidden");
        this.textContent = "Ocultar información";
    } else {
        moreInfoDiv.classList.add("hidden");
        this.textContent = "Aprende más";
    }
});
