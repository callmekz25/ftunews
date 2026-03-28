import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function Article6() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "6",
    title: "AI Revolution",
    slug: "ai-revolution",
    category: "Technology",
    excerpt: "How Artificial Intelligence is Changing Our World",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?w=500&h=300&fit=crop",
    color: "text-purple-400",
    views: "6.3K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "6.3K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-purple-400 mb-4">
            Technology
          </span>
          <div className="flex items-start justify-between gap-4 mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              AI Revolution: How Artificial Intelligence is Changing Our World
            </h1>
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
              className="mt-2 p-3 rounded-full bg-gray-700 hover:bg-gray-600 transition flex-shrink-0"
              title={
                isBookmarked(article.id) ? "Remove bookmark" : "Add bookmark"
              }
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
          </div>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 21, 2024</span>
            <span>•</span>
            <span>10 min read</span>
            <span>•</span>
            <span>6.3K views</span>
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
          A deep dive into the rapid advancement of AI and its transformative
          impact on business, healthcare, and everyday life.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Artificial Intelligence is no longer science fiction. From
            healthcare diagnostics to autonomous vehicles, AI is revolutionizing
            every sector of society. Machine learning algorithms are now capable
            of analyzing medical images with greater accuracy than many
            experienced radiologists.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            In finance, AI detects fraudulent transactions in real-time,
            protecting billions of dollars. We are witnessing the emergence of
            AI systems that can understand natural language, generate human-like
            text, create images from descriptions, and solve complex problems
            that previously required human expertise. The pace of advancement is
            staggering—it took decades for AI to match human performance in
            chess, but only years for it to surpass human abilities in language
            understanding.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1677442d019cecf74d53a2533b1ebb1ea60193cb9?w=800&h=600&fit=crop"
            alt="AI neural network"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            AI neural network visualization
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Technologies Behind AI
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            We explore the technologies behind AI—neural networks, deep
            learning, and natural language processing— and their current
            applications across industries. Deep learning uses layers of
            artificial neurons to identify patterns in data, inspired by how
            biological brains work. Natural language processing enables
            computers to understand and generate human language with nuance and
            context.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Computer vision allows machines to interpret visual information from
            the world. Reinforcement learning enables systems to improve through
            trial and error, rewarding successful actions. These techniques
            combine to create AI systems with remarkable capabilities across
            diverse domains.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-purple-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "AI is not about creating superintelligence. It's about augmenting
          human capabilities and automating tasks that don't require our
          uniquely human qualities like creativity and empathy."
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Ethical Challenges
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The ethical challenges we must address as AI becomes more prevalent
            in our lives are significant. Questions about bias in algorithms,
            job displacement, privacy concerns, and autonomous decision-making
            require thoughtful governance and international cooperation.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            When training data reflects historical biases, AI systems can
            perpetuate discrimination. Autonomous systems making life-or-death
            decisions raise questions about accountability and moral
            responsibility. The concentration of AI power in the hands of a few
            large companies raises concerns about monopolistic control of
            transformative technology.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1535274335684-82a41fb50f3c?w=800&h=600&fit=crop"
            alt="AI concept"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            AI technology concept
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Promise and Potential
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Yet the potential benefits are enormous: AI could accelerate drug
            discovery, solve complex climate problems, and enhance our quality
            of life in ways we're only beginning to imagine. AI-powered climate
            models could help us find optimal solutions for reducing emissions.
            In medical research, AI can analyze vast datasets to identify new
            drug candidates and predict disease outcomes.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The key is ensuring this powerful technology develops responsibly,
            with human values at its center. This requires collaboration between
            technologists, policymakers, ethicists, and the public.
            International frameworks for AI governance are emerging to ensure
            that AI benefits humanity broadly rather than concentrating power
            and wealth in the hands of a few.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Technology", "AI", "Innovation", "Future"].map((tag) => (
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
