// Task 4
console.log("\n\n TASK #4 \n");

const minusOneButton = document.querySelector(
  'button[data-action="decrement"]'
);
const plusOneButton = document.querySelector('button[data-action="increment"]');
const inputNumber = document.querySelector("#value");

let counterValue = 0;

minusOneButton.addEventListener("click", onMinusButtonClick);
plusOneButton.addEventListener("click", onPlusButtonClick);

function onMinusButtonClick() {
  counterValue -= 1;
  inputNumber.textContent = counterValue;
}

function onPlusButtonClick() {
  counterValue += 1;
  inputNumber.textContent = counterValue;
}
