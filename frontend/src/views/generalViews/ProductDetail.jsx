// Producto
import Title from '../../components/layouts/Title'
import Button from '../../components/layouts/Button'
import QuantitySelector from '../../components/QuantitySelector'
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../Context/ProductContext';
import { useContext } from 'react';





export default function ProductDetail({ productId }) {
  const { id } = useParams();
  const { Productos, agregarAlCarritoDetalle } = useContext(ProductContext);
  const filteredProducto = Productos.find((producto) => producto.id === Number(id));
  console.log(id);
  console.log(Productos);
 
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
                  src={filteredProducto.imagen} // Imagen del producto
                  alt={filteredProducto.nombre} // Nombre del producto como alt
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{filteredProducto.nombre}</h2> {/* Nombre del producto */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {filteredProducto.descripcion} {/* Descripción del producto */}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Precio:</span>
                  <span className="text-gray-600 dark:text-gray-300">${filteredProducto.precio}</span> {/* Precio del producto */}
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">Disponibilidad:</span>
                  <span className="text-gray-600 dark:text-gray-300">{filteredProducto.disponibilidad ? 'En Stock' : 'Agotado'}</span> {/* Disponibilidad */}
                </div>
              </div>
              <div className="mb-4">
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
              </div>
              <div className="flex items-end">
                <div className="mr-10">
                  <span className="text-center text-sm font-semibold text-gray-700 dark:text-white mb-2">Cantidad:</span>
                  <QuantitySelector />
                </div>
                <div>
                  <Button text='Agregar al carro' to='/checkout' onClick={() => agregarAlCarritoDetalle(filteredProducto)} /> {/* Agregar al carrito */}
                </div>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">Descripción del producto:</span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {filteredProducto.descripcion} {/* Descripción del producto adicional */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}