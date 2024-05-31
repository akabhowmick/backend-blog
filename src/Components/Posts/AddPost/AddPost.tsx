import { useState } from "react";
import { useBlogPostContext } from "../../../providers/BlogPostProvider";
import { BlogPost } from "../../Types/interfaces";
import { initialMarkdownContent, PostContainer, PostContent, EditContainer, EditTextarea } from "./PostStyled";
import ReactMarkdown from 'react-markdown';

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

  const [markdownContent, setMarkdownContent] = useState<string>(initialMarkdownContent);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownContent(event.target.value);
  };

  return (
    <PostContainer>
      <PostContent>
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </PostContent>
      <EditContainer>
        <button onClick={() => setIsEditing(!isEditing)}>{isEditing ? "Preview" : "Edit"}</button>
        {isEditing && <EditTextarea value={markdownContent} onChange={handleEditChange} />}
      </EditContainer>
      <button onClick={() => addPostToProvider(dummyBlogPost)}>Submit</button>
    </PostContainer>
  );
};

export default UserPost;
