import FeedbackModel from "../models/Feedback.js";

const createFeedback = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const newFeedback = new FeedbackModel({ name, email, subject, message });
    const result = await newFeedback.save();
    res.status(201).json({ success: true, result });
  } catch (error) {
    console.error("Error saving feedback", error);
    res.status(500).json({ error: error.message });
  }
};

const fetchFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find({});
    res.status(201).json({ success: true, feedbacks });
  } catch (error) {
    console.error("Error fetching all feedback", error);
    res.status(500).json({ error: error.message });
  }
};

const fetchFeedback = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No ID specified" });
  }
  try {
    const feedback = await FeedbackModel.findById({ _id: id });
    res.status(201).json({ success: true, feedback });
  } catch (error) {
    console.error("Error fetching feedback", error);
    res.status(500).json({ error: error.message });
  }
};

const updateFeedback = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No ID specified" });
  }
  try {
    const result = await FeedbackModel.findByOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res.status(201).json({ success: true, ...result._doc });
  } catch (error) {
    console.error("Error updating feedback", error);
    res.status(500).json({ error: error.message });
  }
};

const deleteFeedback = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "No ID specified" });
  }
  try {
    const feedback = await FeedbackModel.findById(id);
    if (!feedback) {
      return res.status(400).json({ error: "No feedback found" });
    }
    await FeedbackModel.findByIdAndDelete({ _id: id });
    const feedbacks = await FeedbackModel.find({});
    res.status(201).json({ success: true, feedbacks });
  } catch (error) {
    console.error("Error deleting feedback", error);
    res.status(500).json({ error: error.message });
  }
};

export {
  createFeedback,
  fetchFeedbacks,
  fetchFeedback,
  updateFeedback,
  deleteFeedback,
};
