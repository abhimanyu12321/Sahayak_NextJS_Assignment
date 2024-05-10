"use client";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  deleteOrder,
  deleteProduct,
  updateOrder,
  updateProduct,
} from "../actions";

const OrderCard = ({ city, amount, id }) => {
  const [ccity, setCcity] = useState(city);
  const [cquantity, setCquantity] = useState(amount);
  async function handleUpdateSubmit(id) {
    let response = await updateOrder(city, cquantity, id);
    console.log("update server action return value", response);
  }

  async function handleDeleteSubmit(id) {
    let response = await deleteOrder(id);
    console.log("delete server action return value", response);
  }

  return (
    <div className="flex gap-4 border p-4 justify-around items-center">
      <div>{id}</div>
      <div>{amount}</div>
      <div>{city}</div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Update</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Order</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                City
              </Label>
              <Input
                id="name"
                defaultValue={ccity}
                className="col-span-3"
                onChange={(e) => setCcity(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Amount
              </Label>
              <Input
                id="quantity"
                defaultValue={cquantity}
                className="col-span-3"
                type="number"
                onChange={(e) => setCquantity(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" onClick={() => handleUpdateSubmit(id)}>
                update
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Button variant="destructive" onClick={() => handleDeleteSubmit(id)}>
        delete
      </Button>
    </div>
  );
};

export default OrderCard;