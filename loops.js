//         for loop

let sum = 0;
for (let j = 1; j <= 100; j++) {
  sum += j;
}
console.log(sum);

//              while loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//              do-while loop

let k = 1;
do {
  console.log("goole");
  k++;
} while (k <= 6);

//                  for of loop (used string and array iteration)

let name = "Javascript";
for (let p of name) {
  // iterator gets characters of name
  console.log(p);
}

//                  for in loop (used in objects and array)

let student = {
  name: "john",
  age: 37,
  city: "new york",
};
for (let key in student) {
  console.log(key, student[key]);
}
