//make timer
//create variable for where the timer will start
var startNumber = 4;
//create variable to store interval of timer
var intervalId;
//end of timer variables

var answer = ["1955", "Jupiter", "45", "Blue", "Pod", "Alexandra Fleming", "November 22 1963", "12"];
var correct = 0;
var wrong = 0;





//document.ready so that the timer will run
$(document).ready(function(){
$("#quiz").hide();

$("#start-button").click(function()
{console.log("Start quiz");
$("#quiz").show();

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
       checkanswers();
      $("#quiz").hide();
      } //end of if statement
    }; //end of decrement function 
    run(); 
    //end of timer function
  })//onclick of start button
    //check if values clicked by user are = to the correct answer

  $("#submit").click(function() {
    $("#quiz").hide();
    $("timer").html("<div> Your Results!</div>")
    checkanswers();

    
})
function checkanswers() {
    var guessOne = $('input[name=q1]:checked', '#quiz').val();
    if (guessOne === answer[0]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#wrong-answers").text("Wrong Answers: " + wrong);
    };


    var guessTwo = $('input[name=q2]:checked', '#quiz').val();
    if (guessTwo === answer[1]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#wrong-answers").text("Wrong Answers: " + wrong);
    };

    var guessThree = $('input[name=q3]:checked', '#quiz').val();
    if (guessThree === answer[2]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };

    var guessFour = $('input[name=q4]:checked', '#quiz').val();
    if (guessFour === answer[3]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };

    var guessFive = $('input[name=q5]:checked', '#quiz').val();
    if (guessFive === answer[4]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };

    var guessSix = $('input[name=q6]:checked', '#quiz').val();
    if (guessSix === answer[5]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };

    var guessSeven = $('input[name=q7]:checked', '#quiz').val();
    if (guessSeven === answer[6]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };

    var guessEight = $('input[name=q8]:checked', '#quiz').val();
    if (guessEight === answer[7]) {
      correct++;
      $("#correct-answers").text("Correct Answers: " + correct);
    }
    else {
      wrong++;
      $("#incorrect-answers").text("Wrong Answers: " + wrong);
    };
    
  };
 }) //document.ready function 