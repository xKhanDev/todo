// let original = ["apple", "banana", "mango", "orange"];
// // Copying Array
// let copy = [...original];
// let copy1 = original.slice();
// let copy2 = original.concat();
// let copy3 = original.map((item) => item);
// let copy4 = Array.from(original)

// merging array
let arr1 = ["apple", "banana"];
let arr2 = ["mango", "orange"];

let merged = [...arr1, ...arr2];
// Output: ["apple", "banana", "mango", "orange"]

let merged1 = arr1.concat(arr2);
// Output: ["apple", "banana", "mango", "orange"]

let merged2 = [...arr1, ...arr2, "kiwi", "grapes"]
// Output: ["apple", "banana", "mango", "orange", "kiwi", "grapes"]
