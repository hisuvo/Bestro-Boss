import Poster from "../Poster/Poster";
import bannerImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";
import useMenu from "../../../components/Hooks/UseMenu";
import MenuCatagory from "../MenuCatagory/MenuCatagory";
export default function Menu() {
  document.title = "Bistro Boss | Menu";
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Poster bgImg={bannerImg} Title={"OUR MENU"} />
      <ShareTitle handing={"TODAY'S OFFER"} subHading={"---Don't miss---"} />
      <MenuCatagory items={offered} />

      <Poster bgImg={dessertImg} Title={"DESSERTS"} />
      <MenuCatagory items={desserts} />

      <Poster bgImg={pizzaImg} Title={"PIZZA"} />
      <MenuCatagory items={pizzas} />

      <Poster bgImg={saladImg} Title={"SALADS"} />
      <MenuCatagory items={salads} />

      <Poster bgImg={soupImg} Title={" SOUPS"} />
      <MenuCatagory items={soups} />
    </div>
  );
}
