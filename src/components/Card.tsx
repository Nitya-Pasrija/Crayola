import React from 'react';

type CardProps = {
  number: number;
  title: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ number, title, content }) => {
  return (
    <li className="flex flex-col bg-purple-300 bg-opacity-30 p-8 sm:p-10 rounded-lg w-full sm:w-[350px] lg:w-[380px] min-h-[380px]">
      <div className="flex flex-col h-full">
        <p className="text-purple-600 font-bold text-6xl sm:text-8xl">{String(number).padStart(2, '0')}.</p>
        <p className="mt-8 text-2xl font-semibold">{title}</p>
        <p className="mt-6 text-lg leading-[1.75] font-medium">
          {content}
        </p>
      </div>
    </li>
  );
};

export default Card;
