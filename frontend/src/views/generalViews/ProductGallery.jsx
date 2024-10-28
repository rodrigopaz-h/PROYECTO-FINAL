import Title from "../../components/layouts/Title";
import { useContext } from "react";
import { ProductContext } from "../../Context/ProductContext";
import { Link } from "react-router-dom";
import Card from "../../components/layouts/Card";



const ProductGallery = () => {

    const { Productos, agregarAlCarrito } = useContext(ProductContext);

    return (
        <div>
            <Title title='Categoría' />
            <div className="text-center p-10">
                <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {/* Mapea los productos del contexto directamente */}
                    {Productos && Productos.length > 0 ? (
                        Productos.map((producto) => (
                            <Card 
                                key={producto.id} 
                                producto={producto}  // Cambiado de product a producto
                                agregarAlCarrito={agregarAlCarrito} 
                            />
                        ))
                    ) : (
                        <p>No hay productos disponibles.</p>
                    )}
                </section>
            </div>
        </div>
    );
};

export default ProductGallery;
