// Task 7
console.log("\n\n TASK #7 \n");

const fontSizeScale = document.querySelector("#font-size-control");
const differentSizeText = document.querySelector("#text");

fontSizeScale.addEventListener("input", changeSizeText);

function changeSizeText(evt) {
  differentSizeText.style.fontSize = `${evt.currentTarget.value}px`;
}
