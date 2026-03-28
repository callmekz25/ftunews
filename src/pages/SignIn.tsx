import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Sign In</h1>
        <p className="text-gray-600">Sign in to your BLAWG account</p>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg font-bold hover:opacity-80 transition mt-6"
        >
          Sign In
        </button>
      </form>

      <div className="text-center mt-6">
        <p className="text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="font-bold hover:text-black">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
