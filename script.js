let myButton = document.querySelector(".mybutton");
let myInput = document.querySelector("input");
let myText = document.querySelector(".textul");
let myDiv = document.getElementById("textdiv");
let clear = document.querySelector(".clear");
let plus = document.querySelector(".mybutton2");
var icon = document.querySelector("#myicon");
var clear2 = document.querySelector("#clear2");
var count = -1;
let arr = [];



var myArr = localStorage.getItem("array").split(",");
console.log(myArr)
myArr.forEach((item, index) => {
  if(myArr[index] != ""){
myText.innerHTML += `<img id="clear${index}" src ="./src/Group77.png"/><li>${item}</li>`
  }
});

myButton.addEventListener("click", () => {
  if (myInput.value) {
    count++;
    myDiv.style.display = "block";
    arr.push(myInput.value);
    myText.innerHTML += `<img id="clear${count}" src ="./src/Group77.png"/><li>${myInput.value}</li>`;
    localStorage.setItem("array", arr);
  }
});

document.addEventListener("keypress", function (e) {
  if (myInput.value) {
    if (e.key === "Enter") {
      count++;
      myDiv.style.display = "block";
      arr.push(myInput.value);
      myText.innerHTML += `<img id="clear${count}" src ="./src/Group77.png"/><li>${myInput.value}</li>`;
      localStorage.setItem("array", arr);
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
  myArr = localStorage.getItem("array").split(",");
  if (src[src.length - 1] == "Group73.png") {
    icon.src = "./src/Group91.png";
    myArr.sort();
    myText.innerHTML = "";
    myArr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear${index}" src ="./src/Group77.png"/><li>${item}</li>`;
    });
    localStorage.setItem("array", myArr);
  } else {
    icon.src = "./src/Group73.png";
    myArr.reverse();
    myText.innerHTML = "";
    myArr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear${index}" src ="./src/Group77.png"/><li>${item}</li>`;
      
    });
    localStorage.setItem("array", myArr);
  }
});

myText.addEventListener("click", (e) => {
  myArr = localStorage.getItem("array").split(",");
  if (e.target.id) {
    console.log(e.target.id[e.target.id.length - 1]);
    delete myArr[e.target.id[e.target.id.length - 1]]
    myText.innerHTML = "";
    myArr.forEach((item, index) => {
      myText.innerHTML += `<img id="clear${index}" src ="./src/Group77.png"/><li>${item}</li>`;
    });
    if (myText.innerHTML == "") {
      myDiv.style.display = "none";
    }
    const results = myArr.filter(element => {
      return element !== '';
    });
    localStorage.setItem("array", results);
  }
});
