// Color Array by Param

// Variables for HTML Elements
let containerEl = document.getElementById("container")
let inputEl = document.getElementById("color-in");

// Global Variables
let colors;

// Fetch content from color
fetch("colours.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r?\n/);
    console.log(colors);
    displayColors(colors);
}

// Event Listener
inputEl.addEventListener("keyup", submitHandler);

function submitHandler(event) {
   // Display all colors on page
   let divStr = "";
   let count = 0;
   for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes(inputEl.value)) {
        divStr += `<div style="background: ${colors[i]}">${colors[i]}</div>`;
        }
    }
   containerEl.innerHTML = divStr;
}

function displayColors(colors) {
    // Display all colors on page
    let divStr = "";
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style="background: ${colors[i]}">${colors[i]}</div>`;
         }
    containerEl.innerHTML = divStr + `<p>${count}</p>`;
}

