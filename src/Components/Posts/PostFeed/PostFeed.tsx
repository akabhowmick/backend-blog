import { BlogPost } from "../../Types/interfaces";
import "../Posts.css";
export const PostFeed = () => {
  const articles: BlogPost[] = [
    { id: "1", title: "Blog 1", subtitle: "", category: "", content: [""], date: Date.now() },
    { id: "2", title: "Blog 1", subtitle: "", category: "", content: [""], date: Date.now() },
    { id: "3", title: "Blog 1", subtitle: "", category: "", content: [""], date: Date.now() },
  ];

  const articleBanners = articles.map((article) => {
    return (
      <div className="article">
        <h2>Article Title 1</h2>
        {article.content.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
        <a href="#" className="read-more">
          Read more...
        </a>
      </div>
    );
  });

  return (
    <div>
      <div className="container">{articleBanners}</div>
    </div>
  );
};
