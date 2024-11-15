import { useState, useEffect } from "react";
import CardDetail from "../../components/ui/CardDetail";
import Title from "../../components/layouts/Title";
import axios from "axios";

const PublicationGallery = () => {
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

  return (
    <div className="container mx-auto p-5 mb-10">
      <div className="flex flex-col md:flex-row items-center md:justify-start">
        <Title title="Artículos" />
      </div>
      <div className="self-stretch justify-center items-center flex">
        <div
          className={`grid gap-6 ${
            mostrarTodo
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {blogs.slice(0, mostrarTodo ? blogs.length : 8).map((articulo) => (
            <CardDetail
              key={articulo.id}
              id={articulo.id}
              title={articulo.title}
              description={articulo.description}
              imgSrc={articulo.imgsrc}
              authorImg={articulo.authorimg}
              authorName={articulo.authorname}
              text="Leer más"
              to={`/blog/${articulo.id}`}
            />
          ))}
        </div>
      </div>
      {blogs.length > 8 && (
        <div className="mt-4">
          <button
            onClick={toggleMostrarTodo}
            className="px-6 py-2 text-white bg-verde rounded hover:bg-opacity-90"
          >
            {mostrarTodo ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PublicationGallery;
