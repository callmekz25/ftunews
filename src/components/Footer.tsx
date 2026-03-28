import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Bottom */}
        <div className=" text-center text-sm text-gray-600">
          <p>&copy; 2026 FTU News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
