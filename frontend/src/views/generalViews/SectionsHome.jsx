import React from 'react'
import Productos from "../../data/productos.json"
import Card from '../../components/layouts/Card'
import Button from '../../components/layouts/Button'
import { Link } from 'react-router-dom'

export default function SectionsHome({titulo,descripcion, tipoSeccion, fondo}) {
  return (
        <div className= {`mx-auto w-full relative pt-10 pb-10 ${fondo}`}>
            <div className="max-w-xl mx-auto text-center lg:text-balance">
            <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-base-900 lg:text-balance">
                {titulo}
            </h2>
            <p className="text-base leading-normal mt-4 text-base-500 font-medium">
                {descripcion}
            </p>
            </div>
        
            {tipoSeccion === "productos" ? (
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 max-w-screen-xl mx-auto justify-items-center mt-5">
            {Productos.slice(0, 3).map((producto) => (
            <Card key={producto.id} producto={producto} />
            ))}
        </div>
        <div className="flex text-center items-center gap-2 mt-8 justify-center w-full">
        <Button text="Ver más" to="/todos"/>
        </div>
        </>
        ) : (
        // Contenedor para "categoría" con `grid-cols-1 md:grid-cols-2` 
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                <Link to="/cafes" className="flex-1">
                    <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 h-full">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Cafés</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">
                                Ahorra hasta un <span className="font-bold">50%</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="../images/cat-cafe.png" alt="Best Deal Image" className="h-auto max-h-32" />
                        </div>
                    </div>
                </Link>
                <Link to="/accesorios" className="flex-1">
                    <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12 h-full">
                        <div className="flex flex-col justify-center md:w-1/2">
                            <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Accesorios</h1>
                            <p className="text-base lg:text-xl text-gray-800 mt-2">
                                Ahorra hasta un <span className="font-bold">30%</span>
                            </p>
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
                            <img src="../images/cat-accesorios.png" alt="Best Deal Image" className="h-auto max-h-32" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>

        )}
            
            
        </div>
  )
}
