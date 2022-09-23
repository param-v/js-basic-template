// Color Array by Param

// Variables for HTML Elements
let containerEl = document.getElementById("container")

// Array
let colors = ["red", "green", "blue", "orange", "cyan", "purple"];
// index ->     0       1        2       3         5

console.log(colors.length);

//Click Event
document.addEventListener("click", update);

function update() {
    containerEl.innerHTML = `<div style="background: ${colors[randomInt(0, colors.length)]}"></div>`;

}


