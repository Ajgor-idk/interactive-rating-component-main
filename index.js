const querySelectAll = (elem) => document.querySelectorAll(elem);
const querySelect = (elem) => document.querySelector(elem);

const rateBtn = querySelectAll(".rate-btn");
const submit = querySelect(".submit-btn");
const selectedRating = querySelect("#selected-rating");
const welcomePage = querySelect(".welcome-page");
const thankYouPage = querySelect(".thank-you-page");

rateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedRating.innerText = btn.value;
  });
});

submit.addEventListener("click", () => {
  welcomePage.style.display = "none";
  thankYouPage.style.display = "flex";
});
