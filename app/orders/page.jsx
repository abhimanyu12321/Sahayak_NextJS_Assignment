import React from "react";
import axios from "axios";
import Link from "next/link";

async function fetchOrders() {
  try {
    const response = await axios.get(
      "https://fastapi-ecommerce-api.onrender.com/orders/all"
    );
    return response.data.detail;
  } catch (error) {
    console.log(error);
  }
}
async function page() {
  const orders = await fetchOrders();
  console.log(orders);
  return (
    <div>
      <Link href={"/"} className="text-blue-600 hover:underline">
        Home
      </Link>
      <h1>Your Orders</h1>
      {orders &&
        orders.map((order) => {
          return (
            <div key={order.msg} className="flex gap-4 border p-4">
              <div>{order.msg}</div>
              <div>{order.type}</div>
            </div>
          );
        })}
    </div>
  );
}

export default page;
