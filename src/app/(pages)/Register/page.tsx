'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRegister } from '@/hooks/auth/useRegister';
import { useRouter } from 'next/navigation';
export default function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const { mutate, isPending } = useRegister();
  const router = useRouter();
  const onSubmit = (formData: any) => {
  mutate(formData, {
    onSuccess: () => {
      alert('Đăng ký thành công!');
      router.push('/Login');
    },
    onError: (err: any) => {
      alert('Đăng ký thất bại: ' + err.message);
    },
  });
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Đăng ký</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Tài khoản"
            {...register('taiKhoan')}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            {...register('matKhau')}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Họ tên"
            {...register('hoTen')}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            {...register('email')}
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            {...register('soDt')}
            className="w-full px-4 py-2 mb-6 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded font-semibold"
          >
            {isPending ? 'Đang đăng ký...' : 'Đăng ký'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Đã có tài khoản?{' '}
          <Link href="/Login" className="text-red-500 hover:underline">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
