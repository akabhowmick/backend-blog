import { useState } from "react";
import { useBlogPostContext } from "../../../providers/BlogPostProvider";
import { BlogPost } from "../../Types/interfaces";

const UserPost = () => {
  const { addPost } = useBlogPostContext();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState<string[]>([""]); // Array to hold content

  const handleAddContentTextbox = () => {
    setContent([...content, ""]); // Add an empty string to the content array
  };

  const handleContentChange = (index: number, value: string) => {
    const newContent = [...content];
    newContent[index] = value;
    setContent(newContent);
  };

  const handleSubmit = () => {
    // Here you can handle submission of the post data
    const newPost: BlogPost = {
      id: "123",
      title: title,
      subtitle: subtitle,
      category: category,
      content: content,
      date: Date.now(),
      likes: 0,
      comments: [],
    };
    addPost(newPost);
    console.log({ title, subtitle, category, content });
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Subtitle:</label>
          <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Content:</label>
          {content.map((text, index) => (
            <div key={index}>
              <textarea value={text} onChange={(e) => handleContentChange(index, e.target.value)} />
            </div>
          ))}
          <button type="button" onClick={handleAddContentTextbox}>
            +
          </button>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserPost;
