import React, { useEffect, useState } from "react";
import "../TaskList/TaskList.css";

const AcceptedTask = ({ data }) => {
  const [remainingTimes, setRemainingTimes] = useState({});
  const [taskStatus, setTaskStatus] = useState(
    JSON.parse(localStorage.getItem("taskStatus")) || {}
  );

  useEffect(() => {
    const calculateRemainingTime = (endDate, endTime) => {
      const deadline = new Date(`${endDate}T${endTime}:00`).getTime();
      const now = new Date().getTime();
      const timeLeft = deadline - now;

      if (timeLeft <= 0) return "Time Over";

      const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
      const seconds = Math.floor((timeLeft / 1000) % 60);
      return `${hours}h ${minutes}m ${seconds}s`;
    };

    const interval = setInterval(() => {
      const times = {};
      data?.tasks?.forEach((task) => {
        if (taskStatus[task.title] === "accepted") {
          times[task.title] = calculateRemainingTime(task.endDate, task.endTime);
        }
      });
      setRemainingTimes(times);
    }, 1000);

    return () => clearInterval(interval);
  }, [data, taskStatus]);

  //  Complete Task Handler
  const handleCompleteTask = (taskTitle) => {
    alert("🎉 Congratulations, you have successfully Done Your Task!");
    const newStatus = { ...taskStatus, [taskTitle]: "completed" };
    setTaskStatus(newStatus);
    localStorage.setItem("taskStatus", JSON.stringify(newStatus));
  };

  //  Mark as Failed Handler
  const handleFailTask = (taskTitle) => {
    alert("❌ Task marked as Failed!");
    const newStatus = { ...taskStatus, [taskTitle]: "failed" };
    setTaskStatus(newStatus);
    localStorage.setItem("taskStatus", JSON.stringify(newStatus));
  };

  const acceptedTasks = data?.tasks?.filter(
    (task) => taskStatus[task.title] === "accepted"
  ) || [];

  return (
    <div className="tasklist-container">
      {acceptedTasks.map((task, index) => (
        <div key={index} className="tasklist-card acceptedtask-card">
          <div className="priority-date-section">
            <span className="task-priority">{task.category}</span>
            <span className="task-date"><span>Time Left : </span>{remainingTimes[task.title] || "Calculating..."}</span>
          </div>
          <h3 className="taskname-heading">{task.title}</h3>
          <p className="taskname-description">{task.description}</p>
          <div className="mark-btnn">
            <button
              className="task-action-btn bg-linear-complete"
              onClick={() => handleCompleteTask(task.title)}
            >
              ✅ Complete Task
            </button>
            <button
              className="task-action-btn bg-linear-fail"
              onClick={() => handleFailTask(task.title)}
            >
              ❌ Mark as Failed
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AcceptedTask;
