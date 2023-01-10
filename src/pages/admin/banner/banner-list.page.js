// import { NavLink } from "react-router-dom";
import BreadCrumb from "../partials/breadcrumb.partials";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { httpGetRequest } from "../../../services/axios.service";

const BannerListComponent = () => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
        },
        {
            name: 'Link',
            selector: row => row.link,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: '',
            selector: row => <></>,
        },
    ];
    const [data, setData] = useState();
    const getAllBanners = async () => {
        try {
            let response = await httpGetRequest('/banner');
            if (response.status) {
                setData(response.result);
            }

        } catch (error) {
            console.error("Exception", error);
        }
    }
    useEffect(() => {
        getAllBanners();
    }, []);

    return (<>
        <div className="container-fluid px-4">
            <BreadCrumb context="Banner"
                createUrl="/admin/banner/create" type="List" />
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
export default BannerListComponent;