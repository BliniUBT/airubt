import React,{Component} from 'react';
// import {Table, Button, ButtonToolbar} from 'react-bootstrap';
// import {AddAppartmentModel} from './AddAppartmentModel';
// import {EditAppartmentModel} from './EditAppartmentModel';
// import HostAccount from '../../HostAccount';
// import '../../assets/css/appartment.css'
// import CheckIcon from '@material-ui/icons/Check';
// import CloseIcon from '@material-ui/icons/Close';

export class ApCards extends Component{

    constructor(props){
        super(props);
        this.state={apartment:[]};
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

    

    render(){
        const {apartment, id, appAddress, appRooms, appSpace, appMaxGuests, appToilets, appTerrace, appGarden, appGarage, appReview, appNotes, appCity, appCategory} = this.state;

        return(
            <div>
                 {apartment.map(app=>
                <div key={app.id} className="card text-centered">
                  <div className="overflow">
                        <img src="" alt="" />
                  </div>
                  <div className="card-body text-dark">
                        <h4>{app.address}</h4>
                  </div>
                       
                               
                              
                            </div>)}
            </div>
        )
    }
}

export default ApCards