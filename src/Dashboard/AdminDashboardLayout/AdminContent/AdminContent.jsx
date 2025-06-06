// AdminContent.jsx

import React from 'react'
import "../AdminContent/AdminContent.css"
import Overview from './Overview/Overview'
import TableSection from './TableSection/TableSection'
import GraphSection from './GraphSection/GraphSection'
const AdminContent = () => {
  return (
    <div className="content">
      <Overview />
      {/* <GraphSection /> */}
      <TableSection />
    </div>
  )
}

export default AdminContent