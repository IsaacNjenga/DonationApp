import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String },
    subject: { type: String },
    message: { type: String },
  },
  { collection: "feedback", timestamps: true }
);

const FeedbackModel = mongoose.model("feedback", feedbackSchema);
export default FeedbackModel;
