import React from 'react'
import {useState} from 'react';
/*import '../assets/css/admin.css'*/
import AccountSidebar from './components/sidebar/AccountSidebar'

const HostAccount = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="container">
            <AccountSidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            
        </div>
    )
}

export default HostAccount
