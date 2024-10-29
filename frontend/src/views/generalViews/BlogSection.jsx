import React from 'react';
import { Link } from 'react-router-dom';
import blog from "../../data/blog.json";

export default function BlogSection() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Blog</h2>
        <p className="mt-1 text-gray-600 dark:text-neutral-400">
          See how game-changing companies are making the most of every engagement with Preline.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blog.slice(0, 3).map((post, index) => ( // Solo muestra los primeros 3 artículos
          <Link
            to={post.link}
            key={index}
            className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg focus:outline-none focus:border-transparent focus:shadow-lg transition duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40 dark:focus:border-transparent dark:focus:shadow-black/40"
          >
            <div className="aspect-w-16 aspect-h-11">
              <img className="w-full object-cover rounded-xl" src={post.imgSrc} alt="Blog Image" />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
                {post.title}
              </h3>
              <p className="mt-5 text-gray-600 dark:text-neutral-400">{post.description}</p>
            </div>
            <div className="mt-auto flex items-center gap-x-3">
              <img className="size-8 rounded-full" src={post.authorImg} alt="Avatar" />
              <div>
                <h5 className="text-sm text-gray-800 dark:text-neutral-200">By {post.authorName}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/all-blogs">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-500 transition duration-300">
            Ver más
          </button>
        </Link>
      </div>
    </div>
  );
}
