import "./App.css";


// This is the Main (CEO) File ----> Primarystate LivesHere
// ----> Components are housed here
// ----> Hooks ===== useState, useEffect

import HomePage from "./components/Homepage";
import EmployeePage from "./components/EmployeePage";


function App() {
  const topics =["Employee Directory", "Employee"]
  // ------> Data that will be distributed through to the components below

  //1. Make Employee Data
  //When you have data and pass it down its calls Props
  let allEmployees = [
    {
      name: "James King",
      position: "President and CEO",
      image: "",
    },
    {
      name: "Julie Taylor",
      position: "VP of Marketing",
      image: "",
    },
    {
      name: "Eugene Lee",
      position: "CFO",
      image: "",
    },
    {
      name: "John Williams",
      position: "VP of Engineering",
      image: "",
    },
    {
      name: "Ray Moore",
      position: "VP of Sales",
      image: "",
    },
    {
      name: "Paul Jones",
      position: "QA Manager",
      image: "",
    },
  ]
  return (
    // ---------> What we want to see displayed on screen
    <div className="App">

      <HomePage title={topics[0]} workers={allEmployees}/>
      {/* -----------passing state to other cmponents {props:}*/}
      <EmployeePage title={topics[1]} workers={allEmployees}/>
       {/* -----------Components*/}

      
    </div>
  );
}

export default App;
