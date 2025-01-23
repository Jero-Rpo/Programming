const btn = document.querySelector("#btn");
// function calculadora(){
//     var a = parseInt(prompt("Enter your first number: "))
//     var b = parseInt(prompt("Enter your second number: "))
//     var operation = prompt("Select an option\n 1.Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division")
//     if(isNaN(a)|| isNaN(b) ){
//         console.log("Invalid input, both inputs have to be numbers")
//         return;
//     }
//     if(operation=="1"){
//         var add = a+b
//         alert("The result of adding this 2 numbers is: "+ add )
//     }else if(operation=="2"){
//         var sub= a-b
//         alert("The result of this substraction is " + sub)
//     }else if(operation=="3"){
//         var times = a*b
//         alert(a + " times "  + b + " is " + times)
//     }else if(operation=="4"){
//         if(b===0){
//             alert("Invalid input! You cant divide by 0")
//             return;
//     }else{
//         var division = a/b;
//         alert("The result of this division is " + division);
//     }
//     }else{
//         alert("Invalid input")
//     }
// }
// btn.addEventListener("click", calculadora);