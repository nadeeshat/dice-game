//var dice = 3;
//console.log("You rolled "+dice);


// Step 2: Randomize a dice roll (make sure it's an integer number)
var dice = Math.random() * 6;
dice = Math.ceil(dice);

//console.log(dice);


// Step 3: Update the user interface (document) to show the diceface (svg image)
if(dice == 1)
{
  document.getElementById('dicedesc').innerHTML = "You rolled one";
  document.getElementById('diceimg').src = 'img/dice1.svg';
}
else if(dice == 2)
{
  document.getElementById('dicedesc').innerHTML = "You rolled two";
  document.getElementById('diceimg').src = 'img/dice2.svg';
}
else if (dice == 3)
{
  document.getElementById('dicedesc').innerHTML = "You rolled three";
  document.getElementById('diceimg').src = 'img/dice3.svg';
}
else if (dice == 4)
{
  document.getElementById('dicedesc').innerHTML = "You rolled four";
  document.getElementById('diceimg').src = 'img/dice4.svg';
}
else if(dice == 5)
{
  document.getElementById('dicedesc').innerHTML = "You rolled five";
  document.getElementById('diceimg').src = 'img/dice5.svg';
}
else
{
  document.getElementById('dicedesc').innerHTML = "You rolled six";
  document.getElementById('diceimg').src = 'img/dice6.svg';
}


// Step 4: Convert the roll number (for example: 3) to a word ("three")
