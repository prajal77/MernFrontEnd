import { BrowserRouter, Route, Routes } from "react-router-dom";
import FrontPage from "../pages/front"

const Routing = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FrontPage.HomePage />} />
                <Route path="/login" element={<FrontPage.LoginPage />} />
                <Route path="/register" element={<FrontPage.RegisterPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;