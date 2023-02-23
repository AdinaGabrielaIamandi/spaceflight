import { Card } from "react-bootstrap";
import { Art } from "./../interfaces/Art";
import { Link } from "react-router-dom";

interface ComponentProps {
  article: Art;
}

export const SingleArticle = ({ article }: ComponentProps) => {
  return (
    <Card className="my-4" style={{ height: "35em" }}>
      <Card.Img
        variant="top"
        src={article.imageUrl}
        style={{ width: "100%", objectFit: "cover", aspectRatio: "1/1" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text className="text-truncate">{article.summary}</Card.Text>
        </div>
        <Link className="btn btn-secondary" to={"/art-details/" + article.id}>
          More details
        </Link>
      </Card.Body>
    </Card>
  );
};
