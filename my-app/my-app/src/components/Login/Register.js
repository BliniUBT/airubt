import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import './register.css';
import {Form, Button, Row, Nav} from 'react-bootstrap'


const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [userActive, setUserActive] = useState(true);

    const submitUser = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:39990/api/user/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                birthdate,
                phoneNumber
            })
        });

        setRedirect(true);
    }
    
    const submitHost = async (e) => {
        e.preventDefault();
        
        const response = await fetch('http://localhost:39990/api/host/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                firstname,
                lastname,
                email,
                password,
                birthdate,
                phoneNumber
            })
        });

        setRedirect(true);
    }

    if(redirect){
        return <Redirect to="/login"/>
    }

    return ( 
        <div className="login-container">
            <div className="login-data">
                    <Nav fill variant="tabs" defaultActiveKey="link-1">
                        <Nav.Item>
                            <Nav.Link id="user-login" eventKey="link-1" onClick={e => setUserActive(true)}>Sign up as User</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link id="host-login" eventKey="link-2" onClick={e => setUserActive(false)}>Sign up as Host</Nav.Link>
                        </Nav.Item>
                    </Nav>
                <Row>                    
                    <Form onSubmit={userActive ? submitUser : submitHost}>
                    <Form.Group controlId="firstname">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text" name="firstname" placeholder="Firstname" onChange={e => setFirstname(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="lastname">
                            <Form.Label>Lastname</Form.Label>
                            <Form.Control type="text"name="lastname" placeholder="Lastname" onChange={e => setLastname(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text"name="email" placeholder="E-Mail" onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="birthdate">
                            <Form.Label>Birthdate</Form.Label>
                            <Form.Control type="date" name="birthdate" placeholder="Birthdate" onChange={e => setBirthdate(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="phoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" name="phoneNumber" placeholder="Phone Number" onChange={e => setPhoneNumber(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </Row>
            </div>
        </div>
    );

};
export default Register;