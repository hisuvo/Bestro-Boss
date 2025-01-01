import ShareTitle from "../../../components/ShareTitle/ShareTitle";
import MenuCard from "../../Shared/MenuCard/MenuCard";
import useMenu from "../../../components/Hooks/UseMenu";

export default function PopulerMenu() {
  const [menu] = useMenu();
  const populer = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <ShareTitle handing={"FROM OUT MENU"} subHading={"---Check it out---"} />
      <div className="grid md:grid-cols-2 gap-4 my-6 md:my-12">
        {populer.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
    </div>
  );
}
