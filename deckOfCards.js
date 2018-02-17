
//Define a card and its variables
// var deck = []; comment out after defining below in function
var suits = ["clubs", "diamonds", "hearts", "spades"];
var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

var deck = [];

// $(init);
//
// function init() {
//   returnDeck();
//
//   $("#drawbtn").click( function() {
//
//     var myCard = drawCard();
//
//     if( myCard ) {
//       makeCard( myCard.suit, myCard.value );
//     } else {
//       alert("no more cards in the deck");
//     }
//
//   });
//
// }

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

function drawCard() {

  var card;

  if( deck.length > 0 ) {

    var randIndex = Math.floor( Math.random() * deck.length );
    card = deck.splice( randIndex, 1 )[0];
  }

  return card;
}

//used from an example to build a fast and simple visual into html css
// function makeCard( suit, rank ) {
//   var card = $(".card.template").clone();
//
//   card.removeClass("template");
//
//   card.find(".rank").html(rank);
//   card.find(".suit").html("&"+suit+";");
//
//   if( suit === "hearts" || suit === "diams" ) {
//     card.addClass("red");
//   }
//
//   $("body").append(card);
// }

//Shuffle deck
function shuffle()
{
	// for 100 times through
	// switch the values of two random cards
	for (var i = 0; i < 100; i++)
	{
		var card1 = Math.floor((Math.random() * deck.length));
		var card2 = Math.floor((Math.random() * deck.length));
		var placeholder = deck[card1];

		deck[card1] = deck[card2];
		deck[card2] = placeholder;
	}
}
