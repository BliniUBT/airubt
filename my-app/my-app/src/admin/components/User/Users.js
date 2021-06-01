import React,{Component} from 'react';
import {Table, Button, ButtonToolbar} from 'react-bootstrap';
import {AddUserModel} from './AddUserModel';
import {EditUserModel} from './EditUserModel';
import Admin from '../Admin';
import '../../assets/css/users.css'

export class Users extends Component{

    constructor(props){
        super(props);
        this.state={user:[], addModalShow: false, editModalShow: false};
    }

    refreshList(){
        fetch('http://localhost:39990/api/user/getusers')
        .then(response=>response.json())
        .then(data=>{
            this.setState({user:data});
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
        const {user, id, userfname, userlname, useremail, birthdate, userage, userphonenumber} = this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});

        return(
            <div>
                <ButtonToolbar>
                <Button variant='primary' id="add-btn" onClick={()=>this.setState({addModalShow:true})}>
                     Add user       
                    </Button>
                    <AddUserModel show={this.state.addModalShow} onHide={addModalClose}/>
                </ButtonToolbar>
                <div className="users-container">
                <Table>
                    <thead>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>BirthDate</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                    </thead>
                    <tbody>
                        {user.map(u=>
                            <tr key={u.id}>
                                <td>{u.id}</td>
                                <td>{u.firstname}</td>
                                <td>{u.lastname}</td>
                                <td>{u.email}</td>
                                <td>{u.birthDate}</td>
                                <td>{u.age}</td>
                                <td>{u.phoneNumber}</td>
                                 <td> 
                                 <ButtonToolbar>
                                    <Button variant='primary' onClick={()=>this.setState({editModalShow:true, id:u.id, userfname:u.firstname, userlname:u.lastname, useremail:u.email, birthdate:u.birthDate, userphonenumber:u.phoneNumber})}>
                                    Edit User       
                                    </Button>

                                    <Button variant='danger' onClick={()=>this.deleteUser(u.id)}>
                                    Delete User      
                                    </Button>

                                    <EditUserModel show={this.state.editModalShow} onHide={editModalClose}
                                    id={id}
                                    userfname={userfname}
                                    userlname={userlname}
                                    useremail={useremail}
                                    birthdate={birthdate}
                                    userphonenumber={userphonenumber}/>
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

export default Users