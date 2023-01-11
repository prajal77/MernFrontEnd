import { NavLink } from "react-router-dom"

export const ActionButtons = () => {
    return (<>
        <NavLink to="/edit" className="btn btn-sm btn-success rounded-circle me-2">
            <i className="fa fa-pen" />
        </NavLink>
        <NavLink to="/delete" className="btn btn-sm btn-danger rounded-circle">
            <i className="fa fa-trash" />
        </NavLink>
    </>)
} 