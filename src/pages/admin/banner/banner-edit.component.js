import { useFormik } from "formik";
import { Button, Col, Form } from "react-bootstrap";
import BreadCrumb from "../partials/breadcrumb.partials";
import * as Yup from "yup"
import { httpGetRequest, httpPutRequest } from "../../../services/axios.service";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const BannerEditComponent = () => {
    let defaultValue = {
        name: "",
        link: "",
        status: "",
        image: ""
    };
    let BannerValidationSchema = Yup.object().shape({
        name: Yup.string().required("Title is required"),
        link: Yup.string(),
        status: Yup.string().required("Status is required"),
        image: Yup.object().nullable()
    })
    let navigate = useNavigate();
    let param = useParams();
    const formik = useFormik({
        initialValues: defaultValue,
        validationSchema: BannerValidationSchema,
        onSubmit: async (values) => {
            // mapping
            try {
                const formData = new FormData();
                if (values.image && typeof (values.image) === 'object') {
                    formData.append('image', values.image, values.image.name)
                    delete values.image
                } else {
                    delete values.image
                }
                Object.keys(values).map((key) => {
                    formData.append(key, values[key]);
                    return null;
                })
                let response = await httpPutRequest('/banner/' + param.id, formData, true, true)
                if (response.status) {
                    toast.success(response.msg)
                    navigate("/admin/banner")
                } else {
                    toast.error(response.msg)
                }
            } catch (error) {
                console.error("Error:", error);
            }
        }
    }
    )

    const getBannerDetail = async () => {
        let id = param.id;
        try {
            let response = await httpGetRequest('/banner/' + id)
            if (response.status) {
                formik.setValues({
                    ...formik.values,
                    ...response.result
                }
                )
            }
        } catch (error) {
            // console.error(error)
        }
    }


    useEffect(() => {
        getBannerDetail();
    }, []);

    return (<>
        <div className="container-fluid px-4">
            <BreadCrumb context="Banner"
                createUrl="" type="Update" />
            <div className="card mb-4">
                <div className="card-body">
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="row mb-3" controlId="name">
                            <Form.Label className="col-sm-3">Title</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Banner Title"
                                    name="name"
                                    size="sm"
                                    required
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.name && <em className="text-danger">{formik.errors.name}</em>

                                }

                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3" controlId="link">
                            <Form.Label className="col-sm-3">Link:</Form.Label>
                            <Col sm={9}>
                                <Form.Control
                                    type="link"
                                    placeholder="Enter Banner Link"
                                    name="link"
                                    size="sm"
                                    value={formik.values.link}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.link && <em className="text-danger">{formik.errors.link}</em>
                                }
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3" controlId="status">
                            <Form.Label className="col-sm-3">Status:</Form.Label>
                            <Col sm={9}>
                                <Form.Select size="sm" required value={formik.values.status} onChange={formik.handleChange}>
                                    <option>--Select Any One--</option>
                                    <option value="active">Active</option>
                                    <option value="inactive">In-Active</option>
                                </Form.Select>
                                {
                                    formik.errors.status && <em className="text-danger">{formik.errors.status}</em>

                                }
                            </Col>
                        </Form.Group>

                        <Form.Group className="row mb-3" controlId="image">
                            <Form.Label className="col-sm-3">Image:</Form.Label>
                            <Col sm={4}>
                                <Form.Control
                                    type="file"
                                    name="image"
                                    size="sm"
                                    onChange={(e) => {
                                        formik.setValues({
                                            ...formik.values,
                                            image: e.target.files[0]
                                        })
                                    }}
                                />
                                {
                                    formik.errors.image && <em className="text-danger">{formik.errors.image}</em>
                                }
                            </Col>
                            <Col sm={2}>
                                {
                                    formik.values.image && typeof (formik.values.image) === 'object'
                                        ? <img className="img img-fluid" src={formik.values.image && URL.createObjectURL(formik.values.image)} alt="" />
                                        : <img className="img img-fluid" src={process.env.REACT_APP_IMAGE_URL + "/banner/" + formik.values.image} alt="" />
                                }

                                {/* <img className="img img-fluid" src={formik.values.image && URL.createObjectURL(formik.values.image)} alt="" /> */}
                            </Col>
                        </Form.Group>
                        <Form.Group className="row mb-3" controlId="submit">
                            <Col sm={{ offset: 3, span: 9 }}>
                                <Button variant="danger" size="sm" type="reset" className="me-2">
                                    <i className="fa fa-trash"></i>Reset
                                </Button>
                                <Button variant="success" size="sm" type="submit">
                                    <i className="fa fa-paper-plane"></i>Submit
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            {/* <div style="height: 100vh"></div> */}
            <div style={{ height: '100vh' }}></div>
            <div className="card mb-4"><div className="card-body">When scrolling, the navigation stays at the top of the page. This is the end of the static navigation demo.</div></div>
        </div>
    </>

    )
}

export default BannerEditComponent;