let name = prompt("What is your name?");
if (!name) {
    name = "Guest";
}
if (isNaN(name)) {
    alert("Hello, " + name);
} else {
    alert("Please enter a valid name");
    name = prompt("What is your name?");
}

