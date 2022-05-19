import React from 'react';
import { useParams } from 'react-router-dom';

function Article({
  article: {
    title, date, perex, content, image,
  },
}) {
  const {id} = useParams();

  return (
    <article className="article">

      <h1 className="article__title">{title}</h1>

      <p className="article__meta">
        Publikováno
        {date}
      </p>
      <div className="article__content">

        <div className="article__text">

          <p className="article__perex">{perex}</p>
          {content.map((par) => <p>{par}</p>)}
        </div>

        <img className="article__image" src={`/images/${image}`} alt={title} />

      </div>

    </article>
  );
}

export default Article;
