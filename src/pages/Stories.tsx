import { useState } from "react";
import { motion } from "framer-motion";
import { stories, categories } from "../data/mockData";

export default function Stories() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStories = stories.filter((story) => {
    const matchesCategory =
      !selectedCategory || story.category === selectedCategory;
    const matchesSearch =
      story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      story.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
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
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold mb-4">All Stories</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Explore our collection of travel experiences and adventures
        </p>
      </motion.div>

      {/* Search */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
      </motion.div>

      {/* Categories */}
      <motion.div
        className="mb-8 flex flex-wrap gap-3"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button
          onClick={() => setSelectedCategory(null)}
          className={`px-4 py-2 rounded-lg font-medium transition ${
            selectedCategory === null
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
          }`}
        >
          All
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              selectedCategory === category
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* Stories Column Layout */}
      {filteredStories.length > 0 ? (
        <motion.div
          className="space-y-12 max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:border-black dark:hover:border-white transition"
            >
              <div className="flex flex-col">
                {/* Featured Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category & Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {story.category}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {story.readTime} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold mb-4 hover:text-black dark:hover:text-white transition">
                    {story.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {story.excerpt}
                  </p>

                  {/* Full Content */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {story.content}
                  </p>

                  {/* Media Gallery */}
                  {story.media && story.media.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
                        Gallery
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {story.media.map((media, index) => (
                          <div
                            key={index}
                            className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
                          >
                            {media.type === "image" ? (
                              <div>
                                <img
                                  src={media.url}
                                  alt={media.caption || `Media ${index + 1}`}
                                  className="w-full h-40 object-cover"
                                />
                                {media.caption && (
                                  <p className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-gray-50 dark:bg-gray-800">
                                    {media.caption}
                                  </p>
                                )}
                              </div>
                            ) : (
                              <div className="relative w-full pt-[56.25%] bg-black">
                                <iframe
                                  src={media.url}
                                  className="absolute inset-0 w-full h-full border-0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                  title={media.caption || `Video ${index + 1}`}
                                />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-gray-200 dark:border-gray-800">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <a
                    href={`/story/${story.slug}`}
                    className="inline-block px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-lg font-medium hover:opacity-80 transition"
                  >
                    Read Full Article
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No stories found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
