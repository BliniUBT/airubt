import React from "react";
import LoginImg from "../login/assets/login.svg";


export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-containero">
            <div className="headero">Register</div>
            <div className="contento">
                <div className="image">
                    <img src={LoginImg}/>
                </div>

                <div className="formo">
                    <div className="formo-group">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" placeholder="First Name"/>
                    </div>
                    <div className="formo-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" placeholder="Last Name"/>
                    </div>
                    <div className="formo-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" placeholder="E-Mail"/>
                    </div>
                    <div className="formo-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" placeholder="Date of Birth"/>
                    </div>
                    <div className="formo-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footero">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
    }
}