let user = { name: "Ali", age: 22 };

for (let key in user) {
  console.log(key + ": " + user[key]);
}

// Output:
// name: Ali
// age: 22
