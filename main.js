let counter = document.querySelector(".counter");
const counterMinus = document.querySelector(".counter-negative");
const counterPlus = document.querySelector(".counter-positive");

let count = 0;

const updateCounter = () => {
  counter.textContent = count;
};

counterPlus.addEventListener("click", () => {
  count++;
  updateCounter();
});

counterMinus.addEventListener("click", () => {
  count--;
  updateCounter();
});
