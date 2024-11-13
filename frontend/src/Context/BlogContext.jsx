import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
    const [Blogs, setBlogs] = useState([]);

    // Cargar los blogs desde el backend al montar el componente
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/blog');
                setBlogs(response.data);
            } catch (error) {
                console.error("Error al obtener los blogs:", error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <BlogContext.Provider value={{ Blogs }}>
            {children}
        </BlogContext.Provider>
    );
};