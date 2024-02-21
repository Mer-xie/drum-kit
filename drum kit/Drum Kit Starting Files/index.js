var numberOfDrumBtns = document.querySelectorAll(".drum").length;

for ( var i = 0; i<numberOfDrumBtns; i++) {

document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); 
function handleClick(){ 
// switch case
    var buttonInnerHTML = this.innerHTML;
    
    makeSound(buttonInnerHTML); 

    buttonAnimation(buttonInnerHTML);
    }
}

document.addEventListener("keypress", function(event){
    
   makeSound(event.key)

   buttonAnimation(event.key);
    
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('/Drum Kit Starting Files/sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 =  new Audio('/Drum Kit Starting Files/sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('/Drum Kit Starting Files/sounds/tom-3.mp3');
            tom3.play();  
            break;
        case "d":
            var tom4 = new Audio('/Drum Kit Starting Files/sounds/tom-4.mp3');
            tom4.play();  
            break;
        case "j":
            var snare = new Audio('/Drum Kit Starting Files/sounds/snare.mp3');
            snare.play();  
            break;
        case "k":
            var kick = new Audio('/Drum Kit Starting Files/sounds/kick-bass.mp3');
            kick.play();  
            break;
        case "l":
            var crash = new Audio('/Drum Kit Starting Files/sounds/crash.mp3');
            crash.play();  
            break;

        default:
            break;
}
}
function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("."+ currentkey);

    activeButton.classList.add("pressed");
    
    setTimeout(function(){
    activeButton.classList.remove("pressed")
}, 100)
    
}

//  can either use an anonymous function
// var numberOfDrumBtns = document.querySelectorAll(".drum").length;

// for (var i = 0; i<numberOfDrumBtns; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         alert("I got clicked!");
//     });
// }

// function add(num1,num2){
//     return num1 + num2;
// }
// function multiply(num1,num2){
//     return num1 * num2;
// }
// function subtract(num1,num2){
//     return num1 - num2;
// }
// function divide(num1,num2){
//     return num1 / num2;
// }
// function calculator(num1, num2 ,operator){
//     return operator(num1,num2);
// }


