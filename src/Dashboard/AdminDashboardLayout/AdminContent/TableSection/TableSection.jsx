import React, { useContext } from 'react'
import "../TableSection/TableSection.css"
import { AuthContext } from '../../../../context/AuthProvider'
const TableSection = () => {

  const authData = useContext(AuthContext)
  // console.log("TableSection data is : " ,authData)

  return (
    <div className="table-section">
      <h3>Asign's Tasks To Employyes</h3>
      
      <table>
        <thead>
          <tr>
            <th className='epmID-card'>Employee Id</th>
            <th className='epmNAME-card'>Employee Name</th>
            <th className='acceptedtask-card'>Active Tasks</th>
            <th className='newtask-card'>New Task</th>
            <th className='completedtask-card'>Completed Tasks</th>
            <th className='failedtask-card'>Failed Tasks</th>
          </tr>
        </thead>
        {authData.employees.map((elem, index)=>(
        <tbody key={index}>
          <tr>
            <td>{elem.id}</td>
            <td>{elem.firstName}</td>
            <td>{elem.taskNumbers.active}</td>
            <td>{elem.taskNumbers.newTask}</td>
            <td>{elem.taskNumbers.completedTask}</td>
            <td>{elem.taskNumbers.failedTask}</td>
          </tr>
          {/* <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr>
          <tr>
            <td>Earphone GL</td>
            <td>[Image]</td>
            <td>#9405820</td>
            <td>$1500.00</td>
            <td>03 Aug 2017</td>
            <td>Shipped</td>
          </tr> */}
        </tbody>
        ))}
      </table>
    </div>
  )
}

export default TableSection