// AdminSidebar.jsx

import React from 'react'
import "../AdminSidebar/AdminSidebar.css"
import { Link } from 'react-router-dom'
const AdminSidebar = ({ setSelectedComponent }) => {
    return (
        <div className="admin-sidebar">
            <div className="admin-sidebar-logo">
                <h2 className='sidebar-comp-logo'>ems</h2>
            </div>
            <ul>
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/ui-icons">UI Icons</Link></li>
                <li><Link to="/admin/createtask">Create Task</Link></li>  {/* Create Task Link */}
                <li><Link to="/tables">Tables</Link></li>
                <li><Link to="/calendar">Calendar</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>


        </div>
    )
}

export default AdminSidebar