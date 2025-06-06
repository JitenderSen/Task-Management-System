import React, { useEffect, useState } from 'react'
import "../EmployeeContent/EmployeeContent.css"
import Cards from '../Cards/Cards.jsx'
import TaskList from '../../../components/TaskList/TaskList.jsx'
const EmployeeContent = ({ data, loggedOutUser, setLoggedInUserData }) => {

    const [updatedData, setUpdatedData] = useState(data);

    console.log("EmployeeContent.jsx received data:", data);
    console.log("EmployeeContent.jsx received updatedData:", updatedData);
    
    return (
        <>
            {/* <div className="employeeContent"> */}
            <Cards data={updatedData} />
            <TaskList data={updatedData} />
            {/* </div> */}
        </>
    )
}

export default EmployeeContent