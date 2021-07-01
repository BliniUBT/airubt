import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddAppartmentModel} from './AddAppartmentModel';
import {EditAppartmentModel} from './EditAppartmentModel';
import HostAccount from '../../HostAccount';
import '../../assets/css/appartment.css'
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export class Appartment extends Component{

    constructor(props){
        super(props);
        this.state={apartment:[], addModalShow: false, editModalShow: false};
    }

    refreshList(){
        fetch('http://localhost:39990/api/host/getApartments',{
            credentials: 'include'
        })
        .then(response=>response.json())
        .then(data=>{
            this.setState({apartment:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    // deleteUser(id){
    //     if(window.confirm('Are you sure?')){
    //         fetch('http://localhost:39990/api/user/deleteUser/'+id,{
    //             method:'DELETE',
    //             header:{
    //                 'Accept':'application/json',
    //                 'Content-Type':'application/json'
    //             }
    //         })
    //     }
    // }

    render(){
        const {apartment, id, appAddress, appRooms, appSpace, appMaxGuests, appToilets, appTerrace, appGarden, appGarage, appReview, appNotes, appCity, appCategory} = this.state;
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
                        <th>Review</th>
                        <th>Notes</th>
                        <th>Category</th>

                    </thead>
                    <tbody>
                        {apartment.map(app=>
                            <tr key={app.id}>
                                {/* <td>{app.id}</td> */}
                                <td>{app.city}</td>
                                <td>{app.address}</td>
                                <td>{app.rooms}</td>
                                <td>{app.space}</td>
                                <td>{app.maxGuests}</td>
                                <td>{app.toilets}</td>
                                <td>{app.terrace ? <CheckIcon/> : <CloseIcon/>}</td>
                                <td>{app.garden ? <CheckIcon/> : <CloseIcon/>}</td>
                                <td>{app.garage ? <CheckIcon/> : <CloseIcon/>}</td>
                                <td>{app.review}</td>
                                <td>{app.notes}</td>
                                <td>{app.category}</td>
                                 <td> 
                                 <ButtonToolbar>
                                    <Button variant='primary' onClick={()=>this.setState({editModalShow:true, id:app.id, appCity:app.city,
                                         appAddress:app.address, appRooms:app.rooms, appSpace:app.space, appMaxGuests:app.maxGuests, 
                                         appToilets:app.toilets, appTerrace:app.terrace, appGarden:app.garden, appReview:app.review, appNotes:app.notes, appCategory:app.category})}>
                                    Edit Appartment       
                                    </Button>

                                    {/* <Button variant='danger' onClick={()=>this.deleteUser(app.id)}>
                                    Delete Appartment      
                                    </Button> */}

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