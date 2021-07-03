import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './login.css';
import {Form, Button, Row, Nav} from 'react-bootstrap'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [userActive, setUserActive] = useState(true);

    const submitUser = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:39990/api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
    }


    const submitHost = async (e) => {
        e.preventDefault();

        await fetch('http://localhost:39990/api/host/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            })
        });
        setRedirect(true);
    }

   

    if(redirect){
        if(userActive)
            return <Redirect to="/"/>
        else
            return <Redirect to="/hostaccount" />
    }

    

    return(
        <div className="login-container">
            <div className="login-data">
                    <Nav fill variant="tabs" defaultActiveKey="link-1">
                        <Nav.Item>
                            <Nav.Link id="user-login" eventKey="link-1" onClick={e => setUserActive(true)}>User Login</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="host-login" eventKey="link-2" onClick={e => setUserActive(false)}>Host Login</Nav.Link>
                        </Nav.Item>
                    </Nav>
                <Row>                    
                    <Form onSubmit={userActive ? submitUser : submitHost}>
                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Row>
            </div>
        </div>
    );
};

export default Login;