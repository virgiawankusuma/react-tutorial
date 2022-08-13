import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(function () {
    async function getArticles() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
      const response = await request.json();

      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);

  return (
    <section>
      <h1>Blog page</h1>
      <p>Berikut ini adalah tulisan-tulisanku (tapi bo'ong): </p>
      {loading ? <p>Loading articles..</p> : (
        <div>
          {
            articles.map(function(article) {
              return (
                <article key={article.id}>
                  <h2><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                  <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                </article>
              )
            })
          }
        </div>
      )}
    </section>
  );
}
