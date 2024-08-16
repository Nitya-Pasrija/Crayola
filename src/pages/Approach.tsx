import React from "react";
import Examples from "../components/Examples";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <section
        className="py-24 max-w-[1466px] w-full mx-auto px-8 min-h-screen"
        id="examples"
      >
        <h3 className="text-center text-5xl font-bold">Examples</h3>
        <Examples />
      </section>
      <section className="pt-16 pb-32 px-4">
        <div className="max-w-[1100px] w-full mx-auto h-[450px] bg-secondary bg-opacity-35 rounded-[48px] flex flex-col items-center justify-center px-4">
          <p className="max-w-[840px] font-semibold text-2xl sm:text-4xl leading-normal text-center">
            Upload your image, select your mode and see better. Its that easy
            with <span className="text-accent"> Crayola </span>.
          </p>
          <Link to="/adjust-photos">
            <button className="mt-8 bg-accent text-light font-semibold py-2.5 w-64 text-lg rounded-xl">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
