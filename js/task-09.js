// Task 9
console.log("\n TASK #9 \n");

const bodyRef = document.querySelector("body");
const widgetColorValueRef = document.querySelector(".color");
const changeColorOnBottonClickRef = document.querySelector(".change-color");

changeColorOnBottonClickRef.addEventListener("click", onClickChangeColor);

function onClickChangeColor(evt) {
  const hexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = `${hexColor}`;
  widgetColorValueRef.textContent = `${hexColor}`;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
