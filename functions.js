// function printGreeting(name){      //Function Definition   // code organise
//     console.log(`Hello,How are you ${name}`);
    
// }

// printGreeting("sai");          // Function calling      //code reuse
// printGreeting("srushti");
// printGreeting("Tirtha")
// printGreeting("Tara");


// //with return
// function printGreeting(name){      //Function Definition   // code organise
//     return(`Hello,How are you ${name}`);
    
// }

// console.log(printGreeting("sai"));          // Function calling      //code reuse
// printGreeting("srushti");
// printGreeting("Tirtha")
// printGreeting("Tara");



// //
// function addnum(num1,num2){
//     return num1 + num2;         
//     console.log("i am here");    // after return any thing written is not going to print.
    
// }
// console.log(addnum(10,20));
// //console.log(addnum(10,"20"));



// //convert string to number
// function addnum(num1,num2){
//     num1 = Number(num1);
//     num2 = Number(num2);
//     return num1 + num2;   

    
// }
// console.log(addnum(10,"20"));


// let n =12;
// console.log(isNaN(n));

// let nu1 ="123abc";


// add num
function addnum(num1,num2){
    n1 = Number(num1);
    n2 = Number(num2);

    if(isNaN(n1) || isNaN(n2)) {
        return("enter proper number");
    }
    
    return n1 + n2;
}
console.log(addnum(10,"20abc"));
