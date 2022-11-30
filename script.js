let myButton = document.querySelector('.mybutton')
let myInput = document.querySelector('input')
let myText = document.querySelector('.textul')
let myDiv = document.getElementById('textdiv')
let clear = document.querySelector('.clear')
let plus = document.querySelector('.mybutton2')
var icon = document.querySelector('#myicon')


let arr = []

myButton.addEventListener('click', ()=>{
    myDiv.style.display = 'block'
    arr.push(myInput.value)
    myText.innerHTML += `<li>${myInput.value}</li><img class="clear2" src ="./src/Group77.png"/>`
   

})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myDiv.style.display = 'block'
        arr.push(myInput.value)
        myText.innerHTML += `<li>${myInput.value}</li><img id="clear2" src ="./src/Group77.png"/>`
        
    }
});


clear.addEventListener('click', ()=>{
    myInput.style.display = 'none'
    myInput.value = ''
    clear.style.display = 'none'
})

plus.addEventListener('click', ()=>{
    myInput.style.display = 'block'
    clear.style.display = 'block'
    
})

icon.addEventListener('click', (e)=>{
    
    var src = e.target.src.split('/')
    
    if(src[src.length-1] == "Group73.png"){
        icon.src = "./src/Group91.png"
        arr.sort()
        myText.innerHTML = ''
        arr.forEach((item,index)=>{
            myText.innerHTML += `<li>${item}</li`
        })
        
    }else {
        icon.src = "./src/Group73.png"
        arr.reverse()
        myText.innerHTML = ''
        arr.forEach((item,index)=>{
            myText.innerHTML += `<li>${item}</li>`
        })
    }
    
})
