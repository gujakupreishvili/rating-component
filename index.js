const submit_btn = document.querySelector(".submit_btn");
const main = document.getElementsByTagName("main")[0];
const hover_div = document.querySelector(".hover-div");
const rating = document.querySelector(".rating");
const rates = document.querySelectorAll(".btn");
submit_btn.addEventListener("click", () => {
  main.style.display = "none";
  hover_div.style.display = "block";
});
rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
