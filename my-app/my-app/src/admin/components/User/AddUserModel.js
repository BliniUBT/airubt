import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class AddUserModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:39990/api/user/createUser',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "firstname": event.target.firstname.value,
                "lastname": event.target.lastname.value,
                "email": event.target.email.value,
                "password": event.target.password.value,
                "birthDate": event.target.birthDate.value,
                "phoneNumber": event.target.phonenumber.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        })

    }

    render(){
        return (
            <div className='container'>
                <Modal {...this.props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>Add User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    {/* <Form.Group controlId='id'>
                                        <Form.Label>ID                            
                                        </Form.Label>
                                        <Form.Control type='number' name='id' required placeholder='Enter ID' defaultValue></Form.Control>
                                    </Form.Group> */}

                                    <Form.Group controlId='firstname'>
                                        <Form.Label>Firstname                            
                                        </Form.Label>
                                        <Form.Control type='text' name='firstname' required placeholder='Enter Firstname'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='lastname'>
                                        <Form.Label>Lastname                            
                                        </Form.Label>
                                        <Form.Control type='text' name='lastname' required placeholder='Enter Lastname'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                        <Form.Label>Email                            
                                        </Form.Label>
                                        <Form.Control type='email' name='email' required placeholder='Enter Email'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='password'>
                                        <Form.Label>Email                            
                                        </Form.Label>
                                        <Form.Control type='text' name='password' required placeholder='Enter password'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='birthDate'>
                                        <Form.Label>Age                            
                                        </Form.Label>
                                        <Form.Control type='date' name='birthDate' required placeholder='Enter Date'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='phonenumber'>
                                        <Form.Label>Firstname                            
                                        </Form.Label>
                                        <Form.Control type='text' name='phonenumber' required placeholder='Enter PhoneNumber'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='firstname'>
                                        <Button variant='primary' type='submit'>Add User</Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='danger' onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}