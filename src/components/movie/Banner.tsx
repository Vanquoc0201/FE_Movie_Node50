'use client';
import React, { useEffect, useState } from 'react';
import { movieService } from '@/services/movieService';
import { TBanner } from '@/types/article/banner.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Banner() {
  const [banner, setBanner] = useState<TBanner[]>([]);

  useEffect(() => {
    const fetchListBanner = async () => {
      try {
        const data = await movieService.getListBanner();
        setBanner(data.data.data);
      } catch (error) {
        console.error('Lỗi khi tải banner:', error);
      }
    };
    fetchListBanner();
  }, []);

  return (
    <div className="w-full max-w-screen-xl mx-auto mb-8">
      {banner.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-xl shadow-xl"
        >
          {banner.map((item) => (
            <SwiperSlide key={item.maBanner}>
              <img
                src={item.hinhAnh}
                alt={`Banner ${item.maPhim}`}
                className="w-full h-[500px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-white text-center">Đang tải banner...</p>
      )}
    </div>
  );
}
