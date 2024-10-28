import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blog.json';

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData[id]; 

  if (!post) {
    return <p>Artículo no encontrado.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{post.title}</h1>
        <p className="text-gray-600 dark:text-neutral-400 mt-2">{post.description}</p>
      </div>
      <div className="mb-8">
        <img className="w-full rounded-lg" src={post.imgSrc} alt={post.title} />
      </div>
      <div className="flex items-center gap-x-3 mt-4">
        <img className="w-10 h-10 rounded-full" src={post.authorImg} alt={post.authorName} />
        <h5 className="text-sm text-gray-800 dark:text-neutral-200">By {post.authorName}</h5>
      </div>
      <p className="mt-6 text-gray-700 dark:text-neutral-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
        Cras venenatis euismod malesuada.
      </p>
    </div>
  );
};

export default BlogDetail;
