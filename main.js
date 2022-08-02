//time display created with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var savedEventLocalStorage;
var saveBtns = document.querySelectorAll(".saveBtn");

//event listener added to save function logging input value.

saveBtns.forEach((saveBtn) => {
  saveBtn.addEventListener("click", handleClick);
});

function handleClick(event) {
  var El = event.target;
  console.log(El);
  var parentNode = El.parentNode;
  console.log(parentNode);
  var inputField = parentNode.querySelector(".calendarInfo");
  console.log(inputField);
  console.log("button-clicked", event);
  var inputValue = inputField.value;
  console.log(inputValue);
  localStorage.setItem("El", "inputValue");
}

//save to local storage

saveBtns.addEventListener("click", saveToLocalStorage);

var saveToLocalStorage = function () {
  localStorage.setItem("textinput", text.textContent); //or change input to text
};
