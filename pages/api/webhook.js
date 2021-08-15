const { buffer } = require("micro");
const admin = require("firebase-admin");
const serviceAccount = require("../../permission.json");
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const endpointSecret = process.env.STRIPE_SIGNIN_SECRET;
const fulfillOrder = async (session) => {
  const { email, images } = session.metadata;

  return app
    .firestore()
    .collection("users")
    .doc(email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      images: JSON.parse(images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => console.log(session.id));
};
export default async function (req, res) {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      return fulfillOrder(session)
        .then(() => res.status(200).send("success"))
        .catch((err) => res.status(400).json({ err }));
    }
  }
}
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
