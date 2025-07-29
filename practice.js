const isPositive =(num)=>
{
    if (num>0)
    {
        return true;
    }
    else
    {
        return false;
    }    
}   
console.log(isPositive(15));


//
const getUser =(name,age) => {
    
    return (`Name is ${name} and age is ${age}`)

    
}
console.log(getUser("srushti",24));


// 
const welcome = (user = "Guest") => "Welcome," + user;
console.log(welcome("tirtha"));
