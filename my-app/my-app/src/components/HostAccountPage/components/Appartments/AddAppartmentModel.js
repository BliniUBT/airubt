import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form, DropdownButton,Dropdown} from 'react-bootstrap';
// import '../../assets/css/addusermodel.css';

export class AddAppartmentModel extends Component{
    constructor(props){
        super(props);
        this.state={city:[], cityId:"",hasTerrace:false,hasGarden:false,hasGarage:false};
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSelect(e){
        console.log(e);
        this.setState({cityId:e});
    }

    citiesList(){
        fetch('http://localhost:39990/api/city/getCities')
        .then(response=>response.json())
        .then(data=>{
            this.setState({city:data});
        });
    }

    componentDidMount(){
        this.citiesList();
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:39990/api/host/createApartment',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            credentials: 'include',
            body:JSON.stringify({
                "address": event.target.address.value,
                "rooms": event.target.rooms.value,
                "space": event.target.space.value,
                "maxGuests": event.target.maxGuests.value,
                "toilets": event.target.toilets.value,
                "terrace": this.state.hasTerrace,
                "garden": this.state.hasGarden,
                "garage": this.state.hasGarage,
                "review": event.target.review.value,
                "notes": event.target.notes.value,
                "city": this.state.cityId,
                "category": "Apartment"

            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        })

    }

    render(){
        const {city} = this.state;
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
                                        <Form.Check type="checkbox" name='terrace' onChange={()=>this.setState({hasTerrace: !this.state.hasTerrace})} label=" Has terrace?" />
                                    </Form.Group>

                                    <Form.Group controlId='garden'>
                                        <Form.Check type="checkbox" name='garden' onChange={()=>this.setState({hasGarden: !this.state.hasGarden})} label=" Has garden?" />
                                    </Form.Group>

                                    <Form.Group controlId='garage'>
                                        <Form.Check type="checkbox" name='garage' onChange={()=>this.setState({hasGarage: !this.state.hasGarage})} label=" Has garage?" />
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

                                    <DropdownButton 
                                        title="Select city"
                                        >
                                    {city.map(c=>(
                                        <Dropdown.Item name="city" title={c.name} onClick={()=>this.setState({cityId:c.name})}>{c.name}</Dropdown.Item>
                                    ))}
                                    </DropdownButton>

                                    

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