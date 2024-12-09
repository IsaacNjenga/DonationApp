import axios from "axios";

export const getAccessToken = async () => {
  const consumerKey = "UbntcNJWpVAyglqYKMxSlK6GAp3yHBIGn57c0xQiFxJDPB5F";
  const consumerSecret =
    "1wqxsEQokkKcYMFrPXERCfkOzG6D0LXI5xEAZthGCDDAGsWjeY78dHTgpRmQmir7";
  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString(
    "base64"
  );

  try {
    const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      }
    );
    return response.data.access_token;
  } catch (error) {
    console.error("Error generating access token:", error);
    throw new Error("Failed to get access token");
  }
};
