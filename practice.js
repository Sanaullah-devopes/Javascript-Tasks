/* Prompt the user to enter their full name. Generate a username for them based on the input.
Start username with @, followed by their full name and ending with the fullname length. 
eg: user name = “shradhakhapra” , username should be “@shradhakhapra13 */

let fullname = prompt("Enter your name :");
let name = "@" + fullname + fullname.length;
console.log(name);
