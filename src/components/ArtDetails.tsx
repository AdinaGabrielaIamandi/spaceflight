import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Art } from "../interfaces/Art";
import { useEffect, useState } from "react";

export const ArtDetails = () => {
  const idParams = useParams();
  const url = "https://api.spaceflightnewsapi.net/v3/articles/" + idParams.artId;

  const [singleArt, setSingleArt] = useState<Art>();

  useEffect(() => {
    fetchSingleArt();
  });

  const fetchSingleArt = async () => {
    try {
      const res = await fetch(url);
      if (res.ok) {
        const singleFetched = await res.json();
        setSingleArt(singleFetched);
      } else {
        console.log("ERROR");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Card className="m-5">
        <Card.Img variant="top" src={singleArt?.imageUrl} style={{ height: "400px" }} />
        <Card.Body className="m-3 text-center">
          <Card.Title>{singleArt?.title}</Card.Title>
          <Card.Text>{singleArt?.summary}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
