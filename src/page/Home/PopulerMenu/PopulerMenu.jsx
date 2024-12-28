import { useState } from "react";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";
import { useEffect } from "react";
import MenuCard from "../../Shared/MenuCard/MenuCard";

export default function PopulerMenu() {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("./menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filterMenu = data.filter((item) => item.category === "popular");
        setMenus(filterMenu);
      });
  }, []);
  console.log(menus);

  return (
    <div>
      <ShareTitle handing={"FROM OUT MENU"} subHading={"---Check it out---"} />
      <div className="grid md:grid-cols-2 gap-4 my-6 md:my-12">
        {menus.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </div>
  );
}
