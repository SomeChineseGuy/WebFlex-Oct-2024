const higherOrderFunc = (callback) => {
  const user = {username: 'joe'}
  console.log('1. before SetTimeout');
  setTimeout(() => {
    user.username = 'steve'
    console.log('3. inside of the setTimeOut')
    callback(user)
  }, 0)
  console.log('2. after the settimeout');
}

console.log('4. before calling the function');
higherOrderFunc((user) => {
  console.log(user.username);
  console.log('6 Inside of the callback');
})
console.log('5. after calling the function');