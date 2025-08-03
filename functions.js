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
// function addnum(num1,num2){
//     n1 = Number(num1);
//     n2 = Number(num2);

//     if(isNaN(n1) || isNaN(n2)) {
//         return("enter proper number");
//     }
    
//     return n1 + n2;
// }
// console.log(addnum(10,"20abc"));


// function add(num1,num2)
// {
//     console.log(num1+num2);
    
// }
// add(5,8)


// //Arrow functions.
// const addNum =(num1,num2)=>
//     {
//         let result = num1 +num2;
//         return result;
// }
// console.log(addNum(3,2));


//Arguments [Regular Function]
// function showargs(){
//     console.log(arguments);
    
// }
// showargs(10,20,30)


// //Arrow 
// const showargs=() => (arguments)
// console.log(showargs(10,20,30));


//numbers[arrow],[Filter]
// const arr =[1,2,3,4,10,20,5,50]
// const newArr = arr.filter((val)=> (val>4));
// console.log(newArr);

// //string [arrow]
// const stringArr =["sai","raj","radha","tara","sara"]
// const newstring = stringArr.filter((val)=> (val.length>3));
// console.log(newstring);

// const arr =[1,2,3,4,5,6]
// const newArr =[];
// for(const elem of arr)
// {
//     newArr.push(elem*10)
// }
// console.log(newArr);


// //map
// const Array =[1,2,3,4,5,6];
// const newArray = Array.map((val) => (val * 10));
// console.log(newArray);


// const stringArr =["sai","raj","radha","tara","sara"]
// const newstring = stringArr.map((val)=> (val.toUpperCase()));
// console.log(newstring);



// Function Callback
function greet(Callback) {
    console.log("Hello World");
    Callback();
}
 function sayBye() {
    console.log("goodBye");
}
greet(sayBye);
 

