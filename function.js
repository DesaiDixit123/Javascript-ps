// function myfunction() {
//     console.log("This Is A My Function1");
//     console.log("This Is A My Function2");


// }
// myfunction();
// function functionName(msg, n) { //parameter
//     console.log(msg * 5);

// }
// functionName("i loves js", 100); //argument

// function sum(x, y) {
//     console.log(x + y);

// }
// sum(50, 30);
// function sum(x, y) {
//     s = x + y;
//     return s;
//     console.log("this is a varables");
// }
// let val = sum(2, 3)
// console.log(val)

// const arrowSum = (a, b) => {
//     console.log(a + b);
// }
// arrowSum(6, 6);

// const arrowMul = (a, b) => {
//     console.log(a * b);
// }
// arrowMul(5, 6);
// function countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }


//     }
//     console.log(count);
// }
// countvowels("apna college");

// const countvow = (str) => {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++;
//         }


//     }
//     console.log(count);
// }


// countvow("apna college");
// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printval(val) {
//     console.log(val);

// })


// function myfunc(num) {
//     return num;
//



// let arr = ["ahmedabad", "surat", "mumbaai", "delhi", "gandhingar"]
// arr.forEach(function val(val) {
//     console.log(val.toUpperCase());

// })

// let arr = ["ahmedabad", "surat", "mumbaai", "delhi", "gandhingar"]
// arr.forEach((val, idx, arr) => {
//     console.log(val.toUpperCase(), idx, arr);

// })

// let num = [2, 4, 6, 8, 10]
// num.forEach((num) => {
//     console.log(num * num);

// })

// let x = myFunction(4, 3);
// console.log(x);

// function myFunction(a, b) {
//     return a * b;
// }
// let text = "Outside : " + typeof car;
// console.log(text);

// function carDetail() {
//     let car = "Volvo";
//     let text = "Inside : " + typeof car + " " + car;

//     console.log(text);
// }

// carDetail();


// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(60, 20));

// //before arrow
// let hello = function() {
//     return "Hello World";
// }
// console.log(hello());
// //after arrow
// let hello1 = () => {
//     return "Hello World";
// }
// console.log(hello1());

// let nums = [20, 40, 60, 80]
// nums.map((val) => {
//     console.log(val * val);
// })
// let nums1 = [20, 40, 60, 80]
// let newarrs = nums1.map((val) => {
//     return val * 3;
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenArr = arr.filter((val) => {
//     return val < 4;
// });
// console.log(evenArr);


// let arr1 = [2, 5, 6, 10, 15];
// const output = arr1.reduce((pre, curr) => {
//     total = pre + curr;
//     arr1_length = arr1.length;
//     return total / arr1_length;
// })
// console.log(output);

// let marks = [20, 50, 60, 93, 92, 95, 91, 85];
// const result = marks.filter((val) => {
//     return val > 90;
// });
// console.log(result);


let n = prompt("Enter A Number:")
let arr = [];
for (let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}
console.log(arr);
let sum = arr.reduce((prev, curr) => {
    return prev + curr;
});
console.log("sum=", sum);
let factorial = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log("factorial=", factorial);