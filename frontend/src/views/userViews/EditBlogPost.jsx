import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditBlogPost = () => {
  const { id } = useParams(); // Obtener el ID del post desde la URL
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [previewModal, setPreviewModal] = useState(false); // Estado para el modal de previsualización
  const [imagePreview, setImagePreview] = useState(null); // Estado para la imagen previsualizada

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const baseUrl = import.meta.env.VITE_URL_BASE_SERVER;
        const response = await axios.get(`${baseUrl}/api/blog/${id}`);
        setPost(response.data);
        setImagePreview(response.data.imgsrc); // Previsualizar la imagen existente
      } catch (err) {
        console.error("Error al cargar el post:", err);
        setError("No se pudo cargar el post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const baseUrl = import.meta.env.VITE_URL_BASE_SERVER;
      await axios.put(`${baseUrl}/api/blog/${id}`, post);
      navigate("/edit-post"); // Redirige a la página de todos los posts después de editar
    } catch (err) {
      console.error("Error al actualizar el post:", err);
      setError("No se pudo actualizar el post");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // Actualizar la previsualización
        setPost({ ...post, imgsrc: reader.result }); // Actualizar el post con la nueva imagen
      };
      reader.readAsDataURL(file);
    }
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-lg mt-6 mb-6">
      <h2 className="text-2xl font-bold mb-6">Editar Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
            Título
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="description">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={post.description}
            onChange={handleChange}
            rows="5"
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="image">
            Subir Imagen
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        {imagePreview && (
          <div className="mb-4">
            <img src={imagePreview} alt="Previsualización" className="w-full rounded-md" />
          </div>
        )}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => setPreviewModal(true)} // Mostrar modal de previsualización
            className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            Previsualizar
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
          >
            Guardar Cambios
          </button>
        </div>
      </form>

      {/* Modal de previsualización */}
      {previewModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-bold mb-4">Previsualización</h2>
            <img src={imagePreview} alt="Previsualización" className="w-full rounded-md mb-4" />
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.description}</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setPreviewModal(false)}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBlogPost;
