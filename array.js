// const arrayName=['arohi','tirtha','riya',1];
// console.log(typeof arrayName);
// console.log(arrayName);

// const arraName = new Array(1,2,3,4)
// console.log(typeof arraName);
// console.log(arraName);

// const arr=['arohi','tirtha',21]
// const arr1=[3,5]
// console.log(arr.length);            //length
// console.log(arr.push(4));           //push
// console.log(arr);
// arr.pop(); //pop
// console.log(arr.includes('arohi'));    //include
// console.log(arr.indexOf(21));          //indexOf

// // console.log(arr.concat(arr1));
// console.log([...arr,...arr1]);            // spread operator
// let user1='tirtha'

// // to check whether array or not
// console.log(Array.isArray(user1));
// console.log(Array.isArray(arr));

// console.log(Array.from(user1));


// let n1=10;
// let n2=23;
// let n3=45;
// console.log(Array.of(n1,n2,n3));



// //slice
// let u=[10,20,30,40,50]
// console.log(u.slice(0,3));
// //splice
// console.log(u.splice(0,3));
// console.log();

//slice do not modify
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(0,3)
// console.log('newArr',newArr);
// console.log('after',uuser);



//splice modifies
//const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.splice(0,3)
// console.log('newArr',newArr);
// console.log('after',uuser);
// for (const elem of uuser)
// {
//     console.log(elem);
    
// }
// for (const elem in uuser)
// {
//     console.log(elem);
    
// }


// uuser.forEach(function add5(val)
// {
//     console.log(val+5);
    
// })


// uuser.forEach((val) =>               //arrow function
// {
//     console.log(val+5);
    
// })

// const a= (num1,num2) =>
//     {
//     console.log(num1);
//     console.log(num1+num2);
//     }
//     a(2,3)

//slice do not modify only pass starting index(starting , ending index)
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(1)         // start
// const newArr = uuser.slice(1,4)       // ending
// console.log('newArr',newArr);
// console.log('after',uuser);
   


//slice do not modify
// const uuser =[10,20,30,40,50]
// console.log('before',uuser);
// const newArr = uuser.slice(2,4)  //if (4,2) the array will empty cause starting index is greate than ending index
// console.log('newArr',newArr);
// console.log('after',uuser);

//slice do not modify (negative start , end index)
//const uuser =[10,20,30,40,50]
//console.log('before',uuser);
// const newArr = uuser.slice(-3)  //start
//const newArr = uuser.slice(-4,-1)  // ending
//const newArr = uuser.slice(-2,-4)   // negative indexing
//console.log('newArr',newArr);
//console.log('after',uuser);


//splice (start indexing) (startingIndex,deletecount)
//const uuser =[10,20,30,40,50]
//console.log('before',uuser);
//const newArr = uuser.splice(3)    //start
//const newArr = uuser.splice(1,3)    //start,ending (deleting) count ,ie if we give 3 for delete then it will delete only 3.
// const newArr = uuser.splice(1,2,60)   // to add new element inplace of 1&2.
// console.log('newArr',newArr);
// console.log('after',uuser);



//Reduce [method of array]
// const fruits =['apple','banana','apple','orange','banana'];
// const count = fruits.reduce((acc,fruit) =>
// {
//     acc[fruit] = (acc[fruit] || 0) +1;
//     console.log(acc);
//     return acc;
    
// },{});
// console.log(count);


//Reduce [method of array].
const array =[10,20,30,40,50];
const sum =array.reduce((acc,arr) => acc+arr,0);
console.log(sum);

