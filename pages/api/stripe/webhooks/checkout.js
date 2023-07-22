import Stripe from "stripe";
import addData from "../../../../firebase/firestore/addData";
import getDocument from "../../../../firebase/firestore/getData";

const stripe = new Stripe(process.env.STRIPE_SK, {
  apiVersion: "2022-11-15",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const getRawBody = async (req) => {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => {
      chunks.push(chunk);
    });

    req.on("end", () => {
      resolve(Buffer.concat(chunks));
    });

    req.on("error", (error) => {
      reject(error);
    });
  });
};

const updateFirestoreUser = async (uid, type) => {
  const { result, error } = await getDocument("users", uid);

  if (result && result.exists()) {
    const userData = result.data();

    if (userData && "membership" in userData) {
      const membership = userData.membership;
      if (membership === "recurring" && type === "single") {
        return;
      }
    }
  }

  try {
    await addData("users", uid, { membership: type });
  } catch (err) {
    console.log(err);
  }
};

const handleStripeWebhook = async (req, res) => {
  const signature = req.headers["stripe-signature"];

  let event;

  try {
    const rawBody = await getRawBody(req);
    console.log("Retrieved raw body from request"); // Log when the raw body has been successfully retrieved

    event = stripe.webhooks.constructEvent(
      rawBody,
      signature,
      process.env.STRIPE_WEBHOOK_CHECKOUT_SECRET
    );
  } catch (err) {
    console.error(`Webhook signature verification failed: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const customerId = event.data.object.client_reference_id;
    const isSubscription = event.data.object.subscription ? true : false;
    const stripeCustomerId = event.data.object.customer;

    try {
      if (isSubscription) {
        await updateFirestoreUser(customerId, "recurring");
        const customer = await stripe.customers.update(stripeCustomerId, {
          metadata: { firebase_uid: customerId },
        });
      } else {
        await updateFirestoreUser(customerId, "single");
      }
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .json({ error: "Failed to update Firestore user data" });
    }
  }

  res.status(200).json({ received: true });
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    await handleStripeWebhook(req, res);
  } else {
    console.log(`Received a ${req.method} request, but only POST is allowed`); // Log when a non-POST request is received
    res.status(405).json({ error: "Method not allowed" });
  }
};

export default handler;
