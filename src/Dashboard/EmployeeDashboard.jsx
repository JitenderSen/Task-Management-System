// EmployeeDashboard.jsx

import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import "../Dashboard/EmployeeDashboard.css";
import Header from '../Dashboard/EmployeeDashboardLayout/Header/Header.jsx';
import EmployeeContent from './EmployeeDashboardLayout/EmployeeContent/EmployeeContent.jsx';
import NewTask from '../components/TaskList/NewTask.jsx';
import Sidebar from './EmployeeDashboardLayout/Sidebar/Sidebar.jsx';
import CompletedTask from '../components/TaskList/ComletedTask.jsx';
import AcceptedTask from '../components/TaskList/AcceptedTask.jsx';
import FailedTask from '../components/TaskList/FailedTask.jsx';

const EmployeeDashboard = ({ data, loggedOutUser, setLoggedInUserData }) => {
    console.log("Employee Dashboard Data:", data);

    const [updatedData, setUpdatedData] = useState(data);
    const navigate = useNavigate(); // useNavigate for redirection

    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

        if (!loggedInUser || loggedInUser.role !== "employee") {
            navigate("/login"); // Agar employee nahi hai, to login page par bhejo
            return;
        }

        setUpdatedData(loggedInUser.data);

        const interval = setInterval(() => {
            const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
            const latestUserData = storedEmployees.find(emp => emp.email === data.email);
        
            if (latestUserData) {
                // ✅ Ensure karo ki sirf newTask == true wale show ho
                const filteredTasks = latestUserData.tasks.map(task => ({
                    ...task,
                    newTask: task.newTask ? true : false
                }));
        
                const finalUserData = { ...latestUserData, tasks: filteredTasks };
                setUpdatedData(finalUserData);
        
                localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: finalUserData }));
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [data, navigate]);

    useEffect(() => {
        console.log("EmployeeDashboard Updated Data:", updatedData);
    }, [updatedData]);

    return (
        // <div className="employeeDashboard-container">
        //     <Header data={data} loggedOutUser={loggedOutUser} />

        //     <div className="employeeContent">
        //         <Routes>
        //             <Route path="/" element={<EmployeeContent data={updatedData} />} />
        //             <Route path="newtask" element={<NewTask data={updatedData} setLoggedInUserData={setLoggedInUserData} />} />
        //         </Routes>
        //     </div>
        // </div>

        <div className="employee-dashboard">
            <Sidebar data={data} loggedOutUser={loggedOutUser} />

            {/* Sidebar */}
            {/* <aside className="sidebar">
                <div className="profile-section">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVzD4rGq42PnjKHt9BkhRdJdAa9ojZ1kByw&s" alt="Profile" className="profile-pic" />
                    <h2 className="employee-name">{data.firstName}</h2>
                </div>
                <nav className="nav-menu">
                    <ul>
                        <li><Link to="/employee" className="nav-link">Dashboard</Link></li>
                        <li><Link to="/employee/newtask" className="nav-link">New Tasks</Link></li>
                        <li><Link to="/employee/completed" className="nav-link">Completed Tasks</Link></li>
                        <li><button className="logout-btn">Logout</button></li>
                    </ul>
                </nav>
            </aside> */}

            {/* Main Content */}
            <main className="main-content">
                <Header />
                <Routes>
                    <Route path="/" element={<EmployeeContent data={updatedData} />} />
                    <Route path="newtask" element={<NewTask data={updatedData} setLoggedInUserData={setLoggedInUserData} />} />
                    <Route path="completedtask" element={<CompletedTask data={updatedData} setLoggedInUserData={setLoggedInUserData} />} />
                    <Route path="acceptedtask" element={<AcceptedTask data={updatedData} setLoggedInUserData={setLoggedInUserData} />} />
                    <Route path="failedtask" element={<FailedTask data={updatedData} setLoggedInUserData={setLoggedInUserData} />} />
                </Routes>
                {/* <header className="dashboard-header">
                    <h1>Employee Dashboard</h1>
                    <input type="text" placeholder="Search..." className="search-box" />
                </header> */}

                {/* Task Summary Cards */}
                {/* <div className="task-summary">
                    <div className="task-card new-task">
                        <h3>New Tasks</h3>
                        <p>5</p>
                    </div>
                    <div className="task-card completed-task">
                        <h3>Completed</h3>
                        <p>12</p>
                    </div>
                    <div className="task-card pending-task">
                        <h3>Pending</h3>
                        <p>3</p>
                    </div>
                    <div className="task-card failed-task">
                        <h3>Failed</h3>
                        <p>1</p>
                    </div>
                </div> */}

                {/* Task List Section */}
                {/* <section className="task-list">
                    <h2>Your Tasks</h2>
                    <div className="task-table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Design UI</td>
                                    <td className="high-priority">High</td>
                                    <td>Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section> */}
            </main>
        </div>


    );
};

export default EmployeeDashboard;
