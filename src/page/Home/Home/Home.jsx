import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefServiceBanner from "../ChefServiceBanner/CheifServiceBanner";
import Contact from "../Contact/Contact";
import FormMenu from "../FormMenu/FormMenu";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import RecomandChef from "../RecomandChef/RecomandChef";
import Testimonials from "../Testimonials/Testimonials";

export default function Home() {
  document.title = "Bistro Boss | Home";
  return (
    <div>
      <Banner />
      <Category />
      <ChefServiceBanner />
      <PopulerMenu />
      <Contact />
      <RecomandChef />
      <FormMenu />
      <Testimonials />
    </div>
  );
}
