// import { Outlet } from "react-router-dom";
import "../../assets/admin/css/admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPartials from "../admin/partials";


const SellerLayout = () => {

    return (<>
        <ToastContainer />
        <AdminPartials.AdminTopMenu />

        <div id="layoutSidenav">
            <AdminPartials.AdminSidebar />
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />

                </main>
                <AdminPartials.AdminFooter />
            </div>
        </div>
    </>)
}

export default SellerLayout;