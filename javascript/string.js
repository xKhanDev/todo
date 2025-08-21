let userInput = "   ali  ";
let cleaned = userInput.trim().toLowerCase();
console.log(cleaned);
//Output: "ali"

let text = "Hello, World!";
let result = text.replace("World", "JavaScript");
console.log(result);
//Output: "Hello, JavaScript!"

let walletAddress = "0x1234567890abcdef1234567890abcdef12345678";
let truncatedAddress = walletAddress.slice(0, 6) + "..." + walletAddress.slice(-4);
console.log(truncatedAddress);
//Output:  "0x1234...5678"