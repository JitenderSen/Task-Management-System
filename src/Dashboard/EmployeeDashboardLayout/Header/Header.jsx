import React, { useState } from 'react';
import "../Header/Header.css";

const Header = ({ data, loggedOutUser }) => {

  console.log("header data is :", data)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')
    loggedOutUser('')
  };

  return (
    <>
      {/* <header className="header-container">
        <div className="header-content">
          <div className="header-navbar">
            
              <div className="employee-name-section">
                <span className="employee-greetings">Hello,</span>
                <span className="employee-name">{data.firstName}</span>
              </div>
            

           
            <div className="employee-auth-section">
              <span className="employee-messages">Messages</span>
              <span className="employee-notifications">Notifications</span>
              <button onClick={handleLogout} className="employee-logout-btn">Logout</button>
            </div>
          </div>
        </div>
      </header> */}

      <header className="dashboard-header">
        <h1>Employee Dashboard</h1>
        <input type="text" placeholder="Search..." className="search-box" />
      </header>
    </>
  );
};

export default Header;
