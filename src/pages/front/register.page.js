import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { httpPostRequest } from "../../services/axios.service";
import "react-toastify/dist/ReactToastify.css"

const RegisterPage = () => {
    // let [email, setEmail] = useState(null);
    // let [password, setPassword] = useState(null);
    // let [rememberMe, setRememberMe] = useState(false);

    let defaultData = {
        email: "",
        password: "",
        image: null,
        role: 'customer'
    }
    let [data, setData] = useState(defaultData);
    let [err, setErr] = useState({
        email: '',
        password: '',
    });
    let navigate = useNavigate();

    // First way of useing useEffect hook
    // useEffect(() => {
    //     // this hook executes if any new state is initialized or changed any time or multiple time
    // });

    // second way
    // useEffect(() => {
    //     // this hook execute only once when the component is loaded
    // }, []);

    // Third way
    // useEffect(() => {
    //     // this hook only execues when the data state is updated
    // }, [data]);
    const handleChange = (e) => {
        let { name, value } = e.target;
        setData({
            ...data,
            [name]: value //[] gives us the key value
        })
        validateData(name, value);
    }

    const validateData = (field, value) => {
        let msg = "";
        switch (field) {
            case "name":
                msg = !value ? "name is required" : null
                break;
            case 'email':
                msg = !value ? "Email is required" :
                    (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        .test(value) ? "" : "invalid email Format");
                break;
            case "role":
                msg = !value ? "role is required" : ((value !== 'customer' || value !== 'seller') ? "Undefined roles" : '');
                break;
            case 'password':
                msg = !value ? "Password is required" : (value.length < 8 ? "Password must be 8 character long" : "");
                break;
            default:
                break;
        }
        setErr({
            ...err,
            [field]: msg
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            let formData = new FormData(); //to bind image data
            if (data.image) {
                formData.append("image", data.image.name);
                delete data.image
            }
            Object.keys(data).map((key) => {
                formData.append(key, data[key]);
                return null;
            })
            let response = await httpPostRequest("/register", formData, false, true);
            if (response.status) {
                toast.success(response.msg);
                navigate('/login')
            }
        } catch (error) {
            console.error(error);
        }

    }

    // console.log(data);
    useEffect(() => {
        let token = localStorage.getItem("accessToken");
        if (token) {
            let userInfo = JSON.parse(localStorage.getItem('_au'));
            navigate("/" + userInfo.role)
        }
    }, [navigate]);

    return (
        <>
            <Container>
                <ToastContainer />
                <Row className="mt-5">
                    <Col sm={{ offset: 3, span: 6 }}>
                        <h4>Register Page</h4>
                        <hr />
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name: </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name:"
                                    name="name"
                                    size="sm"
                                    required
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        setData({
                                            ...data,
                                            name: value
                                        })
                                        validateData("name", value)
                                    }}
                                />
                                <em className="text-danger">{err?.name}</em>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    size="sm"
                                    required
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        setData({
                                            ...data,
                                            email: value
                                        })
                                        validateData("email", value)
                                    }}
                                />
                                <em className="text-danger">{err?.email}</em>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="role">
                                <Form.Label>Role:</Form.Label>
                                <Form.Select name="role" required defaultValue={'customer'} onChange={(e) => {
                                    let value = e.target.value;
                                    setData({
                                        ...data,
                                        role: value
                                    })
                                    validateData("role", value)
                                }}>
                                    <option value="seller">Seller</option>
                                    <option value="customer">Customer</option>
                                </Form.Select>
                                {/* <em className="text-danger">{err?.role}</em> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Image:</Form.Label>
                                <Form.Control type="file" name="image" size="sm"
                                    onChange={(e) => {
                                        // console(e.target.files);
                                        // let imgUrl = URL.createObjectURL(e.target.files[0]);
                                        let file = e.target.files[0];
                                        setData({
                                            ...data,
                                            image: file
                                        })
                                    }} />
                                <em className="text-danger">{err?.image}</em>
                                <Col sm={3}>
                                    <img src={data.image ? URL.createObjectURL(data.image) : ""} alt="" className="img img-fluid" />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" size="sm" required
                                    onChange={handleChange} />
                                <em className="text-danger">{err?.password}</em>
                            </Form.Group>


                            <div className="d-grid">
                                <Button variant="success" type="submit" size="sm">
                                    Submit
                                </Button> OR <NavLink to="/login">Login Here</NavLink>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )

}

export default RegisterPage;