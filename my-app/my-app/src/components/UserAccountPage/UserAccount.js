import React from 'react'
import {useState} from 'react';
/*import '../assets/css/admin.css'*/
import Sidebar from './components/sidebar/AccountSidebar'

const UserAccount = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="container">
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            
        </div>
    )
}

export default UserAccount
