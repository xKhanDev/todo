function orderFood(isRestaurantOpen) {
  return new Promise((resolve, reject) => {
    console.log("Placing your order...");

    setTimeout(() => {
      if (isRestaurantOpen) {
        resolve("🍔 Your burger is ready!");
      } else {
        reject("❌ Sorry, the restaurant is closed.");
      }
    }, 2000); // 2 seconds delay to simulate time
  });
}

orderFood(true)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

