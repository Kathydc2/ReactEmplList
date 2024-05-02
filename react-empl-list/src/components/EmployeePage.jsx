import React from "react";
import Header from "./Header";
import Selector from "./Selector";

function EmployeePage({title}) {
  return (
    <div className="employeepage">
    EmployeePage

    <Header topic={title}/>

    <div className="topContainer">
      <img src="" alt="" className="profile" />
      <div className="infoBox"></div>
      <p>Julie Taylor</p>
      <p>VP MARKETING</p>


    </div>

    <Selector />
    <Selector />
    <Selector />


 
    
    
    </div>
  )
}

export default EmployeePage