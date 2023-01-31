// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $( ".saveBtn" ).click(function() {
    alert( "Handler for .click() called." );
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  $(".time-block").each(function() {
    let currentHour = new Date().getHours() // Get the hour (0-23)
    //get hour (9-17) from the id
    var timeBlock = $(this).attr('id').split("-")[1];

    if(currentHour == timeBlock) {
      $(this).addClass("present");
    } else if (currentHour > timeBlock) {
      $(this).removeClass("future");
      $(this).addClass("past");
    } else if (currentHour < timeBlock) {
      $(this).removeClass("present");
      $(this).addClass("future");
    }
  });
  

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  // TODO: Add code to display the current date in the header of the page.
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let todaysDate = `${month}-${day}-${year}`;
  let displayDate = document.getElementById("currentDay");
  displayDate.innerHTML = todaysDate;
});
