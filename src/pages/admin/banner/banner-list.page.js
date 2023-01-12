// import { NavLink } from "react-router-dom";
import BreadCrumb from "../partials/breadcrumb.partials";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { httpDeleteRequest, httpGetRequest } from "../../../services/axios.service";
import { Imageview } from "../../../component/common/image-view/image-view.component";
import { ActionButtons } from "../../../component/common/image-view/action-btns/action-buttons.component";
import { toast } from "react-toastify";


const BannerListComponent = () => {
    const deleteBanner = async (id) => {
        try {
            let response = await httpDeleteRequest("/banner/" + id, true);
            if (response.status) {
                toast.success(response.msg);
                getAllBanners();
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
            selector: row => <Imageview dir="/banner" path={row.image} />,
            // selector: row => row.image,

        },
        {
            name: 'Link',
            selector: row => row.link ? <a className="btn-link" href="{row.link}">row.link</a> : "",
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
        {
            name: '',
            selector: row => <ActionButtons id={row._id} deleteAction={deleteBanner} />,
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