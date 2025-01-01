import React from "react";

export default function Button({ btnTxt }) {
  return (
    <button className="px-4 py-4 ml-4 border-b-4 active:border-b-0 border-b-yellow-600 transition-all active:scale-95 bg-gray-100 active:bg-gray-800 active:text-white rounded-md overflow-hidden font-semibold text-yellow-600 dark:bg-gray-800 dark:text-gray-50">
      {btnTxt}
    </button>
  );
}
