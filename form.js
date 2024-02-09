let input = document.getElementById("input")
let text = document.getElementById("text")

function submitBtn() {
    if (isNaN(input.value)) {
        text.innerHTML = "requried number not a string"
    } else if (input.value.length > 8) {
        text.innerHTML = "too high"
    } else if (input.value.length < 4) {
        text.innerHTML = "too low"
    } else {
        text.innerHTML = "Submit"
    }
}