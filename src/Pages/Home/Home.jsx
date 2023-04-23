import { Card } from "react-bootstrap";

export const Home = () => {
  return (
    <div className="h-screen flex items-center">
      <div  className="text-center mx-auto">
        <h1 className="text-white font-extrabold  text-6xl">Welcome To DevPort</h1>
        <p className="text-3xl font-light mt-5 text-white">The land of opportunity</p>
        <a className="px-5 py-2 inline-block bg-[#564dfb] hover:bg-[#4339ff] focus:ring-[#726AFF] text-white transition-colors mt-10 rounded-md" href="">Get Start</a>
        

      </div>
    </div>
  );
};
