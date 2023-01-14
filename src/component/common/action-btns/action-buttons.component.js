import { NavLink } from "react-router-dom"
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


export const ActionButtons = ({ id, deleteAction, path }) => {
    const onDelete = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteAction(id);
            }
        })
    }
    return (<>
        <NavLink to={path + id} className="btn btn-sm btn-success rounded-circle me-2">
            <i className="fa fa-pen" />
        </NavLink>
        <NavLink to="/delete" className="btn btn-sm btn-danger rounded-circle" onClick={onDelete}>
            <i className="fa fa-trash" />
        </NavLink>
    </>)
} 