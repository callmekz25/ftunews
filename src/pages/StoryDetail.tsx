import { useParams, useNavigate } from "react-router-dom";
import { stories } from "../data/mockData";

export default function StoryDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Story not found</h1>
        <button
          onClick={() => navigate("/stories")}
          className="text-blue-600 hover:text-blue-800"
        >
          Back to stories
        </button>
      </div>
    );
  }

  // Split content into paragraphs by double line breaks or natural sentence breaks
  const paragraphs = story.content?.split(/\n\n+|\.\s+(?=[A-Z])/g) || [
    story.content,
  ];

  return (
    <>
      {/* Full Width Banner Section */}
      <div className="bg-white dark:bg-gray-950">
        {/* Back Button */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <button
            onClick={() => navigate("/stories")}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition flex items-center gap-2 font-medium mb-12"
          >
            ← Back to stories
          </button>
        </div>

        {/* Title Section */}
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <span className="inline-block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest bg-gray-100 dark:bg-gray-900 px-3 py-1 rounded-full mb-6">
            {story.category}
          </span>

          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight text-gray-900 dark:text-white">
            {story.title}
          </h1>

          {/* Date & Read Time Only */}
          <div className="flex items-center gap-4 pb-8 border-b border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {new Date(story.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <span className="text-gray-400 dark:text-gray-600">•</span>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {story.readTime} min read
            </p>
          </div>
        </div>

        {/* Featured Image - Full Width */}
        <div className="w-full h-96 sm:h-[600px] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content Section */}
      <article className="bg-white dark:bg-gray-950 py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Content with Media */}
          <div className="space-y-8">
            {/* Excerpt */}
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
              {story.excerpt}
            </p>

            {/* Main Content - Continuous Flow */}
            <div className="space-y-6 text-base leading-8 text-gray-700 dark:text-gray-300">
              {paragraphs.map((paragraph, idx) => (
                <div key={idx}>
                  <p className="leading-relaxed">{paragraph.trim()}.</p>

                  {/* Add media after every 2 paragraphs */}
                  {idx > 0 &&
                    idx % 2 === 1 &&
                    story.media &&
                    story.media[Math.floor(idx / 2)] && (
                      <figure className="my-12">
                        {story.media[Math.floor(idx / 2)].type === "image" ? (
                          <>
                            <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                              <img
                                src={story.media[Math.floor(idx / 2)].url}
                                alt={
                                  story.media[Math.floor(idx / 2)].caption ||
                                  `Image`
                                }
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {story.media[Math.floor(idx / 2)].caption && (
                              <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic text-center">
                                {story.media[Math.floor(idx / 2)].caption}
                              </figcaption>
                            )}
                          </>
                        ) : (
                          <>
                            <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800 bg-black">
                              <iframe
                                src={story.media[Math.floor(idx / 2)].url}
                                className="absolute inset-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={
                                  story.media[Math.floor(idx / 2)].caption ||
                                  `Video`
                                }
                              />
                            </div>
                            {story.media[Math.floor(idx / 2)].caption && (
                              <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-4 italic text-center">
                                {story.media[Math.floor(idx / 2)].caption}
                              </figcaption>
                            )}
                          </>
                        )}
                      </figure>
                    )}
                </div>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          {story.tags && story.tags.length > 0 && (
            <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
