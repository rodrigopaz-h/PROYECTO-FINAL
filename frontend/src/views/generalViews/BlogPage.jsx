import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blog.json';

const BlogPage = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Todos los Artículos del Blog</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          Descubre más sobre el mundo del café a través de nuestros artículos.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((post, index) => (
          <div
            key={index}
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40"
          >
            <div className="aspect-w-16 aspect-h-11 mb-4">
              <img className="w-full object-cover rounded-xl" src={post.imgSrc} alt={post.title} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 group-hover:text-blue-500">
                {post.title}
              </h3>
              <p className="mt-3 text-gray-600 dark:text-neutral-400">{post.description}</p>
            </div>
            <div className="mt-4 flex items-center gap-x-3">
              <img className="w-8 h-8 rounded-full" src={post.authorImg} alt={post.authorName} />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By {post.authorName}</h5>
              </div>
            </div>
            <div className="mt-4">
              <Link to={`/blog/${index}`} className="text-blue-500 font-semibold hover:underline">
                Leer más
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
