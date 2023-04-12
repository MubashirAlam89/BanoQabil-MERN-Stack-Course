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
  `Sum of even number inside the array "[${arr}]" is equal to "${sumOfEvenNumbers(
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
  `Total number of vowels inside the string "${string}" is equals to "${vowelsCount(
    string
  )}"`
);

console.log("********************************************************");

// *********************** Task 2 end ************************************
