const greeting = (name = "Guest")=>{
    return name;
}

console.log(`Welcome to web, ${greeting()}`);
console.log(`Welcome to web, ${greeting("Safeer Khan")}`);