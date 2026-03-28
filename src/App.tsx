import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BookmarkProvider } from "./context/BookmarkContext";
import { CommentProvider } from "./context/CommentContext";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Stories from "./pages/Stories";
import StoryDetail from "./pages/StoryDetail";
import Bookmarks from "./pages/Bookmarks";
import Writers from "./pages/Writers";
import Pricing from "./pages/Pricing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Sample from "./pages/Sample";
import Article1 from "./pages/Article1";
import Article4 from "./pages/Article4";
import Article6 from "./pages/Article6";
import Article8 from "./pages/Article8";
import Article10 from "./pages/Article10";
import Article12 from "./pages/Article12";
import Article14 from "./pages/Article14";
import Article16 from "./pages/Article16";
import Article18 from "./pages/Article18";
import Article20 from "./pages/Article20";
import Article22 from "./pages/Article22";
import Article24 from "./pages/Article24";
import Article26 from "./pages/Article26";
import "./App.css";

function App() {
  return (
    <Router>
      <BookmarkProvider>
        <CommentProvider>
          <div className="flex flex-col min-h-screen bg-white text-gray-900">
            <Header />

            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/category/:slug" element={<Category />} />
                <Route path="/search" element={<Search />} />
                <Route path="/easy-job-high-pay-trap" element={<Sample />} />
                <Route path="/escape-cotswolds" element={<Article1 />} />
                <Route path="/magic-live-sports" element={<Article4 />} />
                <Route path="/ai-revolution" element={<Article6 />} />
                <Route path="/global-politics-2024" element={<Article8 />} />
                <Route path="/evolution-cinema" element={<Article10 />} />
                <Route path="/climate-change" element={<Article12 />} />
                <Route path="/world-war-ii" element={<Article14 />} />
                <Route
                  path="/mental-health-digital-age"
                  element={<Article16 />}
                />
                <Route path="/future-remote-work" element={<Article18 />} />
                <Route path="/food-culture-world" element={<Article20 />} />
                <Route
                  path="/renewable-energy-revolution"
                  element={<Article22 />}
                />
                <Route path="/art-minimalism" element={<Article24 />} />
                <Route
                  path="/cybersecurity-essentials"
                  element={<Article26 />}
                />
                <Route path="/bookmarks" element={<Bookmarks />} />
                <Route path="/writers" element={<Writers />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </CommentProvider>
      </BookmarkProvider>
    </Router>
  );
}

export default App;
