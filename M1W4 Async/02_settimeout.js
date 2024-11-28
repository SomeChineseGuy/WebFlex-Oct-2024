// console.log('Top of the file');

// const timeout = setTimeout(() => {
//   console.log('Inside of the setTimeout')
// }, 2000)

// console.log('Bottom of the file');
// console.log(timeout);


// const obj = {
//   username: "Alvin",
//   id: 100,
//   _sayUsername: () => {
//     return `${this.username} is the current user`
//   },
//   sayUsername: () => {
//     return `${this.username} is the current user`
//   },
//   _sayID: () => {
//     return `${this.id}`
//   },
//   _getInfo: () => {
//     return _sayID() + _sayUsername()
//   }
// }



console.log('top of the file');

setTimeout(() => {
  console.log('A');
}, 1)

setTimeout(() => {
  console.log('B');
}, 1)

setTimeout(() => {
  console.log('C');
}, 1)

console.log('bottom of the file');