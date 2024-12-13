import Stripe from "stripe";
import dotenv from "dotenv";
dotenv.config();

const stripePrivateKey = process.env.STRIPE_PRIVATE_KEY;

if (!stripePrivateKey) {
  throw new Error(
    "Stripe secret key is not defined in the environment variables"
  );
}
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);

const bankDonate = async (req, res) => {
  console.log(req.body);
  // const { items, name, amount } = req.body;
  // if (!items || !Array.isArray(items)) {
  //   return res.status(400).json({ error: "Invalid items in request body" });
  // }

  // if (!name) {
  //   return res.status(400).json({ error: "Invalid name" });
  // } else if (!amount) {
  //   return res.status(400).json({ error: "Amount is invalid" });
  // } else if (amount <= 0) {
  //   return res.status(400).json({ error: "Amount is less than 0" });
  // }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        if (!item.name || !item.amount) {
          throw new Error("Each item must have a name and an amount");
        }
        return {
          price_data: {
            currency: "usd",
            product_data: { name: item.name },
            unit_amount: item.amount * 100,
          },
          quantity: 1,
        };
      }),
      success_url: `https://donation-app-front.vercel.app/success`,
      cancel_url: `https://donation-app-front.vercel.app/cancel`,
    });
    // Process or store the bank details securely
    res.send({ url: session.url });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { bankDonate };
