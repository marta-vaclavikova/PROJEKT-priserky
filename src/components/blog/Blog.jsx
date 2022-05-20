import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './blog.scss';

const BlogDetail = ({
  article: {
    title, date, image, perex, id,
  },
}) => (
  <Link to={`/blog/${id}`} key={id}>
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
  </Link>
);

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
          <BlogDetail article={article} key={article.id}/>
        ))}
      </div>
    </section>
  );
}

export default Blog;
