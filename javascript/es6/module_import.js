// import { myName } from "./module_export";
const {name,date} = require("./module_export")

console.log(`Hello, ${name}`)
console.log(new Date(date).toDateString());