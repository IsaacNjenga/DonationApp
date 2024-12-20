import moment from "moment";
import axios from "axios";
const stkpush = async (req, res) => {
  const { phoneNumber, account, amount, name } = req.body;

  const timeStamp = moment().format("YYYYMMDDHHmmss");
  const shortCode = "174379";
  const passKey =
    "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919";

  const password = new Buffer.from(shortCode + passKey + timeStamp).toString(
    "base64"
  );

  const phoneNo = phoneNumber.substring(1);
  const token = req.token;
  
  await axios
    .post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: shortCode,
        Password: password,
        Timestamp: timeStamp,
        TransactionType: "CustomerPayBillOnline", //till: "CustomerBuyGoodsOnline"
        Amount: amount,
        PartyA: `254${phoneNo}`,
        PartyB: shortCode,
        PhoneNumber: `254${phoneNo}`,
        CallBackURL: `https://donation-app-umber.vercel.app/donate/callback`,
        AccountReference: account,
        TransactionDesc: "Mpesa API test",
      },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then((data) => {
      console.log(data.data);
      res.status(200).json(data.data);
    })
    .catch((error) => {
      console.error("STK Push Error:", error.response?.data || error.message);
      res.status(400).json(error.response?.data || error.message);
    });
};

export { stkpush };
