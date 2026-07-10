let marks =[65,76,49,88,55];
console.log(marks);
console.log(marks[3]);

let student =["john","Anna","alis","spary"];

// for (let i=0; i< student.length; i++){
//     console.log(student[i]);
// }

for (let i of student){
    console.log(i);
}

let cities =["new york","berlin" ,"london" ,"dehli"];
cities.push("lhr");
for (let city of cities){
    console.log(city.toUpperCase());
}
/*  For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class. */
let students =[85, 97, 44, 37, 76, 60];
let average;
let sum =0;
for (let i of students){
    sum+=i;
}
average = sum/students.length;
console.log(`Average marks of student is : ${average}`);

/* For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer. */

let items=[250, 645, 300, 900, 50];
for (let i=0; i<items.length;i++){
    let offer =items[i]/10;
    items[i]=items[i]-offer;
}
for (let item of items){
    console.log(`New price of items : ${item}`);
}

/* . Create an array to store companies -> “Bloomberg”, “Microsoft”, “Uber”, “Google”, “IBM”, “Netflix”
a. Remove the first company from the array
b. Remove Uber & Add Ola in its place
c. Add Amazon at the end */

let companies =["Bloomberg","Microsof", "Uber", "Google", "IBM", "Netflix"];
companies.shift();
companies.splice(2,1,"ola");
companies.push("Amazon");