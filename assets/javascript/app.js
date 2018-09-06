//make timer
//create variable for where the timer will start
var startNumber = 60;
//create variable to store interval of timer
var intervalId;
//end of timer variables


var answer = new Array(2);
var correct = 0;
var wrong = 0;




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
  //end of timer function




  answer[0] = "1955"
  answer[1] = "Jupiter"

$("#submit").on("click", function() {
  console.log("submitted");


 

  console.log("Correct: " + correct);
  console.log("Wrong: " + wrong);

  // window.location.href='./results.html';
});




  // function test(form) {
    
    // for (j = 0; j < 2; j++) {
     
    //   for (i = 0; i < 4; i++) {
    //     if (form.elements[i].checked) {
    //       if (form.elements[i].value == answer[j]) {
    //         $("correct-answers").text("Correct Answers" + correct);
    //         break;
    //       }
    //       else {
    //         $("incorrect-anwers").text("Incorrect Answers" + wrong);
    //       }
    //     }
    //   }
    // }

  // }

// test();




}); //document.ready function 


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
  //end of timer function




//   answer[0] = "1955"
//   answer[1] = "Jupiter"
//   function test(form) {
//     for (j = 0; j < 2; j++) {
     
//       for (i = 0; i < 4; i++) {
//         if (form.elements[i].checked) {
//           if (form.elements[i].value == answer[j]) {
//             $("correct-answers").text("Correct Answers" + correct);
//             break;
//           }
//           else {
//             $("incorrect-anwers").text("Incorrect Answers" + wrong);
//           }
//         }
//       }
//     }
//   }
// test();




}); //document.ready function 