// JavaScript Document


var hetVliegtuig = document.querySelector(".vliegtuig");
var deButton = document.querySelector(".button1");


deButton.addEventListener("click", ikVlieg);

function ikVlieg() {
	hetVliegtuig.classList.toggle("vliegen");

}

var hetVliegtuig1 = document.querySelector(".vliegtuig1");
var hetVliegtuig = document.querySelector(".vliegtuig");
var deButton2 = document.querySelector(".button2");


deButton2.addEventListener("click", ikVliegtwee);

function ikVliegtwee() {
  hetVliegtuig.classList.toggle("vliegenweg");
	hetVliegtuig1.classList.toggle("vliegentwee");


}
