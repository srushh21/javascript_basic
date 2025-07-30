// Q1]
const fruits = ["apple","banana","cherry"];
for (const fruit of fruits) {
    console.log(fruit.toUpperCase());
    
}

// Q3
const students = ["Ravi","Priya","Amit"];
for (const student of students) {
    console.log("Welcome," + student + "!");
    
}

//Q4
const scores = [80,90,100];
for (const score of scores) {
    console.log(score * 2);
    
}

//Q5
const numbers = [11,22,33,44,55];
numbers.forEach((num) => {
    if (num % 2 === 0){
        console.log(num);
    }
});

//Q6
const user = {
  name: "Rahul",
  age: 24,
  city: "Delhi"
};

for (let key in user) {
  console.log(key + " => " + user[key]);
}

//Q7
const firstNames = ["Asha", "Vikram"];
const lastNames = ["Singh", "Sharma"];

for (let i = 0; i < firstNames.length; i++) {
  console.log(firstNames[i] + " " + lastNames[i]);
}