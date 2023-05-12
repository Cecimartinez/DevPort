import Experience from "./Components/Experience";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import react from "../../assets/react.png";
import tailwind from "../../assets/tailwind.png";
import java from "../../assets/java.png";
import javascript from "../../assets/javascript.png";
import Python from "../../assets/Python.png";
import github from "../../assets/github.png";

export const Skills = () => {
  const images = [html, css, react, tailwind, java, javascript, Python, github];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 640, // break on phone size
        settings: {
          slidesToShow: 2,
          dots: false,
          autoplaySpeed: 300,
        },
      },
    ],
  };

  return (
      <div
        style={{ width: "50%", margin: "0 auto", marginTop: "100px" }}
        className=" h-full  overflow-y-auto  py-32"
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} >
              <Experience imagen={image} />
            </div>
          ))}
        </Slider>
      </div>
  );
};
