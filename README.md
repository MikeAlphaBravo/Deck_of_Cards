# _Deck of Cards_

#### _Implementing a shuffle and card deck in Javascript, 02.17.2018_

#### By _Michael Brooks_

## Description

_The goal of this app is to develop a deck of cards that has the ability by the user to be shuffled and drawn from._

_I started off by reviewing my JavaScript notes from my coursework and Googling some examples of solutions to this problem.  It has been some time since I worked in a basic file structure and I needed a refresher as to how to set up my file structure in JS._
_My unfamiliarity with Java initially led me to build this in Ruby but then I felt JS was a better challenge for me and more applicable to the goal.

_My initial response to the challenge in sudo code is this:  
To define what a 'card' is with a value and suit followed by filling out a 'deck'  
Then I would loop through those cards to shuffle and present them  
Followed by working on something to display them one by one to a user_

_I will begin by defining my variables, card first:  A card will have a value and a suit and belong to a deck._

_Next will be pulling the deck essentially looping through suits and then values within suits.  Return the deck._

_Then I will need to shuffle the 52 existing cards... OR do I just draw a card by .random?  I will start by exploring shuffle by swap of cards in a loop._

_Next I need to test my code which frankly I have not done in some time so I'm going to start by importing a simple css and building out a button and viewer in html so I can visually interact with the functions outside of the command line._

## User Stories

* _As a user, I want to draw a card until the deck is empty._
* _As a user, I want to be able to shuffle the deck._

## Setup/Installation Requirements

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

Open terminal on your computer,
Navigate to the folder you would like to clone the project into:

`cd desktop`

and run:

`git clone https://github.com/margaret85/snowflake_scheduler`

Navigate into project folder with:

`cd Deck_of_Cards`

Run:

If you have Atom installed and want to see the project structure run:

`atom .` Otherwise... double click on index.html to open in browser

## Known Bugs

_If you find bugs please feel free to contact me to report them._

## Support and contact details

_If you have any updates or suggestions please contact [Michael] or make a contribution yourself._

[Michael]: mailto:mikealphabravo1982@gmail.com

### License

MIT License

Copyright (c) 2018 Michael Brooks
