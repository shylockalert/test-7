// script.js
function toggleReadMore() {
    const moreText = document.querySelector(".more-text");
    const readMoreBtn = document.querySelector(".read-more-btn");

    if (moreText.style.display === "none" || moreText.style.display === "") {
        moreText.style.display = "inline";
        readMoreBtn.textContent = "Read Less";
    } else {
        moreText.style.display = "none";
        readMoreBtn.textContent = "Read More";
    }
}
