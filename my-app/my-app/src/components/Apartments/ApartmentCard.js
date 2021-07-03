import React,{Component} from 'react';
import { Link } from 'react-router-dom'
import apartmentPhoto from '../../assets/images/apartment.jpg'
import '../../assets/css/cards.css'

// import {Table, Button, ButtonToolbar} from 'react-bootstrap';
// import {AddAppartmentModel} from './AddAppartmentModel';
// import {EditAppartmentModel} from './EditAppartmentModel';
// import HostAccount from '../../HostAccount';
// import '../../assets/css/appartment.css'
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';

const ApartmentCard =({apartment}) => {

        return(
            <div className="card">
            <div className="card-header">
                {apartment.city}
            </div>
            <div className="card-body">
                <div>
                <p className="apartment-address">Address: {apartment.address}</p>
                <p className="apartment-space">Space: {apartment.space} m2</p>
                <p className="apartment-rooms">Rooms: {apartment.rooms}</p>
                <br/>                
                </div>              
                <div className="card-buttons">
                <Link to="#">
                    <button className="btn btn-sm btn-outline-primary mt-2 btn-viewproduct" >
                        Book
                    </button>
                </Link>
                </div>
            </div>
        </div>
        )
}

export default ApartmentCard