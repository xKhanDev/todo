const userId = 5;
const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let i = 0;
while (i < users.length) {
    if (users[i] === userId) {
        console.log("User Found at index", i);
        break;
    }
    i++;
}