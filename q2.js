const menu = {
  burger: 120,
  pizza: 250,
  pasta: 150,
  momo: 100
};

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) {
        throw new Error(`Item not available: ${item}`);
      }
      return menu[item];
    });

    const total = prices.reduce((a, b) => a + b, 0);
    console.log("Total Bill:", total);
    return total;

  } catch (err) {
    console.error("Error:", err.message);
    return null;   // prevents undefined output
  }
}

// Valid order
calculateBill(["burger", "pizza"]);

// Invalid order
calculateBill(["burger", "xyz"]);
