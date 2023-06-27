import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Container, Grid, Typography, Button } from "@mui/joy";
export default function Home() {
  const [article, setArticle] = useState();

  const router = useRouter();

  const { username, slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`https://dev.to/api/articles/${username}/${slug}`)
        .then((res) => res.json())
        .then((data) => setArticle(data));
    }
  }, [slug]);
  if (!article) return <div>Loading...</div>;
  console.log(article);
  return (
    <>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </>
  );
}
