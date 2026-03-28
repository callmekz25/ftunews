import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";
import CommentSection from "../components/CommentSection";

export default function Article18() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "18",
    title: "The Future of Remote Work",
    slug: "future-remote-work",
    category: "Business",
    excerpt: "Building Sustainable and Productive Work Cultures",
    image:
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?w=500&h=300&fit=crop",
    color: "text-orange-400",
    views: "4.5K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "4.5K";

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
            The Future of Remote Work: Building Sustainable and Productive Work
            Cultures
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
            The COVID-19 pandemic accelerated a workplace revolution that was
            already underway. What was once considered an occasional perk –
            working from home – has become a fundamental expectation for
            millions of employees worldwide. As we move further into the
            post-pandemic era, remote work has evolved from emergency measure to
            strategic business model.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Companies that embraced remote work discovered numerous benefits:
            reduced overhead costs, access to global talent pools, and often
            increased employee satisfaction. However, the shift has also
            revealed challenges including communication barriers, time zone
            complications, and the difficulty of building company culture across
            distances.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/3944457/pexels-photo-3944457.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            The modern workplace is becoming increasingly distributed and
            flexible.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Hybrid Models: The Best of Both Worlds
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            The future isn't entirely remote or entirely office-based – it's
            hybrid. Leading companies are adopting flexible models where
            employees can work remote several days per week while maintaining
            in-person collaboration opportunities. This balance helps preserve
            company culture while respecting employee preferences and life
            circumstances.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Technology plays a crucial role in enabling this transition.
            Cloud-based collaboration tools, virtual meeting platforms, and
            asynchronous communication systems have become essential
            infrastructure for modern businesses. However, overreliance on
            technology can also lead to meeting fatigue and digital burnout.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Building Culture in Distributed Teams
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Creating meaningful connection in remote environments requires
            intentional effort. Companies are experimenting with virtual team
            building events, regular video calls, and periodic in-person
            retreats. The key is moving beyond "video meetings" to create
            genuine human connection despite physical distance.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Success metrics for remote teams are also changing. Instead of
            measuring presence, forward-thinking companies focus on outcomes and
            productivity. This shift requires building trust between managers
            and employees and creating systems that measure impact rather than
            activity.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The future of work isn't about location – it's about flexibility,
            trust, and meaningful work. Organizations that master this
            transition will have a significant advantage in attracting and
            retaining top talent in an increasingly competitive global market.
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

      {/* COMMENT SECTION */}
      <CommentSection articleId={article.id} />
    </motion.div>
  );
}
