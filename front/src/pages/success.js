import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import "../assets/css/success.css";
import { Link } from "react-router-dom";
import { useTransaction } from "../components/transactionContext";
import Loader from "../components/loader";

function Success() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { orderTrackingId, setOrderTrackingId } = useTransaction();
  console.log("orderTrackingId-success:", orderTrackingId);

  useEffect(() => {
    const fetchTransactionStatus = async () => {
      //const orderTrackingId = localStorage.getItem("orderTrackingId");
      // const orderTrackingId = "709d5aa2-f1c7-4a80-9f60-dc4e683bd648";
      console.log(orderTrackingId);
      if (!orderTrackingId) {
        setMessage("No order tracking ID found.");
        // const storedId = localStorage.getItem("orderTrackingId");
        // if (storedId) setOrderTrackingId(storedId);
        return;
      }

      setLoading(true);
      try {
        const response = await axios.get(
          `transaction-status?orderTrackingId=${orderTrackingId}`
        );
        const transactionData = response.data;
        console.log(response.data);

        // Save transaction details to the database
        const saveRes = await axios.post(
          "create-transaction-data",
          transactionData
        );
        if (saveRes.data.success) {
          setMessage("Transaction saved successfully!");
        } else {
          setMessage("Failed to save transaction data.");
        }
      } catch (error) {
        console.error("Error fetching transaction status:", error);
        setMessage("Failed to fetch transaction status.");
      }
      setLoading(false);
    };

    fetchTransactionStatus();
  }, [orderTrackingId, setOrderTrackingId]);

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
                <p className="success-message">{message}</p>
                <p className="success-message">
                  To see your transaction details, click{" "}
                  <Link to="/transaction-status" style={{ color: "#f9bb00" }}>
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
