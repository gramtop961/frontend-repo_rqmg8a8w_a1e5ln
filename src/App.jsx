import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import BookmarkList from './components/BookmarkList';

const initialMovies = [
  {
    id: 'tt0111161',
    title: 'The Shawshank Redemption',
    year: 1994,
    genre: 'Drama',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmRhMC00ZGE1LWFmNTEtODM1ZmRlNzBmZWRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    note: 'Hope can set you free.',
  },
  {
    id: 'tt0068646',
    title: 'The Godfather',
    year: 1972,
    genre: 'Crime',
    poster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmYtYTAwYS00YzhlLWFmNTEtODM1ZmRlNzBmZWRiXkEyXkFqcGc@._V1_.jpg',
    note: 'An offer you can’t refuse.',
  },
  {
    id: 'tt0468569',
    title: 'The Dark Knight',
    year: 2008,
    genre: 'Action',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    note: 'Why so serious?',
  },
  {
    id: 'tt0109830',
    title: 'Forrest Gump',
    year: 1994,
    genre: 'Drama',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMTk2NTE2NTI3NV5BMl5BanBnXkFtZTgwMDI5NjQxMTE@._V1_.jpg',
    note: 'Life is like a box of chocolates.',
  },
  {
    id: 'tt0137523',
    title: 'Fight Club',
    year: 1999,
    genre: 'Drama',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTYxY2UtZmYyZi00YjhlLWEwODItOTY3NDU1Y2M4OGUwXkEyXkFqcGc@._V1_.jpg',
    note: 'The first rule is: you do not talk about Fight Club.',
  },
  {
    id: 'tt0120737',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
    genre: 'Fantasy',
    poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI1NjEtODkzZTY0ZjE3ZDM2XkEyXkFqcGc@._V1_.jpg',
    note: 'One ring to rule them all.',
  },
  {
    id: 'tt1375666',
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
    note: 'Your mind is the scene of the crime.',
  },
  {
    id: 'tt0120815',
    title: 'Saving Private Ryan',
    year: 1998,
    genre: 'War',
    poster:
      'https://m.media-amazon.com/images/M/MV5BNjQzMzYzNzktN2E1ZS00ZTkxLTk5ODctZjAyY2M4NDExOGQ0XkEyXkFqcGc@._V1_.jpg',
    note: 'The mission is a man.',
  },
];

function App() {
  const [query, setQuery] = useState('');
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const raw = localStorage.getItem('reelmarks_bookmarks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('reelmarks_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const movies = initialMovies; // could later be replaced by API results

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return movies;
    return movies.filter((m) =>
      `${m.title} ${m.genre} ${m.year}`.toLowerCase().includes(q)
    );
  }, [query, movies]);

  const isBookmarked = (id) => bookmarks.some((b) => b.id === id);

  const toggleBookmark = (movie) => {
    setBookmarks((prev) => {
      if (prev.some((b) => b.id === movie.id)) {
        return prev.filter((b) => b.id !== movie.id);
      }
      return [{ ...movie }, ...prev];
    });
  };

  const removeBookmark = (id) => {
    setBookmarks((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-900">
      <Header bookmarkCount={bookmarks.length} />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <section className="lg:col-span-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <h2 className="text-xl font-semibold">Discover</h2>
            <div className="sm:w-96"><SearchBar value={query} onChange={setQuery} /></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isBookmarked={isBookmarked(movie.id)}
                onToggleBookmark={toggleBookmark}
              />
            ))}
          </div>
        </section>

        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-3">Bookmarks</h3>
              <BookmarkList items={bookmarks} onRemove={removeBookmark} />
            </div>

            <div className="text-xs text-slate-500">
              Tip: Use the bookmark button on any movie to save it here. Your list is saved to your browser.
            </div>
          </div>
        </aside>
      </main>

      <footer className="py-8 text-center text-xs text-slate-500">
        Built with love for movies. ✨
      </footer>
    </div>
  );
}

export default App;
