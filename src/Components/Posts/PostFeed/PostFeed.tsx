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
      <div key={article.id} className="article">
        <h2>article.title</h2>
        {article.content.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
        <a href={`#${article.id}`} className="read-more">
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
