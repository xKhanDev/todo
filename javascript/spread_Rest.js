// let arr1 = [1,2,3,4,5];
// let arr2 = [6,7,8,9,10];

// // Spread Operator to merge arrays
// const completeArray = [...arr1, ...arr2];
// console.log(completeArray);
// // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// function add(num1,num2,num3){
//     return num1 + num2 + num3;
// }

// const numbers = [1,2,3];
// console.log(add(...numbers));
// // Output: 6

// Rest Parameter
// function total(num1,num2,...restNumbers){
//     const result = num1 + num2;
//     return restNumbers.reduce((acc,num)=>acc + num,result);
// }

// const numbers = [1,2,3,4,5];
// console.log(total(...numbers));
// // Output: 15

function registerUser(name, email, ...skills) {
  console.log(`Name: ${name}, Email: ${email}`);
  console.log("Skills:", skills); // array of skills
}

registerUser("Ali", "ali@email.com", "JS", "React", "Node");

// Output:
// Name: Ali, Email: ali@email.com
// Skills: [ 'JS', 'React', 'Node' ]