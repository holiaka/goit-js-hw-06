const inputNumberOfBlocksRef = document.querySelector("input");
const onClickCreateBlocksRef = document.querySelector('button[data-create]');
const onClickRemoveBlocksRef = document.querySelector('button[data-destroy]');
const placeForBoxList = document.querySelector("#boxes");

inputNumberOfBlocksRef.addEventListener('input', obtainInputValue);
onClickCreateBlocksRef.addEventListener('click', onClickCreateBlocks);
onClickRemoveBlocksRef.addEventListener('click', onClickRemoveBlocks);

let numberOfElements = 0;

function obtainInputValue(evt) {
  numberOfElements = evt.currentTarget.value;
}

// Create box`s elements
function onClickCreateBlocks() {
  (numberOfElements === 0 || numberOfElements < 0) ? alert("Must be more '0'") : createBoxes(numberOfElements);  
}

placeForBoxList.style.display = 'flex';
placeForBoxList.style.gap = '15px';
placeForBoxList.style.flexWrap = "wrap";

function createBoxes(amount) {
  let html = [];
  let size = 30;
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


// Remove box`s elements
function onClickCreateBlocks() {
  (numberOfElements === 0 || numberOfElements < 0) ? alert("Must be more '0'") : createBoxes(numberOfElements);  
}

destroyBoxes()

