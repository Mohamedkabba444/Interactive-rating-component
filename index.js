const ratings = document.querySelectorAll("li");
const submitButton = document.querySelector(".btn");
const rateDisplay = document.querySelector(".rate");
const ratingState = document.querySelector(".rating_state");
const thankYouState = document.querySelector(".thank_you_state");

submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    ratingState.classList.add("visually-hidden");
    thankYouState.classList.remove("visually-hidden");
})

ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
        const ratingValue = rating.getAttribute("data-rating");
        rateDisplay.innerHTML = ` ${ratingValue} `;
    });
});