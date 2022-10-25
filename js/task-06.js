// Task 6
console.log("\n\n TASK #6 \n");

// Find HTML element
const inputForColectionOfSymbolsRef = document.querySelector("#validation-input");

// Create event listener
inputForColectionOfSymbolsRef.addEventListener(
  "blur",
  onDeterminationCorrectNumberOfSymbols
);

function onDeterminationCorrectNumberOfSymbols(evt) {
  if (
    evt.currentTarget.value.length ===
    Number(inputForColectionOfSymbolsRef.dataset.length)
  ) {
    inputForColectionOfSymbolsRef.classList.add("valid");
    inputForColectionOfSymbolsRef.classList.remove("invalid");
  } else {
    inputForColectionOfSymbolsRef.classList.add("invalid");
    inputForColectionOfSymbolsRef.classList.remove("valid");
  }
}
