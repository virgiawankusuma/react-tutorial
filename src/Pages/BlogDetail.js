import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function BlogDetail() {
  const params = useParams();
  // return console.log(params.id);

  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(function () {

    async function getArticle() {
      const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

      if(!request.ok) {
        setLoading(false);
        return setNotFound(true);
      }

      const response = await request.json();

      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [params.id]);

  // return console.log(article);

  if (notFound) {
    return <h1>Article not found :(</h1>;
  }

  return(
    <section className="section">
      {loading ? <p>Loading article..</p> : (
        <div>
          <article key={article.id} className="article-item">
            <h1 className="article-title">{article.title}</h1>
            <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="article-image"
              />
            <p className="article-summary">{article.summary}</p>
            <p className="article-source">Source: <a href={article.url} target="_blank" rel="noreferrer">{article.newsSite}</a></p>
          </article>
        </div>
      )}
    </section>
  );
}