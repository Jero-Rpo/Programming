//Adivinar el número 
var btn = document.querySelector("#btn")

function rndmNum(){
    console.log("Bienvenido al juego de adivinar el número, comencemos!")
    var randNum = Math.floor(Math.random()*10) + 1
    let guess=0
        while(guess!=randNum){
        guess = parseInt(prompt("Introduzca un número entre 1 y 10"))
        if(isNaN(guess)==true){
            alert("Introduce solo números")
            return;
        }else{
        if(guess<randNum){
            alert("Demasiado bajo!")
        }else if(guess>randNum){
            alert("Demasiado alto!")
        }else{
            alert("Correcto, el número secreto era " + randNum)
            return;
        }
     }
    }

}

btn.addEventListener("click", rndmNum)