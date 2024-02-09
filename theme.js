let clickme = document.getElementById("clickMe");
let colors = ["red", "blue", "green", "yellow", "pink", "tomato"];

let click = 0;

function clickMe() {

    if (click == colors.length - 1) {
        clickme.style.background = colors[click];
        click = 0;
    } else {
        clickme.style.background = colors[click];
        click++;
    }
}