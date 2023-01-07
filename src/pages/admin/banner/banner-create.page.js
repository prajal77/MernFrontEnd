import BreadCrumb from "../partials/breadcrumb.partials";

const BannerCreateComponent = () => {
    return (<>
        <div className="container-fluid px-4">
            <BreadCrumb context="Banner"
                createUrl="" type="Create" />
            <div className="card mb-4">
                <div className="card-body">
                    <p className="mb-0">
                        This page is an example of using static navigation. By removing the
                        <code>.sb-nav-fixed</code>
                        className from the
                        <code>body</code>
                        , the top navigation and side navigation will become static on scroll. Scroll down this page to see an example.
                    </p>
                </div>
            </div>
            {/* <div style="height: 100vh"></div> */}
            <div style={{ height: '100vh' }}></div>
            <div className="card mb-4"><div className="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div>
        </div>
    </>

    )
}

export default BannerCreateComponent;