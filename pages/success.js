import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
function Success() {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto bg-white shadow-sm">
        <div className="flex flex-col p-3">
          <div className="flex items-center justify-center ">
            <CheckCircleIcon className="text-green-600 h-8" />
            <h1 className="text-lg font-semibold">
              Thank you your order has been confirmed
            </h1>
          </div>
          <p className="text-sm mt-1 mb-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
            aspernatur pariatur iusto similique! Esse, nostrum corporis quidem
            ipsam hic voluptates, aperiam ipsum veritatis delectus illo
            praesentium libero omnis ab excepturi?
          </p>
          <button className="button" onClick={() => router.push("/orders")}>
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
}

export default Success;
