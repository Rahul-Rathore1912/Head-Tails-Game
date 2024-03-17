var tail = prompt("Enter player1 name");
var heads = prompt("Enter player2 name");
var toss = Math.random() * 2;
var convert = Math.floor(toss);
if (convert == 0) {
  alert(tail + " tails wins");
} else {
  alert(heads + " heads wins");
}
