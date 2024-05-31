import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { BlogPost } from "../Components/Types/interfaces";

interface BlogPostContextType {
  posts: BlogPost[];
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
  addPost: (post: BlogPost) => void;
  removePost: (post: BlogPost) => void;
  editPost: (post: BlogPost) => void
}

const BlogPostContext = createContext<BlogPostContextType>({} as BlogPostContextType);

export const BlogPostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts([]);
    console.log(posts.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addPost = (post: BlogPost) => {
    setPosts((prevPosts) => [...prevPosts, post]);
  };

  const removePost = (post:BlogPost) => {
    setPosts((prevPosts) => prevPosts.filter((p) => p.id!== post.id));
  }

  const editPost = (post:BlogPost) =>{
    setPosts((prevPosts) => prevPosts.map((p) => p.id === post.id? post : p));
  }

  return (
    <BlogPostContext.Provider
      value={{
        posts,
        setPosts,
        addPost,
        removePost,
        editPost,
      }}
    >
      {children}
    </BlogPostContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useBlogPostContext = () => useContext(BlogPostContext);
