import React from "react";

function EmployeeListItem({info}) {
  return (
    <div className="employeelistitem">
      <img src={info.image} alt="" className="profilePic" />

      <div className="txtBox">

        <h3 className="name">Name: {info.name} </h3>
        <h3 className="name">Position: {info.position} </h3>
        
      </div>
      
      
      </div>
  )
}

export default EmployeeListItem