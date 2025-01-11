import TransactionDataModel from "../models/TransactionData.js";

const createTransactionData = async (req, res) => {
  const {
    account_number,
    amount,
    call_back_url,
    confirmation_code,
    created_date,
    currency,
    description,
    merchant_reference,
    message,
    order_tracking_id,
    payment_account,
    payment_method,
    payment_status_code,
    payment_status_description,
  } = req.body;
  
  console.log(req.body);

  try {
    const orderIdExists = await TransactionDataModel.findOne({
      order_tracking_id,
    });

    if (orderIdExists) {
      return res
        .status(409)
        .json({ error: [{ msg: "Order Tracking ID already exists" }] });
    }

    const newTransactionData = new TransactionDataModel({
      account_number,
      amount,
      call_back_url,
      confirmation_code,
      created_date,
      currency,
      description,
      merchant_reference,
      message,
      order_tracking_id,
      payment_account,
      payment_method,
      payment_status_code,
      payment_status_description,
    });

    const result = await newTransactionData.save();

    return res.status(201).json({ success: true, result });
  } catch (error) {
    console.log("Error saving transaction data", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchTransactionsData = async (req, res) => {
  try {
    const transactionsData = await TransactionDataModel.find({});
    res.status(201).json({ success: true, transactionsData });
  } catch (error) {
    console.log("Error fetching transaction data", error);
    return res.status(500).json({ error: error.message });
  }
};

const fetchTransactionData = async (req, res) => {
  const { orderTrackingId } = req.query;
  //console.log(orderTrackingId);
  if (!orderTrackingId) {
    return res.status(404).json({ error: "No Order Tracking ID present" });
  }
  try {
    const transactionData = await TransactionDataModel.findOne({
      order_tracking_id: orderTrackingId,
    });
    //console.log(transactionData);
    res.status(201).json({ success: true, transactionData });
  } catch (error) {
    console.log("Error fetching transaction data", error);
    return res.status(500).json({ error: error.message });
  }
};

export { createTransactionData, fetchTransactionsData, fetchTransactionData };
