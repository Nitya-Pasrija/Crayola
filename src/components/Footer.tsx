import React from "react";
import { Link } from "react-router-dom";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="bg-gray-800 text-white pt-16 pb-20">
      <div className="max-w-[700px] px-4 mx-auto">
        <p className="text-center font-bold text-3xl text-purple-400">Crayola</p>
        <ul className="mt-8 flex justify-center gap-8 font-semibold">
          <li>
            <Link to="/" className="no-underline hover:text-purple-400">Home</Link>
          </li>
          <li>
            <Link to="/approach" className="no-underline hover:text-purple-400">Approach</Link>
          </li>
          <li>
            <Link to="/process-images" className="no-underline hover:text-purple-400">Process Images</Link>
          </li>
          <li>
            <Link to="https://github.com/Nitya-Pasrija/Crayola" className="no-underline hover:text-purple-400">Contribute</Link>
          </li>
        </ul>
        <p className="text-center mt-8 text-sm">
          Your vision, our mission. Together, we see the world in full color.
        </p>
        <div className="mt-4 text-center">
          <p className="text-sm">
            The idea was inspired from this <a href="https://medium.com/processing-foundation/image-processing-library-to-ease-differentiation-of-colors-for-people-with-colorblindness-cc550f0670e0" target="_blank" rel="noopener noreferrer" className="text-purple-400 no-underline hover:text-purple-400">Medium Article</a> by the <a href="https://github.com/processing" target="_blank" rel="noopener noreferrer" className="text-purple-400 no-underline hover:text-purple-400">Processing Foundation</a>.
          </p>
        </div>
        <p className="text-center mt-8 text-sm">
          © {currentYear} Crayola | Empowering Vision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
