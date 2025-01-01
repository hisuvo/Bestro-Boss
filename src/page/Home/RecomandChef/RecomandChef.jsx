import React, { useEffect, useState } from "react";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";
import FoodCard from "../../Shared/FoodCard/FoodCard";

export default function RecomandChef() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterMenu = data.filter((item) => item.category == "offered");
        setMenus(filterMenu);
      });
  }, []);

  return (
    <div className="my-32">
      <ShareTitle handing={"CHEF RECOMMENDS"} subHading={"---Should Try---"} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
        {menus.slice(0, 3).map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}
