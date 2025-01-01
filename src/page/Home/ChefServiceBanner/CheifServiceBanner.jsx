import React from "react";
import bgImage from "../../../assets/chef-service.jpg";
import "./ChefServiceBanner.css";
export default function ChefServiceBanner() {
  return (
    <div className="bg-img py-[6rem] my-10 md:my-16">
      <div className="max-w-[700px] mx-auto text-center bg-slate-50 p-10">
        <h2 className="text-4xl">Bestro Boss</h2>
        <p className="mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quos
          id repellat ea incidunt quidem perferendis ullam quis, delectus
          cupiditate adipisci soluta ad.
        </p>
      </div>
    </div>
  );
}
