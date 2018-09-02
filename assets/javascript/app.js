//make timer
//create variable for where the timer will start
var startNumber = 60;
//create variable to store interval of timer
var intervalId;

//document.ready so that the timer will run
$(document).ready(function () {
  console.log("ready!");
  //create function that will run the interval
  function run() {
    intervalId = setInterval(decrement, 1000);
  }; //end of run function

  function stop() {
    clearInterval(intervalId);
  }; //end of stop function

  //function that instructs the run function to decrease the interval
  function decrement() {
    startNumber--;

    $("#timer").html("<div> Time Remaining " + startNumber + "</div>");
    if (startNumber === 0) {
      $("#timer").html("<div> TIME IS UP!</div>");
      stop();
    } //end of if statement

  }; //end of decrement function 

  run();


  function checkbox() {
    if(document.getElementById('button').clicked == true) {
      $()

    }
  }






}); //document.ready function 