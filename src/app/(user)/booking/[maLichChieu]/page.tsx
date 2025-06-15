'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Seat from '@/components/booking/Seat';
import { useGetListShowTimes } from '@/hooks/showtime/useGetListShowTimes';

export default function BookingPage() {
  const { maLichChieu } = useParams();
  const maLC = parseInt(maLichChieu as string, 10);
  const { data, isLoading, isError } = useGetListShowTimes(maLC);

  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

  const toggleSeat = (maGhe: number) => {
    setSelectedSeats((prev) =>
      prev.includes(maGhe) ? prev.filter((id) => id !== maGhe) : [...prev, maGhe]
    );
  };

  if (isLoading) return <p className="text-center mt-10">Đang tải dữ liệu ghế...</p>;
  if (isError || !data) return <p className="text-center text-red-500">Không thể tải dữ liệu.</p>;

  const selectedSeatObjects = data.danhSachGhe.filter((g) => selectedSeats.includes(g.maGhe));
  const seatPrice = data.giaVe;
  const totalPrice = seatPrice * selectedSeats.length;

  return (
    <div className="max-w-7xl mx-auto mt-10 p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Ghế bên trái */}
      <div className="md:col-span-2">
        <h2 className="text-lg font-semibold mb-2 text-center">Sơ đồ ghế</h2>
        <div className="grid grid-cols-10 gap-2 justify-center mb-4">
          {data.danhSachGhe.map((ghe) => (
            <Seat
              key={ghe.maGhe}
              tenGhe={ghe.tenGhe}
              trangThai={ghe.trangThai}
              isSelected={selectedSeats.includes(ghe.maGhe)}
              onSelect={() => toggleSeat(ghe.maGhe)}
            />
          ))}
        </div>

        {/* Chú thích */}
        <div className="flex justify-center gap-4 items-center text-sm mt-4">
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-white border"></div> <span>Ghế trống</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-green-500"></div> <span>Đang chọn</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 bg-red-500"></div> <span>Đã đặt</span>
          </div>
        </div>
      </div>

      {/* Thông tin phim bên phải */}
      <div className="bg-gray-100 rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-bold mb-2 text-center text-red-600">{data.movie.tenPhim}</h2>
        <img
          src={data.movie.hinhAnh}
          alt={data.movie.tenPhim}
          className="w-full h-48 object-cover rounded mb-3"
        />
        <p className="text-sm text-gray-600 mb-2">
          <strong>Ngày chiếu:</strong>{' '}
          {new Date(data.ngayGioChieu).toLocaleString('vi-VN')}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Mô tả:</strong> {data.movie.moTa}
        </p>
        <p className="text-sm text-gray-600 mb-4">
          <strong>Giá vé:</strong> {seatPrice.toLocaleString('vi-VN')}đ
        </p>

        <div className="border-t pt-3">
          <h3 className="font-semibold mb-1">Ghế đang chọn:</h3>
          {selectedSeatObjects.length > 0 ? (
            <ul className="list-disc pl-4 text-sm text-gray-700">
              {selectedSeatObjects.map((g) => (
                <li key={g.maGhe}>
                  {g.tenGhe} - {seatPrice.toLocaleString('vi-VN')}đ
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-500">Chưa chọn ghế nào</p>
          )}
        </div>

        <div className="mt-4 text-center">
          <p className="font-bold text-lg mb-2">
            Tổng tiền: {totalPrice.toLocaleString('vi-VN')}đ
          </p>
          <button
            className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            disabled={selectedSeats.length === 0}
            onClick={() =>
              alert(
                `Bạn đã chọn: ${selectedSeats.join(', ')}\nTổng tiền: ${totalPrice.toLocaleString('vi-VN')}đ`
              )
            }
          >
            Đặt vé
          </button>
        </div>
      </div>
    </div>
  );
}
