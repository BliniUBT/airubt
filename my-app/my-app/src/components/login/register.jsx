import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="base-containero" ref={this.props.containerRef}>
                <div className="headero">Register</div>
                <div className="contento">
                    <div className="imageo">
                        <img src={loginImg} />
                    </div>
                    <div className="formo">
                        <div className="formo-group">
                            <label htmlFor="firstname">First Name</label>
                            <input type="text" name="firstname" placeholder="First Name" />
                        </div>
                        <div className="formo-group">
                            <label htmlFor="lastname">Last Name</label>
                            <input type="text" name="lastname" placeholder="Last Name" />
                        </div>
                        <div className="formo-group">
                            <label htmlFor="email">E-Mail</label>
                            <input type="text" name="email" placeholder="E-Mail" />
                        </div>
                        <div className="formo-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <div className="formo-group">
                            <label htmlFor="cfpassword">Password</label>
                            <input type="password" name="cfpassword" placeholder="Confirm Password" />
                        </div>
                    </div>
                </div>
                <div className="footero">
                    <button type="button" className="btno">
                        Register
                    </button>
                </div>
            </div>
        );
    }
}