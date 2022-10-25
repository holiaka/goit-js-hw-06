// Task 6
console.log("\n\n TASK #6 \n");

const inputForColectionOfSymbols = document.querySelector("#validation-input");

inputForColectionOfSymbols.addEventListener(
  "blur",
  onDeterminationCorrectNumberOfSymbols
);

function onDeterminationCorrectNumberOfSymbols(evt) {
  if (
    evt.currentTarget.value.length ===
    Number(inputForColectionOfSymbols.dataset.length)
  ) {
    inputForColectionOfSymbols.classList.add("valid");
    inputForColectionOfSymbols.classList.remove("invalid");
  } else {
    inputForColectionOfSymbols.classList.add("invalid");
    inputForColectionOfSymbols.classList.remove("valid");
  }
}
