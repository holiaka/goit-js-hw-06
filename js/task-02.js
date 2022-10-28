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

// First version before mentor review

const elementColection = [];
for (const ingredient of ingredients) {
  const newListElement = document.createElement("li");
  newListElement.textContent = ingredient;
  newListElement.classList.add("item");
  elementColection.push(newListElement);
}

const workingList = document.querySelector("#ingredients");
workingList.append(...elementColection);





// Second version after mentor review

const newElement = document.createElement("li");
newElement.classList.add("item");
const elementList = ingredients.map(el => addText(el));
console.log(elementList)

function addText(text) {
  newElement.textContent = text;
  return newElement;
}

const workingList2 = document.querySelector("#ingredients");
workingList2.append(...elementList)
