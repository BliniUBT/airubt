import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import '../../assets/css/editcitymodel.css'

export class EditCityModel extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.zipcode.value);
        console.log(event.target.country.value);
       

        fetch('http://localhost:39990/api/city/updateCity',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "name": event.target.name.value,
                "zipcode": parseInt(event.target.zipcode.value),
                "country": event.target.country.value,
                
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
                    <Modal.Header>
                        <Modal.Title id='contained-modal-title-vcenter'>Edit City</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={7}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId='name'>
                                        <Form.Label>Name                           
                                        </Form.Label>
                                        <Form.Control type='text' name='name' required disabled defaultValue={this.props.name} placeholder='Name'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='zipcode'>
                                        <Form.Label>ZipCode                           
                                        </Form.Label>
                                        <Form.Control type='number' name='zipcode' required defaultValue={this.props.zipcode} placeholder='Enter ZIP Code'></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='Country'>
                                        <Form.Label>Country                           
                                        </Form.Label>
                                        <Form.Control type='text' name='country' required defaultValue={this.props.country} placeholder='Enter Country'></Form.Control>
                                    </Form.Group>

                                  

                                    <Form.Group>
                                        <Button variant='primary' type='submit'>Update City</Button>
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