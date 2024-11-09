// PriceFilter.js
import React from "react";

const PriceFilter = ({ sortOrder, setSortOrder }) => {
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="mb-5 flex justify-end items-center">
      <label htmlFor="sort" className="mr-2 text-white">Ordenar por precio:</label>
      <select
        id="sort"
        onChange={handleSortChange}
        value={sortOrder}
        className="border p-1 rounded w-28 md:w-32 text-center"
      >
        <option value="">Seleccionar</option>
        <option value="asc">Menor a mayor</option>
        <option value="desc">Mayor a menor</option>
      </select>
    </div>
  );
};

export default PriceFilter;
