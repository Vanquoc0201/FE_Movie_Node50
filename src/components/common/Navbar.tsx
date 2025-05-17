import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">
          <Link href="/">MovieZone</Link>
        </div>

        {/* Menu */}
        <nav className="flex-1 flex justify-center space-x-6 text-sm sm:text-base uppercase tracking-wide">
          <Link href="/" className="hover:text-red-500 transition">Trang chủ</Link>
          <Link href="/phim" className="hover:text-red-500 transition">Phim</Link>
          <Link href="/lich-chieu" className="hover:text-red-500 transition">Lịch chiếu</Link>
          <Link href="/lien-he" className="hover:text-red-500 transition">Liên hệ</Link>
        </nav>

        {/* Auth buttons */}

        <div className="space-x-4 text-sm sm:text-base">
          <Link href="/Login">
            <button className="hover:text-red-500 transition">Đăng nhập</button>
          </Link>
          <Link href="/Register">
            <button className="bg-red-500 hover:bg-red-600 transition text-white px-3 py-1 rounded">
              Đăng ký
            </button>
          </Link>
        </div>

      </div>
    </header>
  );
}

