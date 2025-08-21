function orderBurger() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const restaurantOpen = true;
      if (restaurantOpen) {
        resolve("🍔 Burger is ready!");
      } else {
        reject("❌ Restaurant is closed.");
      }
    }, 5000);
    console.log("checking async...");
  });
}

async function getBurger() {
  console.log("Placing your order...");
  try {
    const food = await orderBurger();
    console.log("Received:", food);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    console.log("Order placed!");
  }
}

getBurger();