import { Outlet } from "react-router-dom";
import FrontComponent from "../../component/front"

const FrontLayout = () => {
    return (
        <>
            <FrontComponent.NavbarComponent />
            {/* Content Section */}
            <Outlet />  {/*to load dynamic content */}
            <FrontComponent.FooterComponent />
        </>
    )
}

export default FrontLayout;