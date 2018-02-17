
//Define a card and its variables
// var deck = new Array(); comment out after defining below in function
var suits = ["clubs", "diamonds", "hearts", "spades"];
var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

//Pull from deck function
function returnDeck()
{
	var deck = new Array();

	for(var s = 0; s < suits.length; s++)
	{
		for(var v = 0; v < values.length; v++)
		{
			var card = {Value: values[v], Suit: suits[s]};
			deck.push(card);
		}
	}

	return deck;
}
