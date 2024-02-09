// document.getElementById("heading").innerHTML = "Hello World !"
// console.log("Hello World");

//! variable

// var variablename = 5
// console.log(variablename);

// let magan = 10
// let _12magan12 = "Hello"
// console.log(magan)

//?varible type
// var
// let
// const
// var x = 5
// var x = 10
// console.log(x)

//!blockscope

// let x = 5


// {
//     let x = 10
//     console.log(x)
// }
// console.log(x)

// function myfunction() {
//     let y = 20
//     console.log(y);
// }
// myfunction()

// //?var
// var m = 5


// {
//     console.log(m)
//     var m = 9
//     console.log(m)
// }

//?let

// let x = 30
// console.log(x);
// x = 40
// console.log(x)

//?const

// const x = 5
// console.log(x);
// x = 10
// console.log(x);

//!Arithmatic Operator

// let x = 5
// console.log(x + 5);
// console.log(x - 5);
// console.log(x * 5);
// console.log(x / 5);
// console.log(x ** 5);
// console.log(x % 5);

// x++
// console.log(x)
// x--
// console.log(x)

//!Assignment Operator
// let x = 5
// console.log(x += 5);
// console.log(x -= 5);
// console.log(x *= 5);
// console.log(x /= 5);
// console.log(x %= 5);
// console.log(x **= 5);

//?QnA

// let x = 5
// let y = "10"
// console.log(x + y);
// console.log(x + 15 + y)

//!DataTypes
/*
1.Number
2.String
3.boolean
4.Undefined
5.Null
6.Bigint
7.Symbol
8.Object
Object Datatype
1.An Object
2.An Array
3.A Date
*/

//?Number
// let x = 10
// console.log(typeof x);

// //?string
// let x = "Dixit"
// console.log(typeof x);

// let x = 40
// console.log(typeof String(x));
// console.log(typeof Number(x));
// console.log(Number(false)); //0
// console.log(Number(true)); //1

//?object - array
// const person = ["Chagan", "Magan", "John", "Duck"]
// console.log(typeof person);
// console.log(Array.isArray(person));

//?object
// const user = {
//     FirstName: "Dixit",
//     LastName: "Desai"
// }
// console.log(user.FirstName + "  " +
//     user.LastName);

//?date

// let today = new Date()
// console.log(today);

//?Null
// console.log(null)

//? NaN (not a number)
// console.log(typeof NaN)

//?undefined

// let cars;
// console.log(cars)

// let x = null
// x = [5, 6]
// console.log(x)

//!function


// function myfun(a, b) {
//     console.log(a + b);
// }
// myfun(10, 15);
// function sum(a, b, c) {
//     let sums = a + b + c
//     return sums

// }

// function percentage(tt) {
//     let per = tt / 300 * 100
//     console.log(per)

// }
// let total = sum(55, 60, 65)
// percentage(total)

// function celcuies(f) {
//     return (5 / 9) * (f - 32)

// }
// let value = celcuies(77)
// console.log(value)


// function button() {
//     let heading = document.getElementById("heading")
//     heading.innerHTML = "Hello Dixit Desai"
//     heading.style.backgroundColor = "tomato"
// }


// //?objectin function
// const person = {
//     fname: "Dixit",
//     lname: "Desai",
//     age: 22,
//     fullname: function() {
//         return this.fname + " " + this.lname

//     }
// }
// console.log(person.fullname());
// const x = [5, 6, 15, 3];
// console.log(x.filter((val) => {
//     return 6 < val;
// }));
// /const x = [8, 12, 6, 15, 20, 7];
// console.log(x.filter((val) => {
//     return 6 < val
// }))

// function myclick() {
//     let click = document.getElementById("click")
//     click.style.backgroundColor = "black"
//     click.style.color = "white"

// }

// function myclick() {
//     let click = document.getElementById("click")
//     click.style.backgroundColor = "blue"
//     click.style.color = "white"

// }




if (5 > 10) {
    console.log(true);
} else if (5 === "5") {
    console.log(true);
} else {
    console.log(false)
}