import React from 'react';
import { Trash2 } from 'lucide-react';

function BookmarkList({ items, onRemove }) {
  if (!items.length) {
    return (
      <div className="text-sm text-slate-500">No bookmarks yet. Add movies you love and they will appear here.</div>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((m) => (
        <li key={m.id} className="flex items-center gap-3 p-2 rounded-lg border border-slate-200 bg-white">
          <img
            src={m.poster || `https://via.placeholder.com/80x120.png?text=${encodeURIComponent(m.title)}`}
            alt="Poster"
            className="w-12 h-16 object-cover rounded"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <p className="font-medium text-slate-900 truncate">{m.title}</p>
            <p className="text-xs text-slate-500">{m.year} • {m.genre}</p>
          </div>
          <button
            onClick={() => onRemove(m.id)}
            className="p-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-600"
            aria-label="Remove bookmark"
            title="Remove"
          >
            <Trash2 size={16} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default BookmarkList;
