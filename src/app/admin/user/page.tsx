"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useUsers } from "@/hooks/user/useUsers";
import { useSearchUsers } from "@/hooks/user/useSearchUsers";
import { useDeleteUser } from "@/hooks/user/useDeleteUsers";
import { toast } from "react-toastify";
import Link from "next/link";

const ListUser = () => {
  const searchParams = useSearchParams();
  const taiKhoan = searchParams.get("taiKhoan") || "";
  const router = useRouter();
  const { data: usersAll, isLoading: isLoadingAll, isError: isErrorAll } = useUsers();
  const {
    data: usersSearch,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
  } = useSearchUsers(taiKhoan, Boolean(taiKhoan));

  const deleteUserMutation = useDeleteUser();

  const users = taiKhoan ? usersSearch : usersAll;
  console.log(usersSearch);
  
  const loading = taiKhoan ? isLoadingSearch : isLoadingAll;
  const error = taiKhoan ? isErrorSearch : isErrorAll;
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const keyword = formData.get("taiKhoan")?.toString().trim() || "";
  const query = keyword ? `?taiKhoan=${encodeURIComponent(keyword)}` : "";
  router.push(`/admin/user${query}`);
};
  const handleDelete = (taiKhoan: string) => {
    deleteUserMutation.mutate(taiKhoan);
  };

  const handleUpdate = (id: string) => {
    toast.warning(`Chức năng cập nhật chưa hỗ trợ (userId: ${id})`);
  };

  if (loading) return <p>Đang tải dữ liệu người dùng...</p>;
  if (error) return <p>Lỗi khi tải dữ liệu người dùng.</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-red-600">
          {taiKhoan ? `Kết quả tìm "${taiKhoan}"` : "Danh sách người dùng"}
        </h2>
        <Link href="/admin/user/create">
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-black transition">
            Thêm người dùng
          </button>
        </Link>
      </div>
      <form onSubmit={handleSearch} className="flex items-center mb-4 gap-2">
        <input
          type="text"
          name="taiKhoan"
          defaultValue={taiKhoan}
          placeholder="Nhập tài khoản cần tìm..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full max-w-sm"
        />
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Tìm
        </button>
      </form>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-black text-white">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Tài khoản</th>
              <th className="px-4 py-2">Họ tên</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Số ĐT</th>
              <th className="px-4 py-2">Loại</th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={user.userId} className="border-t hover:bg-gray-100">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2 font-semibold text-red-600">{user.taiKhoan}</td>
                <td className="px-4 py-2">{user.hoTen}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.soDt}</td>
                <td className="px-4 py-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-sm">
                    {user.loaiNguoiDung}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleDelete(user.taiKhoan)}
                      className="bg-red-600 hover:bg-red-800 text-white px-4 py-2 rounded-full"
                    >
                      Xóa
                    </button>
                    <button
                      onClick={() => handleUpdate(user.userId)}
                      className="bg-blue-600 hover:bg-blue-800 text-white px-4 py-2 rounded-full"
                    >
                      Cập nhật
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users?.length === 0 && (
              <tr>
                <td colSpan={7} className="text-center py-4 text-gray-500">
                  Không tìm thấy người dùng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListUser;
