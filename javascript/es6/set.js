
// Array of Duplicate Numbers
const unique = new Set([1,2,3,3,2,1]);

// console.log(unique);
// Output: Set(3) { 1, 2, 3 }



// Complex Example
const ids = [121212,3333,434343,55342,45343,545434];

// Creating new entry to ids
const newId = 333322;
ids.push(newId);

// This is Not Good because it has duplication
console.log(ids);
// Output:[121212,3333,434343,55342,45343,545434,3333];

if(new Set(ids).has(newId)){
    return console.log(newId," Already existed");
}else {
    console.log(newId, "Succesfully Inserted to Array");
}
