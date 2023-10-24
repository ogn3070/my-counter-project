//Example on create a variable, and set value to it and print the output by using the console.log in-builtin functions

//1. create a variable, my Age, and set its value to your age, then.

// let myAge = 25  //Solution...

// //2. log the myAge to the console.

// console.log(myAge)  //Solution...

// Basic Mathematical Operations

// let add = 5 + 7  //Additional
// console.log(add) //Solution

// let sub = 5 - 7  //Substraction
// console.log(sub) //Solution

// let div = 5 / 7  //Division
// console.log(div) //Solution

// let multy = 5 * 7 //Multiplication
// console.log(multy) //Solution
// //thats not a good way to writes code for calculations.

// let add1 = 5
// let add2 = 7
// let adds = add1 + add2
// console.log(adds) //Solution

//1. create two variables, add1 and add2
//2. multiply the two variables together anf store the result in adds.
//3. console adds

// let add1 = 5
// let add2 = 7
// let adds = add1 * add2
// console.log(adds) //Solution

//Increment the counter

// let count = 0
// //count + 1(++1 or += 1)
// count =  count + 1
// console.log(count) //Solution

// let count = 5
// //count + 10(+= 10)
// count =  count + 10
// console.log(count) //Solution

// let count = 25
// //count - 10(-=10)
// count =  count - 10
// console.log(count) //Solution

//1. create a variable, bonusPoints. Initialize it as 50. Increased it to
// let bonusPoints = 50
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints) //
// //2. Decrease it down to 25, and the finally increase it to 70
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints) //

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints) //

//pseudo: procedure,imitation(resemblance) of code
// function increment() {

//     console.log("increase the sentence");
// }

// increment()

// function number () {
//     console.log(42)
// }
// number ()

// let lap1 = 34
// let lap2 = 47
// let lap3 = 59

// function sum3LapTimes () {
//     let lapsTimeSum = lap1 + lap2 + lap3
//     console.log(lapsTimeSum)
// }
// sum3LapTimes ()

// let lapComplete = 0
// function lapIncrement() {

//     lapComplete = lapComplete + 1
//     console.log(lapComplete)
// }

// lapIncrement()
// lapIncrement()
// lapIncrement()
// console.log(lapComplete)

// let count = 0
// function increment() {
//     count = count + 1
//     // alert(count);
//     console.log(count);
// }

// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// increment()
// console.log(count);

// let completedRace = 0

// function raceIncrement () {

//     completedRace =completedRace + 1;
//     console.log(completedRace);

// }

// raceIncrement ()
// raceIncrement ()
// raceIncrement ()

// console.log(completedRace);

//using js to increase our count
let countEl = document.getElementById("count-el");

// console.log(countEl)

let count = 0;

//this will be doing infinity increment(continuous  addition)
// function increment() { 
//     count = count + 1;
//     countEl.innerText = count;
//     alert("Count of: ", + count);
//   }

//   function save() {
//     alert("Saved Count of: ", + count);
//   }

  //this will do only 5 times additional sum up


for(i = 0; i < 5; ++i); {

  function increment() {
    count = count + 1;
    countEl.innerText = count;
    console.log("Count of: " + count);
  }

  function save() {
    alert("Saved Count of: " + count);
  }
}
