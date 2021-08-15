import moment from "moment";
import Currency from "react-currency-formatter";
function Order({ order }) {
  const { amount, images, timestamp, items, id } = order;
  return (
    <div className="relative border rounded ">
      <div className="flex items-center space-x-10 bg-gray-100 p-6 text-sm">
        <div>
          <p className="text-xs font-semibold">ORDER PLACED</p>
          <p className="text-gray-500">
            {moment.unix(timestamp).format("DD MM YYYY")}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold">TOTAL</p>
          <p>
            <Currency quantity={amount} />
          </p>
        </div>
        <p className="text-sm whitespace-nowrap text-blue-500 flex-grow self-end text-right">
          {items.length} Items
        </p>
        <p className="absolute truncate text-xs top-1 text-gray-500 md:w-72 right-2 w-48 whitespace-nowrap">
          Order {id}
        </p>
      </div>
      <div className="p-4 md:p-8">
        <div className="flex space-x-3 overflow-x-scroll">
          {images.map((image) => (
            <img src={image} className="h-20 sm:h-32 object-contain" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Order;
