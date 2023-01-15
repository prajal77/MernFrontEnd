// import { NavLink } from "react-router-dom";
import BreadCrumb from "../partials/breadcrumb.partials";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { httpDeleteRequest, httpGetRequest } from "../../../services/axios.service";
import { Imageview } from "../../../component/common/image-view/image-view.component";
import { ActionButtons } from "../../../component/common/action-btns/action-buttons.component";
import { toast } from "react-toastify";


const BrandListComponent = () => {
    const deleteBrand = async (id) => {
        try {
            let response = await httpDeleteRequest("/brand/" + id, true);
            if (response.status) {
                toast.success(response.msg);
                getAllBrands();
            } else {
                toast.error(response.msg);
            }

        } catch (error) {
            console.error("DeleteErr:", error);
        }
        // console.log(id);
    }
    const columns = [
        {
            name: 'Title',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <Imageview dir="/brand" path={row.image} />,
            // selector: row => row.image,

        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => <ActionButtons id={row._id} deleteAction={deleteBrand} path="/admin/brand/" />,
        },
    ];
    const [data, setData] = useState();
    const getAllBrands = async () => {
        try {
            let response = await httpGetRequest('/brand');
            if (response.status) {
                setData(response.result);
            }

        } catch (error) {
            console.error("Exception", error);
        }
    }
    useEffect(() => {
        getAllBrands();
    }, []);

    return (<>
        <div className="container-fluid px-4">
            <BreadCrumb context="Brand"
                createUrl="/admin/brand/create" type="List" />
            <div className="card mb-4">
                <div className="card-body">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />
                </div>
            </div>
        </div>
    </>)
}
export default BrandListComponent;