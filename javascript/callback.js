function greet(name) {
  console.log(`Hello, ${name}`);
}

function processUser(callback) {
  let user = "Ali";
  callback(user); // calling greet with "Ali"
}

processUser(greet); // Hello, Ali


