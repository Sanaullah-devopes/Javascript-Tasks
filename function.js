//          normal function
function myfunction(){
    console.log("This is my function");
}

function add (x,y){
    let sum =x+y;
    return sum;
}

 let  result =add (4,5);
  console.log (result);
  
//              Arrow function


/* we can store function in varibale  */
const arrowsum = (a,b) => {     // arrow sum fuction
     console.log (a+b);
};
const arrowmulti = (a,b) => {  // parametrize function
    console.log(a*b);
};
/* arrow function is the part of mof=dern js */

const print=()=>{
    console.log ("hello! how are you");
};

//          Practice Question

/*  Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string  */
let count=0;
function vowelscount(str){
        for(let char of str){
            if (char ==="a"|| char==="e"|| char==="char" || char==="o"|| char==="u"){
                    count++;
            }
        }
        console.log(count);
}