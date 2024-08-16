import React from "react";
import Card from "./childComponents/Card";

const cardData = [
  {
    number: 1,
    title: "Which image formats are supported?",
    content: 
      "Crayola is compatible with a wide range of popular image formats such as JPEG, PNG, WEBP, and more. Whatever format you use, we've got you covered!",
  },  
  {
    number: 2,
    title: "How is my image processed?",
    content:
      "Crayola separates images into individual pixels and applies an algorithm upon each pixel to enhance visibility for the chosen condition by increasing the color differenciation.",
  },
  {
    number: 3,
    title: "Is my data secure and private?",
    content: 
      "Yes! Crayola processes all operations directly in your browser, which means no personal data is sent to our servers. Thus, the image data remains private.",
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
