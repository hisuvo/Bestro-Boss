import bgImage from "../../../assets/featured.jpg";
import Button from "../../../components/CardButton/Button";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";
import "./FormMenu.css";
export default function FormMenu() {
  return (
    <div className="feature-img">
      <div className="static py-12 bg-black bg-opacity-40">
        <ShareTitle
          handing={"FROM OUR MENU"}
          subHading={"---Check it out---"}
        />
        <div className="max-w-[850px] mt-16 mx-auto grid md:grid-cols-2 gap-6">
          <figure>
            <img className="rounded-md" src={bgImage} alt="" />
          </figure>
          <div className="text-white space-y-2">
            <h5>{`${new Date().getFullYear()}`}</h5>
            <h2 className="text-xl">Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              commodi esse, debitis repudiandae neque beatae itaque ad
              aspernatur quae quidem ullam error blanditiis incidunt cum!
            </p>

            <Button btnTxt={"READ MORE"} />
          </div>
        </div>
      </div>
    </div>
  );
}
