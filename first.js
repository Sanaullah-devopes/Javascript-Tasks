
 let name= "Sanaullah";

console.log(name);
console.log("I Love js");
let price = 5;
let number =10;
let uni = "superior";
isgood = true;
let x;

/* how we can redefined let variable */
let y=null;
y=100;
 
const student = { // its a object collection of keys valus
   age: 20,
   name : "sanaullah",
   cgpa: 3,
};
/*   we can access keys of objects using this ways */
console.log(student["name"]);
console.log(student.age);

/* in object how we can update keys value */
student["name"]="ali";
student["age"]= student["age"] +1;

console.log(student["name"]);
console.log(student["age"]);

/* note: we can't updated const variable but we can update const object keys */



/* when we add number in string then we see the number is combine
  not add of that string 
*/
let a=10;
let b=2;
let c ="abd";

console.log(a+b);  // output : 11
console.log(c+33); //output :  abd33
