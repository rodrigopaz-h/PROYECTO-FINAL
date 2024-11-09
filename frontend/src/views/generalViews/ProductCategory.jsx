import Title from "../../components/layouts/Title";
import { useContext, useState } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { useLocation } from "react-router-dom";
import Card from "../../components/layouts/Card";
import PriceFilter from "../../components/layouts/PriceFilter";

const ProductCategory = () => {
  const { Productos, agregarAlCarrito } = useContext(ProductContext);
  const [sortOrder, setSortOrder] = useState("");
  const location = useLocation();
  const rutaActual = location.pathname;

  const categoriaActual = rutaActual.replace("/", "").toLowerCase();
  const tituloCat = categoriaActual.charAt(0).toUpperCase() + categoriaActual.slice(1);

  // Filtrar los productos según la categoría actual
  const productosFiltrados = Productos.filter(
    (producto) => producto && producto.categoria && producto.categoria.toLowerCase() === categoriaActual
  );


    // Ordenar los productos en función del valor de sortOrder
    const sortedProductos = Productos ? [...Productos] : [];
    if (sortOrder === "asc") {
      sortedProductos.sort((a, b) => Number(a.precio) - Number(b.precio));
    } else if (sortOrder === "desc") {
      sortedProductos.sort((a, b) => Number(b.precio) - Number(a.precio));
    }

      // Console.log para verificar los productos filtrados
  console.log("Productos filtrados en la categoría:", sortedProductos);

  return (
    <div>
      <Title title={tituloCat} />
      <div className="text-center p-10">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {sortedProductos.length > 0 ? (
            sortedProductos.map((producto) => (
              <Card
                key={producto.id}
                producto={producto}
                agregarAlCarrito={agregarAlCarrito}
              />
            ))
          ) : (
            <p>No hay productos disponibles en esta categoría.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductCategory;
