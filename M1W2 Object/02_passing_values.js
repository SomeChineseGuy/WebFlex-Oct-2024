// let num = 5;
// const changeNum = function (number) {
//   console.log('before the change', number);
//   number = 10;
//   console.log('We are inside of the function', number)
// }

// console.log('before the calling of the function', num);
// changeNum(num)
// console.log('after calling the function', num);

// let num = 5;
// let num2 = num;
// num2 = 10;
// console.log(num);
// console.log(num2);


const obj = {
  student: "joe",
  age: 100
}


// const obj2 = obj;
// console.log(obj2);
// obj2.student = "Ryan";
// console.log(obj.student);
// console.log(obj2.student);

const changeObj = function(newObj) {
    newObj = obj;
    newObj.student = 'steve'
    console.log('inside of the Change Obj', newObj);
}

console.log('before the function call ', obj);
changeObj(obj);
console.log('after the function call', obj);

// const arr = [1,2,3,4]
// console.log(arr);
// const arr2 = arr;
// console.log(arr2);
// arr2[0] = 10
// console.log(arr);
// console.log(arr2);