//                 alert and input commend prompt

alert("hello");
let name = prompt("Whats your name ?");
console.log(name);

/*         Task: Get user to input a number using prompt(“Enter a number:”). 
                 Check if the number is a multiple of 5 or not. */

let number = prompt("Enter a number :");
if (number % 5 === 0) {
  console.log(number, "is a multiple of 5");
} else {
  console.log(number, "is not a multiple of 5");
}

/* Task 2:  Write a code which can give grades to students according to their scores:
            80-100, A
            70-79, B
            60-69, C
            50-59, D
            0-49, F */

let score = prompt("Enter your score :");
let grade;
if (score >= 80 && score <= 100) {
  grade = "A";
} else if (score >= 70 && score <= 79) {
  grade = "B";
} else if (score >= 70 && score <= 79) {
  grade = "C";
} else if (score >= 60 && score <= 69) {
  grade = "D";
} else if (score >= 0 && score <= 49) {
  grade = "F";
}
console.log("Grade= ", grade);
