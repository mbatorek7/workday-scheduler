$(document).ready(function () {
  //reset schedule and clear local storage
  $("#clearScheduleBtn").click(function() {
    //clear local storage
    localStorage.clear();
    //reset all textarea back to the placeholder
    $("textarea").val("Add item here....");
  });

  //save the time and value of user input to local storage when save btn is pressed
  $( ".saveBtn" ).click(function() {
    //get hour (9-17) from the id
    var timeSlot = $(this).parent().attr("id").split("-")[1];
    //get user's schedule item
    var userInput = $(this).siblings(".description").val();
    //add item to local storage
    localStorage.setItem(timeSlot, userInput);
  });

  //change the color of the timeBlock based on the current hour
  $(".time-block").each(function() {
    let currentHour = new Date().getHours(); // Get the hour (0-23)
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
  
  //obtain previous data from local storage
  $("#hour-9 .description").val(localStorage.getItem("9"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));

  // display the current date and time in the header of the page.
  updateClock();
});

function updateClock () {
  var todaysDate = dayjs();
  $("#currentDay").text(todaysDate.format('MMM D, YYYY h:mm:ss a'));

  // call this function again in 1000ms to update time 
  setTimeout(updateClock, 1000);
}
