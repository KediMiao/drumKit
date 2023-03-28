// document.querySelectorAll(".drum").forEach(
//   addEventListener("click", function () {
//     this.style.color = "white";
//   })
// )

//ISSUE:
//can not using this in this situation, why is that????? Haven't figure it out.

//COMMENT:
//1. elements are in a NodeList, so I need to use forEach() to call each elements inside of this NodeList

//2. addEventListener will only attached this function to the element, only when you do the action, then it will trigger the function

// SO I Instead Using for loop to solve it
var numberOfInstruments = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfInstruments; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";
  });
}

// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
