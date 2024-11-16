import Button from "../../components/layouts/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UsersBlogPost = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para cargar los blogs
  const [error, setError] = useState(null); // Estado para manejar errores
  const [mostrarTodo, setMostrarTodo] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_URL_BASE_SERVER; // Utilizando variable de entorno
        const response = await axios.get(`${baseUrl}/api/blog`);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error al obtener los blogs:", error);
        setError("Error al cargar los blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const toggleMostrarTodo = () => setMostrarTodo(!mostrarTodo);

  if (loading) {
    return <p>Cargando artículos...</p>; // Mensaje de carga mientras se obtienen los datos
  }

  if (error) {
    return <p>{error}</p>; // Mensaje de error si la API no responde correctamente
  }

  console.log(blogs)

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-manrope text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          Tus artículos
        </h2>
        <Button to="/new-post" text="Crear nuevo post" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.slice(0, mostrarTodo ? blogs.length : 8).map((articulo, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56 sm:h-64 lg:h-72">
                <img
                  src={articulo.imgsrc}
                  alt={`blog post ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 lg:p-6 bg-white">
                <span className="text-indigo-600 font-medium mb-3 block">
                  {articulo.date}
                </span>
                <h4 className="text-lg lg:text-xl font-medium text-gray-900 mb-4">
                  {articulo.title}
                </h4>
                <Button to={`/edit-post/${articulo.id}`} text="Editar"/>
              </div>
            </div>
          ))}
        </div>
        {/* Botón para mostrar más */}
        {blogs.length > 8 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleMostrarTodo}
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 transition-all duration-300"
            >
              {mostrarTodo ? "Mostrar menos" : "Mostrar más"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UsersBlogPost;
