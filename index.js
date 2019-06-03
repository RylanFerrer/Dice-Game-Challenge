// this variable grabs a random number between 0-6, it is also rounded up
var randomNumber1 =Math.floor( Math.random() * 6) + 1;
var randomNumber2 =  Math.floor( Math.random() * 6) + 1;
//an array that has all the sources for all dices
var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//I subtracted randomNumber1 by one so the numbers can align with the array eg. dice1 = 0 in the arrray and so on
document.querySelector(".img1").setAttribute("src", images[randomNumber1 - 1]);
document.querySelector(".img2").setAttribute("src", images[randomNumber2 - 1]);

//displaying a tie
if (randomNumber1 == randomNumber2)
{
  document.querySelector("h1").innerHTML = " It's a tie! "
}
//displaying if dice one wins
else if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML = "Dice one wins! "
}
// displaying if dice two wins
else
{
    document.querySelector("h1").innerHTML = "  Dice Two Wins!"
}
