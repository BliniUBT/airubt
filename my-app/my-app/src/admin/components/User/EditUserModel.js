import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class EditUserModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('https://localhost:44341/api/user',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "id": event.target.id.value,
                "firstname": event.target.firstname.value,
                "lastname": event.target.lastname.value,
                "email": event.target.email.value,
                "age": event.target.age.value,
                "phone": event.target.phone.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })

    }

    render(){
        return (
            <div className='container'>
                <Modal {...this.props} size='lg' aria-labelledby='contained-modal-title-vcenter' centered>
                    <Modal.Header closeButton>
                        <Modal.Title id='contained-modal-title-vcenter'>Edit User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={7}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId='id'>
                                        <Form.Label>ID                            
                                        </Form.Label>
                                        <Form.Control type='number' name='id' required disabled defaultValue={this.props.id} placeholder='ID'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='firstname'>
                                        <Form.Label>Firstname                            
                                        </Form.Label>
                                        <Form.Control type='text' name='firstname' required defaultValue={this.props.userfname} placeholder='Enter Firstname'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='lastname'>
                                        <Form.Label>Lastname                            
                                        </Form.Label>
                                        <Form.Control type='text' name='lastname' required defaultValue={this.props.userlname} placeholder='Enter Lastname'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                        <Form.Label>Email                            
                                        </Form.Label>
                                        <Form.Control type='email' name='email' required defaultValue={this.props.useremail} placeholder='Enter Email'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='age'>
                                        <Form.Label>Age                            
                                        </Form.Label>
                                        <Form.Control type='number' name='age' required defaultValue={this.props.userage} placeholder='Enter Age'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='phonenumber'>
                                        <Form.Label>Phone Number                            
                                        </Form.Label>
                                        <Form.Control type='text' name='phonenumber' required defaultValue={this.props.userphonenumber} placeholder='Enter PhoneNumber'></Form.Control>
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Update User</Button>
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