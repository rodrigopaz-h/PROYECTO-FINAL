import Title from "../../components/layouts/Title"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { ProductContext } from "../../Context/ProductContext"
import Button from "../../components/layouts/Button"

export default function ShoppingCart() {

    const {
            Carrito, 
            calcularTotalCantidadCarrito,
            aumentarCantidad, 
            disminuirCantidad, 
            calcularTotalCarrito, 
            eliminarProductoDelCarrito
    } = useContext(ProductContext)

 

  return (
    <>
    <Title title='Carrito de compras'/>
    {Carrito.length === 0 ? (
              <h2 className="text-center text-negro py-8 mb-10">No hay productos en tu carrito</h2>
            ) : (
    <div className="w-full mx-auto p-10">
            <div className="sm:flex gap-8">
                <div className="w-full sm:w-3/4 bg-white p-8 rounded-lg shadow-md border">
                    <div className="flex justify-between border-b pb-8">
                        <h1 className="font-semibold text-2xl">Detalles de carrito</h1>
                        <h2 className="font-semibold text-2xl">{Carrito.length} Items</h2>
                    </div>

                    {Carrito.map((item, index) => (
                            <div key={index} className="md:flex items-stretch py-8 md:py-10 lg:py-8 border-t border-gray-50">
                                <div className="md:w-4/12 2xl:w-1/4 w-full">
                                    <img
                                        src={item.imagen_url} // Asegúrate de que el producto tiene la propiedad imagen
                                        alt={item.nombre}
                                        className="h-full object-center object-cover md:block hidden"
                                    />
                                </div>
                                <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-base font-black leading-none text-gray-800  p-2">{item.nombre}</p>
                                            <p className="text-base leading-none text-gray-800 p-2">Cantidad: {item.cantidad}</p>
                                            <p className="text-base leading-none text-gray-800 p-2">Precio: ${item.precio}</p>
                                        </div>
                                        <div class="flex items-center">
                                            <button onClick={() => disminuirCantidad(item.id)} class=" btn btn-outline border rounded-md py-2 px-4 mr-2">-</button>
                                            <button  onClick={() => aumentarCantidad(item.id)} class=" btn btn-outline border rounded-md py-2 px-4 ml-2">+</button>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end pt-5">
                                        <p
                                            onClick={() => eliminarProductoDelCarrito(item.id)} 
                                            className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer"
                                        >
                                            Eliminar
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    <Link to="/">
                    <p href="#" className="flex font-semibold text-negro text-sm mt-10">
                        <svg className="fill-current mr-2 text-negro w-4" viewBox="0 0 448 512">
                            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                        </svg>
                        Continuar tu compra
                    </p>
                    </Link>
                </div>

                <div id="summary" className="w-full sm:w-1/4 md:w-1/2 bg-white p-8 rounded-lg shadow-md border">
                    <h1 className="font-semibold text-2xl border-b pb-8">Resumen de compra</h1>
                    <div className="flex justify-between mt-10 mb-5">
                        <span className="font-semibold text-sm uppercase">Total de productos:</span>
                        <span>{calcularTotalCantidadCarrito()}/u</span>
                    </div>
                    <div className="border-t mt-8">
                        <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                            <span>Costo total:</span>
                            <span>${calcularTotalCarrito()}</span>
                        </div>
                        <Button text='PAGAR' to='/checkout' />
                    </div>
                </div>
            </div>
        </div>)}
    </>
  )
}
