// CartItem.jsx
import React from 'react';
import QuantitySelector from './ QuantitySelector';

const CartItem = ({ item }) => {
    
  return (
    <div className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
      <div className="md:w-4/12 2xl:w-1/4 w-full">
        <img
          src={item.imageSrc}
          alt={item.altText}
          className="h-full object-center object-cover md:block hidden"
        />
        <img
          src={item.imageSrcMobile}
          alt={item.altText}
          className="md:hidden w-full h-full object-center object-cover"
        />
      </div>
      <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
        <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{item.code}</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-base font-black leading-none text-gray-800">{item.name}</p>
          <QuantitySelector />
        </div>
        <p className="text-xs leading-3 text-gray-600 pt-2">Height: {item.height}</p>
        <p className="text-xs leading-3 text-gray-600 py-4">Color: {item.color}</p>
        <p className="w-96 text-xs leading-3 text-gray-600">Composition: {item.composition}</p>
        <div className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <p className="text-xs leading-3 underline text-gray-800 cursor-pointer">Add to favorites</p>
            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
          </div>
          <p className="text-base font-black leading-none text-gray-800">{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
