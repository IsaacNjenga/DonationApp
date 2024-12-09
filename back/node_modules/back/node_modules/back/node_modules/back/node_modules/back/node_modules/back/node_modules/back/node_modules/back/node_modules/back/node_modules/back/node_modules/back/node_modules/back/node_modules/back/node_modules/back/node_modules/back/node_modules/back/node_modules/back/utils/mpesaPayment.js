import axios from "axios";
import { getAccessToken } from "./accessToken.js";

export const initiateMpesaPayment = async (amount, phoneNumber) => {
  const accessToken = await getAccessToken();

  // Generate the timestamp
  const timestamp = new Date()
    .toISOString()
    .replace(/[-:T]/g, "")
    .split(".")[0];

  // Generate password (encoded ShortCode + PassKey + Timestamp)
  const shortCode = 174379;
  const passKey =
    "dEhH1jtL2d7HrIVd5xcOq9bUK7UX8IUmK8Ty4qoKpbGDUR/sFDZjVcCCFo93WQl+acymGfDECtKZFDaIPLPH56C5FgcImsfYttFs/7etrcFY5xauaK29s7LMEyzi+pBxB9ZGwHw6SSBjnW7D/ZWkznUWjBOFl3QzOufEhtxp5LlJuzu2bh+eDLPCCbbK+EQT5Bt45jfl1Rrb70HjNV0rPg6fuMFlkdpgRQ/+s6mZ8gSoJUbOp8QTpYawgxsXX6KWmqLhdhykGNPsMUd7rcHmiBNT89F7FGVvkrsjlWPYgThkopLNIwMNs6ANljCGkvMY+DtpzMfMEXu8mNSTraEPSQ==";
  const password = Buffer.from(`${shortCode}${passKey}${timestamp}`).toString(
    "base64"
  );

  try {
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: shortCode,
        PhoneNumber: phoneNumber,
        CallBackURL: "https://mydomain.com/callback", // Replace with your callback URL
        AccountReference: "Donation",
        TransactionDesc: "Charity Donation",
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("M-Pesa Payment Error:", error);
    throw error;
  }
};
