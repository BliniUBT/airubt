import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddCityModel} from './AddCityModel';
import {EditCityModel} from './EditCityModel';
import Admin from '../Admin';
import '../../assets/css/cities.css'

export class Cities extends Component{

    constructor(props){
        super(props);
        this.state={city:[], addModalShow: false, editModalShow: false};
    }

    refreshList(){
        fetch('http://localhost:39990/api/city/getCities')
        .then(response=>response.json())
        .then(data=>{
            this.setState({city:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteCity(name){
        if(window.confirm('Are you sure?')){
            fetch('http://localhost:39990/api/city/deleteCity/'+name,{
                method:'DELETE',
                header:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                }
            })
        }
    }

    render(){
        const {city, name, zipcode, country} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>
                <ButtonToolbar>
                <Button variant='primary' id="add-btn" onClick={()=>this.setState({addModalShow:true})}>
                     Add City       
                    </Button>
                    <AddCityModel show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
                <div className="cities-container">
                <Table>
                    <thead>
                        <th>Name</th>
                        <th>ZipCode</th>
                        <th>Country</th>
                        
                    </thead>
                    <tbody>
                        {city.map(c=>
                            <tr key={c.name}>
                                <td>{c.name}</td>
                                <td>{c.zipcode}</td>
                                <td>{c.country}</td>
                                
                                 <td> 
                                 <ButtonToolbar>
                                    <Button variant='primary' onClick={()=>this.setState({editModalShow:true, name:c.name, zipcode:c.zipcode, country:c.country})}>
                                    Edit City  
                                    </Button>

                                    <Button variant='danger' onClick={()=>this.deleteCity(c.name)}>
                                    Delete City    
                                    </Button>

                                    <EditCityModel show={this.state.editModalShow} onHide={editModalClose}
                                    name={name}
                                    zipcode={zipcode}
                                    country={country}
                                    />
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

export default Cities