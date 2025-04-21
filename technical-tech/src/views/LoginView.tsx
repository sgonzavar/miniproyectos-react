import React, {useState} from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import '../styles/LoginView.css'

const LoginView: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msgError, setMsgError] = useState(null);

    
    const sendAndReques = (e:any) => {
        e.preventDefault();
        console.log("email", email);
        console.log("password", password);
    }

    return (
        <div className="login-container">
            <Container className="mt-5">
                <Row>
                    <Col xs="12" lg="5" className="p-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="FormBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="Enter email" 
                                    onChange={(e) => {setEmail(e.target.value);}}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="FormBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password" 
                                    placeholder="Password" 
                                    onChange={(e) => {setPassword(e.target.value);}}
                                />
                            </Form.Group>
                            <Button variant="info" type="submit" onClick={(e) => {sendAndReques(e)}}>
                                Send
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div className="App">
                            <div className="App-header">
                                <div className="App-logo" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LoginView