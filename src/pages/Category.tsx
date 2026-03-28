import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useBookmarks } from "../context/BookmarkContext";

export default function Category() {
  const { slug } = useParams();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const allArticles = [
    {
      id: "sample",
      title: "Easy Job, High Pay Trap: The Hidden Debt Behind Online Work",
      slug: "easy-job-high-pay-trap",
      category: "Featured",
      excerpt: "The Sweet-Coated Hook Behind Online Work Scams",
      image:
        "https://images.pexels.com/photos/3862625/pexels-photo-3862625.jpeg?w=500&h=300&fit=crop",
      color: "text-blue-400",
      views: "5.2K",
    },
    {
      id: "1",
      title: "An Escape to the Cotswolds",
      slug: "escape-cotswolds",
      category: "Travel",
      excerpt: "Exploring charming villages, scenic countryside, and cozy inns",
      image:
        "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?w=500&h=300&fit=crop",
      color: "text-blue-400",
      views: "3.8K",
    },
    {
      id: "4",
      title: "The Magic of Live Sports",
      slug: "magic-live-sports",
      category: "Sports",
      excerpt: "A Fan's Perspective on passion, energy, and community",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=500&h=300&fit=crop",
      color: "text-red-400",
      views: "4.1K",
    },
    {
      id: "6",
      title: "AI Revolution",
      slug: "ai-revolution",
      category: "Technology",
      excerpt: "How Artificial Intelligence is Changing Our World",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=500&h=300&fit=crop",
      color: "text-purple-400",
      views: "6.3K",
    },
    {
      id: "8",
      title: "Global Politics in 2024",
      slug: "global-politics-2024",
      category: "Politics",
      excerpt: "Key Events Shaping Our Future",
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=300&fit=crop",
      color: "text-amber-400",
      views: "2.9K",
    },
    {
      id: "10",
      title: "The Evolution of Cinema",
      slug: "evolution-cinema",
      category: "Entertainment",
      excerpt: "From Silent Films to AI-Generated Content",
      image:
        "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?w=500&h=300&fit=crop",
      color: "text-pink-400",
      views: "3.5K",
    },
    {
      id: "12",
      title: "Climate Change",
      slug: "climate-change",
      category: "Science",
      excerpt: "Understanding the Science and Solutions",
      image:
        "https://images.pexels.com/photos/2163430/pexels-photo-2163430.jpeg?w=500&h=300&fit=crop",
      color: "text-green-400",
      views: "4.7K",
    },
    {
      id: "14",
      title: "World War II",
      slug: "world-war-ii",
      category: "History",
      excerpt: "Lessons from History's Greatest Conflict",
      image:
        "https://images.pexels.com/photos/3962619/pexels-photo-3962619.jpeg?w=500&h=300&fit=crop",
      color: "text-indigo-400",
      views: "2.3K",
    },
    {
      id: "16",
      title: "Mental Health in the Digital Age",
      slug: "mental-health-digital-age",
      category: "Health",
      excerpt: "Finding Balance in a Hyperconnected World",
      image:
        "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=300&fit=crop",
      color: "text-teal-400",
      views: "5.8K",
    },
    {
      id: "18",
      title: "The Future of Remote Work",
      slug: "future-remote-work",
      category: "Business",
      excerpt: "Building Sustainable and Productive Work Cultures",
      image:
        "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=500&h=300&fit=crop",
      color: "text-orange-400",
      views: "4.5K",
    },
    {
      id: "20",
      title: "Food Culture Around the World",
      slug: "food-culture-world",
      category: "Lifestyle",
      excerpt: "Exploring Culinary Traditions and Global Flavors",
      image:
        "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=500&h=300&fit=crop",
      color: "text-rose-400",
      views: "3.2K",
    },
    {
      id: "22",
      title: "Renewable Energy Revolution",
      slug: "renewable-energy-revolution",
      category: "Environment",
      excerpt: "Sustainable Solutions for a Cleaner Future",
      image:
        "https://images.pexels.com/photos/574283/pexels-photo-574283.jpeg?w=500&h=300&fit=crop",
      color: "text-lime-400",
      views: "5.5K",
    },
    {
      id: "24",
      title: "The Art of Minimalism",
      slug: "art-minimalism",
      category: "Lifestyle",
      excerpt: "Finding Freedom in Simplicity and Intentional Living",
      image:
        "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=500&h=300&fit=crop",
      color: "text-cyan-400",
      views: "2.8K",
    },
    {
      id: "26",
      title: "Cybersecurity Essentials",
      slug: "cybersecurity-essentials",
      category: "Technology",
      excerpt: "Protecting Yourself in an Increasingly Digital World",
      image:
        "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=500&h=300&fit=crop",
      color: "text-violet-400",
      views: "4.9K",
    },
  ];

  const categories = [
    { name: "All", slug: "all" },
    { name: "Featured", slug: "featured" },
    { name: "Travel", slug: "travel" },
    { name: "Sports", slug: "sports" },
    { name: "Technology", slug: "technology" },
    { name: "Politics", slug: "politics" },
    { name: "Entertainment", slug: "entertainment" },
    { name: "Science", slug: "science" },
    { name: "History", slug: "history" },
    { name: "Health", slug: "health" },
    { name: "Business", slug: "business" },
    { name: "Lifestyle", slug: "lifestyle" },
    { name: "Environment", slug: "environment" },
  ];

  const filteredArticles =
    slug === "all"
      ? allArticles
      : allArticles.filter((article) => {
          const articleCategorySlug = article.category.toLowerCase();
          return articleCategorySlug === slug?.toLowerCase();
        });

  const currentCategoryObj = categories.find((cat) => cat.slug === slug);
  const currentCategory = currentCategoryObj?.name || "All Articles";

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
      transition: { duration: 0.6 },
    },
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 capitalize">
            {currentCategory}
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Link
                key={category.slug}
                to={`/category/${category.slug}`}
                className={`px-4 py-2 rounded-lg font-medium transition-all inline-flex items-center ${
                  slug === category.slug
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                }`}
              >
                {category.name}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={`grid-${slug}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredArticles.map((article) => (
            <motion.div key={article.id} variants={itemVariants}>
              <motion.div
                className="group block bg-white rounded-lg overflow-hidden border border-gray-200 h-full cursor-pointer relative"
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
                    if (isBookmarked(article.id)) {
                      removeBookmark(article.id);
                    } else {
                      addBookmark(article);
                    }
                  }}
                  className={`absolute top-2 right-2 p-2 rounded-full transition duration-300 opacity-0 group-hover:opacity-100 ${
                    isBookmarked(article.id)
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-900"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={
                    isBookmarked(article.id)
                      ? "Remove bookmark"
                      : "Add bookmark"
                  }
                >
                  <svg
                    className="w-5 h-5"
                    fill={isBookmarked(article.id) ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 5a2 2 0 012-2h6a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    />
                  </svg>
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">
              No articles found in this category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
