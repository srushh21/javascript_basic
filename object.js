const studentInfo ={
    userName: "srushti",
    age: 23,
    isLoggedIn: true
}
console.log(typeof studentInfo);
console.log(typeof { });
console.log(Object.keys(studentInfo));     // for  keys
console.log(Object.values(studentInfo));   // for values
console.log(studentInfo.userName);

studentInfo.userName ="Sai";        //to change username
studentInfo.email ="sai@gmail.com";    //to add key & values
console.log(studentInfo);              
Object.freeze(studentInfo)                //it will be fixed no changes will be done.
studentInfo.age =25;
console.log(studentInfo);

console.log(studentInfo.hasOwnProperty('phone'));  // it checks if that key is there or not.
console.log(Object.entries(studentInfo));          //it creates array like structure.


// const studentInfoo ={
//     user: "raj",
//     age1: 23,
//     isLoggedIn1: true
// }

// const allInOneObj = Object.assign(studentInfo, studentInfoo);
// console.log(Object);

// //objects in one object
// const fromData ={
//     name : "ram",
//     email: "ram@gmail.com",
//     age: 25
// };

// const googleData ={
//     email : "sru@gmail.com",
//     profilepic : "https://example.com/profile.jpg",
//     googleId : "123456789"
// };

// const googleData1 ={
//     name: "tirtha",
//     age : 24
// };

// const completeUserProfile = Object.assign(googleData1,googleData,fromData)
// console.log(completeUserProfile);



// // Object De-structuring.
// const {name,email,age}=fromData
// console.log(age);
// console.log(email);


