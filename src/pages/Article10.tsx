import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";
import CommentSection from "../components/CommentSection";

export default function Article10() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "10",
    title: "The Evolution of Cinema",
    slug: "evolution-cinema",
    category: "Entertainment",
    excerpt: "From Silent Films to AI-Generated Content",
    image:
      "https://images.pexels.com/photos/544268/pexels-photo-544268.jpeg?w=500&h=300&fit=crop",
    color: "text-pink-400",
    views: "3.5K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "3.5K";

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
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-pink-400 mb-4">
            Entertainment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Evolution of Cinema: From Silent Films to AI-Generated Content
          </h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm sm:text-base">
            <span>March 19, 2024</span>
            <span>•</span>
            <span>9 min read</span>
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
          Tracing the journey of cinema from its inception to the modern era of
          digital filmmaking and AI-assisted production.
        </motion.p>

        {/* Main Content */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Cinema has transformed dramatically over more than a century. From
            the silent films of Chaplin to today's digital masterpieces,
            technology and storytelling have evolved together. In the early
            1900s, cameras captured basic movements without sound, forcing
            filmmakers to rely on visual storytelling and music.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The advent of sound in the 1920s revolutionized cinema, allowing
            dialogue and complex narratives. Color technology in the 1950s added
            visual richness, while widescreen formats immersed audiences in vast
            landscapes. Each technological leap fundamentally changed what
            filmmakers could express and how audiences experienced stories.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop"
            alt="Film production"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Modern film production set
          </figcaption>
        </motion.figure>

        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Digital Revolution
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Digital cinematography in the late 1990s started a new era, offering
            unprecedented creative control and flexibility. Cameras could
            capture incredible detail, films could be edited non-destructively,
            and effects could be added in post-production. The transition from
            film to digital was initially controversial, with cinematographers
            and directors debating whether they would lose something essential
            in the shift.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Yet digital tools unleashed new possibilities. Virtual
            cinematography allows filmmakers to create impossible shots.
            Computer-generated imagery, once crude and obvious, has become
            indistinguishable from reality in the hands of skilled artists.
            Streaming services have democratized distribution, making films from
            around the world accessible to anyone with an internet connection.
          </p>
        </motion.div>

        {/* Blockquote */}
        <motion.blockquote
          variants={itemVariants}
          className="my-10 sm:my-14 pl-6 sm:pl-8 border-l-4 border-pink-500 italic text-gray-900 text-lg sm:text-xl"
        >
          "The best camera is the one you have with you. The best story is the
          one in your heart. Technology serves storytelling, not the other way
          around."
        </motion.blockquote>

        {/* Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            AI and the Future of Filmmaking
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Today, we're witnessing AI beginning to influence creative
            processes, from scriptwriting assistance to visual effects and even
            deepfake technology. Machine learning algorithms now help directors
            analyze movie scripts, predict audience reactions, and optimize
            pacing. AI can automatically generate backgrounds, crowds, or even
            create digital actors for dangerous or impossible scenes.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            We explore how traditional filmmaking techniques are being preserved
            while embracing new possibilities. Some filmmakers enthusiastically
            adopt AI tools to increase productivity and reduce costs. Others
            worry about the homogenization of cinema and the loss of distinctive
            human artistry. The reality is likely that AI will become another
            tool in the filmmaker's toolkit, like lighting or editing.
          </p>
        </motion.div>

        {/* Image */}
        <motion.figure variants={itemVariants} className="my-10 sm:my-14">
          <img
            src="https://images.unsplash.com/photo-1533613220915-609f21a91335?w=800&h=600&fit=crop"
            alt="Movie theater"
            className="w-full rounded-lg shadow-lg"
          />
          <figcaption className="text-sm text-gray-900 mt-3 text-center">
            Movie theater experience with cutting-edge technology
          </figcaption>
        </motion.figure>

        {/* Final Section */}
        <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            What Makes Great Cinema?
          </h2>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            The future of cinema will likely blend human creativity with AI
            tools, raising fascinating questions about artistic authenticity and
            creative expression. What remains constant across all the changes is
            the fundamental human desire for stories that move us, that help us
            understand ourselves and our world, and that connect us across
            boundaries.
          </p>

          <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
            Whether delivered on a big screen, a small device, or through
            virtual reality, cinema will continue to evolve. What matters most
            is that we preserve the art form's power to inspire, challenge, and
            transform us. As technology becomes more sophisticated, the
            storytelling craft becomes even more important—to remind us that
            behind every frame is a human vision, a human struggle, and a human
            truth.
          </p>
        </motion.div>

        {/* Tags Section */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-wrap gap-2">
            <span className="text-sm font-semibold text-gray-900">Tags:</span>
            {["Entertainment", "Cinema", "Film", "Technology"].map((tag) => (
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
