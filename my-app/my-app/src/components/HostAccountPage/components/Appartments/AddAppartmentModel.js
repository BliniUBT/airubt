import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
// import '../../assets/css/addusermodel.css';

export class AddAppartmentModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:39990/api/host/createApartment',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "address": event.target.address.value,
                "rooms": event.target.rooms.value,
                "space": event.target.space.value,
                "maxGuests": event.target.maxGuests.value,
                "toilets": event.target.toilets.value,
                "terrace": event.target.terrace.value,
                "garden": event.target.garden.value,
                "review": event.target.review.value,
                "notes": event.target.notes.value,
                "city": event.target.city.value,
                "category": event.target.category.value

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
                    <Modal.Header>
                        <Modal.Title id='contained-modal-title-vcenter'>Add Apartment</Modal.Title>
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

                                    <Form.Group controlId='address'>
                                        <Form.Label>Address                            
                                        </Form.Label>
                                        <Form.Control type='text' name='address' required placeholder='Enter Address'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='rooms'>
                                        <Form.Label>Rooms                            
                                        </Form.Label>
                                        <Form.Control type='number' name='rooms' required placeholder='Enter Rooms'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='space'>
                                        <Form.Label>Space                            
                                        </Form.Label>
                                        <Form.Control type='number' name='space' required placeholder='Enter Space'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='maxGuests'>
                                        <Form.Label>Max Guests                            
                                        </Form.Label>
                                        <Form.Control type='number' name='maxGuests' required placeholder='Enter Max Guests'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='toilets'>
                                        <Form.Label>Toilets                           
                                        </Form.Label>
                                        <Form.Control type='number' name='toilets' required placeholder='Enter Toilets'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='terrace'>
                                        <Form.Label>Terrace                           
                                        </Form.Label>
                                        <Form.Control type='number' name='terrace' required placeholder='Enter Terrace'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='garden'>
                                        <Form.Label>Garden                            
                                        </Form.Label>
                                        <Form.Control type='number' name='garden' required placeholder='Enter Garden'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='review'>
                                        <Form.Label>Review                           
                                        </Form.Label>
                                        <Form.Control type='number' name='review' required placeholder='Enter Review'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='notes'>
                                        <Form.Label>Notes                           
                                        </Form.Label>
                                        <Form.Control type='text' name='notes' required placeholder='Enter Notes'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='city'>
                                        <Form.Label>City                           
                                        </Form.Label>
                                        <Form.Control type='text' name='city' required placeholder='Enter City'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='category'>
                                        <Form.Label>Category                           
                                        </Form.Label>
                                        <Form.Control type='text' name='category' required placeholder='Enter Category'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='address'>
                                        <Button variant='primary' type='submit' onClick={this.props.onHide}>Add Apartment</Button>
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