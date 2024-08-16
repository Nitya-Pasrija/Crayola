import React from "react";
import { Link } from "react-router-dom";

type NavProps = {};

const Navbar: React.FC<NavProps> = () => {
  return (
    <section className="pt-[72px] pb-24 px-12 max-w-[1200px] flex flex-col items-center mx-auto">
        <h1 className="max-w-[750px] text-3xl sm:text-5xl font-bold text-center leading-tight">
          Bring <span className="text-purple-600">color</span> back to your images
          with <span className="text-purple-600">Crayola</span>
        </h1>
        <p className="mt-4 sm:mt-8 max-w-[750px] text-center font-semibold leading-relaxed sm:text-lg">
          Crayola is a tool designed to adjust the colors of images so that those
          affected by colorblindness can experience heightened color
          differentiation.
        </p>
        <div className="mt-5 flex flex-col sm:flex-row gap-4 justify-center  font-semibold">
          <Link to="/process-images">
            <button className="bg-purple-600 text-light rounded-full w-48 py-2">
              Get Started
            </button>
          </Link>
          <Link to="/approach">
            <button className="bg-purple-300  rounded-full w-48 py-2 text-center">
              Approach
            </button>
          </Link>
        </div>
        <div className="mt-14 flex justify-center items-center font-medium">
          <div className="flex flex-col items-center">
            <figure className="max-w-[280px]">
              <img src="/before.png" alt="" />
            </figure>
            <p className="mt-2 text-xl">Before</p>
          </div>
          <svg
            width="180"
            height="30"
            viewBox="0 0 256 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-4 sm:mx-8"
          >
            <path
              d="M255.414 16.4142C256.195 15.6332 256.195 14.3668 255.414 13.5858L242.686 0.857864C241.905 0.0768158 240.639 0.0768158 239.858 0.857864C239.077 1.63891 239.077 2.90524 239.858 3.68629L251.172 15L239.858 26.3137C239.077 27.0948 239.077 28.3611 239.858 29.1421C240.639 29.9232 241.905 29.9232 242.686 29.1421L255.414 16.4142ZM0 17H254V13H0V17Z"
              fill="#5A67D8"
            />
          </svg>
          <div className="flex flex-col items-center">
            <figure className="max-w-[280px]">
              <img src="/after.png" alt="" />
            </figure>
            <p className="mt-2 text-xl">After</p>
          </div>
        </div>
    </section>
  );
};

export default Navbar;
