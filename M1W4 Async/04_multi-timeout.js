const nums = [100, 500, 2000, 25, 575];

for(let num of nums) {
  setTimeout(() => {
    console.log(num)
  }, num)
}