
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