"use client";
import Card from "@/components/Card";
import { useEffect, useState, useCallback } from "react";

export default function Test() {
  const [list, setList] = useState([
    {
      id: 1,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 2,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 3,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 4,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 5,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 6,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
    {
      id: 7,
      img: "/img/download.jpeg",
      header: "Tourmaline & Eucalyptus Bar Soap",
      price: "12.00",
      quantity: 1,
      text: "Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion",
    },
  ]);

  const [totalQuantity, setTotalQuantity] = useState(0);

  const initialValue = 0;

  const updateCant = useCallback((num, id) => {
    setList((list) =>
      list.map((item) => {
        if (item.id === id) {
          item.quantity = num;
          return { ...item };
        } else {
          return item;
        }
      })
    );
  });

  const cards = list.map((item, key) => {
    return (
      <Card updateCant={updateCant} item={item} key={item.id} myKey={item.id} />
    );
  });

  useEffect(() => {
    const sumWithInitial = list.reduce(
      (accumulator, currentValue) =>
        accumulator + Number(currentValue.quantity),
      initialValue
    );
    setTotalQuantity(sumWithInitial);
  }, [list]);

  return (
    <>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4 self-start">
        {cards}
      </div>
      <div className="flex flex-row justify-end pt-4 pr-7">
        <h1>Total de productos: {totalQuantity}</h1>
      </div>
    </>
  );
}
