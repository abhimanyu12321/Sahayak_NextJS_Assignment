import React from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CreateOrder from "./createOrder";
import OrderCard from "../clientcomponents/OrderCard";

async function fetchOrders() {
  try {
    const response = await fetch(
      "https://fastapi-ecommerce-api.onrender.com/orders/all?limit=10&offset=0",
      {
        cache: "no-store",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
async function Page() {
  const orders = await fetchOrders();
  console.log("orders are ", orders);

  return (
    <div className="pt-6 pl-6">
      <Button asChild variant="outline" className="text-2xl p-6 m-6">
        <Link href="/">Home</Link>
      </Button>
      <div className="flex gap-4 border p-4 m-4 justify-center items-center">
        <h1 className="text-4xl font-medium">Your Orders</h1>
        <div>
          <CreateOrder />
        </div>
      </div>
      <div className="productContainer w-[80vw] mx-auto ">
        <div className="flex gap-4 border p-4 justify-around items-center font-extrabold">
          <div>OrderId</div>
          <div>totalAmount</div>
          <div>city</div>
          <div>Update Action</div>
          <div>Delete Action</div>
        </div>

        {orders &&
          orders.map((order) => {
            return (
              <OrderCard
                key={order.orderId}
                id={order.orderId}
                city={order.userAddress.City}
                amount={order.totalAmount}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Page;
