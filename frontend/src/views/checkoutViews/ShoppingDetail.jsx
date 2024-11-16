// Detalle de envío
import React from 'react'
import { ProductContext } from '../../Context/ProductContext'
import { useContext } from 'react'

export default function ShoppingDetail() {

    const {
        Carrito, 
        calcularTotalCantidadCarrito,
        aumentarCantidad, 
        disminuirCantidad, 
        calcularTotalCarrito, 
        eliminarProductoDelCarrito
} = useContext(ProductContext)

  return (
    <div>
        <div className="bg-white p-8 rounded-lg shadow-md border ">
        <h1 className="text-2xl font-bold text-verde dark:text-white mb-4">Detalle de la compra</h1>
        {/* Cart Item */}
       
            {Carrito.map((item, index)=>(
                <div className="flex justify-between mb-4">
                    <div className="flex items-center">
                        <img
                        src={item.imagen_url}
                        alt="Product Image"
                        className="w-12 sm:w-16 md:w-20 lg:w-24 xl:w-32 h-auto mr-4"
                        />
                        <div>
                        <p className="text-gray-700">{item.nombre}</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button  onClick={() => eliminarProductoDelCarrito(item.id)}  className="text-red-500 hover:text-red-700">
                        <i className="fas fa-trash"></i>
                        </button>
                        <div class="flex items-center mx-4">
                            <button onClick={() => disminuirCantidad(item.id)} class="bg-naranjal text-neutral-content w-8 rounded-full">
                            <span className="text-2xl text-black">-</span>
                            </button>
                            <span className="font-bold">{item.cantidad}</span>
                            <button  onClick={() => aumentarCantidad(item.id)} class="bg-naranjal text-neutral-content w-8 rounded-full">
                            <span className="text-2xl text-black">+</span>
                            </button>
                        </div>
                        <span className="font-bold">${item.precio}</span>
                    </div>
                </div>
            ))}
             
        
            <hr className="my-4" />

            {/* Subtotal */}
            <div className="flex justify-between items-center">
            <span className="font-bold">Subtotal:</span>
            <span className="font-bold">${calcularTotalCarrito()}</span>
            </div>

            {/* Taxes */}
            <div className="flex justify-between items-center mt-4">
            <span>Tipo de envío</span>
            <span>$0.00</span>
            </div>

            <hr className="my-4" />

            {/* Total */}
            <div className="flex justify-between items-center">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${calcularTotalCarrito()}</span>
            </div>
        </div>
    </div>
  )
}
