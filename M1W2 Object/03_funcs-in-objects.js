// Functions inside of an object is called a method
const user = {
  firstName: "Alice",
  lastName: "Wonderland",
  fullname: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(user.fullname());


const myCar = {
  color: 'green',
  brand: 'honda',
  model: "CRV",
  startCar: function () {
    return `${this.model} starts!`
  },
  secondCar: {
    color: 'blue',
    brand: 'ford',
    model: 'F150',
    startCar: function () {
      return `${this.model} starts!`
    }
  }
}

console.log(myCar.startCar());
console.log(myCar.secondCar.startCar());