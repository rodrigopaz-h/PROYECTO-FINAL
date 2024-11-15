// Producto
import Title from '../../components/layouts/Title'
import Button from '../../components/layouts/Button'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../Context/ProductContext'
import { useContext,useState, useEffect } from 'react'
import QuantitySelector from '../../components/layouts/QuantitySelector'
import { useNavigate } from 'react-router-dom';





export default function ProductDetail({ productId }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { Productos, agregarAlCarritoDetalle, Carrito } = useContext(ProductContext);
  const filteredProducto = Productos.find((producto) => producto.id === Number(id));
console.log(Productos)
console.log(Carrito)
 
  //manejar la cantidad
  const [cantidad, setCantidad] = useState(1);

  // Manejar la acción de agregar al carrito
  const handleAgregarAlCarrito = () => {
    if (filteredProducto) {
      agregarAlCarritoDetalle(filteredProducto.id, cantidad);
      setCantidad(1);  
    } else {
      console.error("Producto no encontrado para agregar al carrito.");
    }
  };

  if (!filteredProducto) {
    return <p>No se encuentra</p>
  }


  return (
    <>
    <Title title='Detalle de producto'/>
    <div className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={filteredProducto.imagen_url}
                  alt={filteredProducto.nombre}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              

    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">{filteredProducto.nombre}</h2>
      
      <div className="space-y-4">
        {/* Availability */}
        <p>
          <span className="font-semibold">Origen:</span>
          <span className="text-verde ml-2"> {filteredProducto.origen}</span>
        </p>
        
        {/* Barcode */}
        <p>
          <span className="font-semibold">Precio:</span>
          <span className="ml-2"> $ {filteredProducto.precio}</span>
        </p>
        
        {/* Product Type */}
        <p>
          <span className="font-semibold">Categoria:</span>
          <span className="ml-2"> {filteredProducto.categoria}</span>
        </p>

        <div className="flex items-end">
                <div className="mr-10">
                  <QuantitySelector quantity={cantidad} setQuantity={setCantidad} />
                </div>
                <div>
                  <Button text='Agregar al carro' onClick={handleAgregarAlCarrito} bg="bg-naranja" /> 
                </div>
              </div>
              {Carrito.length > 0 && (
                <Button text="Pagar" bg="bg-negro" to="/carrito" />
              )}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Descripción:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {filteredProducto.descripcion}
                </p>
              </div>

      </div>
    </div>
              {/* <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">Selecciona tamaño:</span>
                <div className="flex items-center mt-2">
                  {['S', 'M', 'L'].map(size => (
                    <button
                      key={size}
                      className="bg-gray-300 dark:bg-gray-700 rounded-full text-gray-700 dark:text-white py-2 px-4 font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div> */}
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}