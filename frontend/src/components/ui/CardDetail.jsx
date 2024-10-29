import React from "react";

const CardDetail = ({ title, description, imgSrc, authorImg, authorName, text, onClick, bg }) => { // Añadido bg
  return (
    <div className="card w-[300px] p-4 bg-white shadow-md rounded-lg">
      <img className="w-full h-[180px] object-cover rounded-t-lg" src={imgSrc} alt={title} />
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <div className="flex items-center mt-4">
        <img className="w-8 h-8 rounded-full" src={authorImg} alt={authorName} />
        <span className="ml-2 text-sm text-gray-800">{authorName}</span>
      </div>
      <button
        onClick={onClick}
        className={`mt-4 py-2 px-4 text-white font-semibold rounded-lg hover:bg-opacity-90 ${bg}`} // Utiliza la propiedad bg aquí
      >
        {text}
      </button>
    </div>
  );
};

export default CardDetail;