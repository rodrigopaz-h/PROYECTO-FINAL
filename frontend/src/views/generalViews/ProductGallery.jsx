import Title from "../../components/layouts/Title";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import Card from "../../components/layouts/Card";
import PriceFilter from "../../components/layouts/PriceFilter";

const ProductGallery = () => {
  const { Productos, agregarAlCarrito } = useContext(ProductContext);
  const [sortOrder, setSortOrder] = useState("");

  console.log("Productos en el frontend:", Productos);


  // Ordenar los productos en función del valor de sortOrder
  const sortedProductos = Productos ? [...Productos] : [];
if (sortOrder === "asc") {
  sortedProductos.sort((a, b) => Number(a.precio) - Number(b.precio));
} else if (sortOrder === "desc") {
  sortedProductos.sort((a, b) => Number(b.precio) - Number(a.precio));
}

  return (
    <div>
      <Title title="Todos los productos" />
      <div className="text-center p-10">
        <p>soy yo</p>
        <PriceFilter sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5">
          {sortedProductos.length > 0 ? (
            sortedProductos.map((producto) => (
              <Card key={producto.id} producto={producto} agregarAlCarrito={agregarAlCarrito} />
            ))
          ) : (
            <p>No hay productos disponibles.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductGallery;
