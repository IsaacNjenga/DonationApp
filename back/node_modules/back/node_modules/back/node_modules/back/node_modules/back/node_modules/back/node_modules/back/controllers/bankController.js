const bankDonate = async (req, res) => {
  const { accountNumber, bankName, amount } = req.body;
  // Process or store the bank details securely
  res.status(200).json({ message: "Bank details submitted" });
};

export { bankDonate };
