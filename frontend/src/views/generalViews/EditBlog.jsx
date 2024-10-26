import React from 'react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Meet AutoManage, the best AI management tools",
      date: "Dec 22, 2023",
      image: "/images/Blog Image.png", // Reemplaza con la ruta de tu imagen
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "How to earn more money as a wellness coach",
      date: "Mar 15, 2023",
      image: "/images/Blog Image (1).png", // Reemplaza con la ruta de tu imagen
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "The no-fuss guide to upselling and cross selling",
      date: "Jan 05, 2023",
      image: "/images/Blog Image (2).png", // Reemplaza con la ruta de tu imagen
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className=" bg-tierral text-center py-10 px-5 md:px-20">
      {/* Título del blog */}
      <h3 className="text-orange-500 text-lg uppercase">Our Blogs</h3>
      <h2 className="text-4xl text-black font-bold mb-4">Our Recent News</h2>
      <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
        There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.
      </p>
      
      {/* Grid de posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className=" p-6 rounded-lg shadow-md">
            {/* Imagen */}
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            {/* Fecha */}
            <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-2 inline-block">
              {post.date}
            </span>
            {/* Título del post */}
            <h3 className="text-black font-medium text-2xl mb-2">{post.title}</h3>
            {/* Descripción */}
            <p className="text-gray-400 text-sm">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
