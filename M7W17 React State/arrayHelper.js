// Map forEach

// map => Creates a new a Array
// forEach => for(let items of arr) {}

const arr = [1,2,3,4,5,6]

const oddNumbers = arr.map((items) => {
  if(items % 2 === 1) {
    return items;
  }
})

console.log(oddNumbers);

// Filter
const evenNumbers = arr.filter((items, i) => {
  // if(items % 2 === 0) {
  //   return items
  // }

  return items % 2 === 0
})

console.log(evenNumbers);

const items = [
  {username: "John", num: 100},
  {username: "Steve", num: 0},
  {username: "John", num: 10},
]

// Find
const foundItem = items.find((items) => {
  return items.username === "Steve";
})

console.log(foundItem);