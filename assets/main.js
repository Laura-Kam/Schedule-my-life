//time display created with moment.js
var today = moment();
$("#currentDay").text(today.format("MMM Do YYYY"));

var savedEventLocalStorage;
var saveBtns = document.querySelector(".saveBtn");

//ensuring saved event persists by getting Item (stored)

$("#hour-9 .calendarInfo").val(localStorage.getItem("hour-9"));

$("#hour-10 .calendarInfo").val(localStorage.getItem("hour-10"));

$("#hour-11 .calendarInfo").val(localStorage.getItem("hour-11"));

$("#hour-12 .calendarInfo").val(localStorage.getItem("hour-12"));

$("#hour-13 .calendarInfo").val(localStorage.getItem("hour-13"));

$("#hour-14 .calendarInfo").val(localStorage.getItem("hour-14"));

$("#hour-15 .calendarInfo").val(localStorage.getItem("hour-15"));

$("#hour-16 .calendarInfo").val(localStorage.getItem("hour-16"));

$("#hour-17 .calendarInfo").val(localStorage.getItem("hour-17"));

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

//different colours for past, present and events.

function checkTime() {
  var currentHour = moment().hours();
  $(".time-block").each(function () {
    var timeBlockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log(timeBlockHour);
    if (timeBlockHour < currentHour) {
      $(this).addClass("past");
    } else if (timeBlockHour === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
}

checkTime();
