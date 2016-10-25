
var ranks = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
var suits = ["hearts", "clubs", "spades", "diamonds"];
var deck = [];

// suits.forEach(function(suit){
//   ranks.forEach(function(rank){
//   deck.push(rank + " of " + suit);
//   });
// });
var makeDeck = function(rank, suit){
for(i=0; i < 13; i++){
  for(j=0; j <4; j++){
    deck.push(rank[i] + " of " + suit[j]);
  }
}
}
makeDeck(ranks,suits);
alert(deck);

var position = Math.round(Math.random() * 51);
var position2 = Math.round(Math.random() * 51);
var position3 = Math.round(Math.random() * 51);
var position4 = Math.round(Math.random() * 51);
var positions = [position,position2, position3, position4];

// if(position2 > position){
//   position2 += 1;
// }
do {
  for (var i = 0; i <4; i++){
    for (var j = i+1; j<4; j++){
      if (position[i] === position[j]){
        position[j] = Math.round(Math.random() * 51);
      }
    }
  }
} while (position === position2 || position2 === position3 || position3 === position4 || position === position3 || position === position4 || position2 === position4 || position3 ===position4);

var userCard = deck[position];
var userCard2 = deck[position];

var userCardRank = (position % 13) +1;
var userCardRank2 = (position % 13) +1;

var compCard = deck[position2];
var compCard = deck[position2];

var compCardRank = (position2 % 13) +1;
var compCardRank = (position2 % 13) +1;


var compCard = deck[position2];


var compare = function(user, computer){
  if (user > computer) {
    return "userWins";
  } else if (computer > user) {
    return "compWins";
  } else {
    return "tie";
  }
};
$(document).ready(function(){


  $("button").click(function(event){
    $(".userCard").text(userCard);
    $(".compCard").text(compCard);
    if(compare(userCardRank, compCardRank) === "userWins"){
      $(".winner").text(userCard);
      $("#winner").show();
    }  else if (compare(userCardRank, compCardRank) === "compWins") {
      $(".winner").text(compCard);
      $("#winner").show();
    }else {
      $(".tie").text("it's a tie!");

    }
event.preventDefault();
  });
});
