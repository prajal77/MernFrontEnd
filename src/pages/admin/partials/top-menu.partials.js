import { NavLink, useNavigate } from "react-router-dom";
import { uCfirst } from "../../../config/helpers";

const AdminTopMenu = () => {
    let userInfo = JSON.parse(localStorage.getItem('_au'));
    const sidebarToggle = (e) => {
        e.preventDefault();
        document.body.classList.toggle('sb-sidenav-toggled');
    }
    let navigate = useNavigate();
    return (

        <>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <NavLink className="navbar-brand ps-3" to={'/' + userInfo.role}>{uCfirst(userInfo.role)} Page</NavLink>
                {/* <!-- Sidebar Toggle--> */}
                <button
                    onClick={sidebarToggle}
                    className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
                {/* <!-- Navbar Search--> */}
                <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">

                </div>
                {/* <!-- Navbar--> */}
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user fa-fw"></i>
                            {
                                userInfo.name
                            }
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                            <li><NavLink className="dropdown-item" to="/login" onClick={(e) => {
                                e.preventDefault();
                                localStorage.clear();
                                navigate('/login');
                            }}>Logout</NavLink></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminTopMenu;