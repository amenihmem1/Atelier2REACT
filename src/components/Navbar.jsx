import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom"; // Importation de NavLink
import "bootstrap/dist/css/bootstrap.min.css";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link 
                as={NavLink} 
                to="/myEvents" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                Events
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link 
                as={NavLink} 
                to="/events" 
                className={({ isActive }) => isActive ? "active" : ""}
              >
                My Events
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
