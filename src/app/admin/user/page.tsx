'use client';
import { useUsers } from '@/hooks/user/useUsers';
import Table from '@/components/user/Table';
import { AddUserModal } from '@/components/user/Model';
import { useState } from 'react';
import { Button } from '@/components/common/Button';

export default function UserPage() {
  const { data, isLoading, error } = useUsers();
  const [openModal, setOpenModal] = useState(false);

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-white">
        Đang tải dữ liệu...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-red-500">
        Đã xảy ra lỗi khi tải dữ liệu!
      </div>
    );

  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white">
      {/* Header gồm tiêu đề + nút thêm */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#e11d48]">
          Danh sách người dùng
        </h1>

        <Button
          onClick={() => setOpenModal(true)}
          className="bg-pink-600 hover:bg-pink-700 px-6 py-3 text-base font-semibold"
        >
          Thêm Người Dùng
        </Button>
      </div>

      {/* Bảng danh sách */}
      <div className="bg-zinc-800 rounded-2xl shadow-xl p-4">
        <Table data={data ?? []} />
      </div>

      {/* Modal thêm người dùng */}
      <AddUserModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}
