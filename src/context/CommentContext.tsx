import React, { createContext, useContext, useEffect, useState } from "react";

export interface Comment {
  id: string;
  articleId: string;
  name: string;
  email: string;
  content: string;
  timestamp: number;
}

interface CommentContextType {
  comments: Comment[];
  addComment: (
    articleId: string,
    name: string,
    email: string,
    content: string,
  ) => void;
  getArticleComments: (articleId: string) => Comment[];
}

const CommentContext = createContext<CommentContextType | undefined>(undefined);

export function CommentProvider({ children }: { children: React.ReactNode }) {
  const [comments, setComments] = useState<Comment[]>([]);

  // Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem("blogComments");
    if (storedComments) {
      try {
        setComments(JSON.parse(storedComments));
      } catch (error) {
        console.error("Failed to parse comments from localStorage:", error);
      }
    }
  }, []);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("blogComments", JSON.stringify(comments));
  }, [comments]);

  const addComment = (
    articleId: string,
    name: string,
    email: string,
    content: string,
  ) => {
    const newComment: Comment = {
      id: Date.now().toString(),
      articleId,
      name,
      email,
      content,
      timestamp: Date.now(),
    };
    setComments([...comments, newComment]);
  };

  const getArticleComments = (articleId: string) => {
    return comments
      .filter((comment) => comment.articleId === articleId)
      .sort((a, b) => b.timestamp - a.timestamp);
  };

  return (
    <CommentContext.Provider
      value={{ comments, addComment, getArticleComments }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export function useComments() {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("useComments must be used within CommentProvider");
  }
  return context;
}
