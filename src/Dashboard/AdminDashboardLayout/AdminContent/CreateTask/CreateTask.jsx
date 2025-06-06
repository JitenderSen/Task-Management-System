import React, { useEffect, useState } from "react";
import "../CreateTask/CreateTask.css"; // CSS file import
import { getLocalStorage, setLocalStorage } from "../../../../utils/LocalStorage";

const CreateTask = ({ setLoggedInUserData }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskStartDate, setTaskStartDate] = useState("");
  const [taskStartTime, setTaskStartTime] = useState("");
  const [taskEndDate, setTaskEndDate] = useState("");
  const [taskEndTime, setTaskEndTime] = useState("");
  const [employees, setEmployees] = useState([]); // Employees state
  const [assignedTo, setAssignedTo] = useState(""); // Selected employee
  const [categories, setCategories] = useState([]); // Categories state

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
    
    let allTasks = storedEmployees.flatMap((emp) => emp.tasks || []);
    let uniqueCategories = [...new Set(allTasks.map((task) => task.category))];
    setCategories(uniqueCategories);

    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser && loggedInUser.role === "employee") {
      const employee = storedEmployees.find(emp => emp.email === loggedInUser.data.email);
      if (employee) {
        setLoggedInUserData(employee);
      }
    }
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskCategory || !taskDescription || !taskStartDate || !taskStartTime || !taskEndDate || !taskEndTime || !assignedTo) {
      alert("Please fill all fields!");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      startDate: taskStartDate,
      startTime: taskStartTime,
      endDate: taskEndDate,
      endTime: taskEndTime,
      category: taskCategory,
      active: true,
      newTask: true,
      completedTask: false,
      failedTask: false,
    };

    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = storedEmployees.map((emp) => {
      if (emp.email === assignedTo) {
        return {
          ...emp,
          tasks: emp.tasks ? [...emp.tasks, newTask] : [newTask],
          taskNumbers: {
            ...emp.taskNumbers,
            active: (emp.taskNumbers.active || 0) + 1,
            newTask: (emp.taskNumbers.newTask || 0) + 1,
          },
        };
      }
      return emp;
    });

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    setTaskTitle("");
    setTaskCategory("");
    setTaskDescription("");
    setTaskStartDate("");
    setTaskStartTime("");
    setTaskEndDate("");
    setTaskEndTime("");
    setAssignedTo("");

    alert("Task Assigned Successfully!");
    setEmployees(updatedEmployees);
  };

  return (
    <div className="create-task-container">
      <h2>Create Task</h2>
      <form onSubmit={submitHandler}>
        <div className="task-form">
          <div className="form-group">
            <label htmlFor="task-title">Task Title</label>
            <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} type="text" id="task-title" placeholder="Enter task title" />
          </div>

          <div className="form-group">
            <label htmlFor="task-assignTo">Assign To</label>
            <select id="task-assignTo" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)}>
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.email}>{emp.firstName} ({emp.email})</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-category">Task Category</label>
            <select id="task-category" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}>
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="task-start-date">Start Date</label>
            <input value={taskStartDate} onChange={(e) => setTaskStartDate(e.target.value)} type="date" id="task-start-date" />
          </div>

          <div className="form-group">
            <label htmlFor="task-start-time">Start Time</label>
            <input value={taskStartTime} onChange={(e) => setTaskStartTime(e.target.value)} type="time" id="task-start-time" />
          </div>

          <div className="form-group">
            <label htmlFor="task-end-date">End Date</label>
            <input value={taskEndDate} onChange={(e) => setTaskEndDate(e.target.value)} type="date" id="task-end-date" />
          </div>

          <div className="form-group">
            <label htmlFor="task-end-time">End Time</label>
            <input value={taskEndTime} onChange={(e) => setTaskEndTime(e.target.value)} type="time" id="task-end-time" />
          </div>

          <div className="form-group">
            <label htmlFor="task-description">Description</label>
            <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} id="task-description" placeholder="Enter task description"></textarea>
          </div>

          <button type="submit" className="create-task-btn">Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
