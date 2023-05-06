import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardCertifications } from "./Components/CardCertifications";

export const Certifications = () => {
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
    <div style={{ width: "80%", margin: "0 auto", marginTop: "100px" }}>
      <Slider {...settings}>
        <div><CardCertifications /></div>
        <div><CardCertifications /></div>
        <div><CardCertifications /></div>
        <div><CardCertifications /></div>
        <div><CardCertifications /></div>
        <div><CardCertifications /></div>
      </Slider>
    </div>

  );
};
