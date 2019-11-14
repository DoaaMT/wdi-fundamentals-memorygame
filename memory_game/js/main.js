console.log("Up and running!");


console.log("User flipped " + CardOne);

alert('Hello, friends.');

const Cards =['queen','queen','king','king'] ;
const CardsInPlay= [] ;

var CardOne = Cards[0];
CardsInPlay.push(CardOne);

console.log("User flipped queen")

var CardTwo = Cards[2];
CardsInPlay.push(CardTwo);

console.log("User flipped king")

if (CardsInPlay.length == 2) {
if (CardsInPlay[0]===CardsInPlay[1] ) {
  alert("You found a match!");
}
else{
  alert("Sorry, try again.");
}
}




//var cardThree= "king";
//var cardFour = "king";
