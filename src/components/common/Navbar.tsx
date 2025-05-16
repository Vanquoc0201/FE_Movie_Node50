import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">
          <Link href="/">MovieZone</Link>
        </div>

        {/* Menu */}
        <nav className="space-x-6 text-sm sm:text-base">
          <Link href="/" className="hover:text-red-500 transition">Trang chủ</Link>
          <Link href="/phim" className="hover:text-red-500 transition">Phim</Link>
          <Link href="/lich-chieu" className="hover:text-red-500 transition">Lịch chiếu</Link>
          <Link href="/lien-he" className="hover:text-red-500 transition">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
