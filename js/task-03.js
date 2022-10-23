// Task 3
console.log("\n\n TASK #3 \n")

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector('.gallery');
// galleryList.style.display = "flex";
// galleryList.style.gap = "10px"

const newItem = document.createElement('li');
const newImage = document.createElement('img');
newImage.setAttribute("url", images[2].url);
newImage.setAttribute("alt", images[2].alt);
newItem.append(newImage);
galleryList.insertAdjacentElement("beforeend", newItem);
console.log(galleryList)