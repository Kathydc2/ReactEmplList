import React from "react";
import Header from "./Header";
import EmployeeList from "./EmployeeList";
import Searchbar from "./Searchbar";


function Homepage({title,workers}) {

  return (
    <div className="homepage">
    Homepage
    <Header topic={title}/>

    <Searchbar />
    <EmployeeList staff={workers} />


    </div>
  )
}

export default Homepage