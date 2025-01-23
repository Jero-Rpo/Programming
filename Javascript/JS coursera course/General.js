
var person;//Declaración de viariable, sin definirle ningún valor.
var person = "John" //Declaración de variable con algún valor asignado.
console.log("Hello,",person)
var greetings = "Hello" //La variable de saludo ahora es "Hello"
greetings = "Hi"//La variable que antes era "Hello" fue modificada para ser "Hi", no se utiliza la palabra clave "var"

//EJERCICIO DE DECLARACIÓN DE VARIABLES

var petDog = "Rex"
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dogs’s name is " + petDog)
console.log("My pet cat’s name is " + petCat)
var catSound = "purr"
var dogSound = "woof"
console.log(petCat + " says " + catSound)
console.log(petDog + " says " + dogSound)
catSound = "meow"
console.log(petCat + " now says " + catSound)

/*Tipos de variables
String = Texto, por ejemplo "Hola, Mundo"
Number = Número, por ejemplo, 375, no se utiliza comillas
Null = Nada, la ausencia de valor
Undefined = Indefinido, una variable que todavía está vacía, pero puede ser asignada
BigIng = Número grande, guarda valores mas grandes que "Number"
Symbol = Etiquetas, tener varias variables iguales, pero se les pone etiquetas para que el programa las diferencie

Operadores aritméticos:
"=" es un operador de asignación
Los operadores aritméticos son: 
"+" es suma
"-" es resta
"/" es división
"*" es multiplicación
"**" es potencia
"%" el residuo de una división
"+=" Asignación de suma, se utiliza cuando se quieren acumular los valores de una variable, sin sobreponer la asignación, por ejemplo (Ir a linea 76)

Operadores lógicos:
And = &&" se asegura de que las 2 condiciones sean true
Or = "||" se asegura de que alguna de las 2 condiciones es true, y solo devolvería false en caso de que las 2 condiciones sean false (false||false)=false
"!"  devuelve el valor false si la condición se cumple
 
Operadores comparativos
Mayor que = >
Menor que = <
Igual = == 

Booleanos: true or false
Si se hace 100=="100", sale true, porque js revisa sin importar el tipo de variable, pero si se ponen 3 =, 100==="100", si importa el tipo de variable

Operador inequivalente, "!=,escrito con ! y =, y devuelve lo contrario al ==, utilizandolo con solo un =, solo mira si son iguales sin importar el tipo, pero utilizando 2 ==, si mira el tipo de variable*/

//Operador AND
var checkTime = 10
console.log(checkTime>9 && checkTime<17)
//Operador OR
var currentTime= 10
console.log(currentTime<9 || currentTime>17)
//Operador NOT
var petHungry=true
console.log("Pet is hungry: " + petHungry)
console.log("Feeding the pet...")
console.log("Pet is hungry: " + !petHungry)
console.log(petHungry)
//En la ultima linea da true, no se reasignó el valor, para que de falte tendríamos que reasignarle el valor a la variable petHungry
petHungry=!petHungry
console.log(petHungry)
//Operador MODULO
//Hay 22 personas, 5 mesas con 4 puestos cada una, o sea 20 puestos, necesitamos saber cuantos comensales se quedan sin silla
console.log(22%20) //2 Comensales se quedan sin puesto
//Operador ASIGNACIÓN SUMA
var horasExtras = 2
horasExtras += 4 /*La variable no queda en 4 horas extra, sino que suma las 2 anteriores con estas, dando como resultado 6 horas*/
horasExtras += 6 //Se suman las 6 anteriores, dando como resultado 12 horas extra
console.log("Las horas extra que tiene hasta el momento son: " + horasExtras + " Horas")
/*También se puede utilizar con cadenas de texto, pero ahora se llama asignación de concatenación*/
var longString = "..."
longString += "Once"
longString += " upon"
longString += " a"
longString += " time."
console.log(longString)

/*Condicionales:
"If", siesta condición es true, entonces esto
"Else", si la condición es cualquier otra cosa, ejecutar este
*/

var weather="rainy"
if(weather=="rainy"){
    console.log("What a day to be at home!")
}
else{
    console.log("I should go out, its beautifull outside")
}
/*Continuación condicionales
"else if", es como el else, pero tiene alguna condición por cumplir
"switch", es algo así como utilizar if con múltiples else if, pero es menos detallada ya que no se tiene que escribir la variable multiples veces, y tampoco es tan detallada*/

var trafficLight="green"

//utilizando if, else if y else

if (trafficLight=="green"){
    console.log("You must drive")
}
else if (trafficLight=="orange"){
    console.log("Get ready!")
}
else if(trafficLight=="red"){
    console.log("Stop!")
}
else{
    console.log("Be carefull!")
}

//utilizando switch

switch(trafficLight){
    case "green":
        console.log("Drive!")
        break;
    case "orange":
        console.log("Get prepared!")
        break;
    case "red":
        console.log("Stop!")
        break;
    default:
        console.log("Be carefull!")
        break;
}

//Ejercicio práctico condicionales

//1.¿Es mayor?
var age=10
if (age>=65){
    console.log("Usted obtiene sus ingresos de su pensión")
}
else if(age<65 && age>=18){
    console.log("Cada mes recibe un salario")
}
else if(age<18){
    console.log("Obtiene una asignación")
}
else{
    console.log("El valor de la edad no es númerico")
}

//2.Días de la semana 
var day = "Domingo"
switch(day){
    case "lunes":
        console.log("Do something")
        break;
    case "Martes":
        console.log("Do something")
        break;
    case "Miercoles":
        console.log("Do something")
        break;
    case "Jueves":
        console.log("Do something")
        break;
    case "Viernes":
        console.log("Do something")
        break;
    case "Sabado":
        console.log("Do something")
        break;
    case "Domingo":
        console.log("Do something")
        break;
    default:
        console.log("There is no such day")
        break;

}

//Loops o bucles

//Loop "for"

for(var i=1; i<4; i++){
    console.log(i)
}
console.log("GO!")
//La estructura es: Valor de la variable, la condición(En este caso mientras que i sea menor que 4, seguir repitiendo el proceso), y por ultimo, el i++, que hace que el contador vaya creciendo una unidad por cada iteración

for(var i=10; i>0; i--){
    console.log(i)
}
console.log("Happy new year")
//Es el mismo for, pero ahora en vez de ir aumentando, va descendiendo

//Loop "While"
var counter = 5
while(counter>0){
    console.log("su vida en este momento es", counter);
    counter=counter-1
}
console.log(counter)

//"Nested loops" bucles anidados
//Tenemos 2 pares de pantalones, y 5 pares de zapatos, ¿cuantas combinacion es podemos hacer?

for(var i=1; i<3; i++){
    for(var j=1; j<=5; j++){
        console.log("Pantalon " + i + "--Par de zapatos " + j)
    }
}

//Tabla de multiplicación

for(var num1=2; num1<=3; num1++){
    for(var num2=1; num2<=10; num2++){
        console.log(num1 + " multiplicado por " + num2 + " es igual a " + num1*num2)
    }
}

//Ejercicio condicionales y bucles

for(var i = 1; i<=10; i++){
    if(i==1){
        console.log("Gold medal")
    }else if(i==2){
        console.log("Silver medal")
    }else if(i==3){
        console.log("Bronze medal")
    }else{
        console.log(i)
    }
}
//Ahora con switch

for(var i = 1; i<=10; i++){
    switch(i){
        case 1:
            console.log("Gold medal")
            break;
        case 2:
            console.log("Silver medal")
            break;
        case 3:
            console.log("Bronze medal")
            break;
        default:
            console.log(i)
            break;
    }
}

//Funciones: se declaran function nombre(aquí van los parámetros o argumentos){Aquí va el código}

//Función sin parametros
function suma(){
    var a=10
    var b=5
    var c=a+b
    console.log(c)
}

suma()

//Función con parametros

function suma2(a,b){
    var c=a+b
    console.log(c)
}

//Aquí se crea cualquier variable que va a ocupar la pocisión de a y b

var num1=5
var num2=10

//Ahora llamamos la función pasandole estos valores

suma2(num1,num2)

//Arrays: Se utilizan para agrupar una serie de variables, se escribe con 
var train1=["trigo","papas","sal","azucar","piedra"]
console.log(train1[0])

//Actividad práctica funciones

function letterFinder(word,match){
    for(var i=0; i<word.length; i++){
        if (word[i]==match){
            console.log("Found" +match, " at " + i)
        }else{
            console.log("---No match found at " + i)
        }
    }

}
letterFinder("test","t")

//Objetos

//Intentemos crear los aspectos de un personaje de un videojuego

var energiaPersonaje=10
var vidaPersonaje=5
var nivelPersonaje=1
var puntosMovimientoPersonaje=3

//Ya lo creamos, pero javascript no sabe que estas variables están relacionadas, y todas pertenecen al mismo personaje, aparte de que los nombres son muy largos, por lo cual necesitamos un objeto
//Un objeto se crea con {}
var personaje={}
personaje.vida=5
personaje.energia=10
personaje.nivel=1

console.log(personaje)

//También podemos hacerlo de esta forma

var personaje1={
    vida: 5,
    energia: 10,
    nivel: 1
}

//Estos objetos también pueden ser modificados, por ejemplo

personaje.puntosDeMovimiento=4
personaje1.puntosDeMovimiento=4

console.log(personaje, personaje1)

//También se pueden generar objetos con la notación de corchetes

var personaje2={}

personaje2["Vida"]=5
personaje2["Energia"]=10
personaje2["PuntosDeMovimiento"]=4

console.log(personaje2)

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
    
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

console.log(drone["speed"])

/*Las matrices son objetos, por lo tanto, tienen métodos integrados, estos son:
matriz.push(), hace que se agregue este objeto al final de la matriz
matris.pop() elimina el objeto el final de la matriz*/

var matriz = ["objeto1", "objeto2", "objeto3"]

function constructorDeMatriz(uno, dos, tres){
    var arr = []
    arr.push(uno)
    arr.push(dos)
    arr.push(tres)
    console.log(arr)
}

constructorDeMatriz("pera","manzana","mango")

//También podríamos devolver el valor para guardarlo en otro lado

function constructorDeMatriz1(uno, dos, tres){
    var arr = []
    arr.push(uno)
    arr.push(dos)
    arr.push(tres)
    return arr
}

//Ahora este valor se puede guardar aquí sin imprimirlo en consola

var fruitsArray = constructorDeMatriz1("pera","mango","papaya")

console.log(fruitsArray)

//Javascript tiene objetos ya creados por otras personas anteriormente, y estos objetos tienen sus propios métodos, asi como un objeto array tiene .push y .pop, estos tienen más métodos

//Constantes

Math.PI //Número pi
Math.E  //Número euler
Math.LN2 //Logaritmo natural de 2

//Métodos de redondeo

Math.ceil() //Redondea hacia el número siguiente mas cercano
Math.floor() //Redondea hacia el número anterior mas cercano
Math.round() //Redondea hacia el siguiente mas cercano si el decimal es mayor o igual a 0.5, de lo contrario, redondea hacia el anterior mas cercano
Math.trunc() //Borra el decimal y solo deja el entero

//Metodos aritmeticos y de cálculo

Math.pow(2,3) //Eleva 2 a la potencia de 3, o mejor dicho, eleva el primero número a la potencia del siguiente

Math.sqrt(16) //Calcula la raíz cuadrada, el resultado sería 4

Math.cbrt(8) //Encuentra la raíz cubica, el resultado sería 2

Math.abs(-10) //devuelve el valor absoluto, el resultado es 10

Math.min(9,8,7) //Devuelve el valor minimo, en este caso 7

Math.max(9,8,7) //Devuelve el valor máximo, en este caso 9

//Funciones trigonométricas 

Math.sin()
Math.cos()
Math.tan()

//Otros métodos

Math.random() //Genera un número aleatorio entre 0 y 0.99, si queremos aumentar el valor, lo multiplicamos por multiplos de 10

var random = Math.random()
Math.floor(random)

console.log(Math.floor(random * 10))

//Las cadenas se comportan como arrays

var saludo = "Hola"
var persona = "Daniel"

for(var i = 0; i<saludo.length; i++){
    console.log(saludo[i])
}

//Pero no se le pueden aplicar los metodos push o pop

// saludo.pop() da error
// saludo.push("a") también da error

//Pero hay un método que si puede ser utilizado, y es el método concat, que fuciona como un método de suma, pero los espacios se tendrían que modificar en la variable principal

console.log(saludo.concat(persona))

//Los strings también tienen diferentes métodos

console.log(saludo.length) //length mide el largo del string
console.log(saludo.charAt(0)) //Imprime el valor que esté en la posición dicha, en este caso, la posición 0

console.log(saludo.indexOf("H")) //Dice la posición del primer carácter que coincida con la condición

console.log(saludo.split("o")) //Se utiliza para separar las cadenas en cierta part

console.log(saludo.lastIndexOf("l")) //Funciona como indexof, pero encuentra el ultimo valor que coincida

console.log(saludo.toUpperCase()) //Convierte el string en todo mayúsculas
console.log(saludo.toLowerCase()) //Convierte el string en todo minusculas

//Ejercicio prático matrices

var ropa = []

ropa.push("Camisa")
ropa.push("Pantalón")
ropa.push("Gorra")
ropa.push("Sweater")
ropa.push("Jeans")

ropa.pop()

ropa.push("Zapatos")

console.log(ropa[2])

var favCar = {}
favCar.color = "rojo"
favCar.convertible = "True"
console.log(favCar)

//Los objetos tabién pueden tener una propiedad que sea una función

var car = {}

car.color = "Rojo"
car.millaje = "1928"
car.encendido = function(){
    console.log("El carro está encendido")
}
car.luces = function(){
    console.log("Luces encendidas")
}

car.encendido()
car.luces() 

//Errores y uso de try/catch

try{
    console.log(a+b)
}catch(err)
{
    console.log("Ha ocurrido un error")
}
console.log("El código no para de correr, a pesar del error")


//El console.log nos da un error, pues ni a ni b están declaradas en ningún momento, por lo que podriamos utilizar try,catch

//Lo que hace el try es coger cierta parte del código, y si por alguna razón hay un error, se ejecuta el catch, al cual se le pasa como argumento el error, y se le puede dar el nombre que sea, en este caso yo le puse "err" 

//Ahora utilicemos throw

// try{
//     throw new ReferenceError()
// }catch(err){
//     console.log(err)
//     console.log("There was a reference error")
// }

// try{
//     throw new ReferenceError()
// }catch(err){
//     console.log(err)
//     console.log("There was a reference error")
// }

// //Ejercicio práctico errores

// function addTwoNums(a,b){
//     console.log(a+b)
// }

// addTwoNums(5,"5")

// function addTwoNums(a,b){
//     try{if(typeof(a)!=Number){
//         throw new ReferenceError("the first argument is not a number")
//     }else if(typeof(b)!=Number){
//         throw new ReferenceError("the second argument is not a number")
//     }else{
//         console.log(a+b)}
//     }catch(err){
//         console.log(err)
//     }
        
// }


//Funciones recursivas: Son funciones que se llaman a si mismas hasta que cierta condición sea cumplida

var counter = 3

function raceStart(){
    console.log(counter)
    counter = counter - 1
    if(counter===0) return
    raceStart()
}
raceStart()

function randomNum() {
    console.log(Math.floor((Math.random()*10) + 1)) 
}

randomNum()

//Ejercicio objetos

//1.Objetos con métodos

var purchase1 = {
    price: 100,
    tax: 1.2,
    finalPrice: function(){
        var calculation = purchase1.price * purchase1.tax
        console.log(calculation)
    }
}

purchase1.finalPrice()

var buyFruit = {
    kgPrice: 50,
    kg: 30,
    finalPrice: function(){
        var calculation = buyFruit.kgPrice * buyFruit.kg
        console.log("The final price is: " + calculation + "$")
    }
}

buyFruit.finalPrice()

//Segunda compra, utilizando el this

var purchase2 = {
    price: 200,
    tax: 1.5,
    finalPrice: function(){
        var calculation = this.price * this.tax
        console.log(calculation)
    }
}

purchase2.finalPrice()

//Imaginemos que tenemos que crear múltiples objetos iguales, podemos crear una "plantilla"

class shoe{
    constructor(price, tax){
        this.price = price
        this.tax = tax
    }
    finalPrice() {
        var calculation= this.price* this.tax
        console.log(calculation)
    }
}

var shoe1 = new shoe(50, 1.2)

shoe1.finalPrice()

var shoe2 = new shoe (30,1.5)

shoe2.finalPrice()

//Aqui utilizamos las clases para definir dog, pero dog hereda sasuageDog y siberianWolf, sausageDog hereda el método bark, pero siberianWolf aunque hereda la clase dog, no hereda el método bark, sino que crea uno nuevo que se llama howl

class dog{
    bark(){
        console.log("woof!")
    }
}
class sausageDog extends dog{
    bark(){
    super.bark()
    console.log("Not that loud :/")
    }

}

class caneCorso extends dog{
    bark(){
    super.bark()
    console.log("Very loud!!")
    }

}

class siberianWolf extends dog{
    howl(){
        console.log("I dont bark, i howl at the moon")
    }
}

var tony = new siberianWolf()
var michael = new sausageDog()

tony.howl()
michael.bark()

//Inheritance (Herencia)

var bird = {
    hasWings: true,
    canFly: true,
    hasFeathers: true
}

var eagle1 = Object.create(bird)

console.log("Eagle has wings: " + eagle1.hasWings)
console.log("Eagle can fly: " + eagle1.canFly)
console.log("Eagle has feathers: " + eagle1.hasFeathers)


//Valores predeterminados

//Crear una clase sin valores predeterminados y ejecutar la funcion calc

class notDefaultParams{
    constructor(num1,num2,num3,bool1){ 
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.bool1 = bool1;
    }

    calc(){
        if(this.bool1){
            console.log(this.num1 + this.num2 + this.num3, "," , this.bool1)
            return;
        }else{
            console.log("the value of the bool is incorrect")
        }
           
    }
}

var notDefault = new notDefaultParams(1,2,3,true)

notDefault.calc()

//Ahora la misma clase pero con valores predeterminados

class defaultParams{
    constructor(num1 = 1 ,num2 = 2,num3 = 3,bool1 = true){ 
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.bool1 = bool1;
    }

    calc(){
        if(this.bool1){
            console.log(this.num1 + this.num2 + this.num3, "," , this.bool1)
            return;
        }else{
            console.log("the value of the bool is incorrect")
        }
           
    }
}

var defaultParam = new defaultParams()

defaultParam.calc()

//Si no ponemos nada aqui, los parámetros por defecto entran en acción, se podría utilizar para hacer pruebas rápidas sin tener que hacer preguntas por medio del prompt

class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if(this.energy == 0){
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
        super(sound,canJumpHigh,canClimbTrees, color,energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound,canFly, color,energy) {
        super(sound,canFly, color,energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!



//Desestructuración de objetos

var persona = {
    nombre: "Jesús",
    edad: 15,
    ciudad: "sabaneta"
}

console.log(persona)

let {nombre, edad, city} = persona

console.log(nombre)
console.log(edad)
console.log(city)//Creamos una variable para cada uno con la desestructuración

//Esto mismo se puede hacer, pero sin desestructuración

var nombre_ = persona.nombre
var edad_ = persona.edad
var ciudad_ = persona.ciudad //Como podemos ver, son mas lineas de código 

console.log(nombre_)
console.log(edad_)
console.log(ciudad_)

//También se le pueden dar alias a las nuevas variables, por ejemplo

let {edad:edadPersona, nombre: nombrePersona , ciudad = "envigado"}= persona

console.log(edadPersona)
console.log(ciudad)

//Desestructuración de objetos

/*¿Para que sirve?
1.Permite solo extraer la parte del objeto que necesitamos, sin tener que cargar cosas que no vamos a utilizar
2.Se le puede cambiar el nombre de la propiedad para que sea mas descriptiva
3.Nos ahorramos escribir el prefijo del objeto (Ejemplo: Math.PI)*/

let {PI: numberPI} = Math;
console.log(numberPI)

//Data structures(Different ways to represent data, such as arrays, maps, sets or objects)

//Arrays

const array = [1,2,3,4,5]
//Métodos de un array

//Foreach: Sirve para ejecutar una función por cada uno de los valores del array

const arrayForEach = [10,20,30,40,50]


arrayForEach.forEach(
    function newForEach(arrayForEach,index){
        
        console.log(index + "=>" +  arrayForEach/10)
    })
//Filter
const filterArray = ["Mango", "Manzana", "Pera"]

const result = filterArray.filter(function(item){
    return item.length<6;
})
console.log(result)

//Método map(No confundir con la estructura de datos Map)

const resultArray = [1,2,3,4,5,6,7,8,9,10].map(function(num){
    return num*10
})
console.log(resultArray)

//Objects

const objects = {
    value1:"Hello",
    value2:"GoodBye"
}

//Maps

let newMap = new Map();
newMap.set(2, "Segundo")
newMap.set(3, "Tercero")

console.log(newMap)

//Spread operator: Sirve para que el array ya no sea un conjunto de valores, sino que se repartan esos valores como individuales, ejemplo:

let arraySpread = [1,2,3,4]

function SumaArray(a,b,c,d){
    console.log(a+b+c+d)
}

//Sin spread tendriamos que especificar cada uno de los valores

SumaArray(array[0], array[1], array[2], array[3])

//Con spread podemos separar cada uno de los valores del array, y pasarlos todos individualmente

SumaArray(...array)

//Rest operator: Sirve para reunir los argumentos restantes en un nuevo array, por ejemplo, si quisieramos hacer un programa de sumas, sin rest tendriamos que definir una nueva funcion para una suma de 2,3,4,5,6 números, mientra sque con rest esto no es necesario

//  Sin rest

function suma(a,b){
    console.log(a+b)
}//Función para suma de 2 números

function suma(a,b,c){
    console.log(a+b+c)
}//Función para suma de 3 números

//Con el operador rest

function sumaRest(...numerosSuma){
    let result = 0
    for(nums of numerosSuma){
        result+=nums
    }
    console.log(result)
}

sumaRest(1,2,3,4,5)
sumaRest(1,2,3)

//El operador rest también puede unir matrices, ejemplo:

let frutas = ["papaya", "mandarina", "guanabana", "mango"]
let verduras = ["tomate", "cebolla", "cilantro"]

let frutasYverduras = [...frutas, ...verduras]
console.log(frutasYverduras)

//Se pueden agregar nuevos elementos a las matrices sin utilizar .push

let animales = ["caballo","oveja","cerdo"]
animales = [...animales, "galllina", "león"]
console.log(animales)

//Se pueden convertir cadenas de texto en arrays

let cadenaTexto = "Greetings";
console.log(cadenaTexto)
cadenaTexto = [...cadenaTexto]
console.log(cadenaTexto)

//Se puede copiar un objeto en otro totalmente diferente

const bicycle = {
    ruedas:2,
    velocidad:20
}

const motorcycle = {...bicycle}
motorcycle.velocidad= 40

console.log("bicycle:", bicycle,"motorcycle:", motorcycle)

//También se puede hacer lo mismo con una matriz

let matriz1 = [1,2,3,4]
let matriz2 = [...matriz1]
matriz1.pop()

console.log(matriz1,matriz2)

let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2);
set.add(1);
console.log(set)

let obj = {
    key: 1,
    value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);

//En js existen pruebas, para saber si la salida que esperamos si es correcta

//Ejemplo

function pruebaSuma(argA, argB){
    console.log(argA + argB)
}

pruebaSuma("abc", "def") //Expected output: "abcdef"
//Prueba

expect(pruebaSuma("abc", "def")).toBe("abcdef")