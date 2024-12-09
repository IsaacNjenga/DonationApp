import mongoose from "mongoose";

const mpesaSchema = new mongoose.Schema(
  {
    account: { type: String },
    amount: { type: String },
    phoneNumber: { type: String },
    name: { type: String },
    trnx_id: { type: String },
  },
  { collection: "mpesa", timestamps: true }
);

const mpesaModel = mongoose.model("mpesa", mpesaSchema);

export { mpesaModel };
