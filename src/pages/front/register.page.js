import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const RegisterPage = () => {
    // let [email, setEmail] = useState(null);
    // let [password, setPassword] = useState(null);
    // let [rememberMe, setRememberMe] = useState(false);

    let defaultData = {
        email: "",
        password: "",
        rememberMe: false
    }
    let [data, setData] = useState(defaultData);
    let [err, setErr] = useState({
        email: '',
        password: ''
    });
    let navigate = useNavigate();
    useEffect(() => {
        let token = localStorage.getItem("accessToken");
        if (token) {
            let userInfo = JSON.parse(localStorage.getItem('_au'));
            navigate("/" + userInfo.role)
        }
    }, [navigate]);

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
            case 'email':
                msg = !value ? "Email is required" :
                    (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                        .test(value) ? "" : "invalid email Format")
                break;
            case 'password':
                msg = !value ? "Password is required" : (value.length < 9 ? "Password must be 8 character long" : "");
                break;
            default:
                break;
        }
        setErr({
            ...err,
            [field]: msg
        })
    }

    const handleSubmit = (e) => {
        e.prevenDefault();
        // TODO API call to integration
    }

    console.log(data);

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm={{ offset: 3, span: 6 }}>
                        <h4>Register Page</h4>
                        <hr />
                        <Form onSubmit={handleSubmit}>
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

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" size="sm" required
                                    onChange={handleChange} />
                                <em className="text-danger">{err?.password}</em>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" name="remember me" />
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