import { TUser } from '@/types/user/user.type';
import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';
type TableProps = {
  data: TUser[];
};
export default function Table({ data }: TableProps) {
  return (
    <div className="overflow-x-auto bg-white shadow-lg rounded-2xl p-6">
      <table className="min-w-full table-auto border border-gray-200 rounded-xl overflow-hidden">
        <thead className="bg-[#1f1f1f] text-white">
          <tr>
            <th className="px-4 py-3 text-sm font-semibold border-b">ID</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Tài khoản</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Họ tên</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Email</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Số ĐT</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Loại</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Ngày tạo</th>
            <th className="px-4 py-3 text-sm font-semibold border-b">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr
              key={user.userId}
              className="text-center hover:bg-gray-100 transition-all duration-200"
            >
              <td className="px-4 py-3 border-b text-red-600">{index + 1}</td>
              <td className="px-4 py-3 border-b text-red-600">{user.taiKhoan}</td>
              <td className="px-4 py-3 border-b text-red-600">{user.hoTen}</td>
              <td className="px-4 py-3 border-b text-red-600">{user.email}</td>
              <td className="px-4 py-3 border-b text-red-600">{user.soDt}</td>
              <td className="px-4 py-3 border-b text-red-600">{user.loaiNguoiDung}</td>
              <td className="px-4 py-3 border-b text-red-600">
                {new Date(user.createdAt).toLocaleDateString('vi-VN')}
              </td>
              <td className="px-4 py-3 border-b">
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => console.log('Edit', user.userId)}
                    className="text-[#e11d48] hover:bg-[#e11d4810] p-2 rounded-full transition-all"
                  >
                    <Pencil size={18} />
                  </button>
                  <button
                    onClick={() => console.log('Delete', user.userId)}
                    className="text-red-600 hover:bg-red-100 p-2 rounded-full transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
