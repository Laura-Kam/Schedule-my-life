//time display created with moment.js
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

var savedEventLocalStorage;
var saveBtns = document.querySelector(".saveBtn");

//ensuring saved event persists by getting Item (stored)

$("#hour-12 .calendarInfo").val(localStorage.getItem("hour-12"));

$("#hour-9 .calendarInfo").val(localStorage.getItem("hour-9"));

$("#hour-10 .calendarInfo").val(localStorage.getItem("hour-10"));

$("#hour-11 .calendarInfo").val(localStorage.getItem("hour-11"));

$("#hour-1 .calendarInfo").val(localStorage.getItem("hour-1"));

$("#hour-2 .calendarInfo").val(localStorage.getItem("hour-2"));

$("#hour-3 .calendarInfo").val(localStorage.getItem("hour-3"));

$("#hour-4 .calendarInfo").val(localStorage.getItem("hour-4"));

$("#hour-5 .calendarInfo").val(localStorage.getItem("hour-5"));

//event listener added to save function logging input value.

$(".saveBtn").on("click", handleClick);
//save to local storage and save button.

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
  var timeId = $(this).parent().attr("id");
  localStorage.setItem(timeId, inputValue);
}

//make events colour coded??

var checkTime = function () {
  var hour = $(".hour").text().

checkTime();
