import '../../assets/css/sidebar.css';
import React from 'react'
import App from '../../../App'
import { Router, Link, BrowserRouter, Route, Switch } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CityIcon from '@material-ui/icons/LocationCity';



const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src="" alt="logo" />
                    <h1></h1>
                </div>
                <i
                    id="sidebarIcon"
                    onClick={() => closeSidebar()}>

                </i>
            </div>

            <div className="sidebar_menu">
                {/* <div className="sidebar_link active_menu_link">
                    <i>xxx</i>
                    <a href="#">Dashboard</a>
                </div> */}
                <h2>Dashboard</h2>
                <div className="sidebar_link">
                    <PeopleIcon />
                    <Link to="/admin/Admins"> Admins</Link>
                </div>
                <div className="sidebar_link">
                    <PeopleIcon />
                    <Link to="/admin/Users"> Users</Link>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Hosts</a>
                </div>
                <div className="sidebar_link">
                    <CityIcon />
                    <Link to="/admin/Cities"> Cities</Link>
                </div>
                {/* <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Appartments Managment</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Users Managment</a>
                </div>
                <h2>Leave</h2>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Contracts</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Admin Managment</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Admin Managment</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Admin Managment</a>
                </div> */}
                <h2>Logout</h2>
                <div className="sidebar_logout">
                    <ExitToAppIcon />
                    <a href="#"> Logout</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
