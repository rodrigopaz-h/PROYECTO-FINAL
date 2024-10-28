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
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover"
                  src={filteredProducto.imagen}
                  alt={filteredProducto.nombre}
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{filteredProducto.nombre}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {filteredProducto.descripcion}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                  <span className="text-gray-600 dark:text-gray-300">${filteredProducto.precio}</span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Disponibilidad:</span>
                  <span className="text-gray-600 dark:text-gray-300">{filteredProducto.stock > 0 ? 'En Stock' : 'Agotado'}</span>
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
              <div className="flex items-end">
                <div className="mr-10">
                  <span className="text-center text-sm font-semibold text-gray-700 dark:text-white mb-2">Cantidad:</span>
                  <QuantitySelector quantity={cantidad} setQuantity={setCantidad} />
                </div>
                <div>
                  <Button text='Agregar al carro' onClick={handleAgregarAlCarrito} /> 
                </div>
              </div>
              {Carrito.length > 0 && (
                <Button text="Pagar" bg="bg-naranja" to="/carrito" />
              )}
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Descripción del producto:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {filteredProducto.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}