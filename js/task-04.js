let counterValue = 0;

const counter = document.querySelector("#counter");

counter.querySelector("button[data-action='decrement']").addEventListener("click", () => {
  counterValue--;
  updateCounter();
});

counter.querySelector("button[data-action='increment']").addEventListener("click", () => {
  counterValue++;
  updateCounter();
});

function updateCounter() {
  counter.querySelector("#value").textContent = counterValue;
}