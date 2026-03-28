import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const categories = [
    { name: "All", slug: "all" },
    { name: "Travel", slug: "travel" },
    { name: "Sports", slug: "sports" },
    { name: "Technology", slug: "technology" },
    { name: "Politics", slug: "politics" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Science", slug: "science" },
    { name: "History", slug: "history" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
          <span className="text-black">FTU News</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li>
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              className="hover:text-black transition flex items-center gap-1"
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
            >
              Categories
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>
            {showCategories && (
              <div
                className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/category/${category.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-900 transition"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link to="/bookmarks" className="hover:text-black transition">
              Bookmarks
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-600 w-48"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900 transition"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
