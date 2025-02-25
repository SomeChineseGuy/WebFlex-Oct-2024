const arr = [1,2,3,4,5];

// What is the difference between arr.forEach and arr.map
// arr.forEach((ele) => {
//   console.log(ele);
// })

// Map will create a NEW arr
const newArr = arr.map((ele) => {
  return ele + 10;
})

console.log(arr);
console.log(newArr);

for(let ele of arr) {
  console.log(ele)
}

arr.forEach((ele) => {
  console.log(ele)
  ele += 10
})