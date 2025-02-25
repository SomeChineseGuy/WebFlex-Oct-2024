let count = 0;
let username = "Alvin";

const increment = () => {
  count ++
  console.log(count);
}


increment();
increment();
increment();

class Counter {
  constructor() {
    this.count = 0
  }

  increment() {
    this.count++
    console.log(this.count)
  }
}

const counter = new Counter();
counter.increment()
counter.increment()
counter.increment()
