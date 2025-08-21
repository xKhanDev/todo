let username = "";
let displayName = username || "Guest";
console.log(displayName); // Guest

let isLoggedIn = true;
isLoggedIn && console.log("Show dashboard"); // Runs

let age = 0;
let userAge = age ?? 18;
console.log(userAge); // 0 ✅ (because 0 is not null/undefined)

let userAge1 = null;
let userAge2 = userAge1 ?? 18;
console.log(userAge2); // 18

// ternary Operators vs if else 
// if-else
if (age >= 18) {
  status = "Adult";
} else {
  status = "Minor";
}

// ternary
let status = age >= 18 ? "Adult" : "Minor";
