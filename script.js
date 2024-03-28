const count = document.getElementById("count");
const incrementButton = document.getElementById("increment-button");

let counter = 0;

incrementButton.addEventListener("click", () => {
  counter++;
  count.innerText = counter;
});
