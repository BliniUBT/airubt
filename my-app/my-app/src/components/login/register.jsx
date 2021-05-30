import React from "react";
import LoginImg from "../login/assets/login.svg";


export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg}/>
                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" placeholder="First Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="E-Mail"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" placeholder="Date of Birth"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    }
}