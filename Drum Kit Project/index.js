const byclassname = document.querySelectorAll("button");
for(i=0; i<byclassname.length;i++)
{
    byclassname[i].addEventListener("click",function(){
        // alert("I got clicked");
        // this.style.color="white";

        // console.log(this); // This line prints: <button class="w drum">w</button>, this line, you could find in index.html(line 15) and so, 
        //                     // this basically pulls the class name, html line

        // console.log(this.innerHTML); // This line pulls/reads the word/letter from the place where we click, sample output is: w, a, s ....

        // console.log("vineeth"); //This line just prints "vineeth", for every click we do

        // Here, I am using switch statement, where for every letter like "w", "a", "s" and so, to assign them to a sound in sounds file,
        // we are using switch statement, instead of if-else, here we are using switch, making it more sense.

        var buttonInnerword = this.innerHTML;

        makeSound(buttonInnerword);

        Animationforwebsite(buttonInnerword);
    })
        
    
}

document.addEventListener("keydown", function(event){

    makeSound(event.key);

    Animationforwebsite(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
            var wordsound1 = new Audio("sounds/crash.mp3");
            wordsound1.play();
            break;

        case "a":
            var wordsound2 = new Audio("sounds/kick-bass.mp3");
            wordsound2.play();
            break;

        case "s":
            var wordsound3 = new Audio("sounds/snare.mp3");
            wordsound3.play();
            break;

        case "d":
            var wordsound4 = new Audio("sounds/tom-1.mp3");
            wordsound4.play();
            break;

        case "j":
            var wordsound5 = new Audio("sounds/tom-2.mp3");
            wordsound5.play();
            break;

        case "k":
            var wordsound6 = new Audio("sounds/tom-3.mp3");
            wordsound6.play();
            break;

        case "l":
            var wordsound6 = new Audio("sounds/tom-3.mp3");
            wordsound6.play();
            break;

        default:
            break;
    }
}  

function Animationforwebsite(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
} 

