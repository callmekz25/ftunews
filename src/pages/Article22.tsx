import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";
import CommentSection from "../components/CommentSection";

export default function Article22() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "22",
    title: "Renewable Energy Revolution",
    slug: "renewable-energy-revolution",
    category: "Environment",
    excerpt: "Sustainable Solutions for a Cleaner Future",
    image:
      "https://images.pexels.com/photos/3621357/pexels-photo-3621357.jpeg?w=500&h=300&fit=crop",
    color: "text-lime-400",
    views: "5.5K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "5.5K";

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
            Renewable Energy Revolution: Sustainable Solutions for a Cleaner
            Future
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
            The transition from fossil fuels to renewable energy is no longer a
            distant dream – it's happening now. Solar panels and wind turbines
            are becoming increasingly affordable and efficient, making clean
            energy the most economically viable option for many regions
            worldwide. This energy revolution represents one of the most
            significant shifts in human history.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Unlike fossil fuels, renewable energy sources like solar, wind,
            hydroelectric, and geothermal power are inexhaustible. They produce
            little to no greenhouse gas emissions, making them essential in the
            fight against climate change. The investment in renewable energy
            infrastructure creates jobs and drives innovation across multiple
            industries.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/574283/pexels-photo-574283.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            Renewable energy installations are transforming our power grids
            worldwide.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Technology Behind the Transition
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Solar technology has improved dramatically, with photovoltaic
            efficiency increasing from around 6% in the 1980s to over 20% today
            for commercial panels. Wind turbines have become engineering
            marvels, with offshore turbines generating unprecedented amounts of
            power in some of the world's strongest wind corridors.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Energy storage is the key challenge remaining. Battery technology,
            particularly lithium-ion batteries, continues to improve, but
            companies are also exploring alternative storage methods like
            compressed air, gravity storage, and hydrogen fuel cells. Solving
            the storage problem will make renewable energy a complete
            replacement for fossil fuels.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Global Impact and Economic Opportunity
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Major shifts are occurring globally. Denmark generates over 80% of
            its electricity from wind power. Costa Rica regularly operates for
            weeks entirely on renewable energy. China leads in solar panel
            manufacturing, while Germany has demonstrated the feasibility of
            high renewable penetration in a developed economy.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The renewable energy sector creates more jobs per dollar invested
            than fossil fuel industries. Installation, maintenance,
            manufacturing, and grid management provide employment across diverse
            skill levels. Developing nations have an opportunity to leapfrog
            outdated infrastructure and build modern renewable systems from
            scratch.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The renewable energy revolution isn't just about environmental
            sustainability – it's about economic competitiveness, energy
            independence, and human survival. Nations that lead this transition
            will shape the global economy for generations to come. The future is
            renewable, and the time to embrace it is now.
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
