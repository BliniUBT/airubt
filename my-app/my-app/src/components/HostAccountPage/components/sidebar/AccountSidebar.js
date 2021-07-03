import '../../assets/css/account.css';
import React from 'react'
import App from '../../../../App'
import { Router, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountIcon from '@material-ui/icons/AccountCircleSharp';



const AccountSidebar = ({ sidebarOpen, closeSidebar }) => {

    const logout = async () => {
        await fetch('http://localhost:39990/api/user/logout', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        });

    }

    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <AccountIcon/>
                    <h1>My Account</h1>
                </div>
                <i
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}>

                </i>
            </div>

            <div className="sidebar_menu">
                { <div className="sidebar_link active_menu_link">
                    
                <Link to="#"> Personal info</Link>
                </div> }

                { <div className="sidebar_link active_menu_link">
                    
                <Link to="/hostaccount/appartments"> My Appartments</Link>
                </div> }

                {/* { <div className="sidebar_link active_menu_link">
                   
                <Link to="#">Add Appartment</Link>
                </div> } */}
               
                <div className="sidebar_logout">
                    <Link to="/">
                        <button id="logoutbutton" onClick={logout}>Logout</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AccountSidebar;
