import express from "express";

import { stkpush } from "../controllers/mpesaController.js";
import { generateToken } from "../middleware/generateToken.js";
import { bankDonate } from "../controllers/bankController.js";

const router = express.Router();

//mpesa endpoint
router.post("/mpesa", generateToken, stkpush);
router.post("/callback", async (req, res) => {
  //console.log("Incoming Callback Request:");
  //console.log("Body:", req.body);

  try {
    if (req.body?.Body?.stkCallback?.CallbackMetadata?.Item) {
      const metadata = req.body.Body.stkCallback.CallbackMetadata.Item;

      console.log("Callback Metadata:", metadata);

      const phone = metadata[4]?.Value;
      const amount = metadata[0]?.Value;
      const trnx_id = metadata[1]?.Value;

      console.log("Phone:", phone);
      console.log("Amount:", amount);
      console.log("Transaction ID:", trnx_id);

      if (!phone || !amount || !trnx_id) {
        throw new Error("Missing required fields: phone");
      } else if (!amount) {
        throw new Error("Missing required fields: amount");
      } else if (!trnx_id) {
        throw new Error("Missing required fields: trnx_id");
      }

      // const newPayment = new mpesaModel({ phone, amount, trnx_id });
      // const result = await newPayment.save();

      //        res.status(200).json({ success: true, result });
    } else {
      console.error("Invalid Callback Data:", req.body);
      res.status(400).json({ message: "Invalid Callback Data" });
    }
  } catch (error) {
    console.error("Error processing callback:", error.message);
    res.status(500).json({ message: error.message });
  }
});

//bank endpoint
router.post("/create-checkout-session", bankDonate);

export { router as Router };
