import axios from "axios";

const generateToken = async (req, res, next) => {
  try {
    const secret =
      "1wqxsEQokkKcYMFrPXERCfkOzG6D0LXI5xEAZthGCDDAGsWjeY78dHTgpRmQmir7";
    const consumer = "UbntcNJWpVAyglqYKMxSlK6GAp3yHBIGn57c0xQiFxJDPB5F";

    const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");

    const { data } = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      { headers: { Authorization: `Basic ${auth}` } }
    );

    req.token = data.access_token;
    next();
  } catch (err) {
    console.error("Error generating token:", err.message);
    res.status(400).json({ error: "Failed to generate access token" });
  }
};

export { generateToken };
