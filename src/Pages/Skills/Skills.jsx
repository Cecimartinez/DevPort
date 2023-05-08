import Experience from "./Components/Experience";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  
  return (
    <div style={{ width: "50%", margin: "0 auto", marginTop: "100px" }}>
      <Slider {...settings}>
      <div><Experience /></div>
      <div><Experience /></div>
      <div><Experience /></div>
      <div><Experience /></div>
      </Slider>
    </div>
  );
};
