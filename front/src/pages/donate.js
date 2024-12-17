import React, { useState } from "react";
import Navbar from "../components/navbar";
import axios from "axios";
import "../assets/css/donate.css";
function Donate() {
  const [paymentMethod, setPaymentMethod] = useState("mpesa");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    phoneNumber: "",
    account: "174379",
    //bankDetails: { accountNumber: "", bankName: "" },
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("initiate-payment", {
        email: formData.email,
        amount: formData.amount,
        phoneNumber: formData.phoneNumber,
      })
      .then((res) => {
        console.log(res);
        const url = res.data.redirectUrl;
        window.location.href = url;
      })
      .catch((err) => console.log(err));
    // Handle the payment process
    // if (paymentMethod === "mpesa") {
    //   try {
    //     await axios.post("/mpesa", {
    //       name: formData.name,
    //       amount: formData.amount,
    //       phoneNumber: formData.phoneNumber,
    //       account: formData.account,
    //     });
    //     // console.log("M-Pesa payment response", response);
    //     alert(
    //       "Donation initiated successfully. Check your phone to complete the payment"
    //     );
    //   } catch (error) {
    //     console.error("Payment failed:", error);
    //     alert("Failed to initiate payment. Please refresh and try again.");
    //   }
    // } else if (paymentMethod === "bank") {
    //   try {
    //     axios
    //       .post("create-checkout-session", {
    //         items: [
    //           {
    //             name: formData.name,
    //             amount: formData.amount,
    //           },
    //         ],
    //       })
    //       .then((res) => {
    //         console.log(res.data);
    //         const url = res.data.url;
    //         window.location.href = url;
    //       });
    //   } catch (error) {
    //     console.log(error);
    //     alert("Failed to initiate payment. Please refresh and try again.");
    //   }
    // }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          padding: "50px",
          backgroundColor: "whitesmoke",
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
          {/* <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
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
          </div> */}
          {/* 
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

          {paymentMethod === "mpesa" && (
            <>
              <label>
                Paybill{" "}
                <input
                  type="text"
                  name="account"
                  placeholder="Paybill - 174379"
                  value="174379"
                  readOnly
                  style={{
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                  }}
                />
              </label>

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
            </>
          )}

          {paymentMethod === "bank" && <></>} */}
          <label>Email</label>
          <input
            type="email"
            onChange={handleChange}
            name="email"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label>PhoneNumber</label>
          <input
            type="number"
            onChange={handleChange}
            name="phoneNumber"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <label>Amount</label>
          <input
            type="number"
            onChange={handleChange}
            name="amount"
            required
            style={{
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
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
