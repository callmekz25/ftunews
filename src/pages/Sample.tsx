import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useBookmarks } from "../context/BookmarkContext";

export default function NgoaiThuongArticle() {
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();
  const [article] = useState({
    id: "sample",
    title: "Easy Job, High Pay Trap: The Hidden Debt Behind Online Work",
    slug: "easy-job-high-pay-trap",
    category: "Featured",
    excerpt: "The Sweet-Coated Hook Behind Online Work Scams",
    image:
      "https://images.pexels.com/photos/3862625/pexels-photo-3862625.jpeg?w=500&h=300&fit=crop",
    color: "text-blue-400",
    views: "5.2K",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const views = "5.2K";

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
            Easy Job, High Pay Trap: The Hidden Debt Behind Online Work
          </h1>

          <p className="text-gray-400 text-sm">
            April 2026 • Vietnam • {views} views
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
          <p className="text-xl text-gray-900 leading-relaxed ">
            The clock struck 2 A.M. The only light in the cramped suburban
            apartment came from the computer screen and the flickering LED
            keyboard. A student slumped over the screen, facing a blank Google
            Docs document and a mind empty with panic. Hai (The name has been
            changed due to privacy reasons) is a sophomore living away from
            home. Between the pressure of coursework and exhausting tutoring
            sessions, he's still half short of his rent for the month. That
            night, exhausted, he scrolled through posts on the Facebook group
            "Job Search," hoping to find a night job typing or data entry. Just
            then, the screen of the phone next to him lit up. An SMS message
            from an unknown number had arrived: "Hello, I'm the TikTok sales HR
            manager from company A. We are currently looking for online
            employees to work from home, anytime, anywhere, and receive their
            salary on the same day. You can earn between 500,000 and 3,000,000
            VND per day. If you are interested, please contact me via Zalo:..."
          </p>

          <p className="text-xl text-gray-900 leading-relaxed">
            These schemes often begin with simple tasks such as liking posts or
            entering data. However, participants are soon asked to deposit money
            to “unlock higher-paying tasks,” creating a cycle that leads to
            financial loss.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.figure
          variants={itemVariants}
          className="my-10 flex flex-col items-center"
        >
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=589,fit=crop/NxrbC2QitFRsfavc/z7628471353203_4b58d1e482e1a60f622be3807bfc174a-31O9KxFisHCyjuq3.jpg"
            className="rounded-lg shadow-md w-[600px] aspect-square object-cover"
          />
          <figcaption className="text-sm italic text-center text-gray-500 mt-4">
            A seemingly harmless SMS offering "easy work, high pay" is the
            sweet-coated hook that begins a cruel psychological manipulation
            scheme targeting students strapped for cash.
          </figcaption>
        </motion.figure>

        {/* SECTION */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          The Perfect Bait for Young People in a Hurry
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            Look at that message. It doesn't contain any threatening words. On
            the contrary, it hits the nail on the head for a student struggling
            with the pressures of making ends meet: "Work online on your phone,"
            "Anytime, anywhere," and especially the numbers "500k-3 million
            VND/day."
          </p>

          <p className="text-xl leading-relaxed">
            For a student from a rural area studying in the city, 500,000 dong
            was equivalent to a week's worth of food and many evenings spent
            tutoring until his throat ached. Curious, Hai clicked on the Zalo
            link. On the other side, an account with a profile picture of a
            professional female office worker, polite and helpful, provided
            detailed instructions.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            The first task was incredibly simple: Access the provided TikTok
            links, like them, and take a screenshot to send back. In just 10
            minutes, Hai's phone vibrated. His banking app showed "150,000 VND
            added". The initial suspicion vanished. The feeling of caution was
            completely overcome by the tangible flow of money."No scammer would
            send me money first! “That's it," Hai told himself. And that very
            thought pushed him across the line of the trap.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          From the Dark Room to the Vortex of Manipulation
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl leading-relaxed">
            The next day, the "HR manager" asked Hai to download the Telegram
            app to work with a larger team. There, the job of liking posts
            ended, giving way to the "task of closing virtual sales."
          </p>

          {/* IMAGE */}
          <motion.figure
            variants={itemVariants}
            className=" flex flex-col items-center"
          >
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=545,fit=crop/NxrbC2QitFRsfavc/image_2026-03-26_192534582-LEnYvahChV2CT2ll.png"
              className="rounded-lg shadow-md w-150 aspect-square object-cover"
            />
            <figcaption className="text-sm italic text-center text-gray-500 mt-4">
              A seemingly harmless SMS offering "easy work, high pay" is the
              sweet-coated hook that begins a cruel psychological manipulation
              scheme targeting students strapped for cash.
            </figcaption>
          </motion.figure>
          <p className="text-xl leading-relaxed">
            To receive a 30% commission, Hai had to use his own money to pay for
            the orders. The first time he deposited 500,000 VND, he received
            650,000 VND. The second time he deposited 2 million VND, he received
            2.6 million VND. The feeling of victory and exhilaration flooded his
            brain, causing Hai to forget all safety rules. He didn't realize
            that the dozens of accounts constantly boasting about receiving
            money in that chat group were actually just "decoys"—digital ghosts
            programmed to create a bandwagon effect. Until the "mission order"
            figure skyrocketed to 15 million VND.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            Hai spent all his tutoring salary, borrowed more from classmates to
            deposit into his account, convinced he could withdraw both his
            principal and interest in a few minutes. But this time, the "ting"
            sound of the bank didn't ring out. Instead, there was a cold
            notification on the app: "Incorrect syntax. Account frozen. Please
            deposit an additional 15 million VND to verify your identity and
            disburse funds."
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            At that moment, in the dimly lit room, cold sweat broke out on Hai's
            forehead. The constant urging from the Telegram group chat had
            deprived him of his logical thinking. He tried borrowing from loan
            sharks to top up his account, hoping to recoup some of his losses.
            It wasn't until the amount he'd deposited reached 30 million dong
            and the "HR manager's" Telegram account suddenly vanished that Hai
            bitterly realised his money was nowhere to be found.
          </p>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-4xl font-bold mt-12 mb-4"
        >
          It's not due to a lack of knowledge, but rather a psychological blind
          spot.
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-xl text-gray-900 leading-relaxed">
            It's easy to blame victims like Hai for being greedy or naive. But
            in reality, these scams are run by people who are extremely
            knowledgeable about human psychology.
          </p>
          <p className="text-xl text-gray-900 leading-relaxed">
            They don't demand 30 million upfront. They build trust with small
            amounts. They create a sense of scarcity ("VIP mission only has 2
            slots left"). And their most terrifying weapon is
            attacking...regret(Sunset costs). Once victims have deposited an
            amount far exceeding their ability to pay, they will cling to any
            illusory hope the scammer paints, simply to "recover what they have
            lost." Young people, especially students, are tech-savvy but lack
            the experience to deal with the subtle traps of society. The
            pressure to be independent and an overconfidence in their ability to
            "control the game" have inadvertently turned them into ideal
            targets.
          </p>

          <motion.figure className="my-10">
            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/_YtRRUj_S6E"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </motion.figure>
        </motion.div>

        {/* TAGS */}
        <motion.div
          variants={itemVariants}
          className="mt-12 border-t pt-6 flex gap-2 flex-wrap"
        >
          {["Scam", "Students", "Online Jobs", "Vietnam"].map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 px-3 py-1 rounded-full text-sm"
            >
              #{tag}
            </span>
          ))}
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
