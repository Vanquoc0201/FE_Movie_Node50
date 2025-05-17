"use client";
import Article from "@/components/movie/Article";
import Banner from "@/components/movie/Banner";
import { movieService } from "@/services/movieService";
import { TArticle } from "@/types/article/article.type";
import { useEffect, useState } from "react";


export default function Home() {
  const [movies,setMovies] = useState<TArticle[]>([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await movieService.getAllMovie();
        setMovies(data.data.data)
      } catch (err) {
        console.error('Lỗi khi lấy danh sách phim:', err);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="p-4">
      {/* Hiển thị banner */}
      <div className="mb-8">
        <Banner />
      </div>

      {/* Hiển thị danh sách phim */}
      <h1 className="text-2xl font-bold mb-4">Danh sách phim</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {movies.map((movie, index) => (
          <Article key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}
