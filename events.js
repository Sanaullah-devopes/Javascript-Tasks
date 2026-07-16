// The change in the state of an object is known as an Event

document.querySelector("#bt").onclick = (e) => {
  console.log(e);
  console.log(e.type);
  console.log("hello");
};
document.querySelector("#bt").ondblclick = () => {
  console.log("hello 2");
};

// Event object: It is a special object that has details about the event
document.querySelector("#box").onmouseover = (event) => {
  console.log(event.type);
  console.log(event.target);
  console.log("box");
};

// Event listener

let button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("run listener");
  console.log(event.type);
  console.log(event.target);
});

//  separatly define function in variable

let buttondata = () => {
  console.log("run listener");
  console.log(event.type);
  console.log(event.target);
};
button.addEventListener("click", buttondata);
button.removeEventListener("click", buttondata);

/* Create a toggle button that changes the screen to dark-mode when clicked & light-mode
when clicked again. */

let mode = document.querySelector(".mode");
let curmode = "light";
function check() {
  if (curmode == "light") {
    curmode = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    curmode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(curmode);
}
mode.addEventListener("click", check);

mode.addEventListener("click", () => {
  console.log("change mode");
});
