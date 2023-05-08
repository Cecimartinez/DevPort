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
    responsive: [
      {
        breakpoint: 640, // break on phone size
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-12 px-4 sm:px-6 lg:px-8  h-full overflow-y-auto ">
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
