'use client';

import { useParams, useRouter } from 'next/navigation';
import { useDetailMovies } from '@/hooks/movie/useDetailMovies';
import DetailMovie from '@/components/movie/DetailMovie';
import ShowtimesByMovie from '@/components/showtime/ShowTimeByMovies';
import { useState } from 'react';

export default function DetailPage() {
  const { maPhim } = useParams();
  const router = useRouter();
  const [tab, setTab] = useState<'detail' | 'showtimes'>('detail');
  const { data, isLoading, isError } = useDetailMovies(
    maPhim ? Number(maPhim) : undefined
  );

  if (isLoading) return <p className="text-center py-10">Đang tải dữ liệu phim...</p>;
  if (isError || !data) {
    router.push('/not-found');
    return null;
  }

  const movieId = Number(maPhim);

  return (
    <div className="max-w-5xl mx-auto p-4 mt-16">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded border transition ${
            tab === 'detail'
              ? 'bg-red-600 text-white border-red-700'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => setTab('detail')}
        >
          Thông tin phim
        </button>
        <button
          className={`px-4 py-2 rounded border transition ${
            tab === 'showtimes'
              ? 'bg-red-600 text-white border-red-700'
              : 'bg-white text-gray-700 border-gray-300'
          }`}
          onClick={() => setTab('showtimes')}
        >
          Lịch chiếu
        </button>
      </div>

      {/* Tab Content */}
      {tab === 'detail' ? (
        <DetailMovie movie={data} />
      ) : (
        <>
          {console.log("👉 Hiển thị lịch chiếu")}
          <ShowtimesByMovie maPhim={movieId} />
        </>
      )}
    </div>
  );
}
