import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import '../../assets/css/addcitymodel.css';

export class AddCityModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:39990/api/city/createcity',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "name": event.target.name.value,
                "zipcode": (event.target.zipcode.value),
                "country": event.target.country.value,
                
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
                        <Modal.Title id='contained-modal-title-vcenter'>Add City</Modal.Title>
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

                                    <Form.Group controlId='name'>
                                        <Form.Label>Name                           
                                        </Form.Label>
                                        <Form.Control type='text' name='name' required placeholder='Enter City Name'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='zipcode'>
                                        <Form.Label>ZipCode                          
                                        </Form.Label>
                                        <Form.Control type='text' name='zipcode' required placeholder='Enter ZIP Code'></Form.Control>
                                    </Form.Group>


                                    <Form.Group controlId='country'>
                                        <Form.Label>Country                           
                                        </Form.Label>
                                        <Form.Control type='text' name='country' required placeholder='Enter Country'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='name'>
                                        <Button variant='primary' type='submit' onClick={this.props.onHide}>Add City</Button>
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