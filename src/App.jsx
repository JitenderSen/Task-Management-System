import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import Login from './components/Auth/Login';
import EmployeeDashboard from './Dashboard/EmployeeDashboard';
import AdminDashboard from './Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  useEffect(() => {
    setLocalStorage(); 
    const { employees, admin } = getLocalStorage();

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    const admin = authData.admin.find(admin => admin.email === email && admin.password === password);
    if (admin) {
      setUser('admin');
      setLoggedInUserData(admin)
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
    } else {
      const employee = authData.employees.find(emp => emp.email === email && emp.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid Credentials');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    setLoggedInUserData(null);
  };

  return (
    <Router>
      <Routes>
        {/*  Agar koi login nahi hai, toh Login page dikhaye */}
        <Route path="/" element={!user ? <Login handleLogin={handleLogin} /> : <Navigate to={`/${user}`} />} />

        {/*  Agar Employee hai, toh Employee Dashboard dikhaye */}
        <Route path="/employee/*" element={user === null ? null : (user === 'employee' ? <EmployeeDashboard data={loggedInUserData} setLoggedInUserData={setLoggedInUserData} loggedOutUser={handleLogout} /> : <Navigate to="/" />)} />

        {/*  Agar Admin hai, toh Admin Dashboard dikhaye */}
        <Route path="/admin/*" element={user === null ? null : (user === 'admin' ? <AdminDashboard data={loggedInUserData} setLoggedInUserData={setLoggedInUserData} loggedOutUser={handleLogout} /> : <Navigate to="/" />)}/>

        {/*  Koi unknown route ho toh Login par redirect kare */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
