import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import Loader from "../components/loader";
import { format } from "date-fns";
import "../assets/css/transactionStatus.css";
import Footer from "../components/footer";

function TransactionStatus() {
  const [loading, setLoading] = useState(false);
  const [transactionData, setTransactionData] = useState(null);

  useEffect(() => {
    const fetchTransactionData = async () => {
      setLoading(true);
      const orderTrackingId = localStorage.getItem("orderTrackingId");
      //const orderTrackingId = "709d5aa2-f1c7-4a80-9f60-dc4e683bd648";
      try {
        const response = await axios.get(
          `fetch-transaction-data?orderTrackingId=${orderTrackingId}`
        ); // Fetch from DB
        setTransactionData(response.data.transactionData);
      } catch (error) {
        console.error("Error fetching transaction data:", error);
      }
      setLoading(false);
    };

    fetchTransactionData();
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="transaction-status-page-container">
        <div className="transaction-status-bg-image">
          <div className="transaction-navbar-element">
            <Navbar />
          </div>
          <div className="transaction-status-page-content">
            <div className="transaction-status-header">
              <h2>Thank you once again for your contribution</h2>
              <p className="transaction-status-tagline">
                "Bringing Hope, Changing Lives"
              </p>
            </div>{" "}
          </div>

          <div className="transaction-status-container">
            {transactionData ? (
              <>
                <div className="transaction-status-content">
                  <h2>Transaction Details</h2>
                  <div className="transaction-status-details">
                    <p>
                      <strong>Order ID:</strong>{" "}
                      {transactionData.order_tracking_id}
                    </p>
                    <p>
                      <strong>Payment Account:</strong>{" "}
                      {transactionData.payment_account}
                    </p>
                    <p>
                      <strong>Payment Method:</strong>{" "}
                      {transactionData.payment_method}
                    </p>
                    <p>
                      <strong>Confirmation Code:</strong>{" "}
                      {transactionData.confirmation_code}
                    </p>
                    <p>
                      <strong>Amount:</strong>{" "}
                      <span style={{ color: "#4CAF50", fontWeight: "bold" }}>
                        {transactionData.amount} KES
                      </span>
                    </p>
                    <p>
                      <strong>Message:</strong> {transactionData.message}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        style={{
                          color:
                            transactionData.payment_status_description ===
                            "Completed"
                              ? "#4CAF50"
                              : "#F44336",
                          fontWeight: "bold",
                        }}
                      >
                        {transactionData.payment_status_description}
                      </span>
                    </p>
                    <p>
                      <strong>Date of Transaction:</strong>{" "}
                      <span style={{ color: "#555" }}>
                        {format(
                          new Date(transactionData.created_date),
                          "PPPPpppp"
                        )}
                      </span>
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="transaction-status-container">
                {" "}
                <div className="transaction-status-unavailable-content">
                  <h2>Transaction Details</h2>
                  <div className="transaction-status-details">
                    <p className="transaction-status-unavailable">
                      No transaction data available.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TransactionStatus;
