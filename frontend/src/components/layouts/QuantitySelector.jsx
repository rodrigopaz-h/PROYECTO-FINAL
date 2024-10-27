import React, { useState } from 'react';

const QuantitySelector = ({quantity, setQuantity}) => {
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <td className="py-4">
      <div className="flex items-center">
        <button
          className="border rounded-md py-3 px-4 mr-2 bg-white"
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="text-center w-8">{quantity}</span>
        <button
          className="border rounded-md py-3 px-4 ml-2 bg-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </td>
  );
};

export default QuantitySelector;