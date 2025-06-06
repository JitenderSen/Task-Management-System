import React from 'react'
import "../GraphSection/GraphSection.css"
const GraphSection = () => {
  return (
    <div className="graph-section">
      <div className="site-traffic">
        <h3>Site Traffic</h3>
        <div className="chart">[Graph Placeholder]</div>
      </div>
      <div className="weekly-sales">
        <h3>Weekly Sales</h3>
        <div className="pie-chart">[Pie Chart Placeholder]</div>
      </div>
    </div>
  )
}

export default GraphSection