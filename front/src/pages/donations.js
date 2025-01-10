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
import Counter from "../components/counter";

function Donations() {
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [transactionsData, setTransactionsData] = useState([]);

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

  const columns = [
    {
      name: "Amount",
      selector: (row) => (
        <>
          {row.payment_method === "MpesaKE" ? "KES." : "$"}
          {!isNaN(row.amount) ? Number(row.amount).toFixed(2) : "N/A"}
        </>
      ),
    },
    { name: "Confirmation Code", selector: (row) => row.confirmation_code },
    {
      name: "Date",
      selector: (row) => {
        return format(new Date(row.created_date), "PPPP");
      },
    },
    { name: "Merchant Number", selector: (row) => row.merchant_reference },
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
    { name: "Payment Account", selector: (row) => row.payment_account },
    { name: "Order Tracking ID", selector: (row) => row.order_tracking_id },
    {
      name: "Payment Status",
      selector: (row) => row.payment_status_description,
    },
  ];

  const totalDonations = (amounts) => {
    let totalAmount = 0;
    amounts.forEach((item) => {
      totalAmount += parseFloat(item.amount) || 0; // Parse the amount and handle invalid strings
    });
    setTotal(totalAmount); // Assuming `setTotal` is part of a state
    return totalAmount;
  };

  return (
    <>
      {loading && <Loader />} <Navbar /> <MiniNavbar />
      <div>
        <h1>Donations</h1>
        <div>
          <DataTable columns={columns} data={transactionsData} pagination />
        </div>

        <div style={{ backgroundColor: "red" }}>
          <p>Total:</p> <Counter targetNumber={total} />
        </div>
      </div>
    </>
  );
}

export default Donations;
