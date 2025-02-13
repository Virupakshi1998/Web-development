var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6, used Math.random() to first generate a random number and used Math.floor() to round of the 
                                                        // decimal point and other things like * 6 and adding a 1 is to make the range from 1 -6.
var randomDiceImage = "dice"+randomNumber1+".png";      // dice1.png - dice6.png, to come in this format, so that we could use this in "src" section of image 1 and
                                                        //2 in html file, which basically is used to show a respective dice number image for that respective random 
                                                        // number picked through Math.random()

var randomImageSource = "images/"+randomDiceImage;     //images/dice1.png - images/dice6.png

var imageleft = document.querySelectorAll("img")[0];   // Here If you see in html file, we got two "img" classes one for player 1 and other for player 2, in order to
                                                      // first fetch img class for player1, so that we could fetch that using indexing [0], and using "setattribute()"
                                                      // to change from standard selection of an image to an image that changes accordingly to the random number generated
imageleft.setAttribute("src", randomImageSource);     // using logic built in "randomImageSource".


var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Now repeating the same process start from random number creation, and so what we did for left image/player 1,
                                                      //need to do the same thing for right image/player2.

var randomImageSource2 = "images/dice" + randomNumber2+".png";

var imageright = document.querySelectorAll("img")[1];

imageright.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){                             // 
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}
