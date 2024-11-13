import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const BlogDetail = () => {
  const [blogs, setBlogs] = useState([]);
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const baseUrl = import.meta.env.VITE_URL_BASE_SERVER; // Usando la variable de entorno

        const response = await axios.get(`${baseUrl}/api/blog`);
        setBlogs(response.data);
        const filteredPost = response.data.find(
          (blog) => blog.id === Number(id)
        );
        setPost(filteredPost);
      } catch (error) {
        console.error("Error al obtener los blogs:", error);
      }
    };

    fetchBlogs();
  }, [id]);

  if (!post) {
    return <p>Artículo no encontrado.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {post.title}
        </h1>
      </div>
      <div className="mb-8">
        <img className="w-full rounded-lg" src={post.imgsrc} alt={post.title} />
      </div>
      <div className="flex items-center gap-x-3 mt-4">
        <img
          className="w-10 h-10 rounded-full"
          src={post.authorimg}
          alt={post.authorname}
        />
        <h5 className="text-sm text-gray-800 dark:text-neutral-200">
          By {post.authorname}
        </h5>
      </div>

      <p className="text-gray-600 dark:text-neutral-400 mt-2">
        {post.description}
      </p>
    </div>
  );
};

export default BlogDetail;
