let i = 0;

console.log('top of file');
const interval = setInterval(() => {

  console.log(i);
  i += 1

  if(i === 10) {
    clearInterval(interval) // clean up - stop the interval
  }
  
}, 500)

console.log('bottom of file');