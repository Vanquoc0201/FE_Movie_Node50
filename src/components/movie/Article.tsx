'use client';

import { TArticle } from '@/types/article/article.type';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

type TArticleProps = {
  movie: TArticle;
};

export default function Article({ movie }: TArticleProps) {
  const router = useRouter();

  const handleBuyTicket = () => {
    alert('Mua vé hiện chưa được hỗ trợ');
  };

  const handleViewDetail = () => {
    router.push(`/Detail/${movie.maPhim}`);
  };

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={movie.hinhAnh}
        alt={movie.tenPhim}
        className="w-full h-80 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
          {movie.tenPhim}
        </h2>
        <div className="flex space-x-3">
          <button
            onClick={handleViewDetail}
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            Xem chi tiết
          </button>
          <button
            onClick={handleBuyTicket}
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-500 transition"
          >
            Mua vé
          </button>
        </div>
      </div>
    </div>
  );
}
