import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [Blogs, setBlogs] = useState([]);

  // Cargar los blogs desde el backend al montar el componente
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_URL_BASE_SERVER;

        const response = await axios.get(`${baseUrl}/api/blog`);

        setBlogs(response.data);
      } catch (error) {
        console.error("Error al obtener los blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ Blogs }}>{children}</BlogContext.Provider>
  );
};
