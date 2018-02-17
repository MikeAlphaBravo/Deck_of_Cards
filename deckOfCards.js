
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





//Shuffle deck
function shuffle()
{
	// shuffle 100 times
	// switch the values of two random cards
	for (var i = 0; i < 1000; i++)
	{
		var location1 = Math.floor((Math.random() * deck.length));
		var location2 = Math.floor((Math.random() * deck.length));
		var tmp = deck[location1];

		deck[location1] = deck[location2];
		deck[location2] = tmp;
	}
}
