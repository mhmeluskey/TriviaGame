//make timer
//create variable for where the timer will start
var startNumber = 60;
//create variable to store interval of timer
var intervalId;

//document.ready so that the timer will run
$(document).ready(function() {
  console.log("ready!");
//create function that will run the interval
  function run() {
    intervalId = setInterval(decrement, 1000);
} //end of run function

//function that instructs the run function to decrease the interval
function decrement () {
startNumber--;

$("#timer").html("<div> Time Remaining" + startNumber + "</div>");

}; 

run();

}); //document.ready function 