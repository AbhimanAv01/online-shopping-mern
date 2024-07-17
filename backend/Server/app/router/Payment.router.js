const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies

// Initialize Razorpay instance with correct key names
const razorpay = new Razorpay({
  key_id: "rzp_test_GZQWsnxfu8f57I",
  key_secret: "wn6zHyXGMwDNokc1orFfn5b4"
});

router.post("/payment", async (req, res) => {
  try {
    // Extract amount, currency, and receipt from the request body
    const { amount } = req.body;

    // Create an order using the initialized Razorpay instance
    const order = await razorpay.orders.create({
      amount, // Amount is in the smallest currency unit (e.g., paise for INR)
      currency:"INR",
      receipt:"qwsaq1"
    });

    // Send the order details and amount in the response
    res.status(201).json({
      success: true,
      order,
      amount
    });


  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({
      success: false,
      message: "Error creating order"
    });
  }
});

module.exports = router;
