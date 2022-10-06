// Color Array by Param

// Variables for HTML Elements
let containerEl = document.getElementById("container")
let inputEl = document.getElementById("color-in");

// Event Listener
inputEl.addEventListener("keydown", submitHandler);

function submitHandler(event) {
   if (event.keyCode === 13) {
    // Create color array based on user input
    let inputStr = inputEl.value;
    let colorsArray = inputStr.split(",");
    displayColors(colorsArray);
   }
}

function displayColors(colors) {
    // Display all colors on page
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style="background: ${colors[i]}"></div>`;
    }
    containerEl.innerHTML = divStr;
}

