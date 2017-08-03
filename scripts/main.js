/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let total = 0;
  for (let i=0; i<hand.length; i++){
    if (hand[i].indexOf(total)) {
      total += 10;
      console.log(total);
    }else if (hand[i] === "2" || hand[i] === "3" || hand[i] === "4" || hand[i] === "5" || hand[i] === "6" || hand[i] === "7"|| hand[i] === "8" || hand[i] === "9" || hand[i] === "10"){
      total += Number(hand[i]);
    } else if (hand[i] === "A" && total <= 10){
      return total += 11;
    } else {
      return total += 1;
    }
}
console.log(hand("2", "2","8"));




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
