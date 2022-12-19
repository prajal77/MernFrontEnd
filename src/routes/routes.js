import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "../pages/front"
import FrontLayout from "../pages/layouts/front-layout.page";

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
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;