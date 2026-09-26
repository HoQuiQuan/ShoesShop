"use client";

import { useMemo, useState } from "react";

import OrderCard from "./OrderCard";
import OrderFilter from "./OrderFilter";
import EmptyOrders from "./EmptyOrders";

import type { Order } from "@/type/order.type";

interface Props {
  orders: Order[];
}

export default function OrderList({ orders }: Props) {
  const [activeStatus, setActiveStatus] = useState("ALL");

  const filteredOrders = useMemo(() => {
    if (activeStatus === "ALL") {
      return orders;
    }

    return orders.filter((order) => order.status === activeStatus);
  }, [orders, activeStatus]);
  console.log("filteredOrders", filteredOrders);

  return (
    <>
      <OrderFilter active={activeStatus} onChange={setActiveStatus} />

      {filteredOrders.length === 0 ? (
        <EmptyOrders />
      ) : (
        <div className="space-y-5">
          {filteredOrders.map((order, index) => (
            <OrderCard key={order.orderCode} order={order} index={index} />
          ))}
        </div>
      )}
    </>
  );
}
