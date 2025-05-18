'use client';
import { useParams, useRouter } from 'next/navigation';
import { useDetailMovies } from '@/hooks/movie/useDetailMovies';
import DetailMovie from '@/components/movie/DetailMovie';
export default function DetailPage() {
  const { maPhim } = useParams();
  const router = useRouter();
  const { data, isLoading, isError } = useDetailMovies(
    maPhim ? Number(maPhim) : undefined
  );

  if (isLoading) {
    return <p className="text-center py-10">Đang tải dữ liệu phim...</p>;
  }

  if (isError || !data) {
    router.push('/not-found');
    return null;
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <DetailMovie movie={data} />
    </div>
  );
}
