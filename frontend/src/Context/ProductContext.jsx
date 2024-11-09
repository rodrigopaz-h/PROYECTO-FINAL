import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [Productos, setProductos] = useState([]);
    const [Carrito, setCarrito] = useState([]);

    // Cargar los productos desde el backend al montar el componente
    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const cafesResponse = await axios.get('http://localhost:3000/api/cafes'); 
                const accesoriosResponse = await axios.get('http://localhost:3000/api/accesorios');
                // Combinamos los productos en un solo array
                setProductos([...cafesResponse.data, ...accesoriosResponse.data]);
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
      
        fetchProductos();
    }, []);

    const agregarAlCarrito = (id) => {
        const productoExistente = Carrito.find((item) => item.id === id);

        if (productoExistente) {
            const nuevoCarrito = Carrito.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
            );
            setCarrito(nuevoCarrito);
        } else {
            const producto = Productos.find((producto) => producto.id === id);
            if (producto) {
                setCarrito([...Carrito, { ...producto, cantidad: 1 }]);
            }
        }
    };

    const agregarAlCarritoDetalle = (id, cantidad) => {
        const productoExistente = Carrito.find((item) => item.id === id);

        if (productoExistente) {
            const nuevoCarrito = Carrito.map((item) =>
                item.id === id ? { ...item, cantidad: item.cantidad + cantidad } : item
            );
            setCarrito(nuevoCarrito);
        } else {
            const producto = Productos.find((producto) => producto.id === id);
            if (producto) {
                setCarrito([...Carrito, { ...producto, cantidad }]);
            }
        }
    };
    
    const aumentarCantidad = (id) => {
        const nuevoCarrito = Carrito.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
        setCarrito(nuevoCarrito);
    };

    const disminuirCantidad = (id) => {
        const nuevoCarrito = Carrito.map((item) =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        ).filter((item) => item.cantidad > 0); 
        setCarrito(nuevoCarrito);
    };

    const eliminarProductoDelCarrito = (id) => {
        const nuevoCarrito = Carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
    };

    /*Total de precios de productos*/
    const calcularTotalCarrito = () => {
        return Carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
    };

    /*Total de productos*/
    const calcularTotalCantidadCarrito = () => {
        return Carrito.reduce((totalCantidad, item) => totalCantidad + item.cantidad, 0);
    };

    return (
        <ProductContext.Provider value={{ 
            Productos, 
            Carrito, 
            calcularTotalCantidadCarrito, 
            agregarAlCarrito, 
            agregarAlCarritoDetalle, 
            aumentarCantidad, 
            disminuirCantidad, 
            calcularTotalCarrito, 
            eliminarProductoDelCarrito
         }}>
            {children}
        </ProductContext.Provider>
    );
};
