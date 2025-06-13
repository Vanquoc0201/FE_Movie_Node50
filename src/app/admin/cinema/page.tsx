"use client";

import { useGetCinemaCluster } from "@/hooks/cinema/useGetCinemaCluster";
import { useGetCinemaSystem } from "@/hooks/cinema/useGetCinemaSystem";
import { TCluster } from "@/types/cinema/cluster.type";
import { useState } from "react";

export default function ListCinema() {
  const [selectedSystemId, setSelectedSystemId] = useState<number | null>(null);

  const { data: cinemaSystems, isLoading: loadingSystems } = useGetCinemaSystem();
  const {
    data: cinemaClusters,
    isLoading: loadingClusters,
  } = useGetCinemaCluster(selectedSystemId ?? 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Danh sách cụm rạp</h1>

      {/* Danh sách hệ thống rạp (logo + tên) */}
      <div className="flex flex-wrap gap-6 mb-6">
        {loadingSystems ? (
          <p>Đang tải hệ thống rạp...</p>
        ) : (
          cinemaSystems?.map((system: any) => (
            <div
              key={system.maHeThongRap}
              className={`cursor-pointer rounded-lg border p-4 w-48 bg-white shadow hover:shadow-md transition ${
                selectedSystemId === system.maHeThongRap ? "border-red-500 ring-2 ring-red-300" : ""
              }`}
              onClick={() => setSelectedSystemId(system.maHeThongRap)}
            >
              <img
                src={system.logo}
                alt={system.tenHeThongRap}
                className="w-full h-16 object-contain mb-2"
              />
              <p className="text-center font-semibold">{system.tenHeThongRap}</p>
            </div>
          ))
        )}
      </div>

      {/* Bảng cụm rạp */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Tên cụm rạp</th>
              <th className="p-3 text-left">Địa chỉ</th>
              <th className="p-3 text-left">Mã hệ thống</th>
              <th className="p-3 text-left">Mã cụm rạp</th>
            </tr>
          </thead>
          <tbody>
            {loadingClusters ? (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  Đang tải cụm rạp...
                </td>
              </tr>
            ) : cinemaClusters?.length ? (
              cinemaClusters.map((cluster: TCluster, index: number) => (
                <tr key={cluster.maCumRap} className="border-b hover:bg-gray-50">
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3 font-medium text-red-600">{cluster.tenCumRap}</td>
                  <td className="p-3">{cluster.diaChi}</td>
                  <td className="p-3">{cluster.maHeThongRap}</td>
                  <td className="p-3">{cluster.maCumRap}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4 text-gray-500">
                  Chưa có cụm rạp nào cho hệ thống này.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
