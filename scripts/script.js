// JavaScript Document


var hetVliegtuig = document.querySelector(".vliegtuig");
var deButton = document.querySelector("button");


deButton.addEventListener("click", ikVlieg);

function ikVlieg() {
	hetVliegtuig.classList.toggle("vliegen");
}
