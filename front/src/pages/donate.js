import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";

function Donate() {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    phoneNumber: "",
    bankDetails: { accountNumber: "", bankName: "" },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Handle the payment process
    if (paymentMethod === "mpesa") {
      try {
        const response = await axios.post("/mpesa", {
          amount: formData.amount,
          phoneNumber: formData.phoneNumber,
        });
        console.log("M-Pesa payment response", response);
        alert(
          "Donation initiated successfully. Check your phone to complete the payment"
        );
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Failed to initiate payment. Please try again.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "50px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          maxWidth: "600px",
          margin: "auto",
        }}
      >
        <h1 style={{ fontSize: "2rem", color: "#333" }}>Donate here</h1>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />

          <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                value="mpesa"
                checked={paymentMethod === "mpesa"}
                onChange={() => handlePaymentMethodChange("mpesa")}
              />
              <span style={{ marginLeft: "8px" }}>M-Pesa</span>
            </label>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                value="bank"
                checked={paymentMethod === "bank"}
                onChange={() => handlePaymentMethodChange("bank")}
              />
              <span style={{ marginLeft: "8px" }}>Bank Transfer</span>
            </label>
          </div>

          {paymentMethod === "mpesa" && (
            <input
              type="text"
              name="phoneNumber"
              placeholder="M-Pesa Phone Number"
              onChange={handleChange}
              required
              style={{
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          )}

          {paymentMethod === "bank" && (
            <>
              <input
                type="text"
                name="accountNumber"
                placeholder="Bank Account Number"
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
              <input
                type="text"
                name="bankName"
                placeholder="Bank Name"
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                }}
              />
            </>
          )}

          <button
            type="submit"
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#007BFF",
              color: "#fff",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Donate
          </button>
        </form>
      </div>
    </>
  );
}

export default Donate;
