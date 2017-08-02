/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
const deck = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J","Q","K","A"];
let pairs = [];
let hand = 0;
function handValue (hand) {
 let myHandValue = 0;
 let newCard;
 for (let i = 0; i < hand.length; i++) {
   if (hand[i] === "J" || hand[i] === "Q" || hand[i] === "K");
   myHandValue += 10;
 } else if (hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7" || hand[i] === "8" || hand[i] ==="9")
 {
   switch (hand[i]) {
     case "2":
       myHandValue = 2;
       break;
     case "3":
       myHandValue = 3
       break;
     case "4":
        myHandValue =4
        break;
       case "5":
       myHandValue =5
        break;
       case "6":
         myHandValue = 6
         break;
       case "7":
         myHandValue =7
         break;
       case "8":
         myHandValue =8
         break;
       case "9":
         myHandValue =9
         break;
       case "10":
         myHandValue =10
         break;
   }
   }
 }
}
console.log(handValue());

function moveAces(){
  if (hand === "A"){
    return 1;
  } else {
    return 11;
  }
}
console.log(moveAces());



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
