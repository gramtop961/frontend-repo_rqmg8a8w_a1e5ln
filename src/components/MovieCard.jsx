import React from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

function MovieCard({ movie, isBookmarked, onToggleBookmark }) {
  return (
    <div className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-[2/3] w-full bg-slate-100 overflow-hidden">
        <img
          src={movie.poster || `https://via.placeholder.com/600x900.png?text=${encodeURIComponent(movie.title)}`}
          alt={`${movie.title} poster`}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-slate-900 leading-tight line-clamp-2">{movie.title}</h3>
        <p className="text-sm text-slate-500 mt-0.5">{movie.year} • {movie.genre}</p>
        {movie.note && (
          <p className="text-xs text-slate-500 mt-1 line-clamp-2">{movie.note}</p>
        )}
        <button
          onClick={() => onToggleBookmark(movie)}
          className={`mt-3 inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-md border transition-colors ${
            isBookmarked
              ? 'bg-slate-900 text-white border-slate-900 hover:bg-slate-800'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
          }`}
          aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
        >
          {isBookmarked ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
          {isBookmarked ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
