import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CardDetail from "../../components/ui/CardDetail";
import blog from "../../data/blog.json";
import Title from "../../components/layouts/Title";

const PublicationGallery = () => {
  const [productos, setProductos] = useState([]);
  const [mostrarTodo, setMostrarTodo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setProductos(blog);
  }, []);

  const handleSelectProduct = (producto) => {
    navigate(`/blog/${producto.id}`);
  };

  const toggleMostrarTodo = () => {
    setMostrarTodo((prev) => !prev);
  };

  return (
    <>
      <Title title="Lee los artículos más recientes" />
      <div className="flex flex-col items-center p-6 gap-6 w-full max-w-[1200px] mx-auto">
        <div className="self-stretch justify-center items-center flex">
          <div className={`grid ${mostrarTodo ? "grid-cols-4" : "grid-cols-3"} gap-6`}>
            {productos.length === 0 ? (
              <p>No hay publicaciones disponibles.</p>
            ) : (
              productos.slice(0, mostrarTodo ? productos.length : 6).map((producto) => (
                <CardDetail
                  key={producto.id}
                  id={producto.id}
                  title={producto.title}
                  description={producto.description}
                  imgSrc={producto.imgSrc}
                  authorImg={producto.authorImg}
                  authorName={producto.authorName}
                  text="Leer más"
                  bg="bg-naranja"
                  onClick={() => handleSelectProduct(producto)}
                />
              ))
            )}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={toggleMostrarTodo}
            className="px-6 py-2 text-white bg-verde rounded hover:bg-opacity-90"
          >
            {mostrarTodo ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </div>
    </>
  );
};

export default PublicationGallery;
