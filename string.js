////Strings
let userName ="sai";
let userName1 = new String("sai");
let num = new Number(10);

console.log(typeof userName);
console.log(typeof userName1);
console.log(typeof num);


let user ="  sai  "
console.log(user.length);  // to find length and length is a property.
console.log(user.toLowerCase());  // to lowercase
console.log(user.toUpperCase());  // to lowercase
console.log(user.charAt(2));       //to find character at which index
console.log(user.indexOf('i'));    //to find index of char
console.log(user.indexOf('sai'));   //to find index of  full char it will give first letters index
console.log(user.indexOf('a'));      
console.log(user.indexOf('y'));      //if not present in string



let userr ="  srushti ghatage  ";  
console.log(userr.trim());               //trim removes space from front and back.

console.log(userr.replace('i','e'));   // replaces a char with other char with first occurance.

console.log(userr.includes('si'));   // checks if that char is there in string or not
console.log(userr.includes('ti'));


let userrr ="  srushti%ghat%age "     // splits the string nto parts
console.log(userrr.split('%'));


let usser ="saideep"
console.log(usser.substring(-4,5));       // starting char includes but ending char doesn't (i.e -1).
console.log(usser.slice(-4,5));        





