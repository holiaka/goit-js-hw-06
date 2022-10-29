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
  newListElement.classList.add("item");
  newListElement.textContent = ingredient;  
  elementColection.push(newListElement);
  console.log(elementColection);
}

const workingList = document.querySelector("#ingredients");
workingList.append(...elementColection);





// Second version after mentor review

const elementList = ingredients.map(el => {
  const newElement = document.createElement("li");
  newElement.classList.add("item");
  newElement.textContent = el;
  return newElement;
});
console.log(elementList)

const workingList2 = document.querySelector("#ingredients2");
workingList2.append(...elementList)
