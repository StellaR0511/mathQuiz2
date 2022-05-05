player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");

player1_score= 0;
player2_score= 0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

function send() {
    actual_answer=" ";
    document.getElementById("real_answer").innerHTML=" ";
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
   
    
  actual_answer = parseInt(number1) * parseInt(number2);
  question_number = "<center> <h4 id='question_number'>" + number1 + " X " + number2 +"</h4>";
   input_box = "<h4 id='answer_box'>Answer : </h4><input type='text' id='input_check_box'>";
  check_button = "<br><br><button class='btn btn-info btn-grad2' onclick='check()'>Check</button> </center>";
   row =question_number + input_box + check_button;
 document.getElementById("output").innerHTML = row;
   document.getElementById("number1").value = "";
  document.getElementById("number2").value = "";
  setTimeout(lose(),60000);
   

}


question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        if(answer_turn == "player1") { 
            player1_score = player1_score +1; 
            document.getElementById("player1_score").innerHTML = player1_score; 
        } 
        else { 
            player2_score = player2_score +1; 
            document.getElementById("player2_score").innerHTML = player2_score; 
        } 
        document.getElementById("real_answer").innerHTML = "Yay! You got the answer right! The answer was "+actual_answer+"!";
    }
    if(question_turn == "player1") { 
        question_turn = "player2"; 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name ; 
    } 
    else { 
        question_turn = "player1"; 
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name ; 
        document.getElementById("real_answer").innerHTML = "Oops! You got it wrong! The answer was "+actual_answer+"!"
    } 
    if(answer_turn == "player1") { 
        answer_turn = "player2"; 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name ; 
    } 
    else { 
        answer_turn = "player1"; 
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name ; 
    } 
    document.getElementById("output").innerHTML = ""; 
}