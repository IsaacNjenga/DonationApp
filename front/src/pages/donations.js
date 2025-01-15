import React, { useCallback, useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import MiniNavbar from "../components/miniNavbar";
import Loader from "../components/loader";
import axios from "axios";
import { UserContext } from "../App";
import DataTable from "react-data-table-component";
import { format } from "date-fns";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcAmex,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import "../assets/css/donations.css";
import Counter from "../components/counter";

function Donations() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [transactionsData, setTransactionsData] = useState([]);
  const [viewDonationDetails, setViewDonationDetails] = useState(null);

  const fetchDonations = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get("fetch-transactions-data", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setTransactionsData(response.data.transactionsData);
      totalDonations(response.data.transactionsData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("There seems to be an issue");
      console.log("Error fetching data:", error);
    }
  });

  useEffect(() => {
    if (user) {
      fetchDonations();
    }
  }, [user]);

  const viewDonation = async (orderTrackingId) => {
    //console.log(orderTrackingId);
    setLoading(true);
    try {
      const response = await axios.get(
        `fetch-transaction-data?orderTrackingId=${orderTrackingId}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setViewDonationDetails(response.data.transactionData);
      //console.log(response.data.transactionData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("There seems to be an issue. Try refreshing ");
      console.log("Error fetching data:", error);
    }
  };

  const closeDonationModal = () => {
    setViewDonationDetails(null);
  };

  const columns = [
    { name: "Merchant Number", selector: (row) => row.merchant_reference },
    { name: "Payment Acc/", selector: (row) => row.payment_account },
    {
      name: "Amount",
      selector: (row) => (
        <>
          {row.payment_method === "MpesaKE" ? "KES." : "$"}
          {!isNaN(row.amount) ? Number(row.amount).toFixed(2) : "N/A"}
        </>
      ),
    },

    {
      name: "Date",
      selector: (row) => {
        return format(new Date(row.created_date), "PPPP");
      },
      sortable: true,
    },

    {
      name: "Payment Method",
      selector: (row) => (
        <>
          {row.payment_method === "MpesaKE" ? row.payment_method : null}
          {row.payment_method === "AirtelKE" ? row.payment_method : null}
          {row.payment_method === "MasterCard" ? (
            <FontAwesomeIcon
              icon={faCcMastercard}
              className="donations-page-icon"
              style={{ color: "#e5001a" }}
            />
          ) : null}{" "}
          {row.payment_method === "Visa" ? (
            <FontAwesomeIcon
              icon={faCcVisa}
              className="donations-page-icon"
              style={{ color: "#181e6b" }}
            />
          ) : null}{" "}
          {row.payment_method === "AmEx" ? (
            <FontAwesomeIcon
              icon={faCcAmex}
              className="donations-page-icon"
              style={{ color: "#006cc9" }}
            />
          ) : null}
        </>
      ),
    },
    {
      name: "Payment Status",
      selector: (row) => row.payment_status_description,
      sortable: true,
    },

    {
      name: "Details",
      selector: (row) => (
        <button
          className="view-donation-details-btn"
          onClick={() => viewDonation(row.order_tracking_id)}
        >
          View Details
        </button>
      ),
    },
  ];

  const totalDonations = (amounts) => {
    let totalAmount = 0;
    amounts.forEach((item) => {
      totalAmount += parseFloat(item.amount) || 0;
    });
    setTotal(totalAmount);
    return totalAmount;
  };

  const customStyles = {
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "bold",
        color: "#333333",
        backgroundColor: "#f2f2f2",
      },
    },
    cells: {
      style: {
        fontSize: "14px",
        color: "#555555",
      },
    },
    rows: {
      style: {
        "&:nth-of-type(odd)": {
          backgroundColor: "#f9f9f9",
        },
        "&:nth-of-type(even)": {
          backgroundColor: "#ffffff",
        },
      },
    },
  };
  return (
    <>
      {loading && <Loader />} <Navbar /> <MiniNavbar />
      <div className="donations-container">
        <h1>Donations</h1>
        <div className="donations-datatable-container">
          <DataTable
            title="Donations List"
            columns={columns}
            data={transactionsData}
            pagination
            highlightOnHover
            customStyles={customStyles}
          />
        </div>
        {viewDonationDetails && (
          <div
            className="donation-details-modal-overlay"
            onClick={closeDonationModal}
          >
            <div
              className="donation-details-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal-btn" onClick={closeDonationModal}>
                &times;
              </button>
              <div className="donation-details-modal-header">
                <h2>Donation Details</h2>
              </div>
              <div className="donation-details-modal-body">
                <section>
                  <h3>Transaction Details</h3>
                  <p>
                    <strong>Amount:</strong>{" "}
                    {viewDonationDetails.payment_method === "MpesaKE"
                      ? "KES."
                      : "$"}
                    {!isNaN(viewDonationDetails.amount)
                      ? Number(viewDonationDetails.amount).toFixed(2)
                      : "N/A"}
                  </p>

                  <p>
                    <strong>Description:</strong>{" "}
                    {viewDonationDetails.description
                      ? viewDonationDetails.description
                      : "N/A"}
                  </p>
                  <p>
                    <strong>Confirmation Code:</strong>{" "}
                    {viewDonationDetails.confirmation_code}
                  </p>
                </section>
                <section>
                  <h3>Merchant Details</h3>
                  <p>
                    <strong>Merchant Reference:</strong>{" "}
                    {viewDonationDetails.merchant_reference}
                  </p>
                  <p>
                    <strong>Date of Transaction:</strong>{" "}
                    {format(new Date(viewDonationDetails.created_date), "PPPP")}
                  </p>
                  <p>
                    <strong>Order Tracking ID:</strong>{" "}
                    {viewDonationDetails.order_tracking_id}
                  </p>
                </section>
                <section>
                  <h3>Payment Details</h3>
                  <p>
                    <strong>Payment Account:</strong>{" "}
                    {viewDonationDetails.payment_account}
                  </p>
                  <p>
                    <strong>Payment Method:</strong>{" "}
                    {viewDonationDetails.payment_method}
                  </p>
                  <p>
                    <strong>Payment Status:</strong>{" "}
                    {viewDonationDetails.payment_status_description}
                  </p>
                </section>
              </div>
            </div>
          </div>
        )}

        <div className="donations-total">
          <h3>Total Donations:</h3>
          <h3 className="h3-total">
            <Counter targetNumber={total} />
          </h3>
        </div>
      </div>
    </>
  );
}

export default Donations;
