// Cards.jsx

import React, { useContext, useEffect, useState } from 'react'
import "../Cards/Cards.css"
import { Link, } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider';
const Cards = ({ data = { taskNumbers: {} } }) => {
  console.log("Cards.jsx data:", data);


  const [updatedData, setUpdatedData] = useState(data);

  const authData = useContext(AuthContext)
  console.log("cards authData: ", authData)

  useEffect(() => {
    console.log("Updated Employee Data:", updatedData);
  }, [updatedData]);

  if (!data || !data.taskNumbers) {
    return <div>Loading...</div>;
  }
  return (
    <>
      {/* <div className="cards-container">
        <div className="cards-content">

          <div className="cards-row">

            <div className="cards-design" style={{ backgroundColor: "blue" }}>
              <Link to='/employee/newtask'>
                <h4 className='number-count'>{data.taskNumbers.newTask}</h4>
                <h3>New Task</h3>
              </Link>
            </div>


            <div className="cards-design" style={{ backgroundColor: "green" }}>
              <h4 className='number-count'>{data.taskNumbers.completedTask}</h4>
              <h3>Completed Task</h3>
            </div>
            <div className="cards-design" style={{ backgroundColor: "darkcyan" }}>
              <h4 className='number-count'>{data.taskNumbers.acceptedTask}</h4>
              <h3>Accepted Task</h3>
            </div>
            <div className="cards-design" style={{ backgroundColor: "red" }}>
              <h4 className='number-count'>{data.taskNumbers.failedTask}</h4>
              <h3>Failed Task</h3>
            </div>
            <div className="cards-design" style={{ backgroundColor: "darkorange" }}>
              <h4 className='number-count'>{data.taskNumbers.pendingTask}</h4>
              <h3>Pending Task</h3>
            </div>
          </div>

        </div>
      </div> */}

      <div className="task-summary">
        <Link to="/employee/newtask" style={{textDecoration: "none"}}>
          <div className="task-card new-task">
            <h3>New Tasks</h3>
            <p>{data.taskNumbers.newTask}</p>
          </div>
        </Link>

        <Link to="/employee/completedtask" style={{textDecoration: "none"}}>
          <div className="task-card completed-task">
            <h3>Completed</h3>
            <p>{data.taskNumbers.completedTask}</p>
          </div>
        </Link>

        <Link to="/employee/acceptedtask" style={{textDecoration: "none"}}>
          <div className="task-card pending-task">
            <h3>Accepted</h3>
            <p>{data.taskNumbers.pendingTask}</p>
          </div>
        </Link>

        <Link  to="/employee/failedtask" style={{textDecoration: "none"}}>
          <div className="task-card failed-task">
            <h3>Failed</h3>
            <p>{data.taskNumbers.failedTask}</p>
          </div>
        </Link>






      </div>
    </>
  )
}

export default Cards