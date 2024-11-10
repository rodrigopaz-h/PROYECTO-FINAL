import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';
import Card from '../../components/layouts/Card'
import Button from '../../components/layouts/Button'
import { Link } from 'react-router-dom'

export default function SectionsHome({titulo,descripcion, tipoSeccion, fondo, colortexto}) {
    const { Productos } = useContext(ProductContext);
  return (
        <div className= {`mx-auto w-full relative pt-10 pb-10 ${fondo}`}>
            <div className="max-w-xl mx-auto text-center lg:text-balance">
            <h2 className={`text-2xl font-bold md:text-4xl md:leading-tight dark:text-white ${colortexto}`}>
                {titulo}
            </h2>
            <p className={`text-base leading-normal mt-4 text-base-500 font-medium ${colortexto}`}>
                {descripcion}
            </p>
            </div>
        
            {tipoSeccion === 'productos' ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 p-5 max-w-screen-xl mx-auto justify-items-center mt-5">
            {Productos.slice(0, 3).map((producto) => (
              <Card key={producto.id} producto={producto} />
            ))}
          </div>
          <div className="flex text-center items-center gap-2 mt-8 justify-center w-full">
            <Button text="Ver más" to="/todos" />
          </div>
        </>
      ) : (
        // Contenedor para "categoría" con `grid-cols-1 md:grid-cols-2`
        <div className="container mx-auto py-9 md:py-12 px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <Link to="/cafes" className="flex-1">
            <img src="../images/cafesbanner.png" alt="Cafés" className="w-full h-auto object-cover" />
            </Link>
            <Link to="/accesorios" className="flex-1">
                  <img src="../images/accbanner.png" alt="Accesorios" className="w-full h-auto object-cover" />
            </Link>
          </div>
        </div>
      )}
            
            
        </div>
  )
}
