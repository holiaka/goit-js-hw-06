// Task 5
console.log("\n\n TASK #5 \n");

const inputNameTextRef = document.querySelector("#name-input");
const outputNameTextef = document.querySelector("#name-output");

const onTypedInputText = (evt) => {
  outputNameTextef.textContent = evt.currentTarget.value.length
    ? evt.currentTarget.value
    : "Anonymous";
};

inputNameTextRef.addEventListener("input", onTypedInputText);

outputNameTextef.style.color = "darkblue";
