
//timer
setTimeout(fiveSeconds, 5000);
setTimeout(tenSeconds, 10000);
setTimeout(timeUp, 15000);

// ---------------------



function fiveSeconds() {

  // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
  // console log 10 seconds left
  $("#timer").html("<h2>About 10 Seconds Left!</h2>");
  console.log("10 seconds left");
  
}


function tenSeconds() {

  // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
  // console log 5 seconds left
  $("#timer").html("<h2>About 5 Seconds Left!");
    console.log("5 Seconds left");
}


function timeUp() {
  $("#timer").html("<h2>Time's Up!");
    console.log("done");
}