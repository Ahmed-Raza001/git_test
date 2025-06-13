/*const btn = document.querySelector("#btn");
btn.onclick = () => alert("this is Ahmed's page");*/

/*const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});*/

/*function alertFunction() {
  alert("YAY! YOU DID IT!");
}*/

/*function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2
btn.onclick = alertFunction;

// METHOD 3
btn.addEventListener("click", alertFunction);*/

/*btn.addEventListener("click", function (e) {
  console.log(e.target);
});*/

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});
