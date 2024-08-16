import React from "react";
import Row from "./childComponents/Row";

type ConditionsProps = {}; 

const Conditions: React.FC<ConditionsProps> = () => {
  const examples = [
    {
      name: "Protanomaly",
      src: [
        "/protanomaly-example/original.PNG",
        "/protanomaly-example/original-blind.png",
        "/protanomaly-example/enhanced.png",
        "/protanomaly-example/enhanced-blind.png",
      ],
      description: "Protanomaly is a type of red-green color blindness caused by a deficiency in the red cone cells of the retina. Individuals with protanomaly have a reduced sensitivity to red light, making red hues appear darker and less vibrant. This condition can make distinguishing between red, orange, and green challenging. Protanomaly affects about 1% of the male population worldwide, but in women, who must inherit two copies of the gene mutation to exhibit the condition, the prevalence is much lower, approximately 0.01% (or 1 in 10,000).",
    },
    {
      name: "Deuteranomaly",
      src: [
        "/deuteranomaly-example/original.png",
        "/deuteranomaly-example/original-blind.jpg",
        "/deuteranomaly-example/enhanced.png",
        "/deuteranomaly-example/enhanced-blind.jpg",
      ],
      description: "Deuteranomaly, another form of red-green color blindness, arises from a deficiency in the green cone cells of the retina. People with deuteranomaly experience difficulty distinguishing between green and red, as well as between colors that contain green or red hues. This condition affects roughly 5% of the male population globally. For women, the prevalence is significantly lower, around 0.5% (or 1 in 200), as they need to inherit two copies of the gene mutation to show symptoms.",
    },
    {
      name: "Tritanomaly",
      src: [
        "/tritanomaly-example/original.png",
        "/tritanomaly-example/original-blind.jpg",
        "/tritanomaly-example/enhanced.png",
        "/tritanomaly-example/enhanced-blind.jpg",
      ],
      description: "Tritanomaly is a rarer form of color blindness caused by a deficiency in the blue cone cells, which affects the perception of blue and yellow hues. Individuals with tritanomaly often find it challenging to differentiate between blue and green, as well as between yellow and pink. Tritanomaly affects less than 1% of the population globally. This rarity is due to tritanomaly not being linked to the X chromosome but rather involving mutations in other parts of the genome.",
    },
  ];
  return (
    <ul className="flex flex-col gap-16 mt-16  w-full">
      {examples.map((example, index) => (
        <Row index={index} name={example.name} images={example.src} key={example.name} description={example.description}/>
      ))}
    </ul>
  );
};
export default Conditions;
