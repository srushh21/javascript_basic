// //Using Arrowv func
// function greet() {
//     new Promise((resolve,reject) => {
//         console.log("Hello World");
//         resolve();
        
//     })
// }
// greet();

// function greet() {
//      return new Promise((resolve,reject) => {
//         resolve("Hello World");
        
//     })
// }
// console.log(greet());

// // Async 

// async function greet() {
//     return 'Hello World';
    
// }
// console.log(greet());
  
// const userLoggedInStatus = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let isUserLoggedIn = true; // condition is true

//     if (isUserLoggedIn) {

//       console.log("user is logged in !!!!!!");
//       resolve({userName: "saideep", age: 23});
//       // Resolve the promise with user data

//     } else {

//       console.log("user logged in error");
//       reject("something went wrong");
//       // Reject the promise with an error message

//     }
//   }, 3000);
// });

// // async function testPromise() {
// //     return await userLoggedInStatus;
    
// // }
// // console.log(testPromise());

// //with try catch
// async function testPromise() {
//     try {
//         const res = await userLoggedInStatus;
//         return res;
//     } catch (error) {
//         console.log("error is",error);
        
//     }
    
// }
// console.log(testPromise());


async function fetchapi() {
    try {
        let re =  await fetch ('https://jsonplaceholder.typicode.com/todos');    // if something in the link is incorrect then it will show error in fetch.
        let  result = await re.json();
        console.log(result);
        
    } catch (error) {
        console.log("error is",error);
        
    }
}
console.log(fetchapi());
