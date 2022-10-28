// Task 10
console.log("\n TASK #10 \n");


// Find collection of HTML elements
const inputNumberOfBlocksRef = document.querySelector("input");
const onClickCreateBlocksRef = document.querySelector('button[data-create]');
const onClickRemoveBlocksRef = document.querySelector('button[data-destroy]');
const placeForBoxList = document.querySelector("#boxes");

// Create event listeners
inputNumberOfBlocksRef.addEventListener('input', obtainInputValue);
onClickCreateBlocksRef.addEventListener('click', onClickCreateBlocks);
onClickRemoveBlocksRef.addEventListener('click', onClickRemoveBlocks);

// Create input`s ivent function
let numberOfElements = 0;
function obtainInputValue(evt) {
  numberOfElements = evt.currentTarget.value;
}

// Create func. for box`s elements
function onClickCreateBlocks() {
  (numberOfElements === 0 || numberOfElements < 0) ? alert("Must be more '0'") : createBoxes(numberOfElements);  
}

placeForBoxList.style.display = 'flex';
placeForBoxList.style.gap = '15px';
placeForBoxList.style.flexWrap = "wrap";

let size = 30;
function createBoxes(amount) {
  let html = [];  
  for (let i = 0; i < amount; i++) {
    let code = `<div style="height: ${size}px; width: ${size}px; background-color: ${getRandomHexColor()}"></div>`;
    size += 10;
    html.push(code)
  }
  placeForBoxList.insertAdjacentHTML("beforeend", html.join(""));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Remove func. for box`s elements
function onClickRemoveBlocks() {
  (placeForBoxList.innerHTML.length === 0) ? alert("At this time, HTML box(es) is not indentified") : destroyBoxes();  
}

function destroyBoxes() {
  size = 30;
  placeForBoxList.innerHTML = "";
}

