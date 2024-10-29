import React from "react";
import { useNavigate } from "react-router-dom";

const CardDetail = ({ id, title, description, imgSrc, authorImg, authorName, text, bg = "bg-verde", onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
  };

  return (
    <div key={id} className="card w-[300px] h-[400px] p-4 bg-white shadow-md rounded-lg flex flex-col">
      <img className="w-full h-[180px] object-cover rounded-t-lg" src={imgSrc} alt={title} />
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600 mt-2 flex-1">{description}</p>
      <div className="flex items-center mt-2">
        <img className="w-8 h-8 rounded-full" src={authorImg} alt={authorName} />
        <span className="ml-2 text-sm text-gray-800">{authorName}</span>
      </div>
      <button 
        onClick={handleClick} 
        className={`py-2 px-4 text-white font-semibold rounded-lg ${bg} mt-auto`} 
      >
        {text}
      </button>
    </div>
  );
};

export default CardDetail;
