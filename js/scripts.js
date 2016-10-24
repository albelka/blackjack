
var ranks = ["ace","two","three","four","five","six","seven","eight","nine","ten","jack","queen","king"];
var suits = ["hearts", "clubs", "spades", "diamonds"];
var deck = [];

suits.forEach(function(suit){
  ranks.forEach(function(rank){
  deck.push(rank + " of "+ suit);
  });
});

var random = Math.round(Math.random() * 51);
var userCard = deck[random];
var userCardRank = (random+1) % 13;

var random2 = Math.round(Math.random() * 50);
var compCard = deck[random];
var compCardRank = (random+1) % 13;


$(document).ready(function(){
  $("button").click(function(event){

  });
});
