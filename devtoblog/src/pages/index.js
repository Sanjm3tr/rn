import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Container, Grid, Typography, Button } from "@mui/joy";
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";
import Router from "next/router";
import Head from "next/head";

export default function Home() {
  const [article, setArticle] = useState([]);
  const router = useRouter;
  useEffect(() => {
    fetch(`https://dev.to/api/articles?username=ben`)
      .then((res) => res.json())
      .then((data) => {
        setArticle(data);
      });
  }, []);
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Head>
        <title>Welcome to my blog</title>
      </Head>
      <Grid container spacing={4} sx={{ flexGrow: 1, mt: 2 }}>
        {article.map(({ title, cover_image, path }, index) => (
          <Grid xs={3} key={index}>
            <Card sx={{ backgroundColor: "gainsboro" }}>
              <Typography>{title.slice(0, 30)}...</Typography>
              <AspectRatio objectFit="contain">
                <img src={cover_image} />
              </AspectRatio>
              <Typography>{tags}</Typography>
              <Button color="neutral" onClick={() => Router.push(path)}>
                Open
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
