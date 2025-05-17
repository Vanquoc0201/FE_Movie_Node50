'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { TDetailMovie } from '@/types/article/detailMovie.type';
import { movieService } from '@/services/movieService';
import DetailMovie from '@/components/movie/DetailMovie';


export default function DetailPage() {
  const { maPhim } = useParams();
  const router = useRouter();
  const [movie, setMovie] = useState<TDetailMovie | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!maPhim) return;

    const fetchDetailMovies = async (maPhim: number) => {
      try {
        const data = await movieService.getDetailMovie(maPhim);
        setMovie(data.data.data);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        router.push('/not-found');
      } finally {
        setLoading(false);
      }
    };

    fetchDetailMovies(Number(maPhim));
  }, [maPhim, router]);

  if (loading) {
    return <p className="text-center py-10">Đang tải dữ liệu phim...</p>;
  }

  if (!movie) {
    return <p className="text-center py-10">Không tìm thấy thông tin phim.</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <DetailMovie movie={movie} />
    </div>
  );
}

