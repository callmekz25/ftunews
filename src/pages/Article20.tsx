import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article20() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "20",
    title: "Food Culture Around the World",
    slug: "food-culture-world",
    category: "Lifestyle",
    excerpt: "Exploring Culinary Traditions and Global Flavors",
    image:
      "https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?w=500&h=300&fit=crop",
    color: "text-rose-400",
    views: "3.2K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "3.2K";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* HERO */}
      <motion.section
        variants={itemVariants}
        className="bg-black text-white py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Food Culture Around the World: Exploring Culinary Traditions and
            Global Flavors
          </h1>

          <p className="text-gray-400 text-sm">
            March 2026 • Global • {views} views
          </p>
        </div>
      </motion.section>

      {/* CONTENT */}
      <motion.article
        variants={itemVariants}
        className="max-w-4xl mx-auto px-4 py-14"
      >
        {/* Paragraphs */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Food is far more than sustenance – it's a window into the soul of a
            culture. Every region of the world has developed its own unique
            culinary traditions, shaped by geography, climate, history, and
            migration patterns. Through food, we can understand how people live,
            what they value, and how they celebrate their heritage.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            From the delicate art of Japanese cuisine to the bold spices of
            Indian cooking, from the rustic simplicity of Mediterranean diets to
            the complex flavors of Thai street food, each culinary tradition
            tells a story. These stories span centuries of innovation,
            adaptation, and cultural exchange.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            Global cuisine represents the diversity and richness of human
            culture.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Regional Signatures and Ingredient Stories
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Every region's cuisine is defined by its signature ingredients – the
            staples that grew in that land and shaped the cooking methods passed
            down through generations. Italian olive oil, Spanish saffron, Thai
            chili peppers, Vietnamese fish sauce – these ingredients are the
            backbone of their respective cuisines.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The Silk Road was not just a trade route for goods, but for flavors
            and techniques. Spices traveled from India to the Middle East to
            Europe, transforming dishes and palates along the way. Colonial
            history brought new ingredients across oceans, creating fusion
            cuisines that continue to evolve today.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Rise of Global Food Culture
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            In today's interconnected world, food has become a powerful means of
            cultural connection and communication. The global food movement
            celebrates authenticity while embracing innovation. Food tourism has
            become increasingly popular, with travelers seeking immersive
            culinary experiences.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Social media has democratized food culture, allowing home cooks and
            professional chefs alike to share recipes and techniques with global
            audiences. Yet this same accessibility has sparked important
            conversations about cultural appropriation and authenticity in
            cooking.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            As we face global challenges like sustainability and food security,
            culinary traditions offer valuable lessons. Indigenous and
            traditional food systems often demonstrate sustainable practices
            that modern agriculture is beginning to rediscover. Through
            celebrating food culture, we're also celebrating human resilience,
            creativity, and our shared place in this world.
          </p>
        </motion.div>
      </motion.article>

      {/* Fixed Bookmark Button - Bottom Right */}
      <motion.button
        onClick={() => {
          if (isBookmarked(article.id)) {
            removeBookmark(article.id);
          } else {
            addBookmark(article);
          }
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition z-40"
        title={isBookmarked(article.id) ? "Remove bookmark" : "Add bookmark"}
      >
        <svg
          className="w-6 h-6"
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
  );
}
