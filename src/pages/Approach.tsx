import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import Conditions from "../components/Conditions";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <section
        className="py-24 max-w-[1466px] w-full mx-auto px-8 min-h-screen" id="examples">
        <h3 className="text-center text-5xl font-bold">Approach</h3>
        <p className="mt-4 sm:mt-8 max-w-[1000px] mx-auto text-center font-semibold leading-relaxed sm:text-lg">
            This tool addresses three specific types of color blindness: 
            <span className="text-purple-700 font-bold mx-1">Protanomaly</span>, 
            <span className="text-purple-700 font-bold mx-1">Deuteranomaly</span>, and 
            <span className="text-purple-700 font-bold mx-1">Tritanomaly</span>. Each type represents a distinct form of color vision deficiency, characterized by unique impairments in perceiving color. Our solution aims to enhance image accessibility by adjusting colors to better align with the needs of individuals affected by these conditions.
        </p>
        <Conditions />
      </section>
      <GetStarted />
      <Footer />
    </>
  );
};

export default Home;
