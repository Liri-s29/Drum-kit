var n = document.querySelectorAll("button").length;
var i;
// giving the event listener property to all buttons
for ( i = 0; i < n; i++){
  // Sound on Click function
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        var buttonInnerHTML = this.innerHTML;
        soundGenerator(buttonInnerHTML);
        addAnimation(buttonInnerHTML);
        removeAnimation(buttonInnerHTML);
    });
    
}
// We're adding the event listener to thw whole document
document.addEventListener("keydown",function(event){   //the event shows the event, that triggered the event listener
  soundGenerator(event.key); // .key shows the letter in a keypress
  addAnimation(event.key);
  removeAnimation(event.key);
})
function soundGenerator(key){
      switch(key) {
            case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

            case "a":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;  

            case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

            case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

            case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

            case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

            case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break; 

      
          default: 
            console.log("buttonInnerHTML");
              break;
}}
function addAnimation(currentLetter){
  var letter = document.querySelector("."+ currentLetter);
  letter.classList.add("pressed");
  setTimeout(function(){
    letter.classList.remove("pressed");
  },100);
}
if(innerWidth < 991){
  var text = $("h3");
  text.innerHTML="Click on the Buttons to play your Drum Kit.";
  
}







