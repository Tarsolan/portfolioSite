import React from "react";

const ThemeToggle = ({ onToggle, location }) => {
  return (
    <>
      {location === "nav" ? null : <h4>Theme Selection</h4>}
      <div className="themeBtn">
        <button onClick={() => onToggle("blue")} className="blue">
          Blue
        </button>
        <button onClick={() => onToggle("red")} className="red">
          Red
        </button>
        <button onClick={() => onToggle("green")} className="green">
          Green
        </button>
        <button onClick={() => onToggle("dark")} className="dark">
          Dark
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
