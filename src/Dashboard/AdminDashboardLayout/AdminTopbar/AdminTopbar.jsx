import React, { useState } from 'react'
import "../AdminTopbar/AdminTopbar.css"
import { useNavigate } from 'react-router-dom';

const AdminTopbar = ({ data, loggedOutUser }) => {

  const navigate = useNavigate();

  console.log("AdminData is: ", data)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')
    loggedOutUser('')
    navigate("/");
  };


  return (
    <header className="topbar-container">
      <div className="topbar-content">
        <div className="topbar-navbar">
          {/* Admin Name Section */}
          <div className="admin-name-section">
            <span className="admin-greetings">Hello,</span>
            <span className="admin-name">{data.firstName}</span>
          </div>
          {/* Admin Auth Section */}
          <div className="admin-auth-section">
            <span className="admin-messages">Messages</span>
            <span className="admin-notifications">Notifications</span>
            <button onClick={handleLogout} className="admin-logout-btn">Logout</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminTopbar