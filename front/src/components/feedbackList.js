import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { UserContext } from "../App";
import CustomMoment from "../components/customMoment";
import Loader from "../components/loader";
import "../assets/css/feedbackList.css";

function FeedbackList() {
  const { user } = useContext(UserContext);
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchFeedback = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-feedback", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      const fetchedFeedback = response.data.feedbacks;
      setFeedback(fetchedFeedback);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching:", error);
      toast.error("Error fetching feedback", { position: "top-right" });
    }
  });
  useEffect(() => {
    if (user) {
      fetchFeedback();
    }
  }, [user]);
  return (
    <>
      {loading && <Loader />}
      <div className="feedback-container">
        <h2 className="feedback-title">Received feedback</h2>
        <p>
          <i>Not actual feedback!</i>
        </p>
        {feedback.map((f) => (
          <div className="feedback-card" key={f._id}>
            <p className="feedback-date">
              {<CustomMoment postedTime={f.createdAt} />}
            </p>
            <h3 className="feedback-subject">{f.subject}</h3>
            <h3 className="feedback-name">{f.name}</h3>
            <h4 className="feedback-email">{f.email}</h4>
            <p className="feedback-message">{f.message}</p>
            <button className="feedback-reply-button">
              Reply to{" "}
              <a href={`mailto:${f.email}`} className="feedback-email-link">
                {f.email}
              </a>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default FeedbackList;
