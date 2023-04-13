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
  Sum of even numbers inside the array "${arr}" is equals to "${sumOfEvenNumbers(
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

console.log("************************  Task-3  ***********************");

let arr2 = ["Pakistan", "India", "Banglades", "Afghanistan"];

function getLongestStr(arr) {
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
let longestString = getLongestStr(arr2);
console.log(
  `
  Longest string inside the array "${arr2}" is "${longestString.string} & thier length is ${longestString.length}"
  `
);
console.log("********************************************************");

// *********************** Task 3 end ************************************

// ************************************************************************

// *********************** Task 4 start ************************************

console.log("************************  Task-4  ***********************");

let arr3 = [11, 22, 33, 34, 45, 56, 67, 78, 89, 110];

function getAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(
  `
  Average of all numbers inside the array "${arr3}" is equals to "${
    getAverage(arr3) / arr3.length
  }"
  `
);
console.log("********************************************************");

// *********************** Task 4 end ************************************

// ************************************************************************

// *********************** Task 5 start ************************************

console.log("************************  Task-5  ***********************");

let student = {
  id: 01,
  name: "Ali",
  fatherName: "Arshad",
  email: "ali@gmail.com",
  address: "Karachi, Pakistan",
};

function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log(
  `
  An Array of keys of the object "${student}" is "${getObjectKeys(student)}"
  `
);

console.log("********************************************************");

// *********************** Task 5 end ************************************

// ************************************************************************

// *********************** Task 6 start ************************************

console.log("************************  Task-6  ***********************");

let students = [
  {
    id: 01,
    name: "Ahasan Hafeez",
    fatherName: "Muhammad Hafeez",
    email: "ahsanhafeez@gmail.com",
    address: "Karachi, Pakistan",
  },
  {
    id: 02,
    name: "bilal",
    fatherName: "Arshad",
    email: "bilal@gmail.com",
    address: "Karachi, Pakistan",
  },
  {
    id: 03,
    name: "Ali",
    fatherName: "Arshad",
    email: "ali@gmail.com",
    address: "Karachi, Pakistan",
  },
];

function getSpecificKeyValues(arr, key) {
  const values = [];
  for (let i = 0; i < arr.length; i++) {
    values.push(arr[i][key]);
  }
  return values;
}
let specificKey = "name";
console.log(
  `
 An Array of the values of spcified key ${specificKey} of the objects inside the array ${students} is "${getSpecificKeyValues(
    students,
    specificKey
  )}"
  `
);

console.log("********************************************************");

// *********************** Task 6 end ************************************

// ************************************************************************

// *********************** Task 7 start ************************************

console.log("************************  Task-7  ***********************");

let arr4 = ["a", "b", "c", "d", "e", "f", "a", "b", "c", "d", "e", "f"];
function getUniqueArr() {
  let uniqueArr = arr4.filter((e, i) => {
    return arr4.indexOf(e) === i;
  });
  return uniqueArr;
}
console.log(
  `
 The unique array "${getUniqueArr()}" which is filtered from array "${arr4}"
  `
);

console.log("********************************************************");

// *********************** Task 7 end ************************************

// ************************************************************************

// *********************** Task 8  start ************************************

console.log("************************  Task-8  ***********************");

let arr5 = [1, 2, 2, 2, 2, 2, 2, 3, 4];
function getProduct(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(
  `
 Product of all numbers inside the array "${arr5}" is equals to "${getProduct(
    arr5
  )}"
  `
);

console.log("********************************************************");

// *********************** Task 8 end ************************************

console.log("************  All Tasks Has Been Completed  ************");
