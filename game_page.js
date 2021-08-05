player1_name  = localStorage.getItem("player1_name");
player2_name  = localStorage.getItem("player2_name");


player1_score = 0;
player2_score = 0;


document.getElementById("player1_name").innerHTML = player1_name + ":";
document.getElementById("player2_name").innerHTML = player2_name + ":";


document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn:" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn:" + player2_name;


function send(){
   get_word = document.getElementById("word").value;
   word = get_word.toLowerCase();
   console.log("word in lower case = " + word);

   charact1 = word.charAt(1);
   console.log(charact1);

   length1 = Math.floor(word.length/2);
   charact2 = word.charAt(length1);
   console.log(charact2);

   lminus = word.length - 1;
   charact3 = word.charAt(lminus);
   console.log(charact3);

   remove_charact1 = word.replace(charact1,"_");
   remove_charact2 = remove_charact1.replace(charact2,"_");
   remove_charact3 = remove_charact2.replace(charact3,"_");
   console.log(remove_charact3);

   question_word = "<h4 id = 'word_display'> Q. " + remove_charact3 + "</h4>";
   input_box = "<br> answer:<input type = 'text' id = 'check_box'> ";
   check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>CHECK</button>"
   row = question_word + input_box + check_button;
   document.getElementById("output").innerHTML = row;
   document.getElementById("word").value = "";
}
question_turn = "player1"
answer_turn = "player2"

function check(){
   get_answer = document.getElementById("check_box").value;
   answer = get_answer.toLowerCase();
console.log("answer in lower case" + answer);
if (answer == word){
   if (answer_turn == "player1"){
      player1_score = player1_score + 1;
      document.getElementById("player1_score").innerHTML = player1_score;
   }
   else{
      player2_score = player2_score + 1;
      document.getElementById("player2_score").innerHTML = player2_score;
   }
}
if (question_turn == "player1"){
   question_turn = "player2";
document.getElementById("player_question").innerHTML = "question_turn- "+ player2_name;
}
else{
   question_turn = "player1";
   document.getElementById("player_question").innerHTML = "question_turn- "+ player1_name;
}

if (answer_turn == "player1"){
   answer_turn = "player2";
document.getElementById("player_answer").innerHTML = "answer_turn- "+ player2_name;
}
else{
   answer_turn = "player1";
   document.getElementById("player_answer").innerHTML = "answer_turn- "+ player1_name;
}
document.getElementById("output").innerHTML = "";
}