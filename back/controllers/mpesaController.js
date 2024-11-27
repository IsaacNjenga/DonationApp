import { initiateMpesaPayment } from "../utils/mpesaPayment.js";

const mpesaDonate = async (req, res) => {
  const { amount, phoneNumber } = req.body;
  try {
    const response = await initiateMpesaPayment(amount, phoneNumber);
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Payment failed", error });
  }
};

const mpesaCallback = (req, res) => {
  console.log("M-Pesa callback:", req.body);
  res.status(200).send("OK");
};

export { mpesaDonate, mpesaCallback };
