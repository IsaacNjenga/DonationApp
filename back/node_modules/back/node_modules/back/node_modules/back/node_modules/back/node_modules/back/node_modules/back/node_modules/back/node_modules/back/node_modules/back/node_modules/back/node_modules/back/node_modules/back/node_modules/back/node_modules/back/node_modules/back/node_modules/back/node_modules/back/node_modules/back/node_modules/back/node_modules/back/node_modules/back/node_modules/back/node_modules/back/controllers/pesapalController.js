import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const submitOrder = async (req, res) => {
  const { amount, email, phoneNumber } = req.body;
  // console.log("body", req.body);
  try {
    const token = req.token;
    //console.log("token:", token);

    if (!amount || amount <= 0) {
      return res.status(400).json({
        error: "Invalid amount. Please provide an amount greater than 0.",
      });
    }

    const formattedAmount = parseFloat(amount).toFixed(2);

    const orderDetails = {
      id: `order-${Date.now()}`, // Unique order ID
      amount: formattedAmount, // Amount in KES or other supported currencies
      currency: "USD",
      description: "Test Payment",
      callback_url: "https://www.upliftingkindnessfoundation.com/success",
      cancellation_url: "https://www.upliftingkindnessfoundation.com/cancel",
      notification_id: process.env.PESAPAL_IPN_ID, // Optional for IPN
      billing_address: {
        email: email,
        phone_number: phoneNumber,
        first_name: "Test",
        last_name: "User",
      },
    };
    // console.log("Order Details:", orderDetails);

    const response = await axios.post(
      `https://cybqa.pesapal.com/pesapalv3/api/Transactions/SubmitOrderRequest`,
      orderDetails,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { redirect_url, order_tracking_id } = response.data;
    //  console.log("full response:", response.data);

    res.status(200).json({
      redirectUrl: redirect_url,
      orderTrackingId: order_tracking_id,
    });
  } catch (error) {
    console.error(
      "Error initiating payment:",
      error.response?.data || error.message
    );

    res.status(500).send("Failed to initiate payment");
  }
};

const transactionStatus = async (req, res) => {
  const { id } = req.query; // Get orderTrackingId from query parameters
  const token = req.token;
  //console.log(orderTrackingId);
  try {
    const response = await axios.get(
      `https://cybqa.pesapal.com/pesapalv3/api/Transactions/GetTransactionStatus?orderTrackingId=${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    res.status(200).json(response.data);
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching transaction status:", error);
    res.status(500).send("Failed to fetch transaction status");
  }
};

export { submitOrder, transactionStatus };
