users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
do {
    if (users[i] === 5) {
        console.log("User Found at index", i);
        break;
    }
    i++;
} while (i < users.length);