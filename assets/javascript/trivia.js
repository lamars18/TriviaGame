
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var score = 0;
var total = 5; 
var q1;
var q2;
var q3;
var q4;
var q5;

//Sets Correct Answers
var answers = ["q1b","q2d","q3a","q4c","q5c"]; 

//Hides questions at start of game 

$(".transbox2").attr("style", "display:none");

//Sets the timer for the game

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 1) {
            clearTimeout(timer);
            element.innerHTML = "<h2>TIME IS UP! </h2>";
           }
    }, 1000);
    
    
   
       
    
}

window.onload = function () {
    var oneMinute = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinute, display);

    

};


//Start Game Function
function startGame() {
   
  $("#SplashScreen").css("display", "none");
  $(".transbox2").attr("style", "display:block");
}
//Engages the startGames function that will 
//Hide the Splashscreen on click and shows the quiz
   $("#start").on("click", function() {
    startGame();
    console.log("started");
});
   
//Makes sure that only a single radio button can be selected for each question. 
(function($) {
   
    $('input:q1').click(function() {
       $('input:q1').not(this).prop('checked', false);
    });
    $('input:q2').click(function() {
        $('input:q2').not(this).prop('checked', false);
   });
    $('input:q3').click(function() {
       $('input:q3').not(this).prop('checked', false);
    });
    $('input:q4').click(function() {
        $('input:q4').not(this).prop('checked', false);
    });
    $('input:q5').click(function() {
        $('input:q5').not(this).prop('checked', false);
    });
});  
      

// Start Game Function for button 1
//Start Game Basic On Click
function startGame2() {
    $("#SplashScreen").hide();
    $(".transbox").show();
}


// Start Game Fun On Click
//(function($) {
 //   $("#start2").on("click", function() {
  //  startGame2();
 //   });
    

//});  
    
//});  


//Sets the action when answers are submitted
function submitAnswers(){
    
    //Get User Input for questions
    //References the div for the form and grabs selection for each question
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

 console.log(q1);
 console.log(q2);
 console.log(q3);
 console.log(q4);
 console.log(q5);
 console.log(answers);  

 //Validation

 //for(i = 1; i <= total;i++){
 // if(eval ('q'+ i) == null || eval ('q' + i) == ' '){
  //  alert("You missed Question " + i);
   //   return false; 
  // }
//}




//Adds to Score based on answers

if(q1 == answers[0]){
    score++;
    correct++;
}
if(q2 == answers[1]){
    score++;
    correct++;
}
if(q3 == answers[2]){
    score++;
    correct++;
}
if(q4 == answers[3]){
   score++;
   correct++;
}
if(q5 == answers[4]){
    score++;
    correct++;
}
if(q1 != answers[0]){
    incorrect++;
}
if(q2 != answers[1] ){
    incorrect++;
}
if(q3 != answers[2] ){
    incorrect++;
}
if(q4 != answers[3] ){
    incorrect++;
}
if(q5 != answers[4] ){
    incorrect++;
}
else {
    unanswered ++; 
}
alert("You scored" + " " + score + " " + "out of" + " " + total + " " +
"You answered" + " " + correct + " " + "CORRECT" + " " + incorrect + " " + "INCORRECT" + " " +
"You left" + " " + unanswered + " " + "UNANSWERED"); 



  

}
       // Show Results Function   
function showResults() {
    $(".transbox2").attr("style", "display:none");
    $("#results").html("Correct: " + correct + 
    "Incorrect: " + incorrect +
    "Unanswered: " + unanswered);
    $("#SplashScreen").show();
    $("#SplashScreen").html("Click Start above to play again!");
    
}


//Reset Results Function 
function resetResults() {
correct = 0;
incorrect = 0;
unanswered = 0;
}    
          
        $("#done").on("click", function() {
            //submitAnswers();
            showResults(); 
            resetResults(); 
        });
        
        
       
        
   