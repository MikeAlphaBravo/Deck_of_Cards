
//Define a card and its variables
// var deck = []; comment out after defining below in function
var suits = ["clubs", "diamonds", "hearts", "spades"];
var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

//Pull from deck function
function returnDeck() {

  deck = [];
  //for each type of suit
  for( var s = 0; s < suits.length; s++ ) {
    //and for each rank
    for( var v = 0; v < values.length; v++ ) {

      //make a card
      var card = {};
      card.suit = suits[s];
      card.rank = values[v];

      deck.push(card);
    }
  }

  console.log( "Created a new deck of ", deck.length, " cards!" );
  console.log( deck );

}

//Shuffle deck
