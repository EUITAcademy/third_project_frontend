// import { add, subtract } from './mathUtils.js';
// import * as mathUtils from './mathUtils.js';
import multiply, {add, subtract} from './mathUtils.js';

// console.log(add(5, 3)); 
// console.log(subtract(5, 3));

// console.log(mathUtils.add(5, 3)); 
// console.log(mathUtils.subtract(5, 3)); 

console.log(multiply(5, 3));

// Example 1: Changing the text content of an element
function changeText() {
    document.getElementById("text").innerHTML = "New text content";
  }
  
  // Example 2: Changing the style of an element
function changeStyle() {
    document.getElementById("container").style.backgroundColor = "red";
  }
  
  // Example 3: Adding a class to an element
function addClass() {
    document.getElementById("container").classList.add("highlight");
  }
  
  // Example 4: Removing a class from an element
function removeClass() {
    document.getElementById("container").classList.remove("highlight");
  }
  

// Usage 
const textButton = document.getElementById("textButton");
textButton.addEventListener("click", changeText);


const containerButton = document.getElementById("containerButton");
containerButton.addEventListener("click", changeStyle);

const addHighlightButton = document.getElementById("addHighlightButton");
addHighlightButton.addEventListener("click", addClass);

const removeHighlightButton = document.getElementById("removeHighlightButton");
// removeHighlightButton.addEventListener("click", removeClass);
removeHighlightButton.addEventListener("click", () => {
  document.getElementById("container").classList.remove("highlight");
});



