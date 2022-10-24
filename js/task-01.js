// Task 1
console.log("TASK #1 \n");

const numberOfCategories =
  document.querySelector("#categories").children.length;

const listOfCategories = document.querySelectorAll(".item h2");
const numberOfObj = document.querySelectorAll(".item ul");

console.log(`Number of categories: ${numberOfCategories}`);
for (let i = 0; i < listOfCategories.length; i++) {
  console.log(
    `Category: ${listOfCategories[i].textContent}\nElements: ${numberOfObj[i].children.length}`
  );
}
