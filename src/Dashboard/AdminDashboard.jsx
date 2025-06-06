// AdminDashboard.jsx

import React, { useEffect, useState } from 'react';
import "../Dashboard/AdminDashboard.css";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import AdminSidebar from './AdminDashboardLayout/AdminSidebar/AdminSidebar.jsx';
import AdminTopbar from './AdminDashboardLayout/AdminTopbar/AdminTopbar.jsx';
import AdminContent from './AdminDashboardLayout/AdminContent/AdminContent';
import CreateTask from './AdminDashboardLayout/AdminContent/CreateTask/CreateTask.jsx';

const AdminDashboard = ({data, loggedOutUser, setLoggedInUserData}) => {

  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "admin") {
      setAdminData(loggedInUser.data);
    }
  }, []);

  return (
    
      <div className="dashboard-container">
        <AdminSidebar />
        <div className="main-section">
          <AdminTopbar data={data} loggedOutUser={loggedOutUser}/>
          <div className="content">
            <Routes>
              <Route path="/" element={<AdminContent />} />
              <Route path="createtask" element={<CreateTask setLoggedInUserData={setLoggedInUserData} />} />
              {/* Additional Routes */}
            </Routes>
          </div>
        </div>
      </div>
    
  );
};

export default AdminDashboard;

