// Your code goes here
// This appears second, tells us the DOm has loaded fully
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//   }); 


// this appears in console first since it is outside of the DCL 
// console.log(
//     "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
// ); 


document.addEventListener("DOMContentLoaded", function(e) {
    updateText() // called back function in DCL
}); 

// function to be triggerd to change the text of the pTag.
function updateText() {
    const text = document.querySelector("#text");
    text.innerHTML = "This is really cool!";
}