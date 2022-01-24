
const userSelect = { 
    game: 0
 };
 const computerSelect = { 
    game: 0
 };
 
 let user = 0;
 let computer = 0;
 
 document.querySelector("#lapis").addEventListener("click", setLapis);
 document.querySelector("#papyrus").addEventListener("click", setPapyrus);
 document.querySelector("#scalpellus").addEventListener("click", setScalpellus);
 
 
 let gameChoice = ["Lapis", "Papyrus", "Scolpellus"];
 // userSelect.game = gameChoice[0];
 
 function computerChoice() {
     let randomChoice = Math.floor(Math.random() * gameChoice.length);
       computerSelect.game = gameChoice[randomChoice];
     }
 
 
   function compareChoice() {
    computerChoice();
   
   if(computerSelect.game === userSelect.game){
     runResult(" The result is a draw, please re-choose again! ");
     }else if(computerSelect.game === gameChoice[0]){
       if(userSelect.game === gameChoice[1]){
        runResult(" The " + userSelect.game + " beat the " + computerSelect.game +  " , User Win the game! ");
         user += 1;
     }else{
      runResult(" The " + computerSelect.game + " smash the " + userSelect.game + " , Computer win the game! ");
       computer += 1;
     }
    }else if(computerSelect.game === gameChoice[1]){
       if(userSelect.game === gameChoice[2]){
       runResult(" The " +  userSelect.game + " beat the "  + computerSelect.game  +  " , User Win the game! ");
         user += 1;
      }else{
      runResult(" The " +  computerSelect.game + " smash the " + userSelect.game +  " , Computer win the game! ");
        computer += 1;
     }
   }else if(computerSelect.game === gameChoice[2]){
     if(userSelect.game === gameChoice[0]){
       runResult(" The "  +  userSelect.game + " beat the " +  computerSelect.game +  " , User Win the game! ");
       user += 1;
     }else{
      runResult(" The "  +  computerSelect.game + " smash the " +  userSelect.game +  " , Computer win the game! ");
       computer += 1;
     }
   }
 }
 
 const resultText = document.createElement("p");
 
 function runResult(result) {
   resultText.innerText = result;
   document.body.appendChild(resultText);
 }
 
 function setLapis(){
   userSelect.game = gameChoice[0];
   ScoreCounter (user, computer);
   compareChoice();
 }
 function setPapyrus(){
   userSelect.game = gameChoice[1];
   ScoreCounter (user, computer);
   compareChoice();
 }
 function setScalpellus(){
   userSelect.game = gameChoice[2];
   ScoreCounter (user, computer);
   compareChoice();
 }
 function ScoreCounter (user, computer) {
  document.querySelector("#user").innerText = user;
  document.querySelector(".computer").innerText = computer;
 }
 
 
 
 