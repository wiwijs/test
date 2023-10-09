"use client";

import { useEffect, useState } from "react";

export default function Card(props) {
  const item = props.item;

  const [title, setTitle] = useState(item.header);
  const [quantity, setQuantity] = useState(item.quantity);
  const [size, setSize] = useState(21);
  const titleDefault = item.header;

  const styledObject = {
    fontSize: size,
  };

  function setQuantityValue(value) {
    setQuantity(value);
  }

  function setTitleValue(value) {
    value === "" ? setTitle(titleDefault) : setTitle(value);
  }

  useEffect(() => {
    props.updateCant(quantity, item.id);
  }, [quantity]);

  return (
    <div className="mx-6 mt-6 flex flex-col self-start border-2 border-black sm:shrink-0 sm:grow sm:basis-0">
      <img
        className="mx-8 mt-8 rounded-lg"
        src={item.img}
        alt="Hollywood Sign on The Hill"
      />
      <div className="p-6">
        <h3
          style={styledObject}
          className="break-words mb-4 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
        >
          {title}
        </h3>
        <input
          className="w-11 border-2 border-gray-500 text-center"
          type="number"
          min="0"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
        ></input>
        <label className="ml-2">px</label>
        <input
          className="my-4 w-full border-2 border-gray-500"
          placeholder="Change title"
          type="text"
          onChange={(e) => setTitleValue(e.target.value)}
        ></input>
        <div className="flex flex-row items-center mb-2">
          <h3 className="text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            ${item.price}
          </h3>
          <div className="pl-2">
            <input
              value={quantity}
              className="border-2 border-gray-500 text-gray-500 w-11 text-center h-6"
              onChange={(e) => setQuantityValue(Number(e.target.value))}
            ></input>
          </div>
        </div>
        <p className="mb-4 text-base text-neutral-500 dark:text-neutral-200">
          {item.text}
        </p>
        <div className="flex flex-row justify-center">
          <button className="bg-pink-300 p-1 px-5 border-2 border-black">
            Add to cart
          </button>
        </div>
        <div className="flex flex-row justify-center my-4">
          <a href="#" className="text-black underline">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}
