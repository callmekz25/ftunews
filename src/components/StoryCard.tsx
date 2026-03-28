import { Link } from "react-router-dom";
import type { BlogStory } from "../data/mockData";

interface StoryCardProps {
  story: BlogStory;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link to={`/story/${story.slug}`} className="group">
      <article className="overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-black transition">
        {/* Image */}
        <div className="h-48 overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {story.category}
            </span>
            <span className="text-xs text-gray-400">
              {story.readTime} min read
            </span>
          </div>

          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-black transition">
            {story.title}
          </h3>

          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {story.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-300" />
              <span className="text-sm font-medium text-gray-700">
                {story.author}
              </span>
            </div>
            <time className="text-xs text-gray-500">
              {new Date(story.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}
