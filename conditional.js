//conditional statement
// let age = 16;
// if (age >= 18) {
//     console.log("You Can Vote")
// }
// if (age < 18) {
//     console.log("You Can Not Vote")
// }
//if statement
// let mode = "light";
// let color;
// if (mode === "dark") {
//     color = "black";
// }
// if (mode === "light") {
//     color = "white";
// }
// console.log(color);

//if-else statement
// let mode = "blue";
// let color;
// if (mode === "dark") {
//     color = "black";
// } else {
//     color = "white";
// }
// console.log(color);
// let age = 16;
// if (age > 18) {
//     console.log("you can vote");
// } else {
//     console.log("you cannot vote");
// }
// let num = 10000;
// if (num % 2 === 0) {
//     console.log(num, "is even");
// } else {
//     console.log(num, "is odd");
// }

//else-if statment
// let mode = "silver";
// let color;
// if (mode === "dark") {
//     color = "black";
// } else if (mode === "pink") {
//     color = "pink";
// } else if (mode === "blue") {
//     color = "blue";

// } else {
//     color = "white";
// }
// console.log(color);

//ternary operator
// let age = 15;
// let result = age > 18 ? "adult" : "not adult";
// console.log(result);

//switch statement
// let exp = 5;
// switch (exp) {
//     case -1:
//         console.log("Nagative value");
//         break;
//     case 0:
//         console.log("suny value");
//         break;
//     case 1:
//         console.log("one value");
//         break;
//     case 2:
//         console.log("second value");
//         break;

//     default:
//         console.log("default value");
//         break;
// }
// let num = prompt("Enter A Number");
// if (num % 5 === 0) {
//     console.log(num, "is a multiple of 5");
// } else {

//     console.log(num, "is NOT a multiple of 5");


// }
let score = prompt(" Enter Your Score (0-100):");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 70 && score <= 89) {
    grade = "B";
} else if (score >= 60 && score <= 69) {
    grade = "C";

} else if (score >= 50 && score <= 59) {
    grade = "D";
} else {
    grade = "F";
}
console.log("According To Your Scores , Your Grade Was", grade);