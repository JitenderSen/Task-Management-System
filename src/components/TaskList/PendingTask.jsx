import React from 'react'
import "../TaskList/TaskList.css";

const PendingTask = () => {
    return (
        <>
            {/* <div className="tasklist-container"> */}
                <div className="tasklist-card pendingtask-card">
                    <div className="priority-date-section">
                        <span className="task-priority">High</span>
                        <span className="task-date">tasks.date</span>
                    </div>
                    <h3 className="taskname-heading">tasks.title</h3>
                    <p className="taskname-description">
                        tasks.description
                    </p>
                    <div className="mark-btnn">
                        <button className="task-action-btn bg-green">Mark as Completed</button>
                        <button className="task-action-btn bg-red">Mark as Failed</button>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}

export default PendingTask