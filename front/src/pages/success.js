import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../assets/css/success.css";
import { Link, useSearchParams } from "react-router-dom";
import Loader from "../components/loader";
import { toast } from "react-hot-toast";

function Success() {
  const [searchParams] = useSearchParams();
  const orderTrackingId = searchParams.get("OrderTrackingId");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!orderTrackingId) {
      setMessage("Order tracking ID is missing. Please try again.");
      console.error("OrderTrackingId is missing from the URL.");
      return;
    }

    const fetchTransactionStatus = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `transaction-status?orderTrackingId=${orderTrackingId}`
        );
        const transactionData = response.data;
        
        // Save transaction details to the database
        if (transactionData) {
          const saveRes = await axios.post(
            "create-transaction-data",
            transactionData
          );
          if (saveRes.data.success) {
            toast.success("Transaction Saved!");
            setMessage("Transaction saved successfully!");
          } else {
            setMessage("Failed to save transaction data.");
          }
        }
      } catch (error) {
        console.error("Error fetching transaction status:", error);
        setMessage("Failed to fetch transaction status.");
      }
      setLoading(false);
    };

    fetchTransactionStatus();
  }, [orderTrackingId]);

  return (
    <>
      {loading && <Loader />}
      <div className="success-container">
        <div className="navbar-element">
          <Navbar />
        </div>
        <div className="success-inner-div">
          <div className="success-message-container">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <h1 className="success-title">Donation Successful!</h1>
                <p className="success-message">{message}</p>{" "}
                <p className="success-message">
                  Order Tracking ID: {orderTrackingId}
                </p>
                <p className="success-message">
                  To see your transaction details, click{" "}
                  <Link
                    to={`/transaction-status/${orderTrackingId}`}
                    style={{ color: "#f9bb00" }}
                  >
                    here
                  </Link>
                </p>
                <Link to="/" className="success-home-button">
                  Go to Home
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Success;
