import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Image src="https://martinwilson.me/wp-content/uploads/space-news.jpg" style={{ width: "100px" }} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to={"/"}>
              News
            </Link>
            <Nav.Link href="#pricing">Opinion</Nav.Link>
            <Nav.Link href="#pricing">Civiln</Nav.Link>
            <Nav.Link href="#pricing">Commercial</Nav.Link>
            <Nav.Link href="#pricing">More info</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
