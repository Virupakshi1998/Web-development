var randomNumber1 = Math.floor(Math.random() * 6) + 1;//1-6

var randomDiceImage = "dice"+randomNumber1+".png"; // dice1.png - dice6.png

var randomImageSource = "images/"+randomDiceImage; //images/dice1.png - images/dice6.png

var imageleft = document.querySelectorAll("img")[0];

imageleft.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2+".png";

var imageright = document.querySelectorAll("img")[1];

imageright.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}