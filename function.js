//          normal function
function myfunction() {
  console.log("This is my function");
}

function add(x, y) {
  let sum = x + y;
  return sum;
}

let result = add(4, 5);
console.log(result);

//              Arrow function

/* we can store function in varibale  */
const arrowsum = (a, b) => {
  // arrow sum fuction
  console.log(a + b);
};
const arrowmulti = (a, b) => {
  // parametrize function
  console.log(a * b);
};
/* arrow function is the part of mof=dern js */

const print = () => {
  console.log("hello! how are you");
};

//          Practice Question

/*  Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string  */
let count = 0;
function vowelscount(str) {
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "char" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

//                     forEach Loop in Arrays

/* foreach function is a JavaScript array method that executes a callback function once for each element in 
an array. It is mainly used for iterating over arrays and performing actions, but it does
not return a new array. */

/*  arr.forEach( callBackFunction )
CallbackFunction : A callback is a function passed as an argument to another function. */

// with normal function
const fruits = ["apple", "banana", "mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
// with arrow function (we mostly use this in modern js)
const number = [1, 2, 3, 4];

number.forEach((numbers) => {
  console.log(numbers);
});

//        we use three parametors in call back function

/*      value → Current element
        index → Current element's index (optional)
        array → The original array (optional)
 */
number.forEach((numbers, index, number) => {
  console.log(numbers, index, number);
});

//  For a given array of numbers, print the square of each value using the forEach loop

const value = [2, 6, 4, 8];
value.forEach((val) => {
  console.log("foreach :", val * 2);
});

// 2nd way
const square = (num) => {
  console.log(num * num);
};
value.forEach(square);

//        map method
/* map is array method use to loop every element of array same like for each but it return new array */

const v = [3, 6, 9, 12];
let newarr = v.map((vs) => {
  return vs * 85;
});
console.log("new :", newarr);

//         filter method

/* filter() is used to select elements that match a condition and return them in a new array. */

const values = [3, 8, 1, 3, 9, 0, 6];
let results = values.filter((val) => {
  return val > 4;
});
console.log(results);

//          reduce method

/* reduce() is used to reduce all elements of an array into a single value. */

// const values =[3,8,1,3,9,0,6];

const output = values.reduce((pre, curr) => {
  return pre + curr;
});
console.log(output);

/*                Difference from other methods

Method          Purpose	                              Returns

forEach()	Perform an action	                     undefined
map()	      Transform every element	             New array
filter()	Keep matching elements	                 New array
reduce()	Combine all elements into one value 	Single value */

//  We are given array of marks of students. Filter our of the marks of students that scored 90+

const marks = [56, 88, 99, 79, 89, 98, 96, 92, 59, 86, 91];
let output_marks = marks.filter((result) => {
  return result > 90;
});
console.log(output_marks);

/*  Take a number n as input from user. Create an array of numbers from 1 to n.
    Use the reduce method to calculate sum of all numbers in the array.
    Use the reduce method to calculate product of all numbers in the array. */

const n = prompt("enter number :");
let num_arr = [];
for (let i = 1; i <= n; i++) {
  num_arr[i - 1] = i;
}
console.log(num_arr);

let sum = num_arr.reduce((pre, curr) => {
  return pre + curr;
});
console.log("Sum :", sum);

let factorial = num_arr.reduce((pre, curr) => {
  return pre * curr;
});
console.log("factorial :", factorial);
