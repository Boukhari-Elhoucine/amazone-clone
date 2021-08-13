import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Products from "../components/Products";
export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <Banner />
        <Products products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
