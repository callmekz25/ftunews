import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article16() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "16",
    title: "Mental Health in the Digital Age",
    slug: "mental-health-digital-age",
    category: "Health",
    excerpt: "Finding Balance in a Hyperconnected World",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=300&fit=crop",
    color: "text-teal-400",
    views: "5.8K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "5.8K";

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
            Mental Health in the Digital Age: Finding Balance in a
            Hyperconnected World
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
            The average person checks their phone 96 times per day. That's
            roughly every 10 minutes while awake. In our hyperconnected world,
            the line between staying informed and becoming overwhelmed has
            blurred significantly. Mental health professionals are increasingly
            concerned about the psychological impact of constant digital
            connectivity.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Social media platforms are designed to be addictive, with algorithms
            engineered to maximize engagement and screen time. The comparison
            trap created by curated online personas leads to unprecedented
            levels of anxiety and depression, particularly among younger
            generations who have never known life without smartphones.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/3808067/pexels-photo-3808067.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            Understanding the impact of digital connectivity on mental wellbeing
            is crucial for modern society.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Dopamine Trap
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Every notification triggers a small dopamine release in our brains.
            This reward mechanism, which evolved to help us survive, is now
            being exploited by tech companies. The constant stream of
            notifications creates a cycle of anticipation and reward that keeps
            us checking our devices compulsively.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Sleep disruption is another major concern. The blue light from
            screens interferes with melatonin production, making it harder to
            fall asleep. Combined with the mental stimulation from scrolling
            through content, this creates a perfect storm for sleep disorders
            and fatigue.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Strategies for Digital Wellness
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Mental health experts recommend implementing "digital detoxes" –
            periods where you completely disconnect from devices. Even 24 hours
            away from screens can have significant benefits for stress levels
            and sleep quality.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Setting boundaries is essential. This includes using app timers,
            turning off non-essential notifications, and establishing phone-free
            zones in your home, particularly in bedrooms. Mindfulness practices
            like meditation can also help manage anxiety related to digital
            overload.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The goal isn't to eliminate technology but to use it intentionally
            and mindfully. By recognizing how digital tools affect our mental
            health, we can make conscious choices about our consumption and
            create healthier relationships with technology.
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
