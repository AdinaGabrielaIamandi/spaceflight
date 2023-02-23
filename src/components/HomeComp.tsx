import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Art } from "../interfaces/Art";
import { SingleArticle } from "./SingleArticle";

export const HomeComp = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";

  const [articles, setArticles] = useState<Art[]>([]);

  useEffect(() => {
    fetchArt();
  });

  const fetchArt = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const articlesFetched = await res.json();
        setArticles(articlesFetched);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        {articles.map((article, i) => {
          return (
            <Col xs={6} lg={3}>
              <SingleArticle key={i} article={article} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};
