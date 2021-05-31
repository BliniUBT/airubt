import React from "react";
import "../assets/css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import FlightIcon from "@material-ui/icons/Flight";
import './login/index'
import {BrowserRouter, Route,Link, Switch} from 'react-router-dom';

// import Admin from "../admin/components/Admin"

function Header() {
    return (
        <div className="header">
            <FlightIcon className="header__icon"/>

            <div className="header__center">
                <input type="text" placeholder="Search..."/>

                <SearchIcon/>
            </div>

            <div className="header__right">
                <Link to="/login">
                    <button id="loginbutton">Log In</button>
                </Link>
                <Link to="/login">
                <button id="signupbutton">Sign Up</button>
                </Link>
            </div>
        </div>
    );
}

export default Header;
