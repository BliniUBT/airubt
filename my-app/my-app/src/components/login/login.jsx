import React from "react";
import LoginImg from "../login/assets/login.svg";
import "./style.scss";


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-containero">
            <div className="headero">Login</div>
            <div className="contento">
                <div className="imageo">
                    <img src={LoginImg}/>
                </div>

                <div className="formo">
                    <div className="formo-group">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" name="email" placeholder="E-Mail"/>
                    </div>
                    <div className="formo-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className="footero">
                <button type="button" className="btn">Login</button>
            </div>
        </div>
    }
}