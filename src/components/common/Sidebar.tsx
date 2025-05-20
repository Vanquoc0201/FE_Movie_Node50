import React from "react";
import Link from "next/link";
import { User, Film, Calendar, Building2 } from "lucide-react";

const Sidebar = () => {
  const menuItems = [
    { label: "User", icon: <User size={18} />, path: "/admin/user" },
    { label: "Movie", icon: <Film size={18} />, path: "/admin/movie" },
    { label: "Booking", icon: <Calendar size={18} />, path: "/admin/booking" },
    { label: "Cinema", icon: <Building2 size={18} />, path: "/admin/cinema" },
  ];

  return (
    <aside className="h-screen w-64 bg-black text-white flex flex-col justify-between shadow-md">
      {/* Top: Avatar + Title */}
      <div>
        <div className="flex flex-col items-center py-6 border-b border-gray-800">
          <img
            src="https://i.pravatar.cc/100"
            alt="User Avatar"
            className="w-20 h-20 rounded-full border-2 border-red-500"
          />
          <h2 className="mt-3 text-lg font-semibold text-red-500 tracking-wide">
            MovieZone
          </h2>
        </div>

        {/* Menu Items */}
        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="flex items-center gap-3 py-2 px-4 rounded-md hover:bg-red-500 transition text-sm uppercase tracking-wide"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-500 text-center py-4 border-t border-gray-800">
        © 2025 MovieZone
      </div>
    </aside>
  );
};

export default Sidebar;
