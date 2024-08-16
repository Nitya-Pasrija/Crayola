import React from "react";
import Introduction from "../components/Introduction";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BehindTheScenes from "../components/BehindTheScenes";

type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Navbar />
      <Introduction />
      <BehindTheScenes />
      <Footer />
    </>
  );
};
export default Home;
