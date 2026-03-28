import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";
import CommentSection from "../components/CommentSection";

export default function Article26() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "26",
    title: "Cybersecurity Essentials",
    slug: "cybersecurity-essentials",
    category: "Technology",
    excerpt: "Protecting Yourself in an Increasingly Digital World",
    image:
      "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?w=500&h=300&fit=crop",
    color: "text-violet-400",
    views: "4.9K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "4.9K";

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
            Cybersecurity Essentials: Protecting Yourself in an Increasingly
            Digital World
          </h1>

          <p className="text-gray-400 text-sm">
            March 2026 • Technology • {views} views
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
            As our lives become increasingly digital, so do the threats we face.
            Every day, millions of cyberattacks occur worldwide, targeting
            individuals, businesses, and critical infrastructure. From data
            breaches to ransomware, the threat landscape is constantly evolving.
            Yet many people underestimate their vulnerability, believing they're
            too small or unimportant to be targeted.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            The reality is that cybercriminals use automated tools that target
            everyone indiscriminately. A single compromised password can lead to
            identity theft, financial fraud, or access to your personal
            information. The average data breach costs organizations $4.29
            million, but the cost to individuals can be even more devastating in
            terms of lost privacy and security.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://images.pexels.com/photos/3694820/pexels-photo-3694820.jpeg?w=600&h=400&fit=crop"
            className="rounded-lg shadow-md w-[600px] aspect-video object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            Cybersecurity is everyone's responsibility in the digital age.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Foundation: Strong Passwords and Two-Factor Authentication
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Strong passwords are your first line of defense. Use at least 16
            characters combining uppercase letters, lowercase letters, numbers,
            and special characters. Avoid using personal information like
            birthdays or names. Most importantly, use unique passwords for each
            account – password reuse means one breach compromises all your
            accounts.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Two-factor authentication (2FA) provides a critical second layer of
            protection. Even if someone obtains your password, they can't access
            your account without the second factor – typically a code from your
            phone or an authentication app. Enable 2FA on all important
            accounts, especially email, banking, and social media.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          Beyond Passwords: Advanced Protection Strategies
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Keep your software updated. Security patches are released to fix
            vulnerabilities discovered in operating systems, browsers, and
            applications. Delaying updates leaves you exposed to known exploits.
            Enable automatic updates whenever possible to ensure you're always
            protected with the latest security fixes.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Be cautious with email and attachments. Phishing emails that
            impersonate trusted organizations are increasingly sophisticated.
            Never click links or download attachments from suspicious sources.
            Verify URLs before entering sensitive information – cybercriminals
            create convincing fake websites that capture login credentials.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Use a reputable antivirus program and keep your firewall enabled.
            These tools detect and block malware before it can infect your
            system. For maximum security, consider using a password manager to
            securely store and generate strong passwords, and use a VPN on
            public networks to encrypt your traffic.
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            Cybersecurity isn't a one-time task – it's an ongoing practice. Stay
            informed about current threats, regularly review your account
            activity, and think before you click. By implementing these
            essentials, you significantly reduce your risk in an increasingly
            dangerous digital landscape. Remember: the most secure system is an
            informed user.
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
