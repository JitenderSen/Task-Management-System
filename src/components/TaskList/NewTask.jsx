// NewTask.jsx
import React, { useEffect, useState } from "react";
import "../TaskList/TaskList.css";

const NewTask = ({ data }) => {
  const [updatedData, setUpdatedData] = useState(data);
  const [taskStatus, setTaskStatus] = useState({});

  useEffect(() => {
    if (data) {
      setUpdatedData(data);
      const storedStatus = JSON.parse(localStorage.getItem("taskStatus")) || {};
      setTaskStatus(storedStatus);
    }
  }, [data]);

  const handleAcceptTask = (taskTitle) => {
    const newStatus = { ...taskStatus, [taskTitle]: "accepted" };
    setTaskStatus(newStatus);
    localStorage.setItem("taskStatus", JSON.stringify(newStatus));
  
    //  New Task se Remove karne ka logic
    const updatedTasks = updatedData?.tasks?.map((task) => 
      task.title === taskTitle ? { ...task, newTask: false } : task
    );
  
    const newUpdatedData = { ...updatedData, tasks: updatedTasks };
    setUpdatedData(newUpdatedData);
  
    //  LocalStorage me bhi Update karna zaroori hai
    const allEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = allEmployees.map(emp => 
      emp.email === updatedData.email ? newUpdatedData : emp
    );
  
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: newUpdatedData }));
  };
  

  const newTasks = updatedData?.tasks?.filter((task) => task.newTask) || [];

  return (
    <div className="tasklist-container">
      {newTasks.map((task, index) => (
        <div key={index} className="tasklist-card newtask-cardd">
          <div className="priority-date-section">
            <span className="task-priority">{task.category}</span>
          </div>
          <h3 className="taskname-heading">{task.title}</h3>
          <p className="taskname-description">{task.description}</p>
          <div className="mark-btnn">
            <button
              className="task-action-btn bg-linear-accept"
              onClick={() => handleAcceptTask(task.title)}
            >
              Accept Task
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewTask;