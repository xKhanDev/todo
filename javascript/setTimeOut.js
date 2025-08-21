// console.log("Start");

// setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// console.log("End");

function fetchData() {
    // Code of fetching Data

    // if data is not available
      console.log("Retrying in 3 seconds...");
      setTimeout(fetchData, 3000);
}

fetchData();
