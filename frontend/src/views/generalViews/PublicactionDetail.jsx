import { useState, useEffect } from "react";
import CardDetail from "../../components/ui/CardDetail";
import blog from "../../data/blog.json";
import Title from "../../components/layouts/Title";

const PublicationDetail = () => {
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mostrarTodo, setMostrarTodo] = useState(false);
  
  useEffect(() => {
    setProductos(blog);
  }, []);
  
  const handleSelectProduct = (producto) => {
    setSelectedProduct(producto);
  };
  

  const toggleMostrarTodo = () => {
    setMostrarTodo(!mostrarTodo);
  };
  
  return (
    <>
      <Title title='Publicaciones' />
      <div className="min-h-screen flex flex-col items-center justify-center px-[100px] py-[50px]">
        {selectedProduct && (
          <div className="flex flex-col items-center gap-[50px]">
            <div className="w-[1400px] px-[100px] py-[25px] bg-white justify-center items-center inline-flex">
              <div className="text-black text-4xl font-semibold font-['Public Sans'] leading-[48px] text-center">
                {selectedProduct.title}
              </div>
            </div>
            <div className="self-stretch h-[869px] flex-col justify-start items-center gap-[25px] flex">
              <div className="h-[465px] flex-col justify-center items-center gap-2.5 flex">
                <img
                  className="w-[716px] h-[465px] object-cover rounded-[20px]"
                  src={selectedProduct.imgSrc}
                  alt={selectedProduct.title}
                />
              </div>
              <div className="h-[126px] relative">
                <div className="w-[1230px] pb-[43px] text-center text-[#353940] text-4xl font-medium font-['Poppins'] leading-[43px]">
                  {selectedProduct.description}
                </div>
                <div className="text-[#95a0ba] text-base font-normal font-['Poppins'] leading-snug text-center">
                  29 Oct 18, por {selectedProduct.authorName}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Artículos relacionados */}
        <div className="flex flex-col justify-start items-center gap-[50px]">
          <div className="self-stretch px-[100px] py-[25px] bg-white justify-center items-center inline-flex">
            <div className="text-black text-4xl font-semibold font-['Public Sans'] leading-[48px] text-center">
              Más artículos relacionados
            </div>
          </div>

          <div className="self-stretch justify-center items-center flex">
            <div className="grid grid-cols-4 gap-5">
              {productos.slice(0, mostrarTodo ? productos.length : 4).map((producto, index) => (
                <CardDetail
                  key={index}
                  title={producto.title}
                  description={producto.description}
                  imgSrc={producto.imgSrc}
                  authorImg={producto.authorImg}
                  authorName={producto.authorName}
                  text="Leer más"
                  onClick={() => handleSelectProduct(producto)}
                  bg="bg-naranja"
                />
              ))}
            </div>
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
