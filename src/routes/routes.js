import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AdminPages from "../pages/admin";
import FrontPage from "../pages/front"
import AdminLayout from "../pages/layouts/admin-layout.page";
import FrontLayout from "../pages/layouts/front-layout.page";
import SellerLayout from "../pages/layouts/seller-layout.page";

const PrivateRoute = (props) => {
    let component = props.component;
    let isLoggedIn = true;
    return (isLoggedIn ? component : <Navigate to="/login" />);
}

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontLayout />}>
                    <Route index element={<FrontPage.HomePage />} />
                    <Route path="login" element={<FrontPage.LoginPage />} />
                    <Route path="register" element={<FrontPage.RegisterPage />} />
                    {/* params */}
                    <Route path="category/:slug" element={<FrontPage.CategoryDetailPage />} />

                    <Route path="*" element={<FrontPage.ErrorPage />} />
                </Route>

                <Route path="/admin" element={<PrivateRoute component={<AdminLayout />} />}>
                    <Route index element={<AdminPages.DashboardPage />} />
                    <Route path="banner" element={<AdminPages.Banner.BannerLayout />}>
                        <Route index element={<AdminPages.Banner.BannerListComponent />} />
                        <Route path="create" element={<AdminPages.Banner.BannerCreateComponent />} />
                    </Route>
                </Route>

                <Route path="seller" element={<PrivateRoute component={<SellerLayout />} />}>

                </Route>

            </Routes>
        </BrowserRouter >
    );
}

export default Routing;