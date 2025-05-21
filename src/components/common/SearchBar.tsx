import { useState } from 'react';

export default function SearchBar({
  onSearch,
  placeholder = 'Tìm kiếm...',
}: {
  onSearch: (value: string) => void;
  placeholder?: string;
}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="w-full px-4 py-2 rounded-lg text-black"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        type="submit"
        className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold"
      >
        Tìm
      </button>
    </form>
  );
}
