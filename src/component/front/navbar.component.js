import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NavbarComponent = () => {
    return (<Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/Login">Login</NavLink>
                <NavLink className="nav-link" to="/register">register</NavLink>
            </Nav>
        </Container>
    </Navbar>)
}