
import { useQuery } from '@tanstack/react-query';
import { cinemaService } from '@/services/cinemaService';
export const useShowtimesByMovie = (maPhim: number) => {
  return useQuery({
    queryKey: ['showtimesbymovie', maPhim],
    queryFn: () => cinemaService.getShowtimeByMovie(maPhim),
    enabled: !!maPhim, 
    select: (res) => res.data?.lichChieu || [],
  });
};
