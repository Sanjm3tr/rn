import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Container, Grid, Typography, Button } from "@mui/joy";
export default function Home() {
  const [article, setArticle] = useState();
  const [comment, setComment] = useState();
  const router = useRouter();

  const { username, slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`https://dev.to/api/articles/${username}/${slug}`)
        .then((res) => res.json())
        .then((data) => setArticle(data));
      fetch(`curl https://dev.to/api/comments?a_id=${article.id}`)
        .then((res) => res.json())
        .then((data) => setComment(data));
    }
  }, [slug]);

  if (!article) return <div>Loading...</div>;
  return (
    <>
      <Container>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
          rel="stylesheet"
        ></link>

        <Typography sx={{ color: "black", fontSize: "35px" }}>
          {article.title}
        </Typography>
        <Container
          sx={{ color: "black", fontFamily: "Roboto" }}
          dangerouslySetInnerHTML={{ __html: article.body_html }}
        />
        {/* <Typography>{article.body_markdown}</Typography> */}
      </Container>
    </>
  );
}
