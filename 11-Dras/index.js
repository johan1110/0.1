const dark = function(){
    document.body.style = "background-color:black;"
}

const dark2 = function(){
    document.body.style = "background-color:blue;"
}

const dark3 = function(){
    document.body.style = "background-color:red;"
}

const dark4 = function(){
    document.body.style = "background-color:orange;"
}

const dark5 = function(){
    document.body.style = "background-color:black;"
}



let count = 16
function text(){
    count = count +2 
    document.body.style.fontSize = count + "px"
}

let count2 = 16
function text2(){
    count2 = count2 -2 
    document.body.style.fontSize = count2 + "px"
}



const ranglar = function(){
    let color = prompt("Rangni kiriting")
    document.body.style.backgroundColor = color
}