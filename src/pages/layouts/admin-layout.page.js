// import { Outlet } from "react-router-dom";
import "../../assets/admin/css/admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminTopMenu from "../admin/partials/top-menu.partials";
import AdminSidebar from "../admin/partials/sidebar.partials";
import AdminFooter from "../admin/partials/footer.partials";


const AdminLayout = () => {

    return (<>
        <ToastContainer />
        <AdminTopMenu />

        <div id="layoutSidenav">
            <AdminSidebar />
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />

                </main>
                <AdminFooter />
            </div>
        </div>
    </>)
}

export default AdminLayout;