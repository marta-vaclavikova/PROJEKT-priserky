import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Rings } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import './article.scss';

const Article = () => {
  const { id } = useParams();

  const [article, setArticle] = useState(null);

  useEffect(() => {
    axios.get('/assets/blog.json')
      .then((response) => {
        const stringId = parseInt(id, 10);
        setArticle(response.data.find((art) => art.id === stringId));
      });
  }, [id]);

  return (
    <article className="article">

      {!article
      && (
      <div className="article__loading">
        <Rings
          height="100"
          width="100"
          color="#295288"
          ariaLabel="loading"
        />
      </div>
      )}

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
