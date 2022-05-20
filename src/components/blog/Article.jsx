import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './article.scss';

const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get('/assets/blog.json')
      .then((response) => {
        setArticle(response.data.find((art) => art.id === parseInt(id, 10)));
      });
  }, [id]);

  return (
    <article className="article">

      <h1>{article?.title}</h1>

      <p className="article__meta">
        {article?.date}
      </p>
      <div className="article__content">

        <div className="article__text">

          <p className="article__perex">{article?.perex}</p>
          {article?.content.map((par) => <p>{par}</p>)}
        </div>

        <img className="article__image" src={`/assets/images/${article?.image}`} alt={article?.title} />

      </div>

    </article>
  );
};

export default Article;
