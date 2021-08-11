import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
const MAX = 5;
const MIN = 1;
function Product({ product }) {
  const [rating] = useState(Math.floor(Math.random() * (MAX - MIN + 1) + MIN));
  const { image, title, price, description, category } = product;
  return (
    <div className="relative flex flex-col bg-white m-4 z-30 p-10 hover:shadow-md">
      <p className="absolute top-2 right-2 italic text-sm  text-gray-300">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="my-2 font-semibold">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-300" />
          ))}
      </div>
      <p className="truncate text-xs my-2">{description}</p>
      <div className="font-semibold my-1">
        <Currency quantity={price} />
      </div>
      <button className="button">Add to Basket</button>
    </div>
  );
}

export default Product;
