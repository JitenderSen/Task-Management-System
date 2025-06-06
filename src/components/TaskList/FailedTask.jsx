import React from "react";
import "../TaskList/TaskList.css";

const FailedTask = ({ data }) => {
  const failedTasks = data?.tasks?.filter((task) => {
    const taskStatus = JSON.parse(localStorage.getItem("taskStatus")) || {};
    return taskStatus[task.title] === "failed";
  }) || [];

  return (
    <div className="tasklist-container">
      {failedTasks.length > 0 ? (
        failedTasks.map((task, index) => (
          <div key={index} className="tasklist-card failedtask-cardd">
            <div className="priority-date-section">
              <span className="task-priority">{task.category}</span>
              <span className="task-date">{task.date}</span>
            </div>
            <h3 className="taskname-heading">{task.title}</h3>
            <p className="taskname-description">{task.description}</p>
            {/* <div className="mark-btnn"> */}
              <span className="task-failed-btn">Failed</span>
            {/* </div> */}
          </div>
        ))
      ) : (
        <p className="no-task-message">No failed tasks yet.</p>
      )}
    </div>
  );
};

export default FailedTask;
