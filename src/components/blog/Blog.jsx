import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './blog.scss';

function BlogDetail({
  article: {
    title, date, image, perex,
  },
}) {
  return (
    <article className="blog__item">
      <div className="blog__image">
        <img src={`/assets/images/${image}`} alt={title} />
      </div>
      <div className="blog__content">
        <h4 className="blog__title">{title}</h4>
        <p className="blog__meta">{date}</p>
        <p className="blog__perex">{perex}</p>
      </div>
    </article>
  );
}

function Blog() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('/assets/blog.json')
      .then((response) => {
        setArticles(response.data);
      });
  }, []);

  return (
    <section>
      <h1>Blog</h1>
      <div className="blog">
        {articles && articles.map((article) => (
          <BlogDetail article={article} />
        ))}
      </div>
    </section>
  );
}

export default Blog;
