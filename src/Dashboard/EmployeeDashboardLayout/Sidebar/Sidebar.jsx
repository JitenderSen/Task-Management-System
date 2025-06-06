import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

const Sidebar = ({ data, loggedOutUser }) => {

  const navigate = useNavigate();

  console.log("sidebar data is :", data)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')
    loggedOutUser('')
    navigate("/");
  };

  return (
    <div>
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="profile-section">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVzD4rGq42PnjKHt9BkhRdJdAa9ojZ1kByw&s" alt="Profile" className="profile-pic" />
          <h2 className="employee-name">{data.firstName}</h2>
        </div>
        <nav className="nav-menu">
          <ul>
            <li><Link to="/employee" className="nav-link">Dashboard</Link></li>
            <li><Link to="/employee/newtask" className="nav-link">New Tasks</Link></li>
            <li><Link to="/employee/completedtask" className="nav-link">Completed Tasks</Link></li>
            <li><Link to="/employee/acceptedtask" className="nav-link">Accepted Tasks</Link></li>
            <li><Link to="/employee/failedtask" className="nav-link">Failed Tasks</Link></li>
            <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default Sidebar