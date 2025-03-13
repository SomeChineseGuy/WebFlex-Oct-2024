// Classes
// Why classes over an object
// Classes work like object

class Rectangle { 
  // constructor is the blue print to your class
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }


  values() {
    return `Length:${this.length} Width:${this.width}`
  }

  area() {
    return this.width * this.length;
  }

}

const myRectangle = new Rectangle(10, 50);

// console.log(myRectangle.values())
// console.log(myRectangle.area())

class Prism extends Rectangle { 
  constructor(length, width, height) {
    super(length, width)
    this.height = height;

    this.area = this.area.bind(this)
  }

  allValues() {
    return `Length:${this.length} Width:${this.width} Height: ${this.height}`
  }

  area() {
    return this.width * this.length * this.height;
  }
}

const myPrism = new Prism(20, 30, 100);
// console.log(myPrism.values());
// console.log(myPrism.allValues());
// console.log(myPrism.area());

const log = console.log;

log(console)

const area = myPrism.area;
console.log(myPrism.area());
console.log(area());