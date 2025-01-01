import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ShareTitle from "../../../components/ShareTitle/ShareTitle";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`./reviews.json`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <div className="mt-16">
      <div>
        <ShareTitle
          handing={"TESTIMONIALS"}
          subHading={"---What Our Clients Say---"}
        />
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-[750px] mx-auto text-center my-12">
                <h2 className="flex justify-center items-center mb-6">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review.rating}
                    readOnly
                  />
                </h2>
                <p>{review.details}</p>
                <h2 className="text-2xl font-semibold text-yellow-500">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
    </div>
  );
}
