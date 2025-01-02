import React from "react";
import Button from "../../../components/CardButton/Button";

export default function OrderTabCard({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {items.map((item) => (
        <div className="max-w-xl rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
          <img
            src={item.image}
            alt={item.name}
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 flex-grow">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <h2 className="text-lg font-light tracking-wide">
                {item.recipe.slice(0, 80)}
              </h2>
            </div>
            <div className="flex-grow">
              <Button btnTxt={"Add To Card"} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
