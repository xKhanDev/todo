// Example 1
const addition = (...numbers)=>{
    return numbers.reduce((acc, num)=>{
        return acc + num;
    },0)
}

console.log(addition(2,2,2,2));
// Output: 8

// Complex Example 2
const complexAddition = (num1,num2,...restNumbers)=>{
    const result = num1 + num2;
    console.log("This is Rest Parameter" ,restNumbers); //This is Rest Parameter [ 5, 5, 5, 5 ]
    return restNumbers.reduce((acc,num)=>acc + num,result);
}

console.log(complexAddition(2,2,5,5,5,5));
// Output: 24