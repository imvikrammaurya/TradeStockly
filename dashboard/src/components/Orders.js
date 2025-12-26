import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="w-full h-[90vh]">
      <div className="flex flex-col items-center justify-center p-20 text-center text-gray-500">
        <p className="mt-5 mb-5 text-base font-light text-gray-400">You haven't placed any orders today</p>

        <Link to={"/"} className="no-underline px-5 py-2.5 rounded text-white mt-2 bg-blue-600 hover:bg-blue-500">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Orders;
