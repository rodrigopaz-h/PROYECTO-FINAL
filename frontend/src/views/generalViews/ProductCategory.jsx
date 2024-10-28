import Title from "../../components/layouts/Title";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { useLocation } from "react-router-dom";
import Card from "../../components/layouts/Card";

const ProductCategory = () => {
  const { Productos, agregarAlCarrito } = useContext(ProductContext);
  const location = useLocation();
  const rutaActual = location.pathname;
  if (!Productos) {
    return <p>Cargando productos...</p>;
  }

  const categoriaActual = rutaActual.replace("/", "").toLowerCase();

  const productosFiltrados = Productos.filter(
    (producto) => producto.categoria.toLowerCase() === categoriaActual
  );

  return (
    <div>
      <div className="text-center p-10">
        <section
          id="Projects"
          className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
        >
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
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
