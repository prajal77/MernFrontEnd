import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
    let userInfo = JSON.parse(localStorage.getItem("_au")) ?? null;
    let navigate = useNavigate();

    return (<Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        {/* <NavLink className="nav-link" to="/">Navbar</NavLink> */}
        <Container>
            <Nav className="me-auto">
                <NavLink className="nav-link" to="/">Home</NavLink>
                {
                    !userInfo ? <>
                        <NavLink className="nav-link" to="/Login">Login</NavLink>
                        <NavLink className="nav-link" to="/register">register</NavLink>
                    </> : <></>

                }
            </Nav>
            {
                userInfo ?
                    <>
                        <Nav>
                            <NavLink className="nav-link" to={"/" + userInfo.role}>{userInfo.name}</NavLink>
                            <NavLink className="nav-link" to="/login" onClick={(e) => {
                                e.preventDefault();
                                localStorage.clear();
                                navigate('/login');
                            }}>Logout</NavLink>
                        </Nav>
                    </> :
                    <></>
            }
        </Container>
    </Navbar>)
}