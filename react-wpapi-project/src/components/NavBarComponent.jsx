import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link  } from 'react-router-dom';

export default function NavBarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand 
            as={Link} to="/"
            href="#home">
              <img
                alt="logo rolling stone"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Rolling_Stone_2022.svg/1920px-Rolling_Stone_2022.svg.png"
                width="170"
                height="30"
                className="d-inline-block align-top"
              />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/"> Home</Nav.Link>
            <Nav.Link as={Link} to="/categories">Categories</Nav.Link>
            {/* <Nav.Link as={Link} to="/single-article">Users</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
