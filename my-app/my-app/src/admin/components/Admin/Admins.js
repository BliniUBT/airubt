import React, { Component } from 'react';
import { Table, Button, ButtonToolbar } from 'react-bootstrap';
import { AddAdminModel } from './AddAdminModel';
import { EditAdminModel } from './EditAdminModel';
import Admin from '../Admin';
import '../../assets/css/admins.css'

export class Admins extends Component {

    constructor(props) {
        super(props);
        this.state = { admin: [], addModalShow: false, editModalShow: false };
    }

    refreshList() {
        fetch('http://localhost:39990/api/admin/getadmins')
            .then(response => response.json())
            .then(data => {
                this.setState({ admin: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.refreshList();
    }

    deleteAdmin(id) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:39990/api/admin/deleteAdmin/' + id, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }

    render() {
        const { admin, id, adminfname, adminlname, adminemail, adminphonenumber } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });

        return (
            <div>
                <ButtonToolbar>
                    <Button variant='primary' id="add-btn" onClick={() => this.setState({ addModalShow: true })}>
                        Add Admin
                    </Button>
                    <AddAdminModel show={this.state.addModalShow} onHide={addModalClose} />
                </ButtonToolbar>
                <div className="admins-container">
                    <Table>
                        <thead>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                        </thead>
                        <tbody>
                            {admin.map(a =>
                                <tr key={a.id}>
                                    <td>{a.id}</td>
                                    <td>{a.firstname}</td>
                                    <td>{a.lastname}</td>
                                    <td>{a.email}</td>
                                    <td>{a.phoneNumber}</td>
                                    <td>
                                        <ButtonToolbar>
                                            <Button variant='primary' onClick={() => this.setState({ editModalShow: true, id: a.id, adminfname: a.firstname, adminlname: a.lastname, adminemail: a.email, adminphonenumber: a.phoneNumber })}>
                                                Edit Admin
                                    </Button>

                                            <Button variant='danger' onClick={() => this.deleteAdmin(a.id)}>
                                                Delete Admin
                                    </Button>

                                            <EditAdminModel show={this.state.editModalShow} onHide={editModalClose}
                                                id={id}
                                                adminfname={adminfname}
                                                adminlname={adminlname}
                                                adminemail={adminemail}
                                                adminphonenumber={adminphonenumber} />
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

export default Admins