// *********************** Task 1 start ************************************
console.log("************************  Task-1  ***********************");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfEvenNumbers(_arr) {
  let sum = 0;
  for (let i = 0; i < _arr.length; i++) {
    if (_arr[i] % 2 === 0) {
      sum += _arr[i];
    }
  }
  return sum;
}

console.log(
  `
  Sum of even number inside the array "[${arr}]" is equal to "${sumOfEvenNumbers(
    arr
  )}"
  `
);
// *********************** Task 1 end ************************************

// ************************************************************************

console.log("********************************************************");

// *********************** Task 2 start ************************************

console.log("************************  Task-2  ***********************");

let string = "Hello World";

function vowelsCount(_string) {
  let vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < _string.length; i++) {
    if (vowels.includes(_string[i].toLowerCase())) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(
  `
  Total number of vowels inside the string "${string}" is equals to "${vowelsCount(
    string
  )}"
  `
);

console.log("********************************************************");

// *********************** Task 2 end ************************************

// ************************************************************************

// *********************** Task 3 start ************************************

console.log("************************  Task-2  ***********************");

let arr2 = ["Pakistan", "India", "Banglades", "Afghanistan"];

function maxLength(arr) {
  let longestStr = {
    string: "",
    length: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestStr.length) {
      longestStr.string = arr[i];
      longestStr.length = arr[i].length;
    }
  }
  return longestStr;
}
let _maxlength = maxLength(arr2);
console.log(
  `
  longest string inside the array "[${arr2}]" is "${_maxlength.string} & thier length is ${_maxlength.length}"
  `
);
console.log("********************************************************");

// *********************** Task 3 end ************************************
