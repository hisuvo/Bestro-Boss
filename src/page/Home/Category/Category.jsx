import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import slider1 from "../../../assets/slide1.jpg";
import slider2 from "../../../assets/slide2.jpg";
import slider3 from "../../../assets/slide3.jpg";
import slider4 from "../../../assets/slide4.jpg";
import slider5 from "../../../assets/slide5.jpg";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";

export default function Category() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: {
      perView: 4,
      spacing: 10,
    },
  });
  return (
    <section className="my-6 md:my-12">
      <ShareTitle
        handing={"ORDER ONLINE"}
        subHading={"---From 11:00am to 10:00pm---"}
      />
      <div ref={sliderRef} className="keen-slider my-10">
        <div className="keen-slider__slide number-slide1 relative">
          <img src={slider1} alt="" />
          <h2 className="text-xl font-semibold text-white -mt-10 text-center uppercase">
            Desart name here
          </h2>
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slider2} alt="" />
          <h2 className="text-xl font-semibold text-white -mt-10 text-center uppercase">
            Desart name here
          </h2>
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slider3} alt="" />
          <h2 className="text-xl font-semibold text-white -mt-10 text-center uppercase">
            Desart name here
          </h2>
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slider4} alt="" />
          <h2 className="text-xl font-semibold text-white -mt-10 text-center uppercase">
            Desart name here
          </h2>
        </div>
        <div className="keen-slider__slide number-slide1">
          <img src={slider5} alt="" />
          <h2 className="text-xl font-semibold text-white -mt-10 text-center uppercase">
            Desart name here
          </h2>
        </div>
      </div>
    </section>
  );
}
