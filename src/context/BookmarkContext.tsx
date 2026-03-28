import { createContext, useContext, useEffect, useState } from "react";

export interface BookmarkedArticle {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  image: string;
  color: string;
  views: string;
}

interface BookmarkContextType {
  bookmarkedArticles: BookmarkedArticle[];
  addBookmark: (article: BookmarkedArticle) => void;
  removeBookmark: (articleId: string) => void;
  isBookmarked: (articleId: string) => boolean;
}

const BookmarkContext = createContext<BookmarkContextType | undefined>(
  undefined,
);

export function BookmarkProvider({ children }: { children: React.ReactNode }) {
  const [bookmarkedArticles, setBookmarkedArticles] = useState<
    BookmarkedArticle[]
  >(() => {
    const saved = localStorage.getItem("bookmarks");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarkedArticles));
  }, [bookmarkedArticles]);

  const addBookmark = (article: BookmarkedArticle) => {
    setBookmarkedArticles((prev) => {
      if (!prev.find((a) => a.id === article.id)) {
        return [...prev, article];
      }
      return prev;
    });
  };

  const removeBookmark = (articleId: string) => {
    setBookmarkedArticles((prev) => prev.filter((a) => a.id !== articleId));
  };

  const isBookmarked = (articleId: string) => {
    return bookmarkedArticles.some((a) => a.id === articleId);
  };

  return (
    <BookmarkContext.Provider
      value={{ bookmarkedArticles, addBookmark, removeBookmark, isBookmarked }}
    >
      {children}
    </BookmarkContext.Provider>
  );
}

export function useBookmarks() {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within BookmarkProvider");
  }
  return context;
}
