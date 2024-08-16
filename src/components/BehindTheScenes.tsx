import React from "react";
import Card from "./childComponents/Card";

const cardData = [
  {
    number: 1,
    title: "What is Crayola?",
    content:
      "Crayola is a website that allows users to modify images so that they are more accessible for those with colorblindness. Supported modes include Deuteranomaly, Protanomaly, and Tritanomaly.",
  },
  {
    number: 2,
    title: "How does it work?",
    content:
      "Crayola separates images into individual pixels and applies an algorithm upon each pixel to enhance visibility for the chosen condition.",
  },
  {
    number: 3,
    title: "Do I have to pay for Crayola?",
    content:
      "No Way! Crayola does all the magic in your browser. There are no fees and never will be. Additionally, your data is private. We do not collect any data from our users.",
  },
];

const BehindTheScenes: React.FC = () => {
  return (
    <section className="pt-14 pb-24 max-w-[1508px] mx-auto px-4" id="about">
      <h2 className="text-3xl sm:text-5xl font-bold text-center">Behind The Scenes</h2>
      <ul className="mt-16 flex flex-wrap gap-10 justify-center">
        {cardData.map((card) => (
          <Card
            key={card.number}
            number={card.number}
            title={card.title}
            content={card.content}
          />
        ))}
      </ul>
    </section>
  );
};

export default BehindTheScenes;
