// Task 7
console.log("\n\n TASK #7 \n");

// Find collection of HTML elements
const fontSizeScaleRef = document.querySelector("#font-size-control");
const differentSizeTextRef = document.querySelector("#text");

// Create event listener
fontSizeScaleRef.addEventListener("input", changeSizeText);

function changeSizeText(evt) {
  differentSizeTextRef.style.fontSize = `${evt.currentTarget.value}px`;
}
