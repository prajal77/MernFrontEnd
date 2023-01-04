// import { Outlet } from "react-router-dom";
import "../../assets/admin/css/admin.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPartials from "../admin/partials";
import { httpGetRequest } from "../../services/axios.service";
import { useEffect, useState } from "react";

const AdminLayout = () => {
    let [user, setUser] = useState();

    const getUserDetail = async (id) => {
        let userDetail = await httpGetRequest("/user/" + id, true);
        console.log(userDetail);
    }

    useEffect(() => {
        let loggedInUser = JSON.parse(localStorage.getItem("_au"));
        if (loggedInUser) {
            getUserDetail(loggedInUser.id)
        }
    }, []);
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

export default AdminLayout;