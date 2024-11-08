// Checking that the script has loaded
console.log("Script loaded");

// Task 1

// Mouse over and mouse out changing the color of the title
function mouseOverColorSwap() {
    document.getElementById("inputTitle").classList.add("colorSwap");
}

function mouseOutColorReset() {
    document.getElementById("inputTitle").classList.remove("colorSwap");
}

const titleElement = document.getElementById("inputTitle");
titleElement.addEventListener("mouseover", mouseOverColorSwap);
titleElement.addEventListener("mouseout", mouseOutColorReset);

// Changing the color of the nameInput textbox
const changeTextboxColor = document.getElementById("nameInput");

changeTextboxColor.addEventListener("focus", function () {
    changeTextboxColor.style.backgroundColor = "yellow";
});

// Changing the sumbit button to use a pointer when being hovered
const submitPointer = document.getElementById("submitInput");

submitPointer.addEventListener("mouseover", function() {
    submitPointer.style.cursor = "pointer";
});

// While inputs are empty the borders are red but green if filled
const borderBoxColor = document.getElementById("emailInput");

borderBoxColor.addEventListener("focus", function() {
    borderBoxColor.style.border = "2px solid green";
});

// Submit button background color green while hovering
const submitBackgroundColor = document.getElementById("submitInput");

submitBackgroundColor.addEventListener("mouseover", function(){
    submitBackgroundColor.style.backgroundColor = "green";
});

submitBackgroundColor.addEventListener("mouseout", function(){
    submitBackgroundColor.style.backgroundColor = "red";
})

// Task 2
function changeColor() {
    document.getElementById("box").classList.add("changeColor");
}