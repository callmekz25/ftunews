import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article14() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "14",
    title: "World War II",
    slug: "world-war-ii",
    category: "History",
    excerpt: "Lessons from History's Greatest Conflict",
    image:
      "https://images.pexels.com/photos/3962619/pexels-photo-3962619.jpeg?w=500&h=300&fit=crop",
    color: "text-indigo-400",
    views: "2.3K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "2.3K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-indigo-400 mb-4">
            History
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            World War II: Lessons from History's Greatest Conflict
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 20, 2024</span>
            <span>•</span>
            <span>14 min read</span>
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
          An in-depth examination of World War II, its causes, major events, and
          the lasting impact on modern civilization.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            World War II remains the most devastating conflict in human history,
            claiming an estimated 70-85 million lives. This comprehensive
            analysis explores the political and economic factors that led to the
            war: the resentment from World War I's Treaty of Versailles, the
            rise of fascism and militarism, economic depression, and failed
            diplomacy.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The seeds of WWII were planted at the end of WWI. The harsh terms
            imposed on Germany by the Treaty of Versailles created widespread
            resentment and economic hardship. Hyperinflation in the 1920s
            devastated the German economy. When the Great Depression struck in
            1929, unemployed and desperate people turned to demagogues promising
            national restoration and scapegoating vulnerable minorities.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1571701886363-f032aaf79b78?w=800&h=600&fit=crop"
            alt="Historical war"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Historical imagery from World War II era
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Course of the War
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            We examine pivotal battles from the invasion of Poland in 1939 that
            began the war, to D-Day in 1944 when Allied forces began the
            liberation of Western Europe. The war in Europe saw mechanized
            warfare on an unprecedented scale, with tanks, aircraft, and
            coordinated military operations. The often-overlooked Pacific
            Theater was equally brutal, with island-hopping campaigns and the
            development of new military technologies.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The impact of new military technologies like radar and aircraft
            fundamentally changed warfare. Air superiority became decisive.
            Naval battles were fought by planes rather than ships. Strategic
            bombing of civilian infrastructure—debated then and now—aimed to
            break enemy morale and destroy industrial capacity. The
            technological innovations developed for war had lasting civilian
            applications.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-indigo-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "Those who cannot remember the past are condemned to repeat it." -
          George Santayana
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Holocaust: Humanity's Darkest Chapter
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The Holocaust stands as one of history's darkest chapters—the
            systematic genocide of six million Jews and millions of others
            deemed undesirable by Nazi ideology, including Roma, disabled
            people, political prisoners, and others. The industrialized
            efficiency of the Holocaust, with death camps designed specifically
            for mass murder, represents a new level of evil in human history.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Understanding the Holocaust is essential not just as history, but as
            a warning. It reveals how hatred and dehumanization, combined with
            state power, can lead to unimaginable atrocities. The phrase "Never
            Again" became a mantra, yet genocides have occurred since. Studying
            the Holocaust helps us recognize warning signs of mass atrocity and
            affirms our responsibility to defend human rights and dignity.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=600&fit=crop"
            alt="Memorials"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Historical monuments and memorials honoring victims
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Legacy and Lessons
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The war's conclusion with atomic weapons on Hiroshima and Nagasaki
            introduced the world to nuclear weapons and their apocalyptic
            potential. The immediate devastation and the lingering effects of
            radiation changed warfare forever. Humans now possessed the ability
            to destroy civilization itself, a knowledge that continues to shape
            international relations.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The postwar order created institutions like the United Nations meant
            to prevent such catastrophes and resolve disputes. Understanding
            this history is crucial for preventing future conflicts, recognizing
            early warning signs of totalitarianism, and appreciating the
            fragility of peace. The lessons from WWII about tolerance, the
            danger of authoritarianism, and the importance of international
            cooperation remain deeply relevant today. In a world still
            struggling with nationalism, authoritarianism, and ethnic tensions,
            the warnings of history are as urgent as ever.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["History", "War", "World War 2", "Politics"].map((tag) => (
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
