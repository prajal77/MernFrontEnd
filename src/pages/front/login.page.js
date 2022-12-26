// import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { httpPostRequest } from "../../services/axios.service";
const LoginPage = () => {
    // let [email, setEmail] = useState(null);

    // let [password, setPassword] = useState(null);
    // let [rememberMe, setRememberMe] = useState(false);

    let defaultData = {
        email: "",
        password: "",
        rememberMe: false
    }
    // let [data, setData] = useState(defaultData);
    // let [err, setErr] = useState({
    //     email: '',
    //     password: ''
    // });

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
    // const handleChange = (e) => {
    //     let { name, value } = e.target;
    //     setData({
    //         ...data,
    //         [name]: value //[] gives us the key value
    //     })
    //     validateData(name, value);
    // }

    // const validateData = (field, value) => {
    //     let msg = "";
    //     switch (field) {
    //         case 'email':
    //             msg = !value ? "Email is required" :
    //                 (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    //                     .test(value) ? "" : "invalid email Format")
    //             break;
    //         case 'password':
    //             msg = !value ? "Password is required" : (value.length < 9 ? "Password must be 8 character long" : "");
    //             break;
    //         default:
    //             break;
    //     }
    //     setErr({
    //         ...err,
    //         [field]: msg
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.prevenDefault();
    //     // TODO API call to integration
    // }

    // console.log(data);

    let loginValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid Email format").required("Email is required"),
        password: Yup.string().required("Password is required")
    });
    let formik = useFormik({
        initialValues: defaultData,
        validationSchema: loginValidationSchema,
        onSubmit: async (values) => {
            let response = await httpPostRequest('/login', values)

            // let response = await axios.post("http://localhost:3005/api/v1/login", values, {
            //     hearders: {
            //         "content-type": "application/json"
            //     }
            // }); //.get(), .post(), .put(), .patch(), .delete(), .options()
            //CORS => Cross Reference Site 
            console.log(response);
        }
    })
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm={{ offset: 3, span: 6 }}>
                        <h4>Login Page</h4>
                        <hr />
                        <Form onSubmit={formik.handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    size="sm"
                                    required
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                                {
                                    formik.errors.email && <em className="text-danger">{formik.errors.email}</em>

                                }
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" size="sm" required
                                    onChange={formik.handleChange} />
                                {
                                    formik.errors.password && <em className="text-danger">{formik.errors.password}</em>

                                }
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" name="remember me" onChange={(e) => {
                                    if (e.target.checked) {
                                        formik.setValues({
                                            ...formik.values,
                                            rememberMe: true
                                        })
                                    } else {
                                        formik.setValues({
                                            ...formik.values,
                                            rememberMe: false
                                        })
                                    }
                                }} />
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="success" type="submit" size="sm">
                                    Submit
                                </Button> OR <NavLink to="/register">Register Here</NavLink>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default LoginPage