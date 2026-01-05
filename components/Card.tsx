// components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="content w-full mx-auto md:w-[60%] text-white-900 shadow-lg rounded-xl p-8 relative mb-16">
      <h1 className="text-3xl sm:text-4xl mb-2 font-iceland">{title}</h1>
      <div className="flex justify-start items-center mb-4">
        <div className="h-1 w-8 sm:w-12 bg-cyan-300 mr-2"></div>
        <div className="h-1 w-4 sm:w-6 bg-cyan-300 mr-2"></div>
        <div className="h-1 w-2 sm:w-4 bg-cyan-300"></div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
