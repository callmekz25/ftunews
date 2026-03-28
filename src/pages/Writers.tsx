import { Link } from "react-router-dom";
import { authors } from "../data/mockData";

export default function Writers() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Become a Writer</h1>
        <p className="text-lg text-gray-600 mb-8">
          Share your travel stories and experiences with our community of
          readers. Join our team of passionate travel writers today.
        </p>

        <div className="bg-black text-white p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4">Start Writing Today</h2>
          <p className="mb-6">
            We're looking for talented writers who are passionate about travel
            and storytelling. Whether you're a seasoned traveler or just
            starting your journey, we'd love to hear your stories.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-80 transition">
            Apply Now
          </button>
        </div>
      </div>

      {/* Current Writers */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Meet Our Writers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {authors.map((author) => (
            <Link
              key={author.id}
              to={`/author/${author.id}`}
              className="group p-6 border border-gray-300 rounded-lg hover:border-black transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={author.avatar}
                  alt={author.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg group-hover:text-black transition">
                    {author.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {author.stories} stories
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{author.bio}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-black transition">
            <summary className="font-bold">How do I submit a story?</summary>
            <p className="mt-4 text-gray-600">
              You can submit your story by clicking the "Apply Now" button
              above. Fill out the form with your story details and our team will
              review your submission.
            </p>
          </details>

          <details className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-black transition">
            <summary className="font-bold">
              What topics can I write about?
            </summary>
            <p className="mt-4 text-gray-600">
              We accept stories about all types of travel: solo travel, couples
              travel, family travel, adventure travel, cultural travel, and
              more!
            </p>
          </details>

          <details className="border border-gray-300 rounded-lg p-4 cursor-pointer hover:border-black transition">
            <summary className="font-bold">Do you pay writers?</summary>
            <p className="mt-4 text-gray-600">
              Yes! We offer competitive compensation for published stories.
              Check our pricing page for more details.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
