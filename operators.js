// operators : 
//             arthimetic operators
//             unary operators
//             assignment operators
//             comparison operators
//             logical operators


                  // arthimetic opterators

console.log('a =' ,a ,'b =',b);
console.log('a+b =', a+b);
console.log('a-b =', a-b);
console.log('a*b =', a*b);
console.log('a/b =', a/b);
console.log('a%b =', a%b);

                   // unary opterators

console.log(a);
a++;
console.log(a);
a--;
console.log(--a);

                    // assignment operators

let s= 5;

console.log(s+=10);
s+=3;
console.log(s);
s-=2;
console.log(s);
s*=2;
console.log(s);
s/=2;
console.log(s);
s**= 4;
console.log(s);


                  // comperison operators

let w= 5;

console.log('5==5 ', w==s );
console.log('5!=5 ', w!=s );
console.log('5==5 ', w==s );


// true javascript convert string to number then compare it 
console.log("5=='5'", 5=="5" ); // true

// === and !== is also check type with compare value (strickly compare )
console.log("5==='5'", 5==="5" );
console.log("5!=='5'", 5!=="5" );
console.log('5 < 7', 5 <7);
console.log('5 > 7', 5 >7);
console.log('5 <= 7', 5 <=7);

                    // logical operators

        //  OR 
        //  AND 
        //  NOT 

let i=3;
let k=5;
console.log(" condi1 || condi2 " , i<=k || i===k );
console.log(" condi1 && condi2 " , i<=k && i===k );
console.log("!(5 < 7)" , !(5 < 7) );
   
   