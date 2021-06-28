import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddAppartmentModel} from './AddAppartmentModel';
import {EditAppartmentModel} from './EditAppartmentModel';
import HostAccount from '../../HostAccount';
import '../../assets/css/appartment.css'

export class Appartment extends Component{

    constructor(props){
        super(props);
        this.state={appartment:[], addModalShow: false, editModalShow: false};
    }

    refreshList(){
        fetch('http://localhost:39990/api/user/getusers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({appartment:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteUser(id){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:39990/api/user/deleteUser/'+id,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }

    render(){
        const {appartment, id, appAddress, appRooms, appSpace, appMaxGuests, appToilets, appTerrace, appGarden, appGarage, appCheckin, appCheckout, appReview, appNotes, appCity, appCategory} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>
                <ButtonToolbar>
                <Button variant='primary' id="add-btn" onClick={()=>this.setState({addModalShow:true})}>
                     Add Appartment       
                    </Button>
                    <AddAppartmentModel show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
                <div className="appartment-container">
                <Table>
                    <thead>
                        <th>City</th>
                        <th>Address</th>
                        <th>Rooms</th>
                        <th>Space</th>
                        <th>Max Guests</th>
                        <th>Toilets</th>
                        <th>Terrace</th>
                        <th>Garden</th>
                        <th>Garage</th>
                        <th>Checkin</th>
                        <th>Checkout</th>
                        <th>Review</th>
                        <th>Notes</th>
                        <th>Category</th>

                    </thead>
                    <tbody>
                        {appartment.map(app=>
                            <tr key={app.id}>
                                {/* <td>{app.id}</td> */}
                                <td>{app.city}</td>
                                <td>{app.address}</td>
                                <td>{app.rooms}</td>
                                <td>{app.space}</td>
                                <td>{app.maxguests}</td>
                                <td>{app.toilets}</td>
                                <td>{app.terrace}</td>
                                <td>{app.garden}</td>
                                <td>{app.garage}</td>
                                <td>{app.checkin}</td>
                                <td>{app.checkout}</td>
                                <td>{app.review}</td>
                                <td>{app.notes}</td>
                                <td>{app.category}</td>
                                 <td> 
                                 <ButtonToolbar>
                                    <Button variant='primary' onClick={()=>this.setState({editModalShow:true, id:app.id, appCity:app.city,
                                         appAddress:app.address, appRooms:app.rooms, appSpace:app.space, appMaxGuests:app.maxguests, 
                                         appToilets:app.toilets, appTerrace:app.terrace, appGarden:app.garden, appCheckin:app.checkin, 
                                         appCheckout:app.checkout, appReview:app.review, appNotes:app.notes, appCategory:app.category})}>
                                    Edit Appartment       
                                    </Button>

                                    <Button variant='danger' onClick={()=>this.deleteUser(app.id)}>
                                    Delete Appartment      
                                    </Button>

                                    <EditAppartmentModel show={this.state.editModalShow} onHide={editModalClose}
                                    id={id}
                                    appCity={appCity}
                                    appAddress={appAddress}
                                    appRooms={appRooms}
                                    appSpace={appSpace}
                                    appMaxGuests={appMaxGuests}
                                    appToilets={appToilets}
                                    appTerrace={appTerrace}
                                    appGarden={appGarden}
                                    appGarage={appGarage}
                                    appCheckin={appCheckin}
                                    appCheckout={appCheckout}
                                    appReview={appReview}
                                    appNotes={appNotes}
                                    appCategory={appCategory}/>

                                </ButtonToolbar> 
                                 </td> 
                            </tr>)}
                    </tbody>
                </Table>
                </div>
            </div>
        )
    }
}

export default Appartment