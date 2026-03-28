import { motion } from "framer-motion";
import { useBookmarks } from "../context/BookmarkContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function Bookmarks() {
  const { bookmarkedArticles, removeBookmark } = useBookmarks();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Your Bookmarks</h2>
        <p className="text-gray-600">
          {bookmarkedArticles.length === 0
            ? "No bookmarks yet. Start saving your favorite articles!"
            : `You have ${bookmarkedArticles.length} bookmark${bookmarkedArticles.length !== 1 ? "s" : ""}`}
        </p>
      </motion.div>

      {bookmarkedArticles.length === 0 ? (
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-600 text-lg mb-8">
            No bookmarks yet. Explore articles and add them to your collection.
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Browse Articles
          </Link>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {bookmarkedArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <motion.div
                className="group relative bg-white rounded-lg overflow-hidden border border-gray-200 h-full"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/${article.slug}`} className="block h-full">
                  <div className="h-40 overflow-hidden bg-gray-200">
                    <motion.img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <div className="p-4 sm:p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                      {article.category}
                    </span>
                    <motion.h3
                      className="text-lg font-bold mt-3 mb-2 text-gray-900 line-clamp-2"
                      whileHover={{ color: "#2563eb" }}
                      transition={{ duration: 0.3 }}
                    >
                      {article.title}
                    </motion.h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <p className="text-xs text-gray-500 mt-3">
                      {article.views} views
                    </p>
                  </div>
                </Link>

                <motion.button
                  onClick={(e) => {
                    e.preventDefault();
                    removeBookmark(article.id);
                  }}
                  className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition duration-300 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
