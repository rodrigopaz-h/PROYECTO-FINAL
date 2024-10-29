import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Importa Link
import CardDetail from "../../components/ui/CardDetail";
import blog from "../../data/blog.json";
import Title from "../../components/layouts/Title";

const PublicationDetail = () => {
  const { id } = useParams(); // Obtiene el ID de la URL
  const selectedProduct = blog.find((producto) => producto.id === parseInt(id, 10)); // Busca el producto correspondiente
  const [productos, setProductos] = useState([]);
  const [mostrarTodo, setMostrarTodo] = useState(false); // Estado para controlar el botón "Ver más"

  useEffect(() => {
    setProductos(blog);
  }, []);

  const toggleMostrarTodo = () => {
    setMostrarTodo((prev) => !prev);
  };

  if (!selectedProduct) {
    return <p>Producto no encontrado.</p>;
  }

  return (
    <>
      <Title title="Publicaciones" />

      <div className="min-h-screen px-[100px] py-[50px] flex flex-col items-center gap-[50px]">
        {/* Mostrar producto seleccionado */}
        <div className="w-full flex flex-col items-center gap-[50px]">
          <div className="w-[800px] px-[50px] py-[25px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <div className="text-black text-4xl font-semibold font-['Public Sans'] text-center">
              {selectedProduct.title}
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-[25px]">
            <div className="w-[716px] h-[465px] flex justify-center items-center">
              <img
                className="w-full h-full object-cover rounded-[20px]"
                src={selectedProduct.imgSrc}
                alt={selectedProduct.title}
              />
            </div>
            <div className="text-center">
              <p className="text-[#353940] text-2xl font-medium font-['Poppins']">{selectedProduct.description}</p>
              <p className="text-[#95a0ba] text-base font-normal font-['Poppins'] mt-2">
                29 Oct 18, por {selectedProduct.authorName}
              </p>
            </div>
          </div>
        </div>

        {/* Artículos relacionados */}
        <div className="w-full flex flex-col items-center gap-[50px]">
          <div className="w-[800px] py-[25px] bg-white flex justify-center items-center rounded-lg shadow-md">
            <h2 className="text-black text-4xl font-semibold font-['Public Sans'] text-center">Artículos relacionados</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full max-w-[1200px]">
            {productos
              .slice(0, mostrarTodo ? productos.length : 4) // Muestra todos o solo 4 elementos
              .map((producto) => (
                <Link to={`/blog/${producto.id}`} key={producto.id}>
                  <CardDetail
                    id={producto.id}
                    title={producto.title}
                    description={producto.description}
                    imgSrc={producto.imgSrc}
                    authorImg={producto.authorImg}
                    authorName={producto.authorName}
                    text="Ver más"
                    bg="bg-naranja"
                  />
                </Link>
              ))}
          </div>
          
          {/* Botón para mostrar más o menos tarjetas */}
          <div className="mt-4">
            <button
              onClick={toggleMostrarTodo}
              className="px-6 py-2 text-white bg-verde rounded hover:bg-opacity-90"
            >
              {mostrarTodo ? "Ver menos" : "Ver más"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PublicationDetail;
