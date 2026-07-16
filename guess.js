let num = 56;
let guess = prompt("Enter any random number :");
do {
  guess = prompt("you entered wrong number. Try again  :");
} while (guess != num);
console.log("Congratulation");
