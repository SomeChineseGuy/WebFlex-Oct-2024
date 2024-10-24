// The function will take in any number of numbers from our CML and add all the numbers up together. We will not take negivate numbers

// to read our command line arguments

// console.log(process.argv);

// let myName = "Alvin"
// myName = "Joe!"

// console.log(myName);

// const arr = [1,2,3]

// arr.push(10)
// console.log(arr);
// arr = {
//   a: "Alvin"
// }

// what is the difference between let and var
// console.log(myName);
// let myName = "Alvin"
// console.log(myName2);
// var myName2 = "Steve"

// if(true) {
//   var num = 10;
// }

// console.log(num)

const args = process.argv;

console.log(args.slice(2));

const sliced = args.slice(2);

console.log(sliced)