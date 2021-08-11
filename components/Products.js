import Product from "./Product";

function Products({ products }) {
  return (
    <section className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:-mt-32">
      {products?.slice(0, 4).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <img
        src="https://links.papareact.com/dyz"
        className="sm:col-span-full"
        alt=""
      />
      <div className=" md:col-span-2">
        {products?.slice(4, 5).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products?.slice(5, products.lenght).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default Products;
