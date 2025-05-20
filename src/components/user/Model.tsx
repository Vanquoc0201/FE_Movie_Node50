'use client';
import "tailwindcss";
import { useAddUser } from '@/hooks/user/useAddUsers';
import { TAddUser } from '@/types/user/addUser.type';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { useEffect } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const addUserSchema = z.object({
  taiKhoan: z.string().min(3, 'Tài khoản tối thiểu 3 ký tự'),
  matKhau: z.string().min(6, 'Mật khẩu tối thiểu 6 ký tự'),
  hoTen: z.string().min(1, 'Họ tên không được để trống'),
  email: z.string().email('Email không hợp lệ'),
  soDt: z.string().min(10, 'Số điện thoại không hợp lệ'),
  loaiNguoiDung: z.enum(['KhachHang', 'QuanTriVien']),
});

export const AddUserModal = ({ open, onClose }: Props) => {
  const { mutate: addUser, isPending } = useAddUser();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<TAddUser>({
    resolver: zodResolver(addUserSchema),
  });

  const onSubmit = (data: TAddUser) => {
    addUser(data, {
      onSuccess: () => {
        reset();
        onClose();
      },
    });
  };

  // Reset khi modal đóng
  useEffect(() => {
    if (!open) reset();
  }, [open, reset]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Thêm người dùng</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <input
              placeholder="Tài khoản"
              {...register('taiKhoan')}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors.taiKhoan && <p className="text-red-500 text-sm">{errors.taiKhoan.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Mật khẩu"
              {...register('matKhau')}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors.matKhau && <p className="text-red-500 text-sm">{errors.matKhau.message}</p>}
          </div>

          <div>
            <input
              placeholder="Họ tên"
              {...register('hoTen')}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors.hoTen && <p className="text-red-500 text-sm">{errors.hoTen.message}</p>}
          </div>

          <div>
            <input
              placeholder="Email"
              {...register('email')}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <input
              placeholder="Số điện thoại"
              {...register('soDt')}
              className="w-full border px-3 py-2 rounded-md"
            />
            {errors.soDt && <p className="text-red-500 text-sm">{errors.soDt.message}</p>}
          </div>

          <div>
            <Controller
              control={control}
              name="loaiNguoiDung"
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full border px-3 py-2 rounded-md"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Chọn loại người dùng
                  </option>
                  <option value="KhachHang">Khách Hàng</option>
                  <option value="QuanTriVien">Quản Trị Viên</option>
                </select>
              )}
            />
            {errors.loaiNguoiDung && (
              <p className="text-red-500 text-sm">{errors.loaiNguoiDung.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              className="px-4 py-2 border rounded-md hover:bg-gray-100"
              onClick={onClose}
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={isPending}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isPending ? 'Đang thêm...' : 'Thêm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
