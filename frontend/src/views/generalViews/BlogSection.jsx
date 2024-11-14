import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/layouts/Button";
import axios from "axios";

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Agregado estado de carga

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_URL_BASE_SERVER; // Usar la variable de entorno
        const response = await axios.get(`${baseUrl}/api/blog`);
        setBlogs(response.data);
        setLoading(false); // Cambiar el estado de carga una vez que se obtienen los blogs
      } catch (error) {
        console.error("Error al obtener los blogs:", error);
        setLoading(false); // Asegurarse de que la carga termine incluso si hay un error
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <p>Cargando blogs...</p> {/* Mostrar mensaje mientras carga */}
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Últimas noticias
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map(
          (
            post,
            index // Solo muestra los primeros 3 artículos
          ) => (
            <Link
              to={post.link}
              key={index}
              className="bg-white group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
            >
              <div className="aspect-w-16 aspect-h-11">
                <img
                  className="w-full object-cover rounded-xl"
                  src={post.imgsrc}
                  alt="Blog Image"
                />
              </div>
              <div className="my-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                  {post.title}
                </h3>
                <p className="mt-5 text-gray-600 dark:text-neutral-400">
                  {post.description}
                </p>
              </div>
              <div className="mt-auto flex items-center gap-x-3">
                <img
                  className="size-8 rounded-full"
                  src={post.authorimg}
                  alt="Avatar"
                />
                <div>
                  <h5 className="text-sm text-gray-800 dark:text-neutral-200">
                    By {post.authorname}
                  </h5>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/all-blogs">
          <Button text="Ver más" bg="bg-verde" to="/blog" />
        </Link>
      </div>
    </div>
  );
}
