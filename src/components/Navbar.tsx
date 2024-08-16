import React from "react";
import { Link } from "react-router-dom";

type NavProps = {};

const Navbar: React.FC<NavProps> = () => {
  return (
    <nav className="w-full bg-gray-900 text-white">
      <div className="max-w-[1100px] mx-auto px-4 h-20 flex justify-between items-center">
        <p className="text-lg sm:text-xl font-bold text-purple-400">Crayola</p>
        <ul className="flex gap-4 sm:gap-6 font-semibold text-xs sm:text-sm">
          <li>
            <Link to="/" className="no-underline hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link to={"/approach"} className="no-underline hover:text-purple-400">Approach</Link>
          </li>
          <li>
            <Link to={"/process-images"} className="no-underline hover:text-purple-400">Process Images</Link>
          </li>
          <li>
            <Link to="https://github.com/Nitya-Pasrija/Crayola" className="no-underline hover:text-purple-400">Contribute</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
