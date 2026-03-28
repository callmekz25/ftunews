import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";
import CommentSection from "../components/CommentSection";

export default function Article8() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "8",
    title: "Global Politics in 2024",
    slug: "global-politics-2024",
    category: "Politics",
    excerpt: "Key Events Shaping Our Future",
    image:
      "https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?w=500&h=300&fit=crop",
    color: "text-amber-400",
    views: "2.9K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "2.9K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-amber-400 mb-4">
            Politics
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Global Politics in 2024: Key Events Shaping Our Future
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 20, 2024</span>
            <span>•</span>
            <span>12 min read</span>
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
          An analysis of major political events, elections, and policy changes
          happening around the world and their implications.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            2024 is a pivotal year in global politics with major elections in
            numerous countries determining policy directions for years to come.
            We analyze the political landscape, examining how different nations
            are addressing climate change, economic inequality, and
            international relations.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The decisions made this year will have lasting impacts on world
            affairs and set the agenda for the next decade. From democratic
            transitions in developing nations to power shifts in established
            democracies, the outcomes will reverberate across borders and shape
            global cooperation on existential challenges.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop"
            alt="Parliament"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Parliamentary buildings symbolizing global democracy
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Regional Political Dynamics
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Key elections in European nations are testing support for populist
            movements versus traditional parties. The rise of far-right parties
            in some countries is challenging the post-WWII liberal democratic
            consensus. Meanwhile, centrist and progressive movements are
            mobilizing voters around climate action and social equality.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            In the Asia-Pacific region, territorial disputes and trade policy
            remain contentious issues. The relationship between major powers in
            this region has significant implications for global stability and
            economic prosperity. How these tensions are managed will influence
            international relations for years to come.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-amber-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "Democracy is not a spectator sport. The political decisions made in
          2024 will shape the world our children inherit."
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Pressing Global Issues
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Climate change remains at the top of many political agendas as
            nations seek balance between environmental protection and economic
            growth. The transition away from fossil fuels presents both
            opportunities and challenges for different sectors and regions.
            Economic challenges including inflation, supply chain disruptions,
            and emerging markets create pressure on policymakers.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Migration remains controversial across developed nations, with
            competing interests between humanitarian approaches and border
            security. Technology regulation is increasingly important as nations
            grapple with digital privacy, AI governance, and cybersecurity.
            These are not merely technical questions but fundamentally political
            ones about values and power.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            alt="Community debate"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Civic engagement and political dialogue
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Road Ahead
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Geopolitical tensions between major powers are reshaping
            international alliances and trade relationships. The United Nations
            and international institutions face questions about effectiveness in
            addressing global challenges. Civil society organizations are
            mobilizing citizens around shared concerns. The stakes are
            high—governments elected in 2024 will shape responses to existential
            challenges like climate change and technological disruption.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            This is a moment for thoughtful engagement with political processes.
            Your vote, your voice, and your participation in democratic
            processes matter. The future is not predetermined—it will be shaped
            by the choices we make today.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Politics", "Elections", "Global", "Policy"].map((tag) => (
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

      {/* COMMENT SECTION */}
      <CommentSection articleId={article.id} />
    </motion.div>
  );
}
