import React from 'react'
import Productos from "../../data/productos.json"
import Card from '../../components/layouts/Card'

export default function SectionsHome({titulo,descripcion, tipoSeccion, callouts}) {
  return (
    <div>
        <section>
  <div className="px-8 py-24 mx-auto md:px-12 lg:px-24 max-w-7xl relative">
    <div className="max-w-xl mx-auto text-center lg:text-balance">
      <h2 className="text-xl leading-tight tracking-tight sm:text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-base-900 lg:text-balance">
        {titulo}
      </h2>
      <p className="text-base leading-normal mt-4 text-base-500 font-medium">
        {descripcion}
      </p>
    </div>
   
    {tipoSeccion === "productos" ? (
  // Contenedor para "productos" con `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 max-w-screen-xl mx-auto justify-items-center mt-5">
    {Productos.slice(0, 3).map((producto) => (
      <Card key={producto.id} producto={producto} />
    ))}
  </div>
) : (
  // Contenedor para "categoría" con `grid-cols-1 md:grid-cols-2` 
  <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      <div className="flex flex-col md:flex-row items-stretch justify-between bg-gray-50 py-6 px-6 md:py-12 lg:px-12">
        <div className="flex flex-col justify-center md:w-1/2">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Best Deal</h1>
          <p className="text-base lg:text-xl text-gray-800 mt-2">
            Save up to <span className="font-bold">50%</span>
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img src="https://i.ibb.co/J2BtZdg/Rectangle-56-1.png" alt="Best Deal Image" />
        </div>
      </div>

      <div className="bg-gray-50 py-6 px-6 md:py-12 md:px-4 lg:px-6 flex flex-col justify-center relative">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">Game Console</h1>
          <p className="text-base lg:text-xl text-gray-800">
            Save up to <span className="font-bold">30%</span>
          </p>
        </div>
        <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
          <img src="https://i.ibb.co/rGfP7mp/Rectangle-59-1.png" alt="Game Console Image" className="md:w-20 md:h-20 lg:w-full lg:h-full" />
        </div>
      </div>
    </div>
  </div>
)}
      
    <div className="flex text-center items-center gap-2 mt-8 justify-center">
      <p className="text-base leading-normal text-base-500 font-medium">
        We are hiring
      </p>
    
      <a
        className="text-md leading-normal text-accent-500 font-medium flex items-center gap-2 hover:text-base-900"
        href="#_"
      >
        See all our open roles
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right w-4 h-4"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 6l6 6l-6 6" />
        </svg>
      </a>
    </div>
  </div>
</section>

    </div>
  )
}
