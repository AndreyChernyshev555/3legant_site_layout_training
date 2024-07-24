import React from "react";
import ArticleItem from "./ArticleItem.jsx";

const articleList = [
  {
    path: "../public/img/articles/article1.png",
    label: "7 ways to decor your home"
  },
  {
    path: "../public/img/articles/article2.png",
    label: "Kitchen organization"
  },
  {
    path: "../public/img/articles/article3.png",
    label: "Decor your bedroom"
  }
]

export default function Articles() {
  const articleBlock = articleList.map(article => <ArticleItem path={article.path} label={article.label}/>);

  return (
    <div className="articles">
      <div className="articles_header">Articles</div>
      <div className="articles_block">
        {articleBlock}
      </div>
    </div>
  );
}
