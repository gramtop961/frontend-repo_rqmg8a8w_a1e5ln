import React from 'react';
import { Film, Bookmark } from 'lucide-react';

function Header({ bookmarkCount }) {
  return (
    <header className="sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-900 text-white"><Film size={20} /></div>
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-slate-900">ReelMarks</h1>
            <p className="text-xs text-slate-500 hidden sm:block">Your personal movie bookmark vault</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-slate-700">
          <Bookmark className="text-slate-900" size={18} />
          <span className="text-sm font-medium">{bookmarkCount} saved</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
