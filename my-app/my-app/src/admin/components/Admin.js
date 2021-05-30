import React from 'react'
import {useState} from 'react';
import '../assets/css/admin.css'
import Sidebar from './sidebar/Sidebar'

const Admin = () => {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const openSidebar = () => {
        setSidebarOpen(true);
    }

    const closeSidebar = () => {
        setSidebarOpen(false);
    }

    return (
        <div className="container">
            <h1>React Dashboard</h1>
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
            
        </div>
    )
}

export default Admin
