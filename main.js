// Color Array by Param

// Variables for HTML Elements
let containerEl = document.getElementById("container")

// Array
let colors = ["red", "green", "blue", "orange", "cyan", "purple"];
// index ->     0       1        2       3         5

// Display all colors on page
for (let i = 0; i < 6; i++) {
    let divStr = "";
    divStr += `<div style="background: ${colors[i]}"></div>`;
    
}




