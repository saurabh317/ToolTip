import { useState } from "react";
import ToolTip from "./component/Tooltip";
import "./index.css";

function App() {
  
  const [ position, setPosition ] = useState("top");

  const handleChange = (e) => {
    setPosition(e.target.value);

  }

  return (
    
    <div className="container">
      <select className="dropdown" onChange={handleChange}>
        <option value="top">TOP</option>  
        <option value="right">RIGHT</option>  
        <option value="bottom">BOTTOM</option>  
        <option value="left">LEFT</option>  
      </ select>
      <ToolTip position={position} content="Hey, You triggered something">
        <button className="btn" > Hey Hover Here </button>
      </ToolTip>
    </div>
  );
}


export default App;
