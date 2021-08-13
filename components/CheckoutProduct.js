import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/BasketSlice";
function CheckoutProduct({ id, img, title, price, rating, description }) {
  const dispatch = useDispatch();
  const addItem = () => {
    const product = {
      id,
      image: img,
      title,
      price,
      rating,
      description,
    };
    dispatch(addToBasket(product));
  };
  const removeItem = () => {
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid gird-cols-1 sm:grid-cols-5 items-center">
      <Image src={img} height={200} width={200} objectFit="contain" />
      <div className="mx-3 sm:col-span-3">
        <p className=" my-2 font-medium">{title}</p>
        <div className="flex ">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-6 text-yellow-400 mb-1" />
            ))}
        </div>
        <p className="text-xs my-1">{description}</p>
        <div className="font-semibold">
          <Currency quantity={price} />
        </div>
      </div>
      <div className="mt-1 space-y-2">
        <button onClick={addItem} className="button w-full">
          Add to basket
        </button>
        <button onClick={removeItem} className="button w-full">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
