import { Link } from "react-router-dom";
import "animate.css";

export const Home = () => {
  return (
    <div id="home" className={"h-screen flex items-center "}>
      <div className="text-center mx-auto ">
        <p className="mb-10 animate-waving-hand text-8xl transition-all duration-500 animate-bounce ">
          👋🏻
        </p>
        <h1
          id="title-home"
          className=" font-black  text-7xl py-3 animate__bounceInDown "
        >
          {" "}
          Welcome To Cecilia's CV
        </h1>
        <p className="text-3xl font-light mt-5 text-white">The land of opportunity</p>
        <Link
          to="/professionalprofile/cecilia-martinez/aboutme"
          className="px-5 py-2 inline-block bg-[#564dfb] hover:bg-[#4339ff] focus:ring-[#726AFF] text-white transition-colors mt-10 rounded-full hover:animate-pulse"
          href=""
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};
