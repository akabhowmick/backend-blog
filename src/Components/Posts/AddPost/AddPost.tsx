import { useBlogPostContext } from "../../../providers/BlogPostProvider";
import { BlogPost } from "../../Types/interfaces";

const dummyBlogPost = {
  id: "123",
  title: "Checking",
  subtitle: "Still a check",
  category: "Test",
  content: [],
  date: Date.now(),
  likes: 0,
  comments: [],
};

const UserPost = () => {
  const { addPost } = useBlogPostContext();

  const addPostToProvider = (post: BlogPost) => {
    addPost(post);
  };

  return (
    <>
      <h2>User Post</h2>
      <button onClick={() => addPostToProvider(dummyBlogPost)}>Add Post!</button>
    </>
  );
};

export default UserPost;
