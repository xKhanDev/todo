let loggedIn = true;
let isAdmin = false;

if (loggedIn && isAdmin) {
  console.log("Welcome, Admin!");
} else if (loggedIn && !isAdmin) {
  console.log("Welcome, User!");
} else {
  console.log("Please log in.");
}
