import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article1() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "1",
    title: "An Escape to the Cotswolds",
    slug: "escape-cotswolds",
    category: "Travel",
    excerpt: "Exploring charming villages, scenic countryside, and cozy inns",
    image:
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?w=500&h=300&fit=crop",
    color: "text-blue-400",
    views: "3.8K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "3.8K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-blue-400 mb-4">
            Travel
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            An Escape to the Cotswolds
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 20, 2024</span>
            <span>•</span>
            <span>5 min read</span>
            <span>•</span>
            <span>3.8K views</span>
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
          I share a romantic escape to the Cotswolds, exploring its charming
          villages, scenic countryside, and cozy inns.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The Cotswolds, a region in southwest England, is known for its
            rolling hills and picturesque villages. During my romantic getaway,
            I discovered hidden gems like Bourton-on-the-Water, where crystal
            clear streams flow through honey-coloured cottages constructed from
            local Cotswold stone.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The architecture is stunning—these buildings have endured for
            centuries, their warm golden hues glowing in the afternoon sun. I
            visited local markets bustling with artisan crafts, sampled
            traditional English tea with fresh scones and clotted cream at
            historic tea rooms, and hiked through stunning countryside dotted
            with ancient woodland and stone walls.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
            alt="Cotswolds countryside"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Cotswolds countryside landscape
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The landscape is truly magical, with winding country lanes leading
            to unexpected discoveries. We explored Stow-on-the-Wold, one of the
            highest points in the area, and browsed galleries displaying local
            art. The people here embody a slower pace of life, welcoming
            visitors warmly into their communities.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            We stayed at a centuries-old inn with exposed beams and fireplaces,
            enjoying hearty English dinners and real ales. Every moment felt
            like stepping back in time while enjoying modern comforts. The
            Cotswolds remind us why England's countryside is beloved by
            travelers seeking authentic charm and natural beauty.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1469022563149-aa64dbd37dae?w=800&h=600&fit=crop"
            alt="Traditional cottages"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Traditional English cottages with golden stone
          </figcaption>
        </motion.figure>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-blue-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "The Cotswolds is not just a destination; it's a state of mind. A
          place where time slows down and romance blooms naturally."
        </motion.blockquote>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why You Should Visit
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Whether you're a history enthusiast interested in medieval
            settlements, a foodie seeking traditional English fare, or simply
            someone who appreciates beauty and tranquility, the Cotswolds offers
            something for everyone. The region is easily accessible from London,
            yet feels like a world away from the hustle and bustle of city life.
            Spring and autumn are ideal times to visit when the weather is mild
            and the landscapes are particularly beautiful.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            I guarantee that a visit to the Cotswolds will leave you with
            lasting memories and a desire to return. It's the perfect
            destination for couples seeking romance, families looking for
            relaxation, and travelers hungry for authentic English experiences.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Travel", "Couples", "Europe", "England"].map((tag) => (
              <a
                key={tag}
                href={`#${tag.toLowerCase()}`}
                className="px-3 py-1 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200 transition"
              >
                #{tag}
              </a>
            ))}
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
