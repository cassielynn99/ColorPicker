// Write your Color component here
//to view: http://localhost:5173/

import { useState } from "react";


const Color = ({ color, setSelectedColor, selectedColor }) => {
  const selected = selectedColor === color ? "selected" : ""
  return <div className={`${color} ${selected}`} onClick={() => setSelectedColor(color)}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="red" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
        <Color color="orange" setSelectedColor={setSelectedColor}  selectedColor={selectedColor}/>
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>
      </div>
    </div>
  );
};

export default App;
