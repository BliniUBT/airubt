import '../../assets/css/sidebar.css';


import React from 'react'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar_title">
                <div className="sidebar_img">
                    <img src="" alt="logo" />
                    <h1>Codersbite</h1>
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
                    <i>xxxx</i>
                    <a href="./Users">Users</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Company Managment</a>
                </div>
                <div className="sidebar_link">
                    <i>xxxx</i>
                    <a href="#">Employee Managment</a>
                </div>
                <div className="sidebar_link">
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
                </div>
                <h2>Logout</h2>
                <div className="sidebar_logout">
                    <i>xxxx</i>
                    <a href="#">Logout</a>
                </div>
            </div>            
        </div>
    )
}

export default Sidebar;
