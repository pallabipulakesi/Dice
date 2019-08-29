//For player 1

var randomNumber1=Math.floor(Math.random()*6)+1; //Give random number between 1-6

var randomDiceImage="dice"+randomNumber1+".png";//select images from dice1.png to dice-6.png

var randomImageSource="images/"+randomDiceImage;//folder name is images;images/dice1.png - images/dice-6.png

var image1=document.querySelectorAll("img")[0];//select all images

image1.setAttribute("src",randomImageSource);//set the attribute value


//For Player 2

var randomNumber2=Math.floor(Math.random()*6)+1; //Give random number between 1-6

var randomImageSource2="images/dice"+randomNumber2+".png";//select images from dice1.png to dice-6.png

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);//select all the images and set the attributevalue

//If player1 wins
if(randomNumber1 > randomNumber2){

  document.querySelector("h1").innerHTML="Player1 Wins!";
}
//If player2 wins
else if(randomNumber2 > randomNumber1){

  document.querySelector("h1").innerHTML="Player2 Wins!";
}

//If both are equal
else{

  document.querySelector("h1").innerHTML="Draw!";
}
