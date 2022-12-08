import { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
const LoginPage = () => {
    // let [email, setEmail] = useState(null);
    // let [password, setPassword] = useState(null);
    // let [rememberMe, setRememberMe] = useState(false);

    let defaultData = {
        email: "",
        password: "",
        rememberMe: false
    }
    let [data, setData] = useState(defaultData);

    // First way of useing useEffect hook
    useEffect(() => {
        // this hook executes if any new state is initialized or changed any time or multiple time
    });

    // second way
    useEffect(() => {
        // this hook execute only once when the component is loaded
    }, []);

    // Third way
    useEffect(() => {
        // this hook only execues when the data state is updated
    }, [data]);

    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col sm={{ offset: 3, span: 6 }}>
                        <h4>Login Page</h4>
                        <hr />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" name="email" size="sm" required />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" size="sm" required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember Me" name="remember me" />
                            </Form.Group>
                            <div className="d-grid">
                                <Button variant="success" type="submit" size="sm">
                                    Submit
                                </Button></div>
                        </Form>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
export default LoginPage