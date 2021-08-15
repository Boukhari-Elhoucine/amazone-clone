import Header from "../components/Header";
import { getSession, useSession } from "next-auth/client";
import db from "../firebase";
import moment from "moment";
import Order from "../components/Order";
function Orders({ orders }) {
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-8">
        <h1 className="text-xl border-b-2 border-yellow-400 pb-3">
          Your Orders
        </h1>

        <div>{session ? <h2>{orders.length}</h2> : <h2>Sign in</h2>}</div>
        <div className="mt-5 space-y-4">
          {orders.map((order) => (
            <Order key={order.id} order={order} />
          ))}
        </div>
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
  const session = await getSession(context);
  if (!session) {
    return {
      props: {},
    };
  }
  const myOrders = await db
    .collection("users")
    .doc(session.user.email)
    .collection("orders")
    .orderBy("timestamp", "desc")
    .get();

  const orders = await Promise.all(
    myOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  );
  return {
    props: {
      orders,
      session,
    },
  };
}
export default Orders;
