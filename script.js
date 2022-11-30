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
    myText.innerHTML += `<li>${myInput.value}</li>`
   

})

document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        myDiv.style.display = 'block'
        arr.push(myInput.value)
        
        myText.innerHTML += `<li>${myInput.value}</li>`
    
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

icon.addEventListener('click', ()=>{
    if(icon.src == "/src/Group 73.png"){
        icon = "/src/Group 91.png"
        arr.sort()
        arr.forEach((item,index)=>{
            myText.innerHTML += `<li>${item}</li>`
        })

    }
    console.log('hahaa')
})
