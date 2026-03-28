import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article12() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "12",
    title: "Climate Change",
    slug: "climate-change",
    category: "Science",
    excerpt: "Understanding the Science and Solutions",
    image:
      "https://images.pexels.com/photos/2163430/pexels-photo-2163430.jpeg?w=500&h=300&fit=crop",
    color: "text-green-400",
    views: "4.7K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "4.7K";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className="w-full bg-gradient-to-b from-gray-900 to-black text-white py-16 sm:py-24"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-green-400 mb-4">
            Science
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Climate Change: Understanding the Science and Solutions
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 21, 2024</span>
            <span>•</span>
            <span>13 min read</span>
            <span>•</span>
            <span>{views} views</span>
          </div>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.article
        variants={itemVariants}
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
      >
        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-900 mb-8 font-light italic"
        >
          A comprehensive look at climate change science, its impacts, and the
          technological and policy solutions being developed worldwide.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Climate change is one of the most pressing issues of our time. The
            scientific consensus is overwhelming: global temperatures are rising
            primarily due to human activities, particularly the emission of
            greenhouse gases. This is not a matter of opinion—it is observable
            fact supported by multiple independent lines of evidence.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            We explore the scientific evidence from ice cores showing historical
            atmospheric composition, ocean temperatures measured by satellite
            and buoys, and atmospheric measurements showing precise
            concentrations of greenhouse gases. The data is unambiguous: carbon
            dioxide concentrations have increased from 280 ppm pre-industrial
            levels to over 420 ppm today.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1532996122724-8f3c2cd83c5d?w=800&h=600&fit=crop"
            alt="Earth from space"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Earth from space showing our interconnected home
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Impacts We're Seeing Today
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The impacts are already visible: melting polar ice is causing sea
            levels to rise, threatening coastal communities. Extreme weather
            events—stronger hurricanes, longer droughts, more intense
            flooding—are becoming more frequent and severe. Ecosystems are
            shifting as animals migrate earlier and plants bloom out of season.
            Coral reefs are bleaching due to warming oceans. Permafrost is
            thawing, releasing methane and accelerating warming.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The greenhouse effect is fundamental physics—carbon dioxide,
            methane, and other gases trap heat in our atmosphere like a blanket.
            As concentrations increase, more heat gets trapped. The warming
            doesn't happen uniformly; some regions warm faster than others,
            disrupting weather patterns globally. These are not predictions
            about the future—they are observations from the present.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-green-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "Climate change is not a matter for debate among scientists. It is
          established fact. The only debates now are about solutions."
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Solutions at Scale
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Solutions span multiple approaches: transitioning to renewable
            energy sources like solar and wind, improving energy efficiency in
            buildings and transportation, protecting and restoring forests which
            absorb carbon, developing carbon capture technology, and
            implementing supportive policies. Many nations are committing to
            net-zero emissions targets, recognizing that reaching these goals
            requires transforming how we produce energy, grow food, and
            manufacture goods.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Innovators are working on breakthrough technologies including green
            hydrogen as a clean fuel, advanced batteries for energy storage, and
            direct air capture to remove carbon directly from the atmosphere.
            Solar and wind energy costs have plummeted as technology has
            improved and scale has increased. Electric vehicles now compete on
            price and performance with fossil fuel vehicles. These are not
            fringe technologies—they are rapidly becoming mainstream.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop"
            alt="Renewable energy"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Renewable energy solutions for a sustainable future
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Path Forward
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Individual actions matter too—from diet choices to transportation
            decisions to consumption patterns. Every action that reduces carbon
            emissions contributes. But individual action alone is insufficient;
            we need systemic change through policy and infrastructure
            investment. The path forward requires cooperation between
            governments, businesses, scientists, and citizens worldwide. This is
            not a problem we can solve individually, but together, we can
            transform our society to live sustainably on our planet.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The science is clear, the solutions are available, and the need is
            urgent. What we do in this decade will determine the world of the
            next century. We have the knowledge and capability to address
            climate change. The question is whether we have the political will.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Science", "Climate", "Environment", "Sustainability"].map(
              (tag) => (
                <a
                  key={tag}
                  href={`#${tag.toLowerCase()}`}
                  className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200 transition"
                >
                  #{tag}
                </a>
              ),
            )}
          </div>
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
