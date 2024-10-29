// The function will take in any number of numbers from our CML and add all the numbers up together. We will not take negative numbers

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
const sliced = args.slice(2);

function sumOfArr(arr) {
  let num = 0;
  // for of - gives us each item in the array
  for(let item of arr) {
    const strToNum = Number(item)
    if(strToNum > 0) {
      num += strToNum;
    }
    // num = strToNum + num;
  }

  return num;



  // for in - gives us each position in the array
  // for(let item in arr) {
  //   console.log(item);
  // }
  // c style for
  // for(let i = 0; i < 100; i++) {
  //   console.log(i);
  // }

}


console.log(sumOfArr(sliced));
// falsey values are values that will always return false in a check
// false
// undefined - is a false value that is GIVEN to you
// null - is a false value that you MAKE
// 0
// ""
// []
// {}
// NaN
console.log();
const somethingElse = (para) => {
  
}