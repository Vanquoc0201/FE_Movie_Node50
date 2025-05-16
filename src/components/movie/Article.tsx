import { TArticle } from '@/types/article/article.type';
import React from 'react';

type TArticleProps = {
  movie: TArticle;
};

export default function Article({ movie }: TArticleProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={movie.hinhAnh}
        alt={movie.tenPhim}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {movie.tenPhim}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">
          {movie.moTa}
        </p>
      </div>
    </div>
  );
}
