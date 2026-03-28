import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article4() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "4",
    title: "The Magic of Live Sports",
    slug: "magic-live-sports",
    category: "Sports",
    excerpt: "A Fan's Perspective on passion, energy, and community",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=500&h=300&fit=crop",
    color: "text-red-400",
    views: "4.1K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "4.1K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-red-400 mb-4">
            Sports
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Magic of Live Sports: A Fan's Perspective
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 22, 2024</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>4.1K views</span>
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
          Exploring the passion, energy, and community that make live sports
          events unforgettable experiences for millions of fans worldwide.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Attending a football match at a packed stadium is an experience like
            no other. The roar of the crowd, the tension during critical
            moments, and the euphoria of victory create memories that last a
            lifetime. This article explores why sports fans are so passionate
            and how sporting events bring communities together.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The energy in the stands is electric, with tens of thousands of
            people united in their support for their team. We share chants, sing
            anthems, and celebrate every goal as if it's a personal victory. The
            camaraderie among strangers who become temporary family is
            remarkable. Beyond the match itself, stadiums have become social
            hubs where friendships form and traditions are created.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop"
            alt="Fans celebrating"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Stadium full of passionate fans
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Whether it's tailgating before the game or post-match celebrations,
            the entire experience is about more than just sports—it's about
            belonging to something bigger than yourself. Sports have this unique
            power to transcend boundaries of nationality, language, and culture.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            I've witnessed complete strangers embrace each other after a
            last-minute goal. I've seen bitter rivals respect each other's
            skills and determination on the pitch. Sports bring out both the
            competitive spirit and the capacity for unity in humans. The lessons
            learned on the field—teamwork, persistence, facing adversity— spill
            over into life beyond the stadium.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-red-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "Sports are the language that needs no translation. In a stadium full
          of 80,000 people from different backgrounds, we all speak the same
          language of passion and unity."
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Mental Health Benefits
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Beyond the entertainment value, live sports provide significant
            mental health benefits. The collective experience reduces stress,
            creates a sense of belonging, and provides healthy enthusiasm and
            hope. For many fans, following their team provides structure,
            community, and purpose. The anticipation before match day, the
            emotional roller coaster during the game, and the post-match
            discussions with fellow fans create meaningful human connections.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            In our increasingly digital world where many interactions are
            mediated through screens, live sports provide authentic, in-person
            community experiences. The cheers, the embraces, the shared
            vulnerability and joy are powerful reminders of our common humanity.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1516132006547-c1ea3ffedc44?w=800&h=600&fit=crop"
            alt="Match action"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Intense moment during match play
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            A Call to Experience Live Sports
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            If you've never experienced live sports, I strongly encourage you to
            attend a match. The passion you'll witness, the energy you'll feel,
            and the connections you'll make are worth every penny and every
            moment. Whether it's football, rugby, cricket, or any other sport,
            the magic of live sport is something that cannot be replicated in
            front of a television.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Sports", "Football", "Community", "Passion"].map((tag) => (
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
