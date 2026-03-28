import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article24() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "24",
    title: "The Art of Minimalism",
    slug: "art-minimalism",
    category: "Lifestyle",
    excerpt: "Finding Freedom in Simplicity and Intentional Living",
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?w=500&h=300&fit=crop",
    color: "text-cyan-400",
    views: "2.8K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "2.8K";

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
            The Art of Minimalism: Finding Freedom in Simplicity and Intentional
            Living
          </h1>

          <p className="text-gray-400 text-sm">
            March 2026 • Lifestyle • {views} views
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
            In a world of constant consumption and accumulation, minimalism
            stands as a radical counterculture movement. It's not about
            deprivation or living in an empty room – true minimalism is about
            intentional choices and keeping only what adds value to your life.
            It's a philosophy that questions consumerism and challenges us to
            evaluate our possessions and habits.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The average American household contains over 300,000 items. Most
            homes have storage units renting out additional space for belongings
            they never use. This accumulation creates physical clutter that
            translates into mental chaos, stress, and financial burden.
            Minimalism offers an escape from this endless cycle.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            Minimalism celebrates the beauty of simple, intentional living.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Psychological Benefits
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Decluttering your space has measurable psychological effects.
            Studies show that reducing possessions decreases stress and anxiety
            levels. A minimalist environment promotes focus and productivity –
            there are fewer distractions competing for your attention. Many
            people report improved sleep quality and better overall mental
            health after embracing minimalism.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The act of deciding what to keep forces you to evaluate what truly
            matters in your life. This intentional decision-making extends
            beyond objects to relationships, commitments, and time allocation.
            Minimalism becomes a framework for living more deliberately and
            meaningfully.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          From Minimalism to Maximizing What Matters
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Paradoxically, minimalism is about maximizing what truly matters to
            you. By eliminating excess, you create space and resources for
            relationships, experiences, hobbies, and personal growth. The money
            saved from not buying unnecessary items can be invested in
            education, travel, or pursuing passions.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Minimalism also has environmental benefits. It promotes sustainable
            consumption patterns and reduces waste. In a world facing climate
            crisis and resource scarcity, minimalism is both a personal practice
            and a political statement against overconsumption.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Starting small is key – you don't need to make dramatic changes
            overnight. Begin with one drawer, one shelf, or one category of
            items. Ask yourself: Does this serve me? Does this bring me joy?
            Does this align with my values? Through this practice, minimalism
            transforms from a concept into a lived experience that genuinely
            improves your quality of life.
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
