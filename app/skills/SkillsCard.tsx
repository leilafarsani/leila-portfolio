import React from "react";

interface CardProps {
  image: string;
  ImgTitle: string;
  name: string;
  description: string;
  onClick: () => void;
}

export default function SkillsCard({
  image,
  ImgTitle,
  name,
  description,
  onClick,
}: CardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition duration-200">
      <div className="h-48 overflow-hidden">
        <img
          className="h-full w-full object-cover rounded-t-xl"
          src={image}
          alt={ImgTitle}
        />
      </div>
      <div className="p-4">
        <div className="uppercase tracking-wide text-sm text-pink-500 font-semibold">
          {name}
        </div>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
      <div className="p-4 flex justify-center space-x-2 opacity-100 group-hover:opacity-100 transition duration-200">
        <button
          onClick={onClick}
          className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
        >
         Learn More
        </button>
        {/* <button
          onClick={}
          className="text-sm px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
     Share
        </button> */}
      </div>
    </div>
  );
}
