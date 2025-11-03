import React from 'react';
import { Search } from 'lucide-react';

function SearchBar({ value, onChange }) {
  return (
    <div className="w-full">
      <label className="sr-only" htmlFor="movie-search">Search movies</label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          id="movie-search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search by title, genre, or year..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:border-slate-400 placeholder:text-slate-400 text-slate-800 bg-white"
        />
      </div>
    </div>
  );
}

export default SearchBar;
