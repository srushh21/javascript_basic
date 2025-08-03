
// //Asynchronous Programming.
// //setTimeout
// console.log('start');          //1st task
// setTimeout(() => {
//     console.log('timers');     //2nd task
    
// },5000)                         // order depends on the time i.e miliseconds(5000).
// console.log(('end'));           //3rd task
// console.log("1");


//
// setTimeout(() => {
//     console.log("ram");
    
// },4000);

// setTimeout(() => {
//     console.log("ganesh");
    
// },2000);
// console.log("4");


// //setInterval [to stop ctrl + c]
// setInterval(() => {
//     console.log("ram");
    
// },4000);
// setInterval(() => {
//     console.log("ganesh");
    
// },2000);
// console.log("4");

// //
// let count =0;
// const timer=setInterval(() => {
//     console.log(`count: ${count}`);
//     count ++;
//     if(count>10) {
//         clearInterval(timer);
//     }
// },2000);


// // Function Callback  [handles Asynchronous]
// function greet(Callback) {
//     console.log("Hello World");
//     Callback();
// }
//  function sayBye() {
//     console.log("goodBye");
// }
// greet(sayBye);

//
function funcOne(callback) {
    console.log("hello");
    setTimeout(callback,10000);
}

function funcTwo() {
    console.log("srushti");

};
funcOne(funcTwo);