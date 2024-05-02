import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList({staff}) {
  return (

    <>
 
   {staff.map((worker)=>{

   return <EmployeeListItem info={worker}/>
    // We are mapping through the data and creating individual instances of employeeListItem components and passing specific props for each instance 

   })} 
    </>
  )
};

export default EmployeeList