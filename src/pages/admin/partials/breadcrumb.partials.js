import { NavLink } from "react-router-dom";

const BreadCrumb = ({ context, createUrl, type }) => {
    return (
        <>
            <h1 className="mt-4">{context} {type}
                {
                    createUrl && <NavLink to={createUrl} className="btn btn-sm float-end btn-success">
                        <i className="fa fa-plus"></i>Create {context}
                    </NavLink>
                }
            </h1>

            <ol className="breadcrumb mb-4">
                <li className="breadcrumb-item"><NavLink to={"/admin"}>Dashboard</NavLink></li>
                <li className="breadcrumb-item active">Static Navigation</li>
            </ol>
        </>
    )
}
export default BreadCrumb;