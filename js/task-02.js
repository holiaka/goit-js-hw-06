// Task 2
console.log("\n\n TASK #2 \n");

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const elementColection = [];
for (const ingredient of ingredients) {
  const newListElement = document.createElement("li");
  newListElement.textContent = ingredient;
  newListElement.classList.add("item");
  elementColection.push(newListElement);
}

const workingList = document.querySelector("#ingredients");
workingList.append(...elementColection);
