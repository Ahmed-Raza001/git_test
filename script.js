/*let a = 10;
a = 5;

console.log(a);

let b = 7 * a;
console.log(b);*/

/*const max = 57;
const actual = max - 13;
const percentage = actual / max;*/

/*console.log(percentage);

let x = 5;
x += 10;

console.log (x);*/

/*function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
}

console.log(favoriteAnimal('Cat'))*/

/*const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);*/

/*function myFunction() {
    alert("hello");
  }
  
  myFunction();*/
  // calls the function once
  
/*const myArray = ["I", "love", "chocolate", "frogs"];
const madeAString = myArray.join(" ");
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);
// returns 'I,love,chocolate,frogs'*/


/*let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage();*/

 // Function 1: Simple greeting
 /*function sayHello() {
    console.log("Hello there!");
  }

  // Function 2: Favorite animal
  function favoriteAnimal(animal) {
    return animal + " is my favorite animal!";
  }

  // Function 3: Add two numbers
  function addNumbers(a, b) {
    return a + b;
  }

  // Call the functions
  sayHello();
  console.log(favoriteAnimal("Cat"));
  console.log(addNumbers(5, 5));*/

  // Function 1: add7 - returns the number + 7
/*function add7(num) {
    return num + 7;
  }
  console.log(add7(5)); // Output: 12
  
  // Function 2: multiply - returns the product of two numbers
  function multiply(a, b) {
    return a * b;
  }
  console.log(multiply(3, 4)); // Output: 12
  
  // Function 3: capitalize - capitalizes the first letter of the string
  function capitalize(str) {
    if (str.length === 0) return "";
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
  console.log(capitalize("hello"));     // Output: "Hello"
  console.log(capitalize("HELLO"));     // Output: "Hello"
  console.log(capitalize("hELlo"));     // Output: "Hello"
  
  // Function 4: lastLetter - returns the last letter of the string
  function lastLetter(str) {
    return str[str.length - 1];
  }
  console.log(lastLetter("abcd")); // Output: "d"*/



// creates a new div referenced in the variable 'div'
/*const div = document.createElement("div");

// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");
console.log("Starting execution...");*/

const container = document.querySelector("#container");

const ptag = document.createElement("p");
ptag.textContent = "Hey I'm red!";
ptag.style.color = "red";
container.appendChild(ptag);

const h1tag = document.createElement("h1");
h1tag.textContent = "I'm a blue h3!";
h1tag.style.color = "blue";
container.appendChild(h1tag);

const content = document.createElement("div");
content.style.backgroundColor = "pink";
content.style.border = "2px solid black";

const h2tag = document.createElement("h2");
h2tag.textContent = "I'm in a div!";
const p2tag = document.createElement("p");
p2tag.textContent = "ME TOO!";


container.appendChild(content);
container.appendChild(h2tag);
container.appendChild(p2tag);