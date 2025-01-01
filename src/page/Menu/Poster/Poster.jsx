import Button from "../../../components/CardButton/Button";
import { Parallax } from "react-parallax";
export default function Poster({ bgImg, Title }) {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={bgImg}
      bgImageAlt="On Of The Best Food"
      strength={-300}
    >
      <div className="hero min-h-[35rem]">
        <div className="hero-content text-neutral-content text-center">
          <div className="md:w-[43rem] py-6 bg-black bg-opacity-45">
            <h1 className="mb-5 text-5xl font-bold">{Title}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in.</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
}
