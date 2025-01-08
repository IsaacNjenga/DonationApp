import mongoose from "mongoose";

const transactionDataSchema = new mongoose.Schema(
  {
    account_number: { type: String },
    amount: { type: String },
    call_back_url: { type: String },
    confirmation_code: { type: String },
    created_date: { type: String },
    description: { stype: String },
    merchant_reference: { type: String },
    message: { type: String },
    order_tracking_id: { type: String, required: true, unique: true },
    payment_account: { type: String },
    payment_method: { type: String },
    payment_status_code: { type: String },
    payment_status_description: { type: String },
  },
  { collection: "transactionData", timestamps: true }
);

const TransactionDataModel = mongoose.model(
  "transactionData",
  transactionDataSchema
);
export default TransactionDataModel;
