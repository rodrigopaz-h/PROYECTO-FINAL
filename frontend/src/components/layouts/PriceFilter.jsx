// PriceFilter.js
import React from "react";

const PriceFilter = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="flex justify-end items-center font-sans">
      <label htmlFor="sort" className="mr-2 text-base text-gray-500 font-sans">Ordenar por:</label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={sortOrder}
        className="border p-1 rounded w-40 text-center"
      >
        <option value="">Seleccionar</option>
        <option value="asc">Menor a mayor</option>
        <option value="desc">Mayor a menor</option>
      </select>
    </div>
  );
};

export default PriceFilter;
