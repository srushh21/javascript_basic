// // Array Methods
// const arr=['arohi','srushti',21]
//  const arr1=[3,5]
// console.log(arr.length);            //length
// console.log(arr.push(4));           //push
// console.log(arr);
// arr.pop();                              //pop
// console.log(arr.includes('arohi'));    //include
// console.log(arr.indexOf(21));          //indexOf

// // console.log(arr.concat(arr1));
// console.log([...arr,...arr1]);            // spread operator
// let user1='tirtha'

// // to check whether array or not
// console.log(Array.isArray(user1));
// console.log(Array.isArray(arr));

// console.log(Array.from(user1));

// //slice
// let u=[10,20,30,40,50]
// console.log(u.slice(0,3));
// //splice
// console.log(u.splice(0,3));
// console.log();



//String Methods.
// let user ="  sai  "
// console.log(user.length);  // to find length and length is a property.
// console.log(user.toLowerCase());  // to lowercase
// console.log(user.toUpperCase());  // to uppercase
// console.log(user.charAt(2));       //to find character at which index
// console.log(user.indexOf('i'));    //to find index of char
// console.log(user.indexOf('sai'));   //to find index of  full char it will give first letters index
// console.log(user.indexOf('a'));      
// console.log(user.indexOf('y'));      //if not present in string



// let userr ="  srushti ghatage  ";  
// console.log(userr.trim());               //trim removes space from front and back.

// console.log(userr.replace('i','e'));   // replaces a char with other char with first occurance.

// console.log(userr.includes('si'));   // checks if that char is there in string or not
// console.log(userr.includes('ti'));


// let userrr ="  srushti%ghat%age "     // splits the string into parts
// console.log(userrr.split('%'));


// let usser ="saideep"
// console.log(usser.substring(-4,5));       // starting char includes but ending char doesn't (i.e -1).
// console.log(usser.slice(-4,5));        


// let str ="javascript";
// console.log(str.slice(0,5));    //slicing
// console.log(str.slice(-5,-3));


// console.log(str.substring(0,4));


// // object Methods.
// const studentInfo ={
//     userName: "srushti",
//     age: 23,
//     isLoggedIn: true
// }
// console.log(typeof studentInfo);
// console.log(typeof { });
// console.log(Object.keys(studentInfo));     // for  keys
// console.log(Object.values(studentInfo));   // for values
// console.log(studentInfo.userName);

// studentInfo.userName ="Sai";        //to change username
// studentInfo.email ="sai@gmail.com";    //to add key & values
// console.log(studentInfo);              
// Object.freeze(studentInfo)                //it will be fixed no changes will be done.
// studentInfo.age =25;
// console.log(studentInfo);

// console.log(studentInfo.hasOwnProperty('phone'));  // it checks if that key is there or not.
// console.log(Object.entries(studentInfo));          //it creates array like structure.


