import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Card, Container, Grid, Typography, Button } from "@mui/joy";
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";
import Router from "next/router";

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
  console.log(article);
  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Grid container spacing={4} sx={{ flexGrow: 1, mt: 2 }}>
        {article.map(({ title, cover_image, path }, index) => (
          <Grid xs={3} key={index}>
            <Card sx={{ backgroundColor: "gainsboro" }}>
              <Typography>{title}</Typography>
              <AspectRatio objectFit="contain">
                <img src={cover_image} />
              </AspectRatio>
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
