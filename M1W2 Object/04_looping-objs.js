// c - style, for..of, for...in

const obj = {
  name: 'joe',
  age: 100,
  isGrad: false,
  something: function() {
    return this.this
  },
  myName: {
    name: 'joe'
  }
}

// for(const key in obj) {
//   console.log(key, obj[key]);
// }

console.log(obj.myName.name);