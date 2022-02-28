import React from "react";
import "./Box.css";
function Box({ name, handleDetails, setShowDetails }) {
  return (
    <div className="Item">
      <img
        src={name.strMealThumb}
        alt=""
        onClick={() => {
          handleDetails(name);
          setShowDetails(true);
        }}
      />
    </div>
  );
}
export default Box;
