import React, { useState } from "react";

const BackgroundColor = () => {
  const [changeBg, setChangeBg] = useState("yellow");

  const handleChange = () => {
    const setColor = changeBg === "yellow" ? "red" : "green";
    setChangeBg(setColor);
  };

  return (
    <div
      onClick={handleChange}
      style={{backgroundColor:changeBg, cursor: "pointer", height: "400px", width: "300px" }}
    >
      my div
    </div>
  );
};

export default BackgroundColor;