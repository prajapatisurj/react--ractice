import React from "react";

const Toggle = () => {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div>
      <input type="checkbox" onClick={handleChange} />
      <p>{checked ? "on" : "off"}</p>
    </div>
  );
};

export default Toggle;
