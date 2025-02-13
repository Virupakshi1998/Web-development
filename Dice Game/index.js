var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //1-6, used Math.random() to first generate a random number and used Math.floor() to round of the 
                                                        // decimal point and other things like * 6 and adding a 1 is to make the range from 1 -6.
var randomDiceImage = "dice"+randomNumber1+".png";      // dice1.png - dice6.png, to come in this format, so that we could use this in "src" section of image 1 and
                                                        //2 in html file, which basically is used to show a respective dice number image for that respective random 
                                                        // number picked through Math.random()

var randomImageSource = "images/"+randomDiceImage;     //images/dice1.png - images/dice6.png

var imageleft = document.querySelectorAll("img")[0];   // 

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
