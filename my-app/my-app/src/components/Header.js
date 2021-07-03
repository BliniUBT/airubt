import React, {useEffect, useState} from "react";
import "../assets/css/header.css";
import SearchIcon from "@material-ui/icons/Search";
import FlightIcon from "@material-ui/icons/Flight";
import {BrowserRouter, Route,Link, Switch} from 'react-router-dom';

// import Admin from "../admin/components/Admin"

const Header = ({name}) => {

    
    const logout = async () => {
        console.log(name);
        await fetch('http://localhost:39990/api/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

    }

    let menu;

    if(name === '' || !name){
        menu = (
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
                <Link to="/register">
                <button id="signupbutton">Sign Up</button>
                </Link>
            </div>
        </div>
        )
        }else {
            menu = (
                <div className="header">
            <FlightIcon className="header__icon"/>

            <div className="header__center">
                <input type="text" placeholder="Search..."/>

                <SearchIcon/>
            </div>

            <div className="header__right">
                <p className="user-name">Welcome, {name}</p>
                <Link to="/">
                    <button id="loginbutton" onClick={logout}>Logout</button>
                </Link>
            </div>
        </div>
            )
    }
    return (
        <div>
        {menu}
        </div>
    );
}

export default Header;
