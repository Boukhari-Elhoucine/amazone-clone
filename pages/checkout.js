import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItem } from "../slices/BasketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/client";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
function checkout() {
  const stripePromise = loadStripe(process.env.stripe_public_key);
  const [session] = useSession();
  const items = useSelector(selectItem);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkoutSession = await axios.post("/api/checkout-session", {
      items,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  const total = items
    .map((item) => item.price)
    .reduce((prev, next) => prev + next, 0);
  return (
    <div className="bg-gray-100">
      <Head>
        <title>checkout</title>
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-lg mx-auto">
        <div className="flex-grow m-3 shadow-sm">
          <Image
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-2 bg-white">
            <h1 className="font-semibold md:text-2xl pb-2 border-b">
              {items.length === 0
                ? "Your Basket is empty"
                : "Your shopping basket"}
            </h1>
            <div className="space-y-10 py-2">
              {items?.map(
                ({ id, image, title, price, description, rating }) => (
                  <CheckoutProduct
                    key={id}
                    id={id}
                    img={image}
                    title={title}
                    price={price}
                    description={description}
                    rating={rating}
                  />
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white p-8 shadow-md lg:block ">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal({items.length})</h2>
              <span className="font-medium">
                <Currency quantity={total} />
              </span>
              <button
                role="link"
                onClick={createCheckoutSession}
                disabled={!session}
                className={`button ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-400 text-gray-300 cursor-not-allowed"
                }`}
              >
                {session ? "proceed to checkout" : "sign in to check out"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default checkout;
