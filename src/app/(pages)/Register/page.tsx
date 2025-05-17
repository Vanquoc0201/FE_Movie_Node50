'use client';
import React from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-gray-900 text-white p-8 rounded-xl shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">Đăng ký</h1>
        <form>
          <input
            type="text"
            placeholder="Tài khoản"
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="text"
            placeholder="Họ tên"
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Số điện thoại"
            className="w-full px-4 py-2 mb-6 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-500 hover:bg-red-600 transition text-white py-2 rounded font-semibold"
          >
            Đăng ký
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
