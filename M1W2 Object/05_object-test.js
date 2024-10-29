// write a function that takes in a string and counts and removes the vowels 
// "how are you today"
// {vowel: 9, str: "hwrtd"}

// panic attack x 3 
// repeat question
// edge cases 
// is y a vowel - yes
// what if there is a non letter value - add it to the str
// don't count spaces 
// Do NOT CODE ANYTHING

// make a empty variable {vowel: 0, str: ""}
// make array with all the vowels
// turn str into arr and loop over str
// check which letters are vowels
// if statement to check vowels if letter === 'a' || letter === 'e'
// place all the vowels in an array 

// if it's a space we skip it 

// check if the letter is inside of the array (includes) 
// if it is in the array increase the obj.vowel by 1
// if it's not in the array move to the next letter we add it to the empty obj.str
// return the obj

const checkForVowels = function (str) {
  const obj = {
    vowel: 0,
    str: ""
  }
  const vowel = {
    a: 'a',
    e: 'e',
    i: "i",
    o: 'o',
    u: "u",
    y: "y"
  }
  const words = str.split("")
  for(let letters of words) {
    if(letters !== " ") {
      if(vowel[letters]) {
        obj.vowel += 1
      } else {
        obj.str = obj.str + letters
      }
    }
  }
  return obj
}

console.log(checkForVowels("how are you today"))