import React from 'react'
import "../Overview/Overview.css"
const Overview = () => {
  return (
    <div className="overview">
      <div className="card totaltasks-card">Total Tasks <span>9526</span></div>
      <div className="card newtask-card">Today's Tasks <span>$8323</span></div>
      <div className="card acceptedtask-card">Active Tasks <span>6200</span></div>
      <div className="card completedtask-card">Completed Tasks <span>5630</span></div>
      <div className="card failedtask-card">Failed Tasks <span>5630</span></div>
      <div className="card pendingtask-card">Pending Tasks <span>5630</span></div>
    </div>
  )
}

export default Overview