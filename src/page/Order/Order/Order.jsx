import { useState } from "react";
import orderImg from "../../../assets/shop/banner2.jpg";
import Poster from "../../Menu/Poster/Poster";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../components/Hooks/UseMenu";
import OrderTabCard from "../OrderTabCard/OrderTabCard";

export default function Order() {
  document.title = "Bistro Boss | Order";
  const [menu] = useMenu();
  const [tabIndex, setTabIndex] = useState(0);

  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Poster
        bgImg={orderImg}
        Title={"OUR SHOP"}
        subTitle={"would you like try"}
      />
      <div className="my-8">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            {" "}
            <OrderTabCard items={salads} />
          </TabPanel>
          <TabPanel>
            <OrderTabCard items={pizzas} />
          </TabPanel>
          <TabPanel>
            <OrderTabCard items={soups} />
          </TabPanel>
          <TabPanel>
            <OrderTabCard items={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTabCard items={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}
