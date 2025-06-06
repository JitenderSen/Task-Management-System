import React, { useEffect, useState } from "react";
import "../TaskList/TaskList.css";

const CompletedTask = ({ data }) => {
    const [taskStatus, setTaskStatus] = useState(
        JSON.parse(localStorage.getItem("taskStatus")) || {}
    );

    useEffect(() => {
        // Har 2 second me taskStatus update karo
        const interval = setInterval(() => {
            setTaskStatus(JSON.parse(localStorage.getItem("taskStatus")) || {});
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    //  Filter completed tasks based on localStorage OR completedTask flag
    const completedTasks = data?.tasks?.filter(
        (task) => taskStatus[task.title] === "completed" || task.completedTask === true
    ) || [];

    return (
        <div className="tasklist-container">
            {completedTasks.length === 0 ? (
                <p>No completed tasks yet.</p>
            ) : (
                completedTasks.map((task, index) => (
                    <div key={index} className="tasklist-card completedtask-cardd">
                        <div className="priority-date-section">
                            <span className="task-priority">{task.category}</span>
                            <span className="task-date">{task.date}</span>
                        </div>
                        <h3 className="taskname-heading">{task.title}</h3>
                        <p className="taskname-description">{task.description}</p>
                        {/* <div className="mark-btnn"> */}
                        <span className="task-completed-btn">Task Completed</span>
                        {/* </div> */}
                    </div>
                ))
            )}
        </div>
    );
};

export default CompletedTask;
