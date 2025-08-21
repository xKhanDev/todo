let count = 0;
const id = setInterval(() => {
  console.log(`count is update to ${count}`);
  count++;
  if (count === 5) {
    clearInterval(id);
  }
}, 1000);