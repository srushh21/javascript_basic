// var num = 10;    //declared variable
// num = 30;        //assigned variable
// console.log("before block scope",num);
// {
//     var num = 20;  //redeclared varable
//     console.log("inside block scope",num);
// }
// console.log("after block scope",num);


const num = 10;        
console.log("before block scope",num);
{
    const num = 20; 
    console.log("inside block scope",num);
}
console.log("after block scope",num);

//datatypes    //bigint
console.log(Number.MAX_SAFE_INTEGER);

let no =BigInt ("99999999999");
console.log(no);
console.log(typeof no);

//object
const user={
    username:"sai",
    age :23,
    isLoggedIn :true
}
console.log(user.age)
console.log(user["username"]);

//null
let acTemp = null;
console.log(acTemp);
console.log(typeof acTemp);

//undefined
let n;
console.log(n);
console.log(typeof n);

//typeof
console.log(typeof"123");  //string
console.log(typeof true);  //boolean
