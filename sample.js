document.body.style.background = "red";
document.body.childNodes[3].innerText="Headline";

let heading = document.getElementById("heading");  
console.dir(heading); 
let para = document.getElementsByClassName("para");  
console.dir(para); 
let teg= document.getElementsByTagName("p");
console.dir(teg);

let elemt=document.querySelector(".para");
console.dir(elemt);




let div = document.querySelector("div");
console.dir(div);
let h2= document.querySelector("h2");
console.dir(h2);
h2.innerText +=" from students";
let index=1;
let box =document.querySelectorAll(".box");
for (let boxs of box){
    boxs.innerText=`box number ${index}`;
    index++;
}
let val =box.getAtteibute

// create element in js
let newheading=document.createElement("newheading");
newheading.innerText="New one";

// addition of new element
let body =document.querySelector("body");
body.prepend(newheading);
let button=document.createElement("button");
button.innerText="click";
body.append(button);

newheading.remove();