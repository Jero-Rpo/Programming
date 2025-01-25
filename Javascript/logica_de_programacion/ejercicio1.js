//Ejercicio 1 de lógica de programación
function calculateOperation(a,b,operation){
    
    switch(operation.toLowerCase()){
        case "suma":
            var result = a+b
            console.log("El resultado de la suma es: "+ result)
            break;
        case "resta":
            var result = a-b
            console.log("El resultado de la resta es: " + result)
            break;
        case "multiplicacion":
            var result = a*b 
            console.log("El resultado de la multiplicación: " + result)
        case "division":
            var result = a/b
            console.log("El resultado de la división es: " + result)
    }
}

calculateOperation(5,6,"suma")
calculateOperation(7,8,"multiplicacion")

