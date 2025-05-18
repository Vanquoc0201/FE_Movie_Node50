'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useLogin } from '@/hooks/auth/useLogin';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { register, handleSubmit } = useForm();
  const { mutate, isPending } = useLogin();
  const router = useRouter();

  const onSubmit = (formData: any) => {
    mutate(formData, {
      onSuccess: () => {
        alert('Đăng nhập thành công!');
        router.push('/'); 
      },
      onError: (err: any) => {
      const message = err?.response?.data?.message || 'Đăng nhập thất bại';
      alert(message);
      },
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Đăng nhập</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('taiKhoan')}
            type="text"
            placeholder="Tài khoản"
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            {...register('matKhau')}
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 mb-6 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded font-semibold"
          >
            {isPending ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Chưa có tài khoản?{' '}
          <Link href="/Register" className="text-red-500 hover:underline">
            Đăng ký
          </Link>
        </p>
      </div>
    </div>
  );
}
