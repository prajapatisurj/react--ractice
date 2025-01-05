import React, { useState } from "react";

const UserInput = () => {
  const [input, setInput] = useState("");
  return (
    <div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <p>Your input: {input}</p>
    </div>
  );
};

export default UserInput;
