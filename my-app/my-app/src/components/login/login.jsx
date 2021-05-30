import React from "react";
import LoginImg from "../login/assets/login.svg";


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg}/>
                </div>

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" placeholder="E-Mail"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
    }
}