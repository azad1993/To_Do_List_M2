let myButton = document.querySelector(".mybutton");
let myInput = document.querySelector("input");
let myText = document.querySelector(".textul");
let myDiv = document.getElementById("textdiv");
let clear = document.querySelector(".clear");
let plus = document.querySelector(".mybutton2");
var icon = document.querySelector("#myicon");


let arr = [];

myButton.addEventListener("click", () => {
  if (myInput.value) {
    myDiv.style.display = "block";
    arr.push(myInput.value);
    myText.innerHTML += `<img id="clear2" src ="./src/Group77.png"/><li>${myInput.value}</li>`;
  }
});

document.addEventListener("keypress", function (e) {
  if (myInput.value) {
    if (e.key === "Enter") {
      myDiv.style.display = "block";
      arr.push(myInput.value);
      myText.innerHTML += `<img id="clear2" src ="./src/Group77.png"/><li>${myInput.value}</li>`;
    }
  }
});

clear.addEventListener("click", () => {
  myInput.style.display = "none";
  myInput.value = "";
  clear.style.display = "none";
});

plus.addEventListener("click", () => {
  myInput.style.display = "block";
  clear.style.display = "block";
});

icon.addEventListener("click", (e) => {
  var src = e.target.src.split("/");

  if (src[src.length - 1] == "Group73.png") {
    icon.src = "./src/Group91.png";
    arr.sort();
    myText.innerHTML = "";
    arr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear2" src ="./src/Group77.png"/><li>${item}</li>`;
    });
  } else {
    icon.src = "./src/Group73.png";
    arr.reverse();
    myText.innerHTML = "";
    arr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear2" src ="./src/Group77.png"/><li>${item}</li>`;
    });
  }
});



clear.addEventListener("click",(e)=>{
console.log("icon clicked")
})
